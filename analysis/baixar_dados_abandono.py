"""
AlertaTB — Baixa do TABNET os perfis de pacientes × desfecho do tratamento
(base do modelo de risco de abandono, aba "Modelagem")

O TABNET só cruza 2 variáveis por vez, então fazemos uma consulta para cada
combinação de filtros (sexo × situação de rua × drogas × álcool × HIV) e
período, com a faixa etária nas linhas e o desfecho nas colunas.

Períodos (por ano de diagnóstico):
- treino: 2015–2019
- teste:  2021–2023
2020 fica de fora (pandemia) e 2024 também (muitos tratamentos ainda sem desfecho).
Antes de 2015 os campos de situação de rua e drogas eram mal preenchidos.

Saída: data/raw/tabnet/abandono_perfis.csv (uma linha por perfil × faixa etária × período)

Uso:
    python analysis/baixar_dados_abandono.py
"""

import csv
import itertools
import re
import html
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
SAIDA = RAIZ / "data" / "raw" / "tabnet" / "abandono_perfis.csv"
URL = "http://tabnet.datasus.gov.br/cgi/tabcgi.exe?sinannet/cnv/tubercbr.def"

# códigos das opções no formulário do TABNET
PERIODOS = {"treino": ["43", "44", "45", "46", "47"],    # 2015–2019
            "teste": ["49", "50", "51"]}                    # 2021–2023
FILTROS = {
    # nome: (campo do TABNET, {valor no modelo: códigos})
    "sexo_masc": ("SSexo", {1: ["3"], 0: ["4"]}),                       # Masculino × Feminino
    "situacao_rua": ("SPop._Sit._Rua", {1: ["2"], 0: ["1", "3"]}),      # Sim × (Não ou ignorado)
    "drogas": ("SDrogas_ilícitas", {1: ["2"], 0: ["1", "3"]}),
    "alcool": ("SAlcoolismo", {1: ["2"], 0: ["1", "3"]}),
    "hiv": ("SHIV", {1: ["2"], 0: ["1", "3", "4", "5"]}),               # Positivo × demais
}


def consultar(periodo: str, combo: dict) -> list[dict]:
    campos = [("Linha", "Fx_Etária_7"), ("Coluna", "Situação_Encerra."), ("Incremento", "Casos_confirmados")]
    campos += [("Arquivos", f"tubebr{a:02d}.dbf") for a in range(13, 26)]
    campos += [("SAno_Diagnóstico", c) for c in PERIODOS[periodo]]
    for nome, valor in combo.items():
        campo, codigos = FILTROS[nome]
        campos += [(campo, c) for c in codigos[valor]]
    campos += [("formato", "prn"), ("mostre", "Mostra")]
    corpo = urllib.parse.urlencode(campos, encoding="latin-1").encode("ascii")
    req = urllib.request.Request(URL, data=corpo, headers={"User-Agent": "AlertaTB-projeto-academico",
                                                           "Content-Type": "application/x-www-form-urlencoded"})
    texto = urllib.request.urlopen(req, timeout=240).read().decode("latin-1")
    bloco = re.search(r"<PRE>(.*?)</PRE>", texto, re.S | re.I)
    if not bloco:   # combinação sem nenhum caso
        if "Nenhum registro" in texto or "nenhum" in texto.lower():
            return []
        raise RuntimeError(f"TABNET sem tabela: {periodo} {combo}")
    linhas = [l for l in html.unescape(re.sub(r"<[^>]+>", "", bloco.group(1))).splitlines() if ";" in l]
    cab = [c.strip().strip('"') for c in linhas[0].split(";")]
    saida = []
    for l in linhas[1:]:
        partes = [p.strip().strip('"') for p in l.split(";")]
        if partes[0] == "Total":
            continue
        reg = {"periodo": periodo, **combo, "faixa_etaria": partes[0]}
        for c, v in zip(cab[1:], partes[1:]):
            if c != "Total":
                reg[c] = 0 if v in ("-", "") else int(v)
        saida.append(reg)
    return saida


def main() -> None:
    tarefas = [(p, dict(zip(FILTROS, valores)))
               for p in PERIODOS for valores in itertools.product([0, 1], repeat=len(FILTROS))]
    print(f"TABNET: {len(tarefas)} consultas (pode levar alguns minutos)...")
    registros = []
    with ThreadPoolExecutor(max_workers=4) as ex:
        for i, res in enumerate(ex.map(lambda t: consultar(*t), tarefas), 1):
            registros += res
            if i % 8 == 0:
                print(f"  {i}/{len(tarefas)}")
    colunas = list(dict.fromkeys(k for r in registros for k in r))
    SAIDA.parent.mkdir(parents=True, exist_ok=True)
    with open(SAIDA, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=colunas, restval=0)
        w.writeheader()
        w.writerows(registros)
    print(f"  ✔ {SAIDA.relative_to(RAIZ)} ({len(registros)} linhas)")


if __name__ == "__main__":
    main()
