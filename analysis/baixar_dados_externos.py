"""
AlertaTB — Baixa os dados externos usados no painel

1) IBGE — Projeções da População, Revisão 2024 (por sexo, região e UF, 2000–2070)
   -> data/raw/ibge_populacao_2013_2034.csv
2) DATASUS/TABNET — SINAN Tuberculose, casos confirmados por ano de diagnóstico,
   cruzados com local de notificação, sexo, fatores de risco e desfecho do tratamento
   -> data/raw/tabnet/*.csv
3) Monta a série histórica usada pelo painel a partir do TABNET
   (ano de diagnóstico × região/UF de notificação e sexo — mesmo critério da planilha original)
   -> data/processed/tuberculose_2013_2024.csv

Só precisa rodar de novo quando quiser atualizar os dados (o painel usa os CSVs salvos).

Uso:
    python analysis/baixar_dados_externos.py
"""

import csv
import html
import io
import re
import urllib.parse
import urllib.request
from pathlib import Path

import pandas as pd

RAIZ = Path(__file__).resolve().parent.parent
PASTA_RAW = RAIZ / "data" / "raw"
PASTA_TABNET = PASTA_RAW / "tabnet"

URL_IBGE = ("https://ftp.ibge.gov.br/Projecao_da_Populacao/Projecao_da_Populacao_2024/"
            "projecoes_2024_tab2_grupo_quinquenal.xlsx")
URL_MALHA = ("https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR"
             "?formato=application/vnd.geo+json&intrarregiao=UF&qualidade=minima")
URL_TABNET = "http://tabnet.datasus.gov.br/cgi/tabcgi.exe?sinannet/cnv/tubercbr.def"

ANOS_POP = range(2013, 2035)
LOCAIS_POP = {"Brasil": "Brasil", "Norte": "Norte", "Nordeste": "Nordeste", "Sudeste": "Sudeste",
              "Sul": "Sul", "Centro-Oeste": "Centro-Oeste", "São Paulo": "São Paulo",
              "Rio de Janeiro": "Rio de Janeiro"}

# coluna do TABNET -> nome do arquivo salvo
CONSULTAS_TABNET = {
    "Região_de_notificação": "regiao_notificacao",
    "UF_de_notificação": "uf_notificacao",
    "Sexo": "sexo",
    "Região_de_residência": "regiao_residencia",
    "Situação_Encerra.": "situacao_encerramento",
    "Tipo_de_entrada__": "tipo_entrada",
    "HIV": "hiv",
    "PPL": "ppl",
    "Pop._Sit._Rua": "situacao_rua",
    "Drogas_ilícitas": "drogas_ilicitas",
    "Alcoolismo": "alcoolismo",
    "Imigrante": "imigrante",
}


def baixar(url: str, dados: bytes | None = None, timeout: int = 180) -> bytes:
    req = urllib.request.Request(url, data=dados, headers={
        "User-Agent": "AlertaTB-projeto-academico",
        "Content-Type": "application/x-www-form-urlencoded"})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read()


def baixar_populacao() -> None:
    print("IBGE: baixando projeções da população (revisão 2024)...")
    planilha = pd.read_excel(io.BytesIO(baixar(URL_IBGE)), header=5)
    planilha.columns = [str(c).strip() for c in planilha.columns]
    col_sexo, col_sigla, col_local = planilha.columns[1], planilha.columns[3], planilha.columns[4]
    # Brasil, regiões e as 27 UFs (UF = sigla de 2 letras diferente de BR)
    eh_uf = planilha[col_sigla].astype(str).str.fullmatch(r"[A-Z]{2}") & (planilha[col_sigla] != "BR")
    planilha = planilha[planilha[col_local].isin(LOCAIS_POP) | eh_uf]
    linhas = []
    for (sexo, sigla, local), g in planilha.groupby([col_sexo, col_sigla, col_local]):
        for ano in ANOS_POP:
            linhas.append({"ano": ano, "local": LOCAIS_POP.get(local, local), "sigla": sigla, "sexo": sexo,
                           "populacao": int(g[str(ano)].sum())})
    saida = PASTA_RAW / "ibge_populacao_2013_2034.csv"
    pd.DataFrame(linhas).sort_values(["local", "sexo", "ano"]).to_csv(saida, index=False)
    print(f"  ✔ {saida.relative_to(RAIZ)}")


def consultar_tabnet(coluna: str) -> list[list[str]]:
    campos = [("Linha", "Ano_Diagnóstico"), ("Coluna", coluna), ("Incremento", "Casos_confirmados")]
    campos += [("Arquivos", f"tubebr{a:02d}.dbf") for a in range(13, 26)]
    campos += [("formato", "prn"), ("mostre", "Mostra")]
    corpo = urllib.parse.urlencode(campos, encoding="latin-1").encode("ascii")
    texto = baixar(URL_TABNET, corpo).decode("latin-1")
    bloco = re.search(r"<PRE>(.*?)</PRE>", texto, re.S | re.I)
    if not bloco:
        raise RuntimeError(f"TABNET não devolveu tabela para {coluna}")
    limpo = html.unescape(re.sub(r"<[^>]+>", "", bloco.group(1)))
    tabela = []
    for linha in limpo.splitlines():
        partes = [p.strip().strip('"') for p in linha.split(";")]
        if len(partes) > 1:
            tabela.append(["0" if p == "-" else p for p in partes])
    return tabela


def baixar_tabnet() -> None:
    PASTA_TABNET.mkdir(parents=True, exist_ok=True)
    for coluna, nome in CONSULTAS_TABNET.items():
        print(f"TABNET: casos por ano de diagnóstico × {coluna}...")
        tabela = consultar_tabnet(coluna)
        saida = PASTA_TABNET / f"{nome}.csv"
        with open(saida, "w", newline="", encoding="utf-8") as f:
            csv.writer(f).writerows(tabela)
        print(f"  ✔ {saida.relative_to(RAIZ)} ({len(tabela) - 2} anos)")


def ler_tabnet(nome: str) -> pd.DataFrame:
    t = pd.read_csv(PASTA_TABNET / f"{nome}.csv", dtype=str)
    t = t[t.iloc[:, 0].str.fullmatch(r"\d{4}")]
    t = t.set_index(t.columns[0])
    t.index = t.index.astype(int)
    return t.apply(pd.to_numeric).loc[2013:2024]


def montar_serie_historica() -> None:
    """Mesmas colunas da base original, mas com os números atuais do TABNET."""
    reg, uf, sexo = ler_tabnet("regiao_notificacao"), ler_tabnet("uf_notificacao"), ler_tabnet("sexo")
    serie = pd.DataFrame({
        "Ano": reg.index,
        "Tuberculose": reg["Total"].values,
        "Norte": reg["1 Região Norte"].values,
        "Nordeste": reg["2 Região Nordeste"].values,
        "Centro Oeste": reg["5 Região Centro-Oeste"].values,
        "Sul": reg["4 Região Sul"].values,
        "Sudeste": reg["3 Região Sudeste"].values,
        "São Paulo": uf["SP"].values,
        "Rio Janeiro": uf["RJ"].values,
        "Masculino": sexo["Masculino"].values,
        "Feminino": sexo["Feminino"].values,
    })
    saida = RAIZ / "data" / "processed" / "tuberculose_2013_2024.csv"
    serie.to_csv(saida, index=False)
    print(f"  ✔ {saida.relative_to(RAIZ)} (série histórica do painel)")


def baixar_malha() -> None:
    print("IBGE: baixando a malha dos estados (contorno para o mapa)...")
    saida = PASTA_RAW / "ibge_malha_uf.geojson"
    saida.write_bytes(baixar(URL_MALHA))
    print(f"  ✔ {saida.relative_to(RAIZ)}")


if __name__ == "__main__":
    baixar_populacao()
    baixar_malha()
    baixar_tabnet()
    montar_serie_historica()
