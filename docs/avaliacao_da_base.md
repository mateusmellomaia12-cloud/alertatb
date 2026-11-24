# Avaliação da base de dados

Análise da planilha [`data/raw/Analise_Tuberculose.xlsx`](../data/raw/Analise_Tuberculose.xlsx) (SINAN/DATASUS, 2013–2024), feita em 24/11/2026.

**Resumo:** as regressões, o R² e as projeções da planilha estão corretos e batem com o relatório do Checkpoint 1. A base é um bom ponto de partida, mas tem três problemas que a banca pode notar e várias oportunidades de melhoria.

Os números abaixo podem ser reproduzidos com [`analysis/regressao.py`](../analysis/regressao.py).

---

## ⚠️ Problemas encontrados

### 1. A projeção começa caindo
Com todos os anos no ajuste, o modelo prevê **108.648 casos em 2025**, menos que os **111.521 reais de 2024**. Isso aparece no gráfico do relatório do CP1 como uma queda no início da linha tracejada.

**Causa:** 2020 teve subnotificação por causa da pandemia de Covid-19 e "puxa" a reta para baixo.

**Ajuste sem 2020:**

| Recorte | R² com 2020 | R² sem 2020 | Proj. 2025 sem 2020 | Proj. 2034 sem 2020 |
|---|---:|---:|---:|---:|
| Brasil | 0,73 | **0,85** | 110.501 | 132.164 |
| Norte | 0,89 | **0,94** | 14.842 | 19.919 |
| Sudeste | 0,72 | **0,85** | 49.538 | 59.190 |
| Sul | 0,42 | **0,56** | 12.778 | 14.351 |

A queda em 2025 diminui (de ~2.900 para ~1.000 casos), mas **não some**, porque uma reta não acompanha a aceleração recente (ver item 2). No gráfico, vale ligar o último ponto real ao primeiro projetado com uma legenda clara, ou mostrar uma faixa de incerteza.

### 2. O modelo subestima o crescimento recente
**Backtest:** treinando a regressão só com dados até 2021 e comparando com o que aconteceu de verdade:

| Recorte | Erro 2022 | Erro 2023 | Erro 2024 |
|---|---:|---:|---:|
| Brasil | −9,1% | −13,6% | −14,0% |
| Norte | −9,4% | −11,9% | −16,0% |
| Sudeste | −7,2% | −12,9% | −13,9% |

A doença está **acelerando desde 2021** e a regressão linear não capta isso. Não é motivo para trocar o modelo, mas no pitch vale dizer que **a projeção é conservadora: o cenário real tende a ser pior**. Isso mostra domínio técnico.

### 3. Alguns totais não fecham
A soma das 5 regiões deveria dar o total do Brasil, e a soma masculino + feminino também:

| Ano | Recorte | Soma | Total Brasil | Diferença |
|---|---|---:|---:|---:|
| 2013 | regiões | 84.222 | 85.212 | **−990** |
| 2015 | regiões | 85.462 | 85.416 | +46 (soma maior que o total) |
| 2015 | sexo | 85.652 | 85.416 | **+236** (soma maior que o total) |
| 2021 | regiões | 91.345 | 91.385 | −40 |
| 2022 | regiões | 103.124 | 103.322 | −198 |

Parecem erros de digitação ou consultas feitas em datas diferentes. **Conferir esses anos de novo no TABNET/DATASUS.** Diferenças pequenas por sexo "ignorado" são normais; somas maiores que o total, não.

---

## 💡 O que podemos fazer

### Até o Checkpoint 2 (27/11): rápido e com impacto
- [ ] Corrigir 2013, 2015, 2021 e 2022 na fonte e atualizar `data/processed/tuberculose_2013_2024.csv`
- [x] Regressão feita em Python, não só no Excel ([`analysis/regressao.py`](../analysis/regressao.py)). O script gera `data/processed/dados_painel.json` e o site lê desse arquivo. Isso conta como "estrutura funcional", não números copiados.
- [x] 2020 tratado como ano atípico: aparece no histórico, mas fica fora do ajuste
- [ ] Mostrar no site o R² e uma nota dizendo que a projeção é conservadora

### Até a banca (07/12): maior salto de qualidade
- [ ] **Taxa por 100 mil habitantes**, não só número de casos. Hoje o Sudeste parece o pior porque é a região mais populosa. Dividindo pela população (IBGE, também pública), o **Norte** provavelmente aparece como a região mais crítica.
- [ ] **Os 27 estados**, não só SP e RJ. O TABNET permite essa consulta, e dá para fazer um mapa do Brasil no site.
- [ ] **Comparar com a meta oficial.** O plano nacional "Brasil Livre da Tuberculose" mira menos de 10 casos por 100 mil habitantes até 2035. O painel pode mostrar "quão longe estamos da meta", o que reforça o alinhamento ao ODS 3.
- [ ] **Validar a regra dos selos** Crítico / Atenção / Moderado (proposta abaixo)

### Extra, se sobrar tempo
O TABNET também tem **faixa etária**, **desfecho do tratamento** (cura, abandono, óbito) e **coinfecção com HIV**. A taxa de **abandono de tratamento** é um dos maiores problemas da tuberculose no Brasil e daria um quarto ângulo para o painel.

---

## Regra dos selos (proposta implementada no script)

`crescimento %/ano = coeficiente anual ÷ casos de 2024`

| Selo | Regra |
|---|---|
| 🔴 Crítico | crescimento ≥ 2,0%/ano **e** R² ≥ 0,80 (cresce rápido e de forma consistente) |
| 🟠 Atenção | crescimento ≥ 1,5%/ano **ou** R² ≥ 0,80 |
| 🟢 Moderado | demais casos |

Resultado atual (sem 2020 no ajuste):

| Recorte | Casos 2024 | Cresc./ano | %/ano | R² | Proj. 2034 | Selo |
|---|---:|---:|---:|---:|---:|---|
| Brasil | 111.521 | +2.407 | 2,2 | 0,85 | 132.164 | 🔴 Crítico |
| Norte | 15.065 | +564 | 3,7 | 0,94 | 19.919 | 🔴 Crítico |
| Nordeste | 27.559 | +509 | 1,9 | 0,79 | 32.611 | 🟠 Atenção |
| Centro-Oeste | 5.491 | +118 | 2,1 | 0,63 | 6.468 | 🟠 Atenção |
| Sul | 13.145 | +175 | 1,3 | 0,56 | 14.351 | 🟢 Moderado |
| Sudeste | 50.261 | +1.072 | 2,1 | 0,85 | 59.190 | 🔴 Crítico |
| São Paulo | 25.318 | +429 | 1,7 | 0,68 | 28.488 | 🟠 Atenção |
| Rio de Janeiro | 17.228 | +379 | 2,2 | 0,94 | 20.721 | 🔴 Crítico |
| Masculino | 78.208 | +1.856 | 2,4 | 0,88 | 94.942 | 🔴 Crítico |
| Feminino | 33.301 | +543 | 1,6 | 0,72 | 37.129 | 🟠 Atenção |

Os limites são uma sugestão: o grupo pode ajustá-los nas constantes no topo do script.

---

## Observações menores
- O `.csv` original estava vazio; os CSVs em `data/processed/` foram gerados a partir do Excel.
- A coluna "Tuberculose" representa o total do Brasil; no painel, exibir como **"Brasil"**.
- As abas "Descritiva por Ano" e "Correlação" estão corretas, mas dizem pouco. A variação entre regiões reflete só o tamanho delas, e as correlações altas refletem que todas crescem juntas no tempo. Não precisam ser destaque no painel.
- Os dados de 2023 e 2024 do SINAN ainda podem ser revisados pelo Ministério da Saúde. Vale citar a data da consulta.
