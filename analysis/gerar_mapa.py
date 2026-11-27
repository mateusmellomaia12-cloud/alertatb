"""
AlertaTB — Converte a malha dos estados do IBGE em caminhos SVG para o mapa do site

Entrada: data/raw/ibge_malha_uf.geojson (baixado por baixar_dados_externos.py)
Saída:   web/js/mapa-uf.js  ->  window.MAPA_UF = { viewBox, estados: { SP: { d, x, y, area }, ... } }

Projeção simples (equirretangular corrigida pela latitude média do Brasil), suficiente
para um mapa temático. Só precisa rodar de novo se a malha mudar.

Uso:
    python analysis/gerar_mapa.py
"""

import json
import math
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
ENTRADA = RAIZ / "data" / "raw" / "ibge_malha_uf.geojson"
SAIDA = RAIZ / "web" / "js" / "mapa-uf.js"
LARGURA = 1000

# código IBGE da UF -> sigla
SIGLA = {
    "11": "RO", "12": "AC", "13": "AM", "14": "RR", "15": "PA", "16": "AP", "17": "TO",
    "21": "MA", "22": "PI", "23": "CE", "24": "RN", "25": "PB", "26": "PE", "27": "AL", "28": "SE", "29": "BA",
    "31": "MG", "32": "ES", "33": "RJ", "35": "SP",
    "41": "PR", "42": "SC", "43": "RS",
    "50": "MS", "51": "MT", "52": "GO", "53": "DF",
}


def poligonos(geom):
    return [geom["coordinates"]] if geom["type"] == "Polygon" else geom["coordinates"]


def area_centroide(anel):
    """Área (com sinal) e centroide de um anel, pela fórmula do polígono."""
    a = cx = cy = 0.0
    for (x0, y0), (x1, y1) in zip(anel, anel[1:] + anel[:1]):
        f = x0 * y1 - x1 * y0
        a += f
        cx += (x0 + x1) * f
        cy += (y0 + y1) * f
    a /= 2
    return a, (cx / (6 * a), cy / (6 * a)) if a else anel[0]


def main() -> None:
    malha = json.loads(ENTRADA.read_text(encoding="utf-8"))
    feicoes = malha["features"]
    todos = [p for f in feicoes for poli in poligonos(f["geometry"]) for anel in poli for p in anel]
    lon_min, lon_max = min(p[0] for p in todos), max(p[0] for p in todos)
    lat_min, lat_max = min(p[1] for p in todos), max(p[1] for p in todos)
    k = math.cos(math.radians((lat_min + lat_max) / 2))
    escala = LARGURA / ((lon_max - lon_min) * k)
    altura = round((lat_max - lat_min) * escala)

    def proj(p):
        return ((p[0] - lon_min) * k * escala, (lat_max - p[1]) * escala)

    estados = {}
    for f in feicoes:
        sigla = SIGLA[f["properties"]["codarea"]]
        partes, maior = [], (0.0, (0, 0))
        for poli in poligonos(f["geometry"]):
            for anel in poli:
                pts = [proj(p) for p in anel]
                partes.append("M" + "L".join(f"{x:.1f},{y:.1f}" for x, y in pts) + "Z")
                a, c = area_centroide(pts)
                if abs(a) > abs(maior[0]):
                    maior = (a, c)
        estados[sigla] = {"d": "".join(partes), "x": round(maior[1][0], 1), "y": round(maior[1][1], 1),
                          "area": round(abs(maior[0]))}

    dados = {"viewBox": f"0 0 {LARGURA} {altura}", "estados": estados}
    SAIDA.write_text("// Gerado por analysis/gerar_mapa.py a partir da malha do IBGE — não editar à mão\n"
                     "window.MAPA_UF = " + json.dumps(dados, separators=(",", ":")) + ";\n", encoding="utf-8")
    print(f"✔ {SAIDA.relative_to(RAIZ)} ({len(estados)} estados, {SAIDA.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
