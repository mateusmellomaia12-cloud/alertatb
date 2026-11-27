# analysis/ — Tratamento e modelagem (Python)

## `baixar_dados_externos.py`
Baixa os dados externos e salva em `../data/raw/` (só precisa rodar para atualizar):
- **IBGE**, Projeções da População (Revisão 2024): população por ano, região/UF e sexo → `ibge_populacao_2013_2034.csv`
- **TABNET/DATASUS** (SINAN tuberculose): casos por ano de diagnóstico × desfecho, tipo de entrada, HIV, PPL, situação de rua, drogas, alcoolismo → `tabnet/*.csv`

## `fatores.py`
Usado pelo `regressao.py`. Monta o bloco `fatores` do JSON (Tela 4): variação de cada fator, % dos casos, desfecho do tratamento e incidência de casos novos por 100 mil, comparada à meta de 2035.

## `regressao.py`
Lê `../data/processed/tuberculose_2013_2024.csv`, ajusta uma regressão linear (Scikit-learn) para cada recorte (Brasil, 5 regiões, SP, RJ, sexo) e gera **`../data/processed/dados_painel.json`** e **`../web/js/dados.js`**, que o painel web consome.

O que o script faz:
- Exclui **2020** do ajuste (ano atípico da pandemia), mas mantém o ano no histórico
- Calcula coeficiente anual, R², crescimento %/ano e projeção **2025–2034**
- Faz **backtest** (treina até 2021, mede o erro em 2022–2024)
- Classifica cada recorte como **Crítico / Atenção / Moderado** (regra nas constantes no topo do arquivo)
- Calcula a **taxa por 100 mil habitantes** (histórico e projeção) com a população do IBGE
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
      "historico": [{ "ano": 2013, "casos": 86212 }, ...],
      "projecao":  [{ "ano": 2025, "casos": 110824 }, ...],
      "coeficiente_anual": 2429.5,
      "r2": 0.835,
      "crescimento_pct_ano": 2.15,
      "status": "Crítico",
      ...
    },
    "Norte": { ... }
  },
  "avisos_consistencia": [ ... ]
}
```
