# Divisão de tarefas — TechCare Analytics

> **Proposta inicial:** a equipe pode trocar os nomes entre as frentes. O importante é que **todo mundo faça commits com a própria conta do GitHub**, porque a banca avalia a "contribuição visível de todos os integrantes".

## Prazos

| Data | Entrega |
|---|---|
| **27/11** | **Checkpoint 2:** protótipo funcional + GitHub atualizado + vídeo de até 3 min |
| **07–08/12** | **Banca:** pitch de 5 min + projeto rodando ao vivo |

## Como somos avaliados

**Checkpoint 2**

| Critério | Peso |
|---|---|
| Protótipo funcional | 35% |
| Qualidade técnica | 20% |
| Documentação no GitHub | 20% |
| Vídeo de demonstração | 15% |
| Evolução desde o CP1 | 10% |

**Banca final**

| Critério | Peso |
|---|---|
| Projeto funcionando | 35% |
| Pitch | 30% |
| Repositório final | 20% |
| Ideia bem definida | 15% |

**Nota final:** projeto completo = 7 · Top 20 = 8 · Top 10 = 9 · Top 3 = 10

O projeto vale **40% da N2** de todas as disciplinas presenciais.

---

## Frentes de trabalho

### 1. Dados e modelagem (Python): **Sindclay**
Pasta: [`analysis/`](../analysis/)
- [ ] Script que lê `data/raw/Analise_Tuberculose.xlsx` (ou o CSV em `data/processed/`) com Pandas
- [ ] Estatística descritiva e matriz de correlação
- [ ] Regressão linear (Scikit-learn) por recorte, com coeficiente, R² e projeção 2025–2034
- [ ] Exportar `data/processed/dados_painel.json` para o portal web consumir
- [ ] Preencher `analysis/requirements.txt`

### 2. Portal web: Telas 1 e 2: **Vinicius Cotrim**
Pasta: [`web/`](../web/)
- [ ] Estrutura do site (`index.html`, `css/`, `js/`) e navegação entre as 3 telas
- [ ] **Tela 1 (Visão Geral):** cards de KPI + gráfico de linha histórico/projeção + filtros
- [ ] **Tela 2 (Regiões e Perfil):** barras por macrorregião, rosca por sexo, destaques de SP/RJ
- [ ] Gráficos com Chart.js (ou similar) lendo os dados de `data/processed/`

### 3. Portal web: Tela 3 + Power BI: **Vinicius Eiji**
Pastas: [`web/`](../web/) e [`powerbi/`](../powerbi/)
- [ ] **Tela 3 (Alertas):** banner de alerta crítico + tabela de risco com selos Crítico / Atenção / Moderado
- [ ] Regra dos selos documentada (ex.: crescimento/ano e R²)
- [ ] Painel no Power BI com filtros por região, estado e sexo (salvar `.pbix` em `powerbi/`)

### 4. Identidade visual, prints e vídeo: **Mateus**
Pastas: [`assets/`](../assets/) e [`docs/checkpoint2/`](checkpoint2/)
- [ ] Logo, paleta de cores e tipografia em `assets/identidade-visual/` (aplicar igual no site e no Power BI)
- [ ] Prints das 3 telas em `assets/prints/`
- [ ] **Vídeo de demonstração (até 3 min)** mostrando o fluxo principal; link no README
- [ ] Roteiro e slides do **pitch de 5 min** em `docs/checkpoint3/`

### 5. Coordenação, README e integração: **Mateus Figueiró**
- [ ] Gerenciar o repositório, revisar e aceitar os Pull Requests
- [ ] Manter o `README.md` completo (descrição, como executar, prints, tecnologias, vídeo)
- [ ] Integrar dados + web e garantir que tudo roda seguindo o README do zero
- [ ] Registrar em `docs/checkpoint2/` os retornos do Professor Mentor e o que mudou desde o CP1
- [ ] Ensaiar o pitch com o grupo

---

## Fluxo principal que precisa funcionar ao vivo
1. Abrir o AlertaTB e ver os KPIs nacionais.
2. Filtrar por região/sexo e ver o gráfico histórico + projeção atualizar.
3. Ir para a Tela de Alertas e ver as regiões classificadas por risco.
