"""
AlertaTB — Modelagem e validação (aba "Modelagem" do painel)

1) Modelo de risco de ABANDONO do tratamento (classificação)
   - Regressão logística: abandono (1) × cura (0), a partir de sexo, faixa etária,
     situação de rua, drogas, alcoolismo e HIV.
   - Treino: diagnósticos de 2015–2019 | Teste: 2021–2023 (validação fora do tempo).
   - Métricas no teste: curva ROC, AUC, estatística KS (máxima separação entre as
     distribuições de score de quem abandonou e de quem se curou) + teste KS de
     duas amostras, ponto de corte, matriz de confusão e faixas de risco.

2) Teste KS de normalidade dos resíduos da regressão de projeção (por recorte),
   com correção de Lilliefors por simulação (média e desvio estimados dos dados).

3) Registro de um teste que NÃO funcionou: classificar quais estados vão crescer
   mais que o Brasil no ano seguinte (AUC ≈ 0,5). Fica documentado para transparência.

Entrada: data/raw/tabnet/abandono_perfis.csv (baixar_dados_abandono.py) e a série histórica.
Usado por regressao.py, que coloca o resultado em dados_painel.json -> bloco "modelagem".
"""

from pathlib import Path

import numpy as np
import pandas as pd
from scipy import stats
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import roc_auc_score, roc_curve

RAIZ = Path(__file__).resolve().parent.parent
PERFIS = RAIZ / "data" / "raw" / "tabnet" / "abandono_perfis.csv"
CASOS_UF = RAIZ / "data" / "raw" / "tabnet" / "uf_notificacao.csv"

BINARIAS = {"sexo_masc": "Sexo masculino", "situacao_rua": "Situação de rua", "drogas": "Uso de drogas ilícitas",
            "alcool": "Alcoolismo", "hiv": "HIV positivo"}
FAIXA_REF = "35 a 44 anos"   # categoria de referência da idade
ROTULO_PERIODO = {"treino": "2015–2019", "teste": "2021–2023"}


# --------------------------------------------------------------------------
# 1) Modelo de abandono
# --------------------------------------------------------------------------
def preparar(perfis: pd.DataFrame):
    """Cada perfil vira 2 linhas (abandono e cura) com peso = nº de pacientes."""
    p = perfis.copy()
    p["n_abandono"] = p["Abandono"] + p.get("Abandono Primário", 0)
    p["n_cura"] = p["Cura"]
    faixas = sorted(p["faixa_etaria"].unique(), key=lambda f: int(f.split()[0]))
    dummies = [f for f in faixas if f != FAIXA_REF]
    for f in dummies:
        p["idade_" + f] = (p["faixa_etaria"] == f).astype(int)
    colunas = list(BINARIAS) + ["idade_" + f for f in dummies]
    linhas = []
    for alvo, col in [(1, "n_abandono"), (0, "n_cura")]:
        bloco = p[p[col] > 0]
        linhas.append(pd.DataFrame({**{c: bloco[c].values for c in colunas}, "y": alvo,
                                    "peso": bloco[col].values, "periodo": bloco["periodo"].values}))
    return pd.concat(linhas, ignore_index=True), colunas, dummies


def erros_padrao(X: np.ndarray, p: np.ndarray, w: np.ndarray) -> np.ndarray:
    """Erro-padrão dos coeficientes (inversa da matriz de informação de Fisher)."""
    Xc = np.column_stack([np.ones(len(X)), X])
    info = (Xc * (w * p * (1 - p))[:, None]).T @ Xc
    return np.sqrt(np.diag(np.linalg.inv(info)))


def ks_ponderado(y, score, w):
    """Curva acumulada do score para abandono e para cura; KS = maior distância."""
    ordem = np.argsort(score)
    s, yy, ww = score[ordem], y[ordem], w[ordem]
    cdf_ab = np.cumsum(ww * yy) / (ww * yy).sum()
    cdf_cu = np.cumsum(ww * (1 - yy)) / (ww * (1 - yy)).sum()
    # agrupa scores iguais (mesmo perfil) para pegar o valor no fim de cada degrau
    unicos = np.unique(s)
    pontos = []
    for v in unicos:
        i = np.searchsorted(s, v, side="right") - 1
        pontos.append((float(v), float(cdf_ab[i]), float(cdf_cu[i])))
    dif = [cu - ab for _, ab, cu in pontos]
    k = int(np.argmax(dif))
    return pontos, float(dif[k]), pontos[k][0]


def reduzir(pontos, n=120):
    if len(pontos) <= n:
        return pontos
    idx = np.unique(np.linspace(0, len(pontos) - 1, n).round().astype(int))
    return [pontos[i] for i in idx]


def modelo_abandono() -> dict | None:
    if not PERFIS.exists():
        return None
    base, colunas, dummies = preparar(pd.read_csv(PERFIS))
    tr, te = base[base.periodo == "treino"], base[base.periodo == "teste"]
    Xtr, ytr, wtr = tr[colunas].values, tr.y.values, tr.peso.values
    Xte, yte, wte = te[colunas].values, te.y.values, te.peso.values

    modelo = LogisticRegression(C=np.inf, max_iter=2000).fit(Xtr, ytr, sample_weight=wtr)
    p_tr, p_te = modelo.predict_proba(Xtr)[:, 1], modelo.predict_proba(Xte)[:, 1]

    auc_tr = roc_auc_score(ytr, p_tr, sample_weight=wtr)
    auc_te = roc_auc_score(yte, p_te, sample_weight=wte)
    fpr, tpr, cortes = roc_curve(yte, p_te, sample_weight=wte)
    pontos_ks, ks, corte = ks_ponderado(yte, p_te, wte)

    # teste KS de duas amostras (scores de quem abandonou × de quem se curou)
    sc_ab = np.repeat(p_te[yte == 1], wte[yte == 1].astype(int))
    sc_cu = np.repeat(p_te[yte == 0], wte[yte == 0].astype(int))
    teste_ks = stats.ks_2samp(sc_ab, sc_cu)

    # matriz de confusão no corte do KS (score >= corte -> "alto risco")
    alto = p_te > corte
    vp = float(wte[(yte == 1) & alto].sum()); fn = float(wte[(yte == 1) & ~alto].sum())
    fp = float(wte[(yte == 0) & alto].sum()); vn = float(wte[(yte == 0) & ~alto].sum())

    # odds ratios com IC 95%
    ep = erros_padrao(Xtr, p_tr, wtr)
    coefs = np.concatenate([modelo.intercept_, modelo.coef_[0]])
    nomes = list(BINARIAS.values()) + [f"Idade {f} (vs {FAIXA_REF})" for f in dummies]
    odds = [{"variavel": n, "or": round(float(np.exp(b)), 2),
             "ic_inf": round(float(np.exp(b - 1.96 * e)), 2), "ic_sup": round(float(np.exp(b + 1.96 * e)), 2)}
            for n, b, e in zip(nomes, coefs[1:], ep[1:])]

    # faixas de risco: pacientes do teste ordenados pelo score e divididos em 5 grupos de tamanho parecido
    ordem = np.argsort(p_te, kind="stable")
    w_ord, y_ord = wte[ordem], yte[ordem]
    inicio = (np.cumsum(w_ord) - w_ord) / w_ord.sum()      # posição de cada perfil na fila (0 a 1)
    grupo = np.minimum((inicio * 5).astype(int), 4)
    faixas = []
    for q, nome in enumerate(["Muito baixo", "Baixo", "Médio", "Alto", "Muito alto"]):
        sel = grupo == q
        if not sel.any():
            continue
        faixas.append({"faixa": nome, "pacientes": int(w_ord[sel].sum()),
                       "taxa_abandono": round(float((w_ord[sel] * y_ord[sel]).sum() / w_ord[sel].sum() * 100), 1)})

    taxa = lambda y, w: round(float((w * y).sum() / w.sum() * 100), 1)
    roc = reduzir(list(zip(fpr.round(4).tolist(), tpr.round(4).tolist())))
    return {
        "periodos": ROTULO_PERIODO,
        "n_treino": int(wtr.sum()), "n_teste": int(wte.sum()),
        "taxa_abandono_treino": taxa(ytr, wtr), "taxa_abandono_teste": taxa(yte, wte),
        "n_perfis": int(len(pd.read_csv(PERFIS))),
        "auc_treino": round(float(auc_tr), 3), "auc_teste": round(float(auc_te), 3),
        "ks": round(ks, 3), "ks_estatistica_teste": round(float(teste_ks.statistic), 3),
        "ks_p_valor": float(f"{teste_ks.pvalue:.3g}"),
        "corte": round(corte, 3),
        "sensibilidade": round(vp / (vp + fn) * 100, 1), "especificidade": round(vn / (vn + fp) * 100, 1),
        "pct_sinalizados": round((vp + fp) / (vp + fp + fn + vn) * 100, 1),
        "precisao": round(vp / (vp + fp) * 100, 1),
        "matriz": {"vp": int(vp), "fp": int(fp), "fn": int(fn), "vn": int(vn)},
        "roc": [{"fpr": a, "tpr": b} for a, b in roc],
        "ks_curvas": [{"score": round(s, 4), "abandono": round(a, 4), "cura": round(c, 4)} for s, a, c in reduzir(pontos_ks)],
        "odds_ratios": odds,
        "faixas_risco": faixas,
    }


# --------------------------------------------------------------------------
# 2) KS de normalidade dos resíduos da regressão de projeção
# --------------------------------------------------------------------------
def _ks_estimado(x: np.ndarray) -> float:
    z = (x - x.mean()) / x.std(ddof=1)
    return float(stats.kstest(z, "norm").statistic)


def lilliefors(x: np.ndarray, simulacoes: int = 2000, semente: int = 42) -> tuple[float, float]:
    """KS com média/desvio estimados; p-valor por simulação (correção de Lilliefors)."""
    d = _ks_estimado(x)
    rng = np.random.default_rng(semente)
    sim = np.array([_ks_estimado(rng.standard_normal(len(x))) for _ in range(simulacoes)])
    return d, float((sim >= d).mean())


def residuos_ks(recortes: dict, anos_excluidos: list[int]) -> list[dict]:
    saida = []
    for nome, r in recortes.items():
        anos = np.array([h["ano"] for h in r["historico"]])
        casos = np.array([h["casos"] for h in r["historico"]], dtype=float)
        m = ~np.isin(anos, anos_excluidos)
        a, b = np.polyfit(anos[m], casos[m], 1)
        res = casos[m] - (a * anos[m] + b)
        d, p = lilliefors(res)
        saida.append({"recorte": nome, "grupo": r["grupo"], "n": int(m.sum()), "ks": round(d, 3),
                      "p_valor": round(p, 3), "normal": bool(p >= 0.05)})
    return saida


# --------------------------------------------------------------------------
# 3) Teste que não funcionou: classificar crescimento dos estados
# --------------------------------------------------------------------------
def teste_crescimento_estados() -> dict | None:
    if not CASOS_UF.exists():
        return None
    uf = pd.read_csv(CASOS_UF, dtype=str)
    uf = uf[uf.iloc[:, 0].str.fullmatch(r"\d{4}")].set_index(uf.columns[0])
    uf.index = uf.index.astype(int)
    uf = uf.loc[2013:2024].drop(columns=["IG", "Total"], errors="ignore").replace("-", "0").apply(pd.to_numeric)
    br = uf.sum(axis=1)
    linhas = []
    for s in uf.columns:
        c = uf[s]
        for t in range(2015, 2024):
            a, _ = np.polyfit([t - 2, t - 1, t], c[[t - 2, t - 1, t]].values, 1)
            linhas.append({"t": t, "y": int(c[t + 1] / c[t] - 1 > br[t + 1] / br[t] - 1),
                           "v1": c[t] / c[t - 1] - 1, "tend": a / c[t],
                           "dif": (c[t] / c[t - 1] - 1) - (br[t] / br[t - 1] - 1)})
    d = pd.DataFrame(linhas)
    F = ["v1", "tend", "dif"]
    tr, te = d[d.t <= 2018], d[d.t >= 2021]
    m = LogisticRegression().fit(tr[F], tr.y)
    auc = roc_auc_score(te.y, m.predict_proba(te[F])[:, 1])
    return {"pergunta": "O estado vai crescer mais que o Brasil no ano seguinte?",
            "n_treino": len(tr), "n_teste": len(te), "auc_teste": round(float(auc), 3)}


def montar_modelagem(recortes: dict, anos_excluidos: list[int]) -> dict:
    return {
        "abandono": modelo_abandono(),
        "residuos_ks": residuos_ks(recortes, anos_excluidos),
        "teste_crescimento_estados": teste_crescimento_estados(),
    }
