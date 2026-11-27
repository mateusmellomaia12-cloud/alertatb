"""
AlertaTB — Baixa os dados externos usados no painel

1) IBGE — Projeções da População, Revisão 2024 (por sexo, região e UF, 2000–2070)
   -> data/raw/ibge_populacao_2013_2034.csv
2) DATASUS/TABNET — SINAN Tuberculose, casos confirmados por ano de diagnóstico,
   cruzados com fatores de risco e desfecho do tratamento
   -> data/raw/tabnet/*.csv

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
URL_TABNET = "http://tabnet.datasus.gov.br/cgi/tabcgi.exe?sinannet/cnv/tubercbr.def"

ANOS_POP = range(2013, 2035)
LOCAIS_POP = {"Brasil": "Brasil", "Norte": "Norte", "Nordeste": "Nordeste", "Sudeste": "Sudeste",
              "Sul": "Sul", "Centro-Oeste": "Centro-Oeste", "São Paulo": "São Paulo",
              "Rio de Janeiro": "Rio de Janeiro"}

# coluna do TABNET -> nome do arquivo salvo
CONSULTAS_TABNET = {
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
    col_sexo, col_local = planilha.columns[1], planilha.columns[4]
    planilha = planilha[planilha[col_local].isin(LOCAIS_POP)]
    linhas = []
    for (sexo, local), g in planilha.groupby([col_sexo, col_local]):
        for ano in ANOS_POP:
            linhas.append({"ano": ano, "local": LOCAIS_POP[local], "sexo": sexo,
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


if __name__ == "__main__":
    baixar_populacao()
    baixar_tabnet()
