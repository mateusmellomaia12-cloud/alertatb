# Avaliação da base de dados

Análise da planilha [`data/raw/Analise_Tuberculose.xlsx`](../data/raw/Analise_Tuberculose.xlsx) (SINAN/DATASUS, 2013–2024), feita em 24/11/2026 e revisada em 27/11/2026, quando a base foi conferida e reconstruída direto do TABNET.

**Resumo:** os cálculos da planilha (regressões, R², projeções) estavam corretos, mas **alguns números de entrada tinham erros de digitação**. A base usada no painel agora é montada automaticamente do TABNET por [`analysis/baixar_dados_externos.py`](../analysis/baixar_dados_externos.py), e todas as somas fecham.

Os números abaixo podem ser reproduzidos com [`analysis/regressao.py`](../analysis/regressao.py).

---

## ✅ Problema resolvido: totais que não fechavam

Na planilha original, a soma das regiões e a soma por sexo não batiam com o total do Brasil em 2013, 2015, 2021 e 2022.

### De onde vieram os números da planilha
Comparamos a planilha com várias consultas do TABNET (ano de diagnóstico ou de notificação × região de residência ou de notificação). A combinação que bate é:

> **Casos confirmados por ano de diagnóstico × região/UF de notificação** (SINAN/TABNET)

Com esse critério, **de 2013 a 2018 quase todos os valores batem exatamente**. As diferenças que sobram são de dois tipos:

**1. Erros de digitação na planilha (2013 e 2015)**

| Ano | Campo | Planilha | TABNET | Diferença |
|---|---|---:|---:|---:|
| 2013 | Total Brasil | 85.212 | **86.212** | −1.000 (dígito trocado) |
| 2013 | Sudeste | 36.467 | **38.467** | −2.000 (dígito trocado) |
| 2013 | Norte | 8.887 | **8.877** | +10 (dígitos invertidos) |
| 2013 | Feminino | 26.941 | **27.933** | −992 |
| 2015 | Total Brasil | 85.416 | **85.462** | −46 |
| 2015 | Feminino | 26.640 | **26.445** | +195 |

O erro no Sudeste de 2013 fazia a região parecer ter crescido **+37,8%**. O valor correto é **+31,8%**.

**2. Atualização do DATASUS (2019 em diante)**
O SINAN continua recebendo notificações atrasadas e revisões, então os anos mais recentes mudam um pouco a cada consulta. 2024 foi o que mais mudou: **111.521 → 113.012** casos. Não é erro, é o dado ficando mais completo. Por isso o painel cita a data da consulta (27/11/2026).

### O que foi feito
- `data/processed/tuberculose_2013_2024.csv` agora é gerado direto do TABNET (mesmo critério e mesmas colunas da planilha).
- Os números antigos ficaram guardados em [`data/raw/base_original_planilha_2013_2024.csv`](../data/raw/base_original_planilha_2013_2024.csv) para comparação.
- O script continua conferindo as somas a cada execução. Hoje não há nenhuma inconsistência.

---

## ⚠️ Pontos de atenção do modelo

### 1. Por que 2020 fica fora do cálculo
Em 2020, a pandemia de Covid-19 fechou serviços e desviou equipes, e muitos casos de tuberculose **deixaram de ser diagnosticados**. O número caiu (86.160) e voltou a subir em seguida. Não houve menos doença, houve menos registro.

Se 2020 entra na regressão, esse ponto "puxa" a reta para baixo:

| Recorte | R² com 2020 | R² sem 2020 | Cresc./ano com 2020 | Cresc./ano sem 2020 | Proj. 2034 com 2020 | Proj. 2034 sem 2020 |
|---|---:|---:|---:|---:|---:|---:|
| Brasil | 0,71 | **0,84** | +2.298 | **+2.430** | 129.612 | **132.690** |
| Norte | 0,89 | **0,94** | +552 | **+568** | 19.602 | **19.983** |
| Sudeste | 0,68 | **0,82** | +960 | **+1.019** | 57.193 | **58.581** |
| Sul | 0,45 | **0,59** | +175 | **+190** | 14.267 | **14.624** |

Os números do Checkpoint 1 (+2.279/ano, R² 0,73, 129.157 em 2034) eram o ajuste **com** 2020 e **com** os erros de digitação. O painel e o README agora usam o ajuste **sem 2020** e com a base corrigida. Essa é uma prática comum em análises de saúde pós-pandemia, e o ano continua aparecendo no gráfico, marcado como atípico.

### 2. A projeção começa abaixo de 2024
Mesmo sem 2020, o modelo prevê **110.824 casos em 2025**, abaixo dos **113.012 reais de 2024**. A reta representa a tendência média de 12 anos, e a doença **acelerou desde 2021**.

**Backtest:** treinando só com dados até 2021 e comparando com o que aconteceu de verdade:

| Recorte | Erro 2022 | Erro 2023 | Erro 2024 |
|---|---:|---:|---:|
| Brasil | −7,0% | −11,4% | −12,7% |
| Norte | −7,2% | −9,4% | −14,3% |
| Sudeste | −5,6% | −11,4% | −12,9% |
| Sul | −8,2% | −14,1% | −15,9% |

No pitch, vale dizer que **a projeção é conservadora: o cenário real tende a ser pior**. Isso mostra domínio técnico.

---

## 💡 Status das melhorias

- [x] Base conferida e reconstruída a partir do TABNET (erros de 2013 e 2015 corrigidos)
- [x] Regressão em Python ([`analysis/regressao.py`](../analysis/regressao.py)), lida pelo site
- [x] 2020 tratado como ano atípico: aparece no histórico, mas fica fora do ajuste
- [x] R² e nota de "projeção conservadora" no site
- [x] **Taxa por 100 mil habitantes** (população do IBGE, Projeções 2024)
- [x] **Comparação com a meta de 2035** (menos de 10 casos novos por 100 mil)
- [x] **Fatores associados** (desfecho do tratamento, abandono, HIV, situação de rua, drogas, alcoolismo, PPL): Tela 4
- [ ] Os 27 estados e um mapa (opcional)
- [ ] Validar com o grupo a regra dos selos (abaixo)

---

## Regra dos selos (proposta implementada no script)

`crescimento %/ano = coeficiente anual ÷ casos de 2024`

| Selo | Regra |
|---|---|
| 🔴 Crítico | crescimento ≥ 2,0%/ano **e** R² ≥ 0,80 (cresce rápido e de forma consistente) |
| 🟠 Atenção | crescimento ≥ 1,5%/ano **ou** R² ≥ 0,80 |
| 🟢 Moderado | demais casos |

Resultado atual (base corrigida, sem 2020 no ajuste):

| Recorte | Casos 2024 | Cresc./ano | %/ano | R² | Proj. 2034 | Selo |
|---|---:|---:|---:|---:|---:|---|
| Brasil | 113.012 | +2.430 | 2,1 | 0,84 | 132.690 | 🔴 Crítico |
| Norte | 15.199 | +568 | 3,7 | 0,94 | 19.983 | 🔴 Crítico |
| Nordeste | 28.126 | +531 | 1,9 | 0,81 | 32.975 | 🟠 Atenção |
| Centro-Oeste | 5.568 | +121 | 2,2 | 0,63 | 6.527 | 🟠 Atenção |
| Sul | 13.428 | +190 | 1,4 | 0,59 | 14.624 | 🟢 Moderado |
| Sudeste | 50.691 | +1.019 | 2,0 | 0,82 | 58.581 | 🔴 Crítico |
| São Paulo | 25.854 | +457 | 1,8 | 0,68 | 28.988 | 🟠 Atenção |
| Rio de Janeiro | 17.121 | +374 | 2,2 | 0,94 | 20.621 | 🔴 Crítico |
| Masculino | 79.395 | +1.906 | 2,4 | 0,88 | 95.784 | 🔴 Crítico |
| Feminino | 33.608 | +523 | 1,6 | 0,65 | 36.889 | 🟠 Atenção |

Os limites são uma sugestão: o grupo pode ajustá-los nas constantes no topo do script.

---

## Observações menores
- A coluna "Tuberculose" representa o total do Brasil; no painel, aparece como **"Brasil"**.
- As abas "Descritiva por Ano" e "Correlação" da planilha estão corretas, mas dizem pouco: a variação entre regiões reflete só o tamanho delas, e as correlações altas refletem que todas crescem juntas no tempo.
- 2024 e 2025 ainda podem ser revisados pelo Ministério da Saúde. Para atualizar, basta rodar `python analysis/baixar_dados_externos.py` e `python analysis/regressao.py`.
