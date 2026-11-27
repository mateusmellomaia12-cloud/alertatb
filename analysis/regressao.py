"""
AlertaTB — Regressão linear e projeção de casos de tuberculose (2025–2034)

Lê a série histórica do SINAN/DATASUS (data/processed/tuberculose_2013_2024.csv),
ajusta uma regressão linear por recorte (Brasil, regiões, estados e sexo) e gera
data/processed/dados_painel.json, que é consumido pelo portal web.

Decisões técnicas:
- 2020 é tratado como ano atípico (subnotificação na pandemia de Covid-19):
  aparece no histórico, mas fica FORA do ajuste da reta.
- Um backtest (treina até 2021, testa 2022–2024) mede o erro do modelo.
- Cada recorte recebe um selo de alerta (Crítico / Atenção / Moderado).

Uso:
    pip install -r analysis/requirements.txt
    python analysis/regressao.py
"""

import json
from pathlib import Path

import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score

from fatores import montar_fatores
from modelagem import montar_modelagem

# --------------------------------------------------------------------------
# Configuração
# --------------------------------------------------------------------------
RAIZ = Path(__file__).resolve().parent.parent
ENTRADA = RAIZ / "data" / "processed" / "tuberculose_2013_2024.csv"
SAIDA = RAIZ / "data" / "processed" / "dados_painel.json"
SAIDA_WEB = RAIZ / "web" / "js" / "dados.js"   # mesmo conteúdo, para o site abrir sem servidor
POPULACAO = RAIZ / "data" / "raw" / "ibge_populacao_2013_2034.csv"   # gerado por baixar_dados_externos.py
CASOS_UF = RAIZ / "data" / "raw" / "tabnet" / "uf_notificacao.csv"      # 27 UFs, mesmo critério da série

ANOS_ATIPICOS = [2020]            # excluídos do ajuste
ANO_CORTE_BACKTEST = 2021         # treina até este ano, testa os seguintes
ANOS_PROJECAO = list(range(2025, 2035))

REGIOES = ["Norte", "Nordeste", "Centro Oeste", "Sul", "Sudeste"]
SEXO = ["Masculino", "Feminino"]
REGIAO_DA_UF = {
    "RO": "Norte", "AC": "Norte", "AM": "Norte", "RR": "Norte", "PA": "Norte", "AP": "Norte", "TO": "Norte",
    "MA": "Nordeste", "PI": "Nordeste", "CE": "Nordeste", "RN": "Nordeste", "PB": "Nordeste", "PE": "Nordeste",
    "AL": "Nordeste", "SE": "Nordeste", "BA": "Nordeste",
    "MG": "Sudeste", "ES": "Sudeste", "RJ": "Sudeste", "SP": "Sudeste",
    "PR": "Sul", "SC": "Sul", "RS": "Sul",
    "MS": "Centro-Oeste", "MT": "Centro-Oeste", "GO": "Centro-Oeste", "DF": "Centro-Oeste",
}
# nome exibido no painel -> (coluna no CSV, grupo). Os 27 estados entram em main().
RECORTES = {
    "Brasil": ("Tuberculose", "Brasil"),
    "Norte": ("Norte", "Região"),
    "Nordeste": ("Nordeste", "Região"),
    "Centro-Oeste": ("Centro Oeste", "Região"),
    "Sul": ("Sul", "Região"),
    "Sudeste": ("Sudeste", "Região"),
    "Masculino": ("Masculino", "Sexo"),
    "Feminino": ("Feminino", "Sexo"),
}
# nome exibido no painel -> (local, sexo) na tabela de população do IBGE
POP_ESPECIAL = {"Masculino": ("Brasil", "Homens"), "Feminino": ("Brasil", "Mulheres")}

# Regra dos selos (SUGESTÃO — o grupo pode ajustar os limites):
#   crescimento % ao ano = coeficiente anual / casos do último ano real
#   Crítico  -> crescimento >= 2,0%/ano  E  R² >= 0,80 (cresce rápido e de forma consistente)
#   Atenção  -> crescimento >= 1,5%/ano  OU R² >= 0,80
#   Moderado -> demais casos
LIMITE_CRESC_CRITICO = 2.0
LIMITE_CRESC_ATENCAO = 1.5
LIMITE_R2_CONSISTENTE = 0.80


# --------------------------------------------------------------------------
# Funções
# --------------------------------------------------------------------------
def ajustar(anos: np.ndarray, casos: np.ndarray) -> LinearRegression:
    modelo = LinearRegression()
    modelo.fit(anos.reshape(-1, 1), casos)
    return modelo


def prever(modelo: LinearRegression, anos) -> np.ndarray:
    return modelo.predict(np.array(anos).reshape(-1, 1))


def classificar(cresc_pct: float, r2: float) -> str:
    if cresc_pct >= LIMITE_CRESC_CRITICO and r2 >= LIMITE_R2_CONSISTENTE:
        return "Crítico"
    if cresc_pct >= LIMITE_CRESC_ATENCAO or r2 >= LIMITE_R2_CONSISTENTE:
        return "Atenção"
    return "Moderado"


def verificar_consistencia(df: pd.DataFrame) -> list[dict]:
    """Confere se a soma das regiões e a soma por sexo batem com o total do Brasil."""
    avisos = []
    for _, linha in df.iterrows():
        total = linha["Tuberculose"]
        for nome, colunas in [("regiões", REGIOES), ("sexo", SEXO)]:
            soma = linha[colunas].sum()
            diff = int(soma - total)
            # diferenças pequenas por sexo "ignorado" são normais
            if abs(diff) > 20:
                avisos.append({"ano": int(linha["Ano"]), "recorte": nome,
                               "total": int(total), "soma": int(soma), "diferenca": diff})
    return avisos


def taxa(casos: float, pop: int) -> float:
    """Casos por 100 mil habitantes."""
    return round(casos / pop * 100_000, 1)


def analisar_recorte(df: pd.DataFrame, coluna: str, grupo: str, pop: dict[int, int]) -> dict:
    anos = df["Ano"].to_numpy()
    casos = df[coluna].to_numpy(dtype=float)
    mascara = ~np.isin(anos, ANOS_ATIPICOS)

    modelo = ajustar(anos[mascara], casos[mascara])
    r2 = r2_score(casos[mascara], prever(modelo, anos[mascara]))
    coef = float(modelo.coef_[0])

    # backtest: treina até o ano de corte e mede o erro nos anos seguintes
    treino = mascara & (anos <= ANO_CORTE_BACKTEST)
    teste = anos > ANO_CORTE_BACKTEST
    modelo_bt = ajustar(anos[treino], casos[treino])
    erro_pct = (prever(modelo_bt, anos[teste]) - casos[teste]) / casos[teste] * 100

    ultimo_real = casos[-1]
    cresc_pct = coef / ultimo_real * 100
    primeiro_real = casos[0]
    projecao = [(a, float(p)) for a, p in zip(ANOS_PROJECAO, prever(modelo, ANOS_PROJECAO))]
    taxa_ini, taxa_fim = taxa(primeiro_real, pop[int(anos[0])]), taxa(ultimo_real, pop[int(anos[-1])])

    return {
        "grupo": grupo,
        "historico": [{"ano": int(a), "casos": int(c)} for a, c in zip(anos, casos)],
        "projecao": [{"ano": a, "casos": round(p)} for a, p in projecao],
        # taxa por 100 mil habitantes (população IBGE, Projeções 2024)
        "taxa_historico": [{"ano": int(a), "taxa": taxa(c, pop[int(a)])} for a, c in zip(anos, casos)],
        "taxa_projecao": [{"ano": a, "taxa": taxa(p, pop[a])} for a, p in projecao],
        "taxa_ultimo_ano": taxa_fim,
        "variacao_taxa_pct": round((taxa_fim / taxa_ini - 1) * 100, 1),
        "populacao_ultimo_ano": pop[int(anos[-1])],
        "coeficiente_anual": round(coef, 1),
        "intercepto": round(float(modelo.intercept_), 1),
        "r2": round(float(r2), 3),
        "crescimento_pct_ano": round(cresc_pct, 2),
        "crescimento_total_pct": round((ultimo_real / primeiro_real - 1) * 100, 1),
        "casos_ultimo_ano": int(ultimo_real),
        "backtest_erro_pct": {int(a): round(float(e), 1) for a, e in zip(anos[teste], erro_pct)},
        "status": classificar(cresc_pct, r2),
    }


# --------------------------------------------------------------------------
# Execução
# --------------------------------------------------------------------------
def ler_populacao(nomes) -> dict[str, dict[int, int]]:
    pop = pd.read_csv(POPULACAO)
    resultado = {}
    for nome in nomes:
        local, sexo = POP_ESPECIAL.get(nome, (nome, "Ambos"))
        sel = pop[(pop["local"] == local) & (pop["sexo"] == sexo)]
        if sel.empty:
            raise ValueError(f"População não encontrada para {nome}")
        resultado[nome] = dict(zip(sel["ano"].astype(int), sel["populacao"].astype(int)))
    return resultado


def ler_estados(anos) -> tuple[pd.DataFrame, dict[str, str]]:
    """Casos por UF de notificação (TABNET) e o nome de cada sigla (IBGE)."""
    uf = pd.read_csv(CASOS_UF, dtype=str)
    uf = uf[uf.iloc[:, 0].str.fullmatch(r"\d{4}")].set_index(uf.columns[0])
    uf.index = uf.index.astype(int)
    uf = uf.loc[list(anos), list(REGIAO_DA_UF)].replace("-", "0").apply(pd.to_numeric)
    pop = pd.read_csv(POPULACAO)
    nomes = dict(pop.drop_duplicates("sigla")[["sigla", "local"]].values)
    uf.columns = [nomes[s] for s in uf.columns]
    return uf.reset_index(drop=True), {nomes[s]: s for s in REGIAO_DA_UF}


def main() -> None:
    df = pd.read_csv(ENTRADA, encoding="utf-8")
    estados, sigla_de = ler_estados(df["Ano"])
    df = pd.concat([df, estados.add_prefix("UF ")], axis=1)
    recortes = {k: v for k, v in RECORTES.items() if v[1] != "Sexo"}
    recortes.update({nome: ("UF " + nome, "Estado") for nome in sorted(sigla_de)})
    recortes.update({k: v for k, v in RECORTES.items() if v[1] == "Sexo"})
    pop = ler_populacao(recortes)

    avisos = verificar_consistencia(df)
    resultado = {
        "fonte": "SINAN/DATASUS — Ministério da Saúde",
        "fonte_populacao": "IBGE — Projeções da População, Revisão 2024",
        "periodo_historico": [int(df["Ano"].min()), int(df["Ano"].max())],
        "anos_excluidos_do_ajuste": ANOS_ATIPICOS,
        "regra_status": {
            "Crítico": f"crescimento >= {LIMITE_CRESC_CRITICO}%/ano e R² >= {LIMITE_R2_CONSISTENTE}",
            "Atenção": f"crescimento >= {LIMITE_CRESC_ATENCAO}%/ano ou R² >= {LIMITE_R2_CONSISTENTE}",
            "Moderado": "demais casos",
        },
        "avisos_consistencia": avisos,
        "recortes": {nome: analisar_recorte(df, col, grupo, pop[nome])
                     for nome, (col, grupo) in recortes.items()},
        "fatores": montar_fatores(pop["Brasil"]),
    }
    resultado["modelagem"] = montar_modelagem(resultado["recortes"], ANOS_ATIPICOS)
    for nome, sigla in sigla_de.items():
        resultado["recortes"][nome]["sigla"] = sigla
        resultado["recortes"][nome]["regiao"] = REGIAO_DA_UF[sigla]

    texto = json.dumps(resultado, ensure_ascii=False, indent=2)
    SAIDA.write_text(texto, encoding="utf-8")
    SAIDA_WEB.parent.mkdir(parents=True, exist_ok=True)
    SAIDA_WEB.write_text("// Gerado por analysis/regressao.py — não editar à mão\n"
                         "window.DADOS = " + texto + ";\n", encoding="utf-8")

    # Resumo no terminal
    print(f"{'Recorte':<14}{'Casos 2024':>11}{'Cresc/ano':>11}{'%/ano':>7}{'R²':>7}"
          f"{'Proj 2025':>11}{'Proj 2034':>11}{'Taxa':>7}{'Δtaxa':>8}  Status")
    for nome, r in resultado["recortes"].items():
        p = {x["ano"]: x["casos"] for x in r["projecao"]}
        print(f"{nome:<14}{r['casos_ultimo_ano']:>11,}{r['coeficiente_anual']:>+11,.0f}"
              f"{r['crescimento_pct_ano']:>7.1f}{r['r2']:>7.2f}{p[2025]:>11,}{p[2034]:>11,}"
              f"{r['taxa_ultimo_ano']:>7.1f}{r['variacao_taxa_pct']:>+7.1f}%"
              f"  {r['status']}".replace(",", "."))

    if avisos:
        print("\n⚠ Inconsistências na base (conferir no TABNET/DATASUS):")
        for a in avisos:
            print(f"  {a['ano']}: soma por {a['recorte']} = {a['soma']:,} | total = {a['total']:,} "
                  f"(diferença {a['diferenca']:+,})".replace(",", "."))

    print(f"\n✔ Arquivos gerados: {SAIDA.relative_to(RAIZ)} e {SAIDA_WEB.relative_to(RAIZ)}")


if __name__ == "__main__":
    main()
