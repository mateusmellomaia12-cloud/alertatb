# Checkpoint 2 — Protótipo e evolução (09/11 a 27/11)

## Checklist de entrega
- [x] Protótipo funcional, com fluxo principal navegável: https://mateusmellomaia12-cloud.github.io/alertatb/ (dados reais, não mockados)
- [x] Estrutura funcional, não apenas telas estáticas
- [x] README com detalhes do projeto
- [x] Instruções de como executar (reproduzíveis)
- [x] Prints do protótipo
- [x] Tecnologias utilizadas
- [ ] Vídeo de demonstração (máx. 3 min), com link no README — roteiro: [roteiro_video.md](roteiro_video.md)

## Evolução desde o Checkpoint 1
_Registrar aqui os retornos do Professor Mentor e o que foi ajustado._

| Retorno recebido | O que mudamos |
|---|---|
| | |

## O que evoluiu desde o Checkpoint 1
- **Base conferida no TABNET:** a planilha tinha erros de digitação em 2013 e 2015 (ex.: total 85.212 → 86.212; Sudeste 36.467 → 38.467). A série agora é baixada direto do DATASUS por script, com conferência automática das somas.
- **Modelo mais robusto:** 2020 (subnotificação na pandemia) saiu do ajuste da regressão, e o R² do Brasil subiu de 0,71 para 0,84. Backtest mostra que a projeção é conservadora.
- **Regressão em Python** (antes só no Excel), gerando os dados que o site lê.
- **Painel web com 4 telas** publicado no GitHub Pages: Visão Geral, Regiões e Perfil, Alertas e Motivo do crescimento (mais a aba Modelagem).
- **Taxa por 100 mil habitantes** (IBGE), que mostra que a alta é real e não só efeito do aumento da população (+22,9% desde 2013).
- **Fatores associados** (abandono, desfecho, HIV, situação de rua, drogas, alcoolismo, PPL) e comparação com a **meta nacional de 2035**.
- **Os 27 estados** (antes só SP e RJ): mapa interativo na Tela 2 e todos no ranking de alertas e no filtro da Visão Geral.
- **Aba de Modelagem:** modelo de risco de abandono do tratamento com curva ROC (AUC 0,69), teste KS (27,7), matriz de confusão e odds ratios; teste KS de normalidade nos resíduos da projeção.
- **Fontes e metodologia** visíveis no site, com links oficiais.
