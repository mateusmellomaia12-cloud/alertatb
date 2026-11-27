"""
AlertaTB — Fatores associados ao crescimento (tela "Por que está crescendo?")

Lê as tabelas do TABNET salvas por baixar_dados_externos.py (data/raw/tabnet/)
e monta o bloco "fatores" do dados_painel.json.

Cuidados de leitura (aparecem no painel):
- Campos como PPL, situação de rua, drogas e imigrante só ficaram bem preenchidos
  a partir de 2015 (antes, mais da metade vinha "Ignorado/Branco"). Por isso a
  comparação desses indicadores começa em 2015.
- O desfecho do tratamento de 2024 ainda está sendo encerrado (tratamento dura
  6 meses ou mais); 2025 fica de fora por estar incompleto.
- Os números mostram associação, não causa: mais teste de HIV, por exemplo,
  também aumenta os casos positivos encontrados.
"""

from pathlib import Path

import pandas as pd

RAIZ = Path(__file__).resolve().parent.parent
PASTA_TABNET = RAIZ / "data" / "raw" / "tabnet"
ANOS = list(range(2013, 2025))

META_INCIDENCIA_2035 = 10.0   # Plano Nacional pelo Fim da Tuberculose: < 10 casos novos/100 mil hab.

# id -> (arquivo, coluna(s) somadas, nome exibido, descrição, ano inicial da comparação, tipo)
INDICADORES = {
    "abandono": ("situacao_encerramento", ["Abandono", "Abandono Primário"], "Abandono do tratamento",
                 "Pacientes que pararam o tratamento antes do fim (inclui abandono primário)", 2013, "tratamento"),
    "reingresso": ("tipo_entrada", "REINGRESSO APÓS ABANDONO", "Retorno após abandono",
                   "Pessoas que voltam ao sistema depois de abandonar", 2013, "tratamento"),
    "obito_tb": ("situacao_encerramento", "Óbito por tuberculose", "Óbitos por tuberculose",
                 "Casos notificados que terminaram em óbito pela doença", 2013, "tratamento"),
    "situacao_rua": ("situacao_rua", "Sim", "Pessoas em situação de rua",
                     "Casos em pessoas vivendo nas ruas", 2015, "vulnerabilidade"),
    "drogas": ("drogas_ilicitas", "Sim", "Uso de drogas ilícitas",
               "Casos com uso de drogas registrado", 2015, "vulnerabilidade"),
    "alcool": ("alcoolismo", "Sim", "Alcoolismo",
               "Casos com alcoolismo registrado", 2013, "vulnerabilidade"),
    "hiv": ("hiv", "Positivo", "Coinfecção TB-HIV",
            "Casos com teste de HIV positivo", 2013, "vulnerabilidade"),
    "ppl": ("ppl", "Sim", "Pessoas privadas de liberdade",
            "Casos no sistema prisional", 2015, "vulnerabilidade"),
    # imigrantes ficaram de fora: menos de 1% dos casos, a variação % engana
}


def ler(nome: str) -> pd.DataFrame:
    df = pd.read_csv(PASTA_TABNET / f"{nome}.csv", dtype=str)
    df = df.rename(columns={df.columns[0]: "ano"})
    df = df[df["ano"].str.fullmatch(r"\d{4}")]
    df["ano"] = df["ano"].astype(int)
    df = df[df["ano"].isin(ANOS)].set_index("ano")
    return df.apply(pd.to_numeric, errors="coerce").fillna(0).astype(int)


def montar_fatores(pop_brasil: dict[int, int]) -> dict:
    total = ler("regiao_residencia")["Total"]
    encerra = ler("situacao_encerramento")
    entrada = ler("tipo_entrada")

    indicadores = []
    for ident, (arq, col, nome, desc, ano_ini, tipo) in INDICADORES.items():
        tab = ler(arq)
        valores = tab[col].sum(axis=1) if isinstance(col, list) else tab[col]
        ignorado = tab["Ign/Branco"] / tab["Total"] * 100 if "Ign/Branco" in tab else None
        indicadores.append({
            "id": ident, "nome": nome, "descricao": desc, "tipo": tipo, "ano_inicial": ano_ini,
            "casos": [int(valores[a]) for a in ANOS],
            "pct_dos_casos": [round(valores[a] / total[a] * 100, 2) for a in ANOS],
            "pct_ignorado": None if ignorado is None else [round(float(ignorado[a]), 1) for a in ANOS],
        })

    # desfecho do tratamento (% de todos os casos do ano)
    outros = encerra["Total"] - encerra["Cura"] - encerra["Abandono"] - encerra["Abandono Primário"] \
        - encerra["Óbito por tuberculose"] - encerra["Ign/Branco"]
    desfecho = {
        "cura": [round(encerra["Cura"][a] / encerra["Total"][a] * 100, 1) for a in ANOS],
        "abandono": [round((encerra["Abandono"][a] + encerra["Abandono Primário"][a])
                           / encerra["Total"][a] * 100, 1) for a in ANOS],
        "obito_tb": [round(encerra["Óbito por tuberculose"][a] / encerra["Total"][a] * 100, 1) for a in ANOS],
        "outros": [round(outros[a] / encerra["Total"][a] * 100, 1) for a in ANOS],
        "sem_informacao": [round(encerra["Ign/Branco"][a] / encerra["Total"][a] * 100, 1) for a in ANOS],
        "metas_oms": {"cura": 85, "abandono": 5},
    }

    casos_novos = entrada["CASO NOVO"]
    incidencia = [{"ano": a, "casos_novos": int(casos_novos[a]),
                   "taxa": round(casos_novos[a] / pop_brasil[a] * 100_000, 1)} for a in ANOS]

    return {
        "fonte": "SINAN/TABNET (DATASUS) — casos confirmados por ano de diagnóstico; população: IBGE, Projeções 2024",
        "anos": ANOS,
        "total_casos": [int(total[a]) for a in ANOS],
        "indicadores": indicadores,
        "desfecho": desfecho,
        "incidencia_casos_novos": incidencia,
        "meta_incidencia_2035": META_INCIDENCIA_2035,
    }
