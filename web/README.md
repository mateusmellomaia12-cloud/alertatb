# web/ — Painel AlertaTB (HTML, CSS, JavaScript)

Online: **https://mateusmellomaia12-cloud.github.io/alertatb/**

```
web/
├── index.html     # As 3 telas (navegação por #visao-geral, #regioes, #alertas)
├── css/style.css  # Estilos — cores e fontes da identidade visual
├── js/
│   ├── app.js     # Lógica: filtros, gráficos (Chart.js), ranking e alertas
│   └── dados.js   # GERADO por analysis/regressao.py — não editar à mão
└── img/           # Logo e ícone
```

**Rodar localmente:** dar dois cliques em `index.html` (precisa de internet para as fontes e o Chart.js).

**Atualizar os dados:** rodar `python analysis/regressao.py` na raiz do projeto e recarregar a página.

## Ideias para evoluir (até a banca)
- [ ] Taxa por 100 mil habitantes (população IBGE)
- [ ] Mapa do Brasil com os 27 estados
- [ ] Linha da meta "Brasil Livre da TB" (< 10 casos/100 mil hab. até 2035)
- [ ] Versão para celular revisada
