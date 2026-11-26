# analysis/ — Tratamento e modelagem (Python)

## `regressao.py`
Lê `../data/processed/tuberculose_2013_2024.csv`, ajusta uma regressão linear (Scikit-learn) para cada recorte (Brasil, 5 regiões, SP, RJ, sexo) e gera **`../data/processed/dados_painel.json`** e **`../web/js/dados.js`**, que o painel web consome.

O que o script faz:
- Exclui **2020** do ajuste (ano atípico da pandemia), mas mantém o ano no histórico
- Calcula coeficiente anual, R², crescimento %/ano e projeção **2025–2034**
- Faz **backtest** (treina até 2021, mede o erro em 2022–2024)
- Classifica cada recorte como **Crítico / Atenção / Moderado** (regra nas constantes no topo do arquivo)
- Avisa quando a soma das regiões ou por sexo não bate com o total do Brasil

```bash
pip install -r analysis/requirements.txt
python analysis/regressao.py
```

Detalhes e justificativas: [docs/avaliacao_da_base.md](../docs/avaliacao_da_base.md)

## Estrutura do `dados_painel.json`
```jsonc
{
  "recortes": {
    "Brasil": {
      "historico": [{ "ano": 2013, "casos": 85212 }, ...],
      "projecao":  [{ "ano": 2025, "casos": 110501 }, ...],
      "coeficiente_anual": 2407.4,
      "r2": 0.853,
      "crescimento_pct_ano": 2.16,
      "status": "Crítico",
      ...
    },
    "Norte": { ... }
  },
  "avisos_consistencia": [ ... ]
}
```
