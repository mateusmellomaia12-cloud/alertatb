# Roteiro do vídeo de demonstração (máx. 3 min)

**Formato:** gravação da tela do site com **narração em voz** (vale 15% da nota do CP2; sem narração o avaliador não entende o que está vendo).
**Site:** https://mateusmellomaia12-cloud.github.io/alertatb/
**Narração:** ~400 palavras = 3 min em ritmo calmo. Se passar de 3 min, corte as frases marcadas com *(opcional)*.

> Sugestão: dividir a narração entre os integrantes (um por bloco). Mostra que todos participaram. Cada um grava o próprio áudio, ou gravam juntos numa chamada.

---

## 0:00–0:20 · Abertura *(Integrante 1)*
**Tela:** Visão Geral parada, com o logo no topo.

> "Olá! Somos a TechCare Analytics, e este é o AlertaTB, um painel preditivo para monitorar a tuberculose no Brasil. Em 2024, o país teve mais de 113 mil casos, 31% a mais que em 2013. Os dados existem e são públicos, mas ficam presos em tabelas que poucos gestores conseguem analisar. O AlertaTB resolve isso."

## 0:20–1:00 · Visão Geral *(Integrante 2)*
**Tela:** passar o mouse nos indicadores → passar o mouse no gráfico → clicar em **"Por 100 mil hab."** → voltar para **"Casos"**.

> "Na Visão Geral, o gestor vê os números principais e a tendência. A linha tracejada é a projeção feita com regressão linear em Python: se nada mudar, serão mais de 132 mil casos em 2034. O ponto cinza é 2020, quando a pandemia reduziu os diagnósticos; por isso ele fica fora do cálculo. Aqui eu troco para a taxa por 100 mil habitantes: ela subiu 23%, então a alta não é só porque a população cresceu."
> *(opcional)* "Abaixo, explicamos o modelo: testado com dados reais, ele é conservador. O cenário real tende a ser pior."

## 1:00–1:45 · Regiões e Perfil *(Integrante 3)*
**Tela:** mostrar a frase-resumo → trocar o período para **2019 → 2020** → voltar para **2013 → 2024** → rolar até o mapa → clicar no **Amazonas**.

> "Na tela Regiões e Perfil, o gestor escolhe dois anos e compara. De 2013 a 2024, o Norte cresceu 71%, quase quatro vezes mais que o Sul. Se eu escolho 2019 a 2020, aparece a queda da pandemia em todas as regiões. No mapa dos 27 estados, o Amazonas tem a maior taxa do país: 127 casos por 100 mil habitantes, mais que o dobro da média nacional."
> *(opcional)* "Os homens são 70% dos casos e também cresceram mais rápido."

## 1:45–2:15 · Alertas *(Integrante 4)*
**Tela:** mostrar o banner vermelho → clicar em **"Estados"** → clicar numa linha (ex.: **Roraima**) para abrir o gráfico.

> "Na tela de Alertas, cada recorte recebe um selo: Crítico, Atenção ou Moderado, calculado pela velocidade e pela consistência do crescimento. Assim, o gestor sabe onde agir primeiro. Com um clique, abre o gráfico e a projeção daquele estado."

## 2:15–2:45 · Por que cresce? *(Integrante 5)*
**Tela:** abrir **"Por que cresce?"** → mostrar os 4 indicadores → rolar pelo gráfico de fatores e o da meta de 2035.

> "E por que os casos crescem? Cruzamos outros dados do DATASUS. A cura caiu de 70% para 58%, longe da meta de 85% da OMS, e o abandono do tratamento chegou a 19%. Quem abandona continua transmitindo. Também cresceram os casos em pessoas em situação de rua e que usam drogas. Hoje são quase 40 casos novos por 100 mil habitantes; a meta do Brasil para 2035 é menos de 10."

## 2:45–3:00 · Fechamento *(Integrante 1)*
**Tela:** rolar até **Fontes e metodologia** no fim da página.

> "Tudo com dados públicos e oficiais do DATASUS e do IBGE, código aberto no GitHub e cálculo reproduzível. O AlertaTB ajuda o SUS a agir antes do pico. Obrigado!"

---

## Como gravar

1. **Preparar a tela**
   - Chrome em tela cheia (F11), zoom em 100% (ou 110% se o texto ficar pequeno).
   - Fechar abas e desligar as notificações do Windows (Configurações → Sistema → Notificações → Não perturbe).
   - Abrir o site antes e passar por todas as telas uma vez, para tudo carregar.
2. **Gravar a tela**
   - **Xbox Game Bar:** `Win + Alt + R` inicia e para (grava a janela do Chrome com o áudio do microfone). Se o microfone não entrar, ative em `Win + G` → Captura → microfone ligado.
   - Alternativas: OBS Studio (gratuito) ou o gravador do **Clipchamp** (já vem no Windows 11).
   - Resolução 1080p; mexa o mouse **devagar** e pause 1 segundo depois de cada clique.
3. **Áudio**
   - Fone com microfone, em lugar silencioso; ler o roteiro com calma.
   - Se dividir entre integrantes: grave a tela uma vez sem som e cada um grava seu trecho de áudio no celular. Junte tudo no **Clipchamp** (arrastar vídeo + áudios na linha do tempo).
4. **Conferir:** até **3:00**, som audível, todas as 4 telas aparecem.
5. **Publicar:** YouTube como **"Não listado"** (ou Google Drive com "qualquer pessoa com o link pode ver") e mandar o link para colocar no README.

## Plano B para a banca (07/12)
Gravar também uma versão **sem cortes de tempo** (pode ter 4–5 min), para usar caso a internet ou o projetor falhem durante a demonstração ao vivo.
