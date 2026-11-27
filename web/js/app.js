/* =========================================================
   AlertaTB — lógica do painel
   Os dados vêm de js/dados.js, gerado por analysis/regressao.py
   ========================================================= */
(function () {
  'use strict';

  const DADOS = window.DADOS;
  if (!DADOS) {
    document.querySelector('.conteudo').innerHTML =
      '<p class="nota">Dados não encontrados. Rode <code>python analysis/regressao.py</code> para gerar <code>web/js/dados.js</code>.</p>';
    return;
  }
  const RECORTES = DADOS.recortes;
  const REGIOES = Object.keys(RECORTES).filter(n => RECORTES[n].grupo === 'Região');
  const ESTADOS = Object.keys(RECORTES).filter(n => RECORTES[n].grupo === 'Estado');
  const ANOS = RECORTES.Brasil.historico.map(h => h.ano);
  const ANO_FINAL = ANOS[ANOS.length - 1];
  const ANOS_ATIPICOS = DADOS.anos_excluidos_do_ajuste || [];

  // ---------- Cores (iguais ao CSS / identidade visual) ----------
  const COR = {
    roxoProfundo: '#3B1E6D', roxoMedio: '#6A3EA1', lavanda: '#D5C6F5',
    verdeAzulado: '#0E7C7B', cinza: '#6B6478', atipico: '#9A93A8', linha: '#E6DFF3',
  };
  const CLASSE_SELO = { 'Crítico': 'selo-critico', 'Atenção': 'selo-atencao', 'Moderado': 'selo-moderado' };
  const ORDEM_SELO = { 'Crítico': 0, 'Atenção': 1, 'Moderado': 2 };

  // ---------- Formatação pt-BR ----------
  const num = (v) => Math.round(v).toLocaleString('pt-BR');
  const dec = (v, casas = 1) => v.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas });
  const sinal = (v) => (v >= 0 ? '+' : '−') + num(Math.abs(v));
  const selo = (status) => `<span class="selo ${CLASSE_SELO[status]}">${status}</span>`;
  const casosNoAno = (nome, ano) => RECORTES[nome].historico.find(h => h.ano === ano).casos;
  const valorEm = (lista, ano) => (lista.find(p => p.ano === ano) || {}).casos;
  const taxaEm = (lista, ano) => (lista.find(p => p.ano === ano) || {}).taxa;
  const taxaNoAno = (nome, ano) => taxaEm(RECORTES[nome].taxa_historico, ano);

  // ---------- Chart.js: padrões ----------
  if (window.Chart) {
    Chart.defaults.font.family = "'Inter', 'Segoe UI', system-ui, sans-serif";
    Chart.defaults.font.size = 12;
    Chart.defaults.color = COR.cinza;
    Chart.defaults.plugins.legend.display = false;
    Chart.defaults.plugins.tooltip.backgroundColor = COR.roxoProfundo;
    Chart.defaults.plugins.tooltip.padding = 10;
    Chart.defaults.plugins.tooltip.titleFont = { weight: '600' };
    Chart.defaults.maintainAspectRatio = false;
  }
  const graficos = {};

  // =========================================================
  // Navegação entre telas (#visao-geral, #regioes, #alertas, #fatores)
  // =========================================================
  const TELAS = ['visao-geral', 'regioes', 'alertas', 'fatores'];
  function mostrarTela() {
    const atual = TELAS.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'visao-geral';
    TELAS.forEach(t => { document.getElementById('tela-' + t).hidden = t !== atual; });
    document.querySelectorAll('.abas a').forEach(a => {
      const ativa = a.dataset.tela === atual;
      a.classList.toggle('ativa', ativa);
      if (ativa) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    // Chart.js precisa redimensionar gráficos que estavam escondidos
    Object.values(graficos).forEach(g => g && g.resize());
  }
  window.addEventListener('hashchange', mostrarTela);

  // =========================================================
  // TELA 1 — Visão geral
  // =========================================================
  const selRecorte = document.getElementById('filtro-recorte');
  const grupos = {};
  Object.keys(RECORTES).forEach(nome => { (grupos[RECORTES[nome].grupo] ||= []).push(nome); });
  const ROTULO_GRUPO = { Brasil: 'País', 'Região': 'Regiões', Estado: 'Estados', Sexo: 'Sexo' };
  Object.entries(grupos).forEach(([grupo, nomes]) => {
    const og = document.createElement('optgroup');
    og.label = ROTULO_GRUPO[grupo] || grupo;
    nomes.forEach(n => og.appendChild(new Option(n, n)));
    selRecorte.appendChild(og);
  });

  function renderVisaoGeral(nome) {
    const r = RECORTES[nome];
    const primeiro = r.historico[0];
    const proj2034 = valorEm(r.projecao, 2034);
    const share = nome === 'Brasil' ? null : r.casos_ultimo_ano / RECORTES.Brasil.casos_ultimo_ano * 100;

    document.getElementById('kpi-casos').textContent = num(r.casos_ultimo_ano);
    document.getElementById('kpi-casos-sub').textContent =
      share === null ? 'Total nacional · SINAN/DATASUS' : `${dec(share)}% do total do Brasil`;
    document.getElementById('kpi-cresc').textContent = (r.crescimento_total_pct >= 0 ? '+' : '') + dec(r.crescimento_total_pct) + '%';
    document.getElementById('kpi-cresc-sub').textContent = `de ${num(primeiro.casos)} em ${primeiro.ano} para ${num(r.casos_ultimo_ano)}`;
    document.getElementById('kpi-ano').textContent = sinal(r.coeficiente_anual);
    document.getElementById('kpi-ano-sub').textContent = `${dec(r.crescimento_pct_ano)}% ao ano · R² ${dec(r.r2, 2)}`;
    document.getElementById('kpi-proj').textContent = num(proj2034);
    document.getElementById('kpi-proj-sub').textContent =
      `${sinal(proj2034 - r.casos_ultimo_ano)} em relação a ${ANO_FINAL}`;
    const taxaIni = r.taxa_historico[0].taxa;
    document.getElementById('kpi-taxa').textContent = dec(r.taxa_ultimo_ano);
    document.getElementById('kpi-taxa-sub').textContent =
      `${r.variacao_taxa_pct >= 0 ? '+' : '−'}${dec(Math.abs(r.variacao_taxa_pct))}% desde ${primeiro.ano} (era ${dec(taxaIni)}), já descontado o aumento da população`;

    document.getElementById('titulo-grafico').textContent = metrica === 'taxa'
      ? `${nome}: casos por 100 mil habitantes até 2034`
      : `${nome}: evolução histórica e projeção até 2034`;
    document.getElementById('selo-recorte').outerHTML =
      `<span class="selo ${CLASSE_SELO[r.status]}" id="selo-recorte">${r.status}</span>`;

    // Nota sobre o modelo (transparência)
    const erros = Object.values(r.backtest_erro_pct);
    const erroMedio = erros.reduce((a, b) => a + b, 0) / erros.length;
    const anosBt = Object.keys(r.backtest_erro_pct);
    let texto = `<strong>Como ler a projeção:</strong> regressão linear sobre ${ANOS[0]}–${ANO_FINAL}, sem ${ANOS_ATIPICOS.join(', ')} ` +
      `(subnotificação na pandemia). R² = ${dec(r.r2, 2)}: quanto mais perto de 1, mais consistente é a tendência. `;
    if (erroMedio < -3) {
      texto += `Testando o modelo com dados até 2021, ele previu em média <strong>${dec(Math.abs(erroMedio))}% a menos</strong> ` +
        `do que de fato aconteceu em ${anosBt[0]}–${anosBt[anosBt.length - 1]}. Ou seja, a projeção é <strong>conservadora</strong>: o cenário real tende a ser pior.`;
    } else {
      texto += `Testado com dados até 2021, o modelo errou em média ${dec(Math.abs(erroMedio))}% em ${anosBt[0]}–${anosBt[anosBt.length - 1]}.`;
    }
    document.getElementById('nota-modelo').innerHTML = texto;

    desenharLinha(r);
  }

  let metrica = 'casos';   // 'casos' ou 'taxa' (por 100 mil habitantes)

  function desenharLinha(r) {
    if (!window.Chart) return;
    const ehTaxa = metrica === 'taxa';
    const serieHist = ehTaxa ? r.taxa_historico.map(h => ({ ano: h.ano, v: h.taxa })) : r.historico.map(h => ({ ano: h.ano, v: h.casos }));
    const serieProj = ehTaxa ? r.taxa_projecao.map(h => ({ ano: h.ano, v: h.taxa })) : r.projecao.map(h => ({ ano: h.ano, v: h.casos }));
    const ultimo = serieHist[serieHist.length - 1].v;
    const fmt = ehTaxa ? (v => dec(v)) : num;
    const unidade = ehTaxa ? ' por 100 mil hab.' : ' casos';
    const anosProj = serieProj.map(p => p.ano);
    const rotulos = ANOS.concat(anosProj);
    const hist = rotulos.map(a => { const h = serieHist.find(x => x.ano === a); return h ? h.v : null; });
    // a projeção começa no último ano real, para as linhas se encontrarem
    const proj = rotulos.map(a => a === ANO_FINAL ? ultimo : ((serieProj.find(x => x.ano === a) || {}).v ?? null));
    const raioHist = rotulos.map(a => ANOS_ATIPICOS.includes(a) ? 6 : (a === ANO_FINAL ? 5 : 3));
    const corHist = rotulos.map(a => ANOS_ATIPICOS.includes(a) ? COR.atipico : COR.roxoProfundo);

    const dados = {
      labels: rotulos,
      datasets: [
        { label: 'Histórico', data: hist, borderColor: COR.roxoProfundo, backgroundColor: 'rgba(59,30,109,0.08)',
          fill: true, borderWidth: 3, tension: 0.25, pointRadius: raioHist, pointBackgroundColor: corHist,
          pointBorderColor: corHist, spanGaps: false },
        { label: 'Projeção', data: proj, borderColor: COR.roxoMedio, borderDash: [7, 5], borderWidth: 3,
          pointRadius: rotulos.map(a => a === 2034 ? 5 : 0), pointBackgroundColor: COR.roxoMedio, fill: false },
      ],
    };
    const opcoes = {
      interaction: { mode: 'index', intersect: false },
      scales: {
        x: { grid: { display: false }, ticks: { maxRotation: 0, autoSkip: true, autoSkipPadding: 12 } },
        y: { grid: { color: COR.linha }, ticks: { callback: v => fmt(v) } },
      },
      plugins: {
        tooltip: {
          filter: (item) => item.raw !== null && !(item.datasetIndex === 1 && item.label == ANO_FINAL),
          callbacks: {
            label: (c) => {
              const ano = Number(c.label);
              const extra = c.datasetIndex === 0 && ANOS_ATIPICOS.includes(ano) ? ' (ano atípico)' : '';
              return ` ${c.dataset.label}: ${fmt(c.raw)}${unidade}${extra}`;
            },
          },
        },
      },
    };
    if (graficos.linha) { graficos.linha.data = dados; graficos.linha.options = opcoes; graficos.linha.update(); }
    else graficos.linha = new Chart(document.getElementById('grafico-linha'), { type: 'line', data: dados, options: opcoes });
  }

  selRecorte.addEventListener('change', () => renderVisaoGeral(selRecorte.value));
  document.querySelectorAll('.chip-metrica').forEach(btn => btn.addEventListener('click', () => {
    metrica = btn.dataset.metrica;
    document.querySelectorAll('.chip-metrica').forEach(b => b.classList.toggle('ativo', b === btn));
    renderVisaoGeral(selRecorte.value);
  }));

  // =========================================================
  // TELA 2 — Regiões e perfil (comparação entre dois anos)
  // =========================================================
  const selIni = document.getElementById('filtro-ano-ini');
  const selFim = document.getElementById('filtro-ano-fim');
  const COR_REGIAO = {
    'Norte': COR.verdeAzulado, 'Nordeste': COR.roxoMedio, 'Centro-Oeste': '#B08A2E',
    'Sul': '#8C6BC8', 'Sudeste': COR.roxoProfundo,
  };
  const variacao = (a, b) => (b / a - 1) * 100;
  const pctSinal = (v) => (v >= 0 ? '+' : '−') + dec(Math.abs(v)) + '%';

  ANOS.slice(0, -1).forEach(a => selIni.appendChild(new Option(a, a)));
  function preencherAnoFim(ini, desejado) {
    selFim.innerHTML = '';
    ANOS.filter(a => a > ini).forEach(a => selFim.appendChild(new Option(a, a)));
    selFim.value = String(desejado > ini ? desejado : ANO_FINAL);
  }
  selIni.value = String(ANOS[0]);
  preencherAnoFim(ANOS[0], ANO_FINAL);

  function renderRegioes() {
    const ini = Number(selIni.value), fim = Number(selFim.value);
    const periodo = `${ini}–${fim}`;
    const temAtipico = ANOS_ATIPICOS.some(a => a === ini || a === fim);

    // ---- crescimento de cada região no período ----
    const regs = REGIOES.map(n => {
      const a = casosNoAno(n, ini), b = casosNoAno(n, fim);
      return { nome: n, ini: a, fim: b, var: variacao(a, b) };
    }).sort((x, y) => y.var - x.var);
    const brasilVar = variacao(casosNoAno('Brasil', ini), casosNoAno('Brasil', fim));

    // ---- frase-resumo ----
    const maior = regs[0], menor = regs[regs.length - 1];
    let frase = `Entre <strong>${ini}</strong> e <strong>${fim}</strong>, os casos no Brasil variaram <strong>${pctSinal(brasilVar)}</strong>. `;
    if (maior.var <= 0) {
      frase += `Todas as regiões tiveram queda: a menor foi em <strong>${maior.nome}</strong> (${pctSinal(maior.var)}) ` +
        `e a maior em <strong>${menor.nome}</strong> (${pctSinal(menor.var)}).`;
    } else {
      frase += `<strong>${maior.nome}</strong> foi a região que mais cresceu (<strong>${pctSinal(maior.var)}</strong>)`;
      if (menor.var > 0 && maior.var / menor.var >= 1.5) {
        frase += `, um ritmo <strong>${dec(maior.var / menor.var)}× maior</strong> que o de ${menor.nome} (${pctSinal(menor.var)}).`;
      } else if (menor.var < 0) {
        frase += `, enquanto ${menor.nome} teve queda (${pctSinal(menor.var)}).`;
      } else {
        frase += `; ${menor.nome} teve a menor variação (${pctSinal(menor.var)}).`;
      }
    }
    if (temAtipico) frase += ` <em>Atenção: ${ANOS_ATIPICOS.join(', ')} teve subnotificação por causa da pandemia.</em>`;
    document.getElementById('insight-regioes').innerHTML = frase;

    // ---- gráfico 1: barras de crescimento % ----
    document.getElementById('titulo-ranking-cresc').textContent = `Variação por região, ${periodo}`;
    document.getElementById('nota-ranking').textContent = `Linha tracejada: média do Brasil (${pctSinal(brasilVar)}).`;
    if (window.Chart) {
      const dados = {
        labels: regs.map(r => r.nome),
        datasets: [{
          data: regs.map(r => r.var), backgroundColor: regs.map(r => COR_REGIAO[r.nome]),
          borderRadius: 6, maxBarThickness: 34,
        }],
      };
      const linhaBrasil = {
        id: 'linhaBrasil',
        afterDatasetsDraw(chart) {
          const x = chart.scales.x.getPixelForValue(chart.config.options.plugins.linhaBrasil.valor);
          const { top, bottom } = chart.chartArea, ctx = chart.ctx;
          ctx.save(); ctx.strokeStyle = COR.cinza; ctx.setLineDash([5, 4]); ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.moveTo(x, top); ctx.lineTo(x, bottom); ctx.stroke(); ctx.restore();
        },
      };
      const rotulosValor = {
        id: 'rotulosValor',
        afterDatasetsDraw(chart) {
          const ctx = chart.ctx, meta = chart.getDatasetMeta(0);
          ctx.save(); ctx.font = "600 12px 'Inter', sans-serif"; ctx.fillStyle = COR.roxoProfundo; ctx.textBaseline = 'middle';
          meta.data.forEach((bar, i) => {
            const v = chart.data.datasets[0].data[i];
            ctx.textAlign = v >= 0 ? 'left' : 'right';
            ctx.fillText(pctSinal(v), bar.x + (v >= 0 ? 6 : -6), bar.y);
          });
          ctx.restore();
        },
      };
      const maxAbs = Math.max(...regs.map(r => Math.abs(r.var)), Math.abs(brasilVar));
      const opcoes = {
        indexAxis: 'y',
        layout: { padding: { right: 8 } },
        scales: {
          x: { suggestedMin: Math.min(0, ...regs.map(r => r.var)) * 1.25, suggestedMax: maxAbs * 1.25,
               grid: { color: COR.linha }, ticks: { callback: v => dec(v, 0) + '%' } },
          y: { grid: { display: false } },
        },
        plugins: {
          linhaBrasil: { valor: brasilVar },
          tooltip: { callbacks: { label: c => { const r = regs[c.dataIndex]; return ` ${pctSinal(r.var)}: de ${num(r.ini)} para ${num(r.fim)} casos`; } } },
        },
      };
      if (graficos.cresc) { graficos.cresc.destroy(); }
      graficos.cresc = new Chart(document.getElementById('grafico-cresc-regioes'),
        { type: 'bar', data: dados, options: opcoes, plugins: [linhaBrasil, rotulosValor] });
    }

    // ---- gráfico 2: evolução com base 100 no ano inicial ----
    const anosPeriodo = ANOS.filter(a => a >= ini && a <= fim);
    document.getElementById('titulo-indice').textContent = `Evolução das regiões (${ini} = 100)`;
    document.getElementById('nota-indice').textContent =
      `Cada linha começa em 100. Uma linha em 150 significa 50% mais casos que em ${ini}.`;
    if (window.Chart) {
      const dados = {
        labels: anosPeriodo,
        datasets: REGIOES.map(n => {
          const base = casosNoAno(n, ini);
          return {
            label: n, data: anosPeriodo.map(a => casosNoAno(n, a) / base * 100),
            borderColor: COR_REGIAO[n], backgroundColor: COR_REGIAO[n],
            borderWidth: n === maior.nome ? 3.5 : 2, tension: 0.25,
            pointRadius: anosPeriodo.map(a => (a === fim ? 4 : 0)), pointHoverRadius: 5,
          };
        }),
      };
      const opcoes = {
        interaction: { mode: 'index', intersect: false },
        scales: {
          x: { grid: { display: false }, ticks: { maxRotation: 0, autoSkip: true, autoSkipPadding: 10 } },
          y: { grid: { color: COR.linha }, ticks: { callback: v => dec(v, 0) } },
        },
        plugins: {
          legend: { display: true, position: 'bottom', labels: { usePointStyle: true, pointStyle: 'line', padding: 14, boxWidth: 24 } },
          tooltip: {
            itemSort: (a, b) => b.raw - a.raw,
            callbacks: { label: c => ` ${c.dataset.label}: ${dec(c.raw)} (${num(casosNoAno(c.dataset.label, Number(c.label)))} casos)` },
          },
        },
      };
      if (graficos.indice) { graficos.indice.destroy(); }
      graficos.indice = new Chart(document.getElementById('grafico-indice'), { type: 'line', data: dados, options: opcoes });
    }

    // ---- cards comparativos (regiões, estados e sexo) ----
    document.getElementById('periodo-tabela').textContent = `${ini} → ${fim}`;
    const recortesCard = ['Brasil'].concat(regs.map(r => r.nome), ESTADOS, ['Masculino', 'Feminino']);
    const maxVar = Math.max(...recortesCard.map(n => Math.abs(variacao(casosNoAno(n, ini), casosNoAno(n, fim)))));
    document.getElementById('cards-comparativo').innerHTML = recortesCard.map(n => {
      const a = casosNoAno(n, ini), b = casosNoAno(n, fim), v = variacao(a, b);
      const largura = maxVar ? Math.abs(v) / maxVar * 100 : 0;
      const classe = v < 0 ? 'queda' : (v > brasilVar + 0.05 ? 'acima' : 'abaixo');
      const grupo = RECORTES[n].grupo;
      return `<div class="comp ${n === 'Brasil' ? 'comp-brasil' : ''}">
        <div class="comp-topo"><span class="comp-nome">${n}</span><span class="comp-grupo">${grupo === 'Brasil' ? 'Referência' : grupo}</span></div>
        <div class="comp-var ${classe}">${v >= 0 ? '▲' : '▼'} ${pctSinal(v)}</div>
        <div class="comp-barra"><span class="${classe}" style="width:${largura.toFixed(1)}%"></span></div>
        <div class="comp-casos">${num(a)} → <strong>${num(b)}</strong> casos</div>
        <div class="comp-casos">${dec(taxaNoAno(n, ini))} → <strong>${dec(taxaNoAno(n, fim))}</strong> por 100 mil hab.</div>
      </div>`;
    }).join('');

    // ---- perfil por sexo (ano final) + quem cresceu mais ----
    const m = casosNoAno('Masculino', fim), f = casosNoAno('Feminino', fim);
    const vm = variacao(casosNoAno('Masculino', ini), m), vf = variacao(casosNoAno('Feminino', ini), f);
    if (window.Chart) {
      const dados = { labels: ['Masculino', 'Feminino'], datasets: [{ data: [m, f], backgroundColor: [COR.roxoProfundo, COR.verdeAzulado], borderWidth: 2, borderColor: '#fff' }] };
      const opcoes = {
        cutout: '62%',
        plugins: { tooltip: { callbacks: { label: c => ` ${c.label}: ${num(c.raw)} (${dec(c.raw / (m + f) * 100)}%)` } } },
      };
      if (graficos.sexo) { graficos.sexo.data = dados; graficos.sexo.update(); }
      else graficos.sexo = new Chart(document.getElementById('grafico-sexo'), { type: 'doughnut', data: dados, options: opcoes });
    }
    const quemMais = vm >= vf ? 'homens' : 'mulheres';
    document.getElementById('texto-sexo').innerHTML = `
      <div class="sexo-linha"><i style="background:${COR.roxoProfundo}"></i><span>Masculino</span><strong>${dec(m / (m + f) * 100)}%</strong><em>${pctSinal(vm)}</em></div>
      <div class="sexo-linha"><i style="background:${COR.verdeAzulado}"></i><span>Feminino</span><strong>${dec(f / (m + f) * 100)}%</strong><em>${pctSinal(vf)}</em></div>
      <p>Em ${fim}, os homens tiveram <strong>${dec(m / f)}×</strong> mais casos que as mulheres. De ${ini} a ${fim}, os casos entre <strong>${quemMais}</strong> cresceram mais rápido.</p>`;

    // ---- participação no total (ano inicial × final) ----
    if (window.Chart) {
      const totIni = casosNoAno('Brasil', ini), totFim = casosNoAno('Brasil', fim);
      const dados = {
        labels: REGIOES,
        datasets: [
          { label: String(ini), data: REGIOES.map(n => casosNoAno(n, ini) / totIni * 100), backgroundColor: COR.lavanda, borderRadius: 4, maxBarThickness: 22 },
          { label: String(fim), data: REGIOES.map(n => casosNoAno(n, fim) / totFim * 100), backgroundColor: COR.roxoProfundo, borderRadius: 4, maxBarThickness: 22 },
        ],
      };
      const opcoes = {
        scales: { x: { grid: { display: false } }, y: { grid: { color: COR.linha }, ticks: { callback: v => dec(v, 0) + '%' } } },
        plugins: {
          legend: { display: true, position: 'bottom', labels: { usePointStyle: true, pointStyle: 'rectRounded', padding: 14 } },
          tooltip: { callbacks: { label: c => ` ${c.dataset.label}: ${dec(c.raw)}% do Brasil` } },
        },
      };
      if (graficos.participacao) { graficos.participacao.destroy(); }
      graficos.participacao = new Chart(document.getElementById('grafico-participacao'), { type: 'bar', data: dados, options: opcoes });
    }
  }

  selIni.addEventListener('change', () => { preencherAnoFim(Number(selIni.value), Number(selFim.value)); renderRegioes(); });
  selFim.addEventListener('change', renderRegioes);

  // =========================================================
  // TELA 3 — Alertas
  // =========================================================
  let grupoAtivo = 'todos';

  function renderAlertas() {
    const nomes = Object.keys(RECORTES)
      .filter(n => n !== 'Brasil')
      .filter(n => grupoAtivo === 'todos' || RECORTES[n].grupo === grupoAtivo)
      .sort((a, b) => (ORDEM_SELO[RECORTES[a].status] - ORDEM_SELO[RECORTES[b].status])
        || (RECORTES[b].crescimento_pct_ano - RECORTES[a].crescimento_pct_ano));

    // Banner com os recortes críticos (sempre considera todos os recortes geográficos)
    const criticos = Object.keys(RECORTES).filter(n => RECORTES[n].status === 'Crítico' && ['Região', 'Estado'].includes(RECORTES[n].grupo))
      .sort((a, b) => RECORTES[b].crescimento_pct_ano - RECORTES[a].crescimento_pct_ano);
    const banner = document.getElementById('banner-alerta');
    if (criticos.length) {
      const lista = criticos.map(n => `<strong>${n}</strong> (${sinal(RECORTES[n].coeficiente_anual)} casos/ano, R² ${dec(RECORTES[n].r2, 2)})`);
      banner.innerHTML = `<span class="titulo-alerta">⚠ Alerta de tendência crítica</span>
        <p>${lista.join(', ')} crescem rápido e de forma consistente. Prioridade para reforço de testagem, medicamentos e busca ativa.</p>`;
      banner.hidden = false;
    } else banner.hidden = true;

    // Tabela de risco
    document.querySelector('#tabela-risco tbody').innerHTML = nomes.map(n => {
      const r = RECORTES[n];
      return `<tr tabindex="0" data-recorte="${n}" aria-label="Ver gráfico de ${n}">
        <td><strong>${n}</strong><span class="grupo">${r.grupo}</span></td>
        <td class="num">${num(r.casos_ultimo_ano)}</td>
        <td class="num">${dec(r.taxa_ultimo_ano)}</td>
        <td class="num">${sinal(r.coeficiente_anual)}</td>
        <td class="num">${dec(r.crescimento_pct_ano)}%</td>
        <td class="num">${dec(r.r2, 2)}</td>
        <td class="num">${num(valorEm(r.projecao, 2034))}</td>
        <td>${selo(r.status)}</td>
      </tr>`;
    }).join('');
  }

  // clique numa linha -> abre a Tela 1 com aquele recorte
  function abrirRecorte(nome) {
    selRecorte.value = nome;
    renderVisaoGeral(nome);
    location.hash = 'visao-geral';
    window.scrollTo(0, 0);
  }
  const corpoTabela = document.querySelector('#tabela-risco tbody');
  corpoTabela.addEventListener('click', e => { const tr = e.target.closest('tr'); if (tr) abrirRecorte(tr.dataset.recorte); });
  corpoTabela.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { const tr = e.target.closest('tr'); if (tr) { e.preventDefault(); abrirRecorte(tr.dataset.recorte); } }
  });

  document.querySelectorAll('.chip-grupo').forEach(btn => btn.addEventListener('click', () => {
    grupoAtivo = btn.dataset.grupo;
    document.querySelectorAll('.chip-grupo').forEach(b => b.classList.toggle('ativo', b === btn));
    renderAlertas();
  }));

  // Regras e avisos (vêm do script Python)
  document.getElementById('regras-status').innerHTML =
    Object.entries(DADOS.regra_status).map(([s, regra]) => `<li>${selo(s)}<span>${regra.replace(/>=/g, '≥').replace(/\./g, ',')}</span></li>`).join('');
  const avisos = DADOS.avisos_consistencia || [];
  document.getElementById('avisos-dados').innerHTML = avisos.length
    ? avisos.map(a => `<li><strong>${a.ano}</strong> · soma por ${a.recorte}: ${num(a.soma)} × total ${num(a.total)} (${a.diferenca > 0 ? '+' : '−'}${num(Math.abs(a.diferenca))})</li>`).join('')
    : '<li>Nenhuma inconsistência encontrada.</li>';

  // =========================================================
  // TELA 4 — Por que cresce? (fatores associados, dados do TABNET)
  // =========================================================
  function renderFatores() {
    const F = DADOS.fatores;
    if (!F) return;
    const anosF = F.anos, fimF = anosF[anosF.length - 1];
    const idx = (ano) => anosF.indexOf(ano);
    const varPct = (lista, a, b) => (lista[idx(b)] / lista[idx(a)] - 1) * 100;
    const pctS = (v) => (v >= 0 ? '+' : '−') + dec(Math.abs(v), 0) + '%';
    const ind = Object.fromEntries(F.indicadores.map(i => [i.id, i]));
    const varInd = (i) => varPct(i.casos, i.ano_inicial, fimF);
    const varTotal = (ano) => varPct(F.total_casos, ano, fimF);
    const D = F.desfecho, ultDesf = D.cura.length - 1;
    const inc = F.incidencia_casos_novos, incFim = inc[inc.length - 1];
    const meta = F.meta_incidencia_2035;
    const quedaNecessaria = (Math.pow(meta / incFim.taxa, 1 / (2035 - incFim.ano)) - 1) * 100;

    // ---- frase-resumo ----
    document.getElementById('insight-fatores').innerHTML =
      `Os casos cresceram <strong>${pctS(varTotal(anosF[0]))}</strong> de ${anosF[0]} a ${fimF}, mas o ` +
      `<strong>abandono do tratamento</strong> cresceu <strong>${pctS(varInd(ind.abandono))}</strong> e os ` +
      `<strong>retornos após abandono</strong>, <strong>${pctS(varInd(ind.reingresso))}</strong>. ` +
      `Quem interrompe o tratamento continua transmitindo e volta mais tarde ao sistema, o que alimenta a alta. ` +
      `Ao mesmo tempo, a doença avança entre <strong>pessoas em situação de rua</strong> (${pctS(varInd(ind.situacao_rua))} desde ${ind.situacao_rua.ano_inicial}) ` +
      `e <strong>pessoas que usam drogas</strong> (${pctS(varInd(ind.drogas))}), grupos com mais dificuldade de completar os 6 meses de remédio.`;

    // ---- indicadores-chave ----
    const kpi = (rotulo, valor, sub, classe = '') =>
      `<div class="kpi ${classe}"><span class="kpi-rotulo">${rotulo}</span><span class="kpi-valor">${valor}</span><span class="kpi-sub">${sub}</span></div>`;
    document.getElementById('kpis-fatores').innerHTML = [
      kpi(`Incidência ${incFim.ano}`, dec(incFim.taxa), `casos novos por 100 mil hab. · meta para 2035: menos de ${dec(meta, 0)}`, 'kpi-alerta'),
      kpi(`Cura (${anosF[ultDesf]})`, dec(D.cura[ultDesf]) + '%', `era ${dec(D.cura[0])}% em ${anosF[0]} · meta da OMS: ${D.metas_oms.cura}%`, 'kpi-alerta'),
      kpi(`Abandono (${anosF[ultDesf]})`, dec(D.abandono[ultDesf]) + '%', `era ${dec(D.abandono[0])}% em ${anosF[0]} · aceitável: até ${D.metas_oms.abandono}%`, 'kpi-alerta'),
      kpi(`Óbitos por TB (${fimF})`, num(ind.obito_tb.casos[idx(fimF)]), `${pctS(varInd(ind.obito_tb))} desde ${anosF[0]} entre os casos notificados`, 'kpi-alerta'),
    ].join('');

    // ---- gráfico: variação de cada fator × variação do total ----
    const lista = F.indicadores.slice().sort((a, b) => varInd(b) - varInd(a));
    const refTotal = varTotal(anosF[0]);
    document.getElementById('nota-fatores').innerHTML =
      `Linha tracejada: crescimento do total de casos (${pctS(refTotal)} desde ${anosF[0]}; ${pctS(varTotal(2015))} desde 2015). ` +
      `Barras roxas cresceram mais que o total. Campos de vulnerabilidade só são bem preenchidos a partir de 2015, por isso comparamos a partir desse ano.`;
    if (window.Chart) {
      const vals = lista.map(varInd);
      const cores = lista.map(i => (varInd(i) > varTotal(i.ano_inicial) ? (i.tipo === 'tratamento' ? COR.roxoProfundo : COR.roxoMedio) : COR.lavanda));
      const linhaRef = {
        id: 'linhaRef',
        afterDatasetsDraw(chart) {
          const x = chart.scales.x.getPixelForValue(refTotal);
          const { top, bottom } = chart.chartArea, ctx = chart.ctx;
          ctx.save(); ctx.strokeStyle = COR.cinza; ctx.setLineDash([5, 4]); ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.moveTo(x, top); ctx.lineTo(x, bottom); ctx.stroke();
          ctx.setLineDash([]); ctx.fillStyle = COR.cinza; ctx.font = "600 11px 'Inter', sans-serif"; ctx.textAlign = 'left';
          ctx.textAlign = 'center'; ctx.fillText('total de casos', x, top - 8);
          ctx.restore();
        },
      };
      const rotulos = {
        id: 'rotulosFatores',
        afterDatasetsDraw(chart) {
          const ctx = chart.ctx, meta = chart.getDatasetMeta(0);
          ctx.save(); ctx.font = "600 12px 'Inter', sans-serif"; ctx.fillStyle = COR.roxoProfundo; ctx.textBaseline = 'middle';
          meta.data.forEach((bar, i) => {
            const v = vals[i];
            ctx.textAlign = v >= 0 ? 'left' : 'right';
            const txt = chart.width < 520 ? pctS(v) : `${pctS(v)} desde ${lista[i].ano_inicial}`;
            ctx.fillText(txt, bar.x + (v >= 0 ? 6 : -6), bar.y);
          });
          ctx.restore();
        },
      };
      const dados = { labels: lista.map(i => i.nome), datasets: [{ data: vals, backgroundColor: cores, borderRadius: 6, maxBarThickness: 26 }] };
      const opcoes = {
        indexAxis: 'y',
        layout: { padding: { right: 12, top: 18 } },
        scales: {
          x: { suggestedMin: Math.min(0, ...vals) * 1.2, suggestedMax: Math.max(...vals) * 1.45,
               grid: { color: COR.linha }, ticks: { callback: v => dec(v, 0) + '%' } },
          y: { grid: { display: false }, ticks: { callback(v) {
            const nome = this.getLabelForValue(v);
            if (this.chart.width >= 520 || nome.length <= 16) return nome;
            const p = nome.split(' '), meio = Math.ceil(p.length / 2);   // quebra em 2 linhas no celular
            return [p.slice(0, meio).join(' '), p.slice(meio).join(' ')];
          } } },
        },
        plugins: {
          tooltip: { callbacks: { label: c => { const i = lista[c.dataIndex];
            return ` ${num(i.casos[idx(i.ano_inicial)])} casos em ${i.ano_inicial} → ${num(i.casos[idx(fimF)])} em ${fimF}`; } } },
        },
      };
      if (graficos.fatores) graficos.fatores.destroy();
      graficos.fatores = new Chart(document.getElementById('grafico-fatores'),
        { type: 'bar', data: dados, options: opcoes, plugins: [linhaRef, rotulos] });
    }

    // ---- gráfico: desfecho do tratamento ----
    document.getElementById('nota-desfecho').innerHTML =
      `A cura caiu de ${dec(D.cura[0])}% para ${dec(D.cura[ultDesf])}% e o abandono subiu de ${dec(D.abandono[0])}% para ${dec(D.abandono[ultDesf])}%. ` +
      `Linhas finas: metas (cura ≥ ${D.metas_oms.cura}%, abandono ≤ ${D.metas_oms.abandono}%). ${fimF} ainda tem ${dec(D.sem_informacao[ultDesf])}% de tratamentos sem desfecho registrado.`;
    if (window.Chart) {
      const serie = (label, data, cor, extra = {}) => ({ label, data, borderColor: cor, backgroundColor: cor, borderWidth: 3, tension: 0.25, pointRadius: 2.5, ...extra });
      const metaLinha = (label, valor, cor) => ({ label, data: anosF.map(() => valor), borderColor: cor, borderWidth: 1.2, borderDash: [4, 4], pointRadius: 0, pointHitRadius: 0 });
      const dados = {
        labels: anosF,
        datasets: [
          serie('Cura', D.cura, COR.verdeAzulado),
          serie('Abandono', D.abandono, '#C0392B'),
          serie('Óbito por TB', D.obito_tb, COR.roxoProfundo),
          metaLinha('Meta de cura', D.metas_oms.cura, COR.verdeAzulado),
          metaLinha('Limite de abandono', D.metas_oms.abandono, '#C0392B'),
        ],
      };
      const opcoes = {
        interaction: { mode: 'index', intersect: false },
        scales: {
          x: { grid: { display: false }, ticks: { maxRotation: 0, autoSkip: true, autoSkipPadding: 10 } },
          y: { min: 0, max: 100, grid: { color: COR.linha }, ticks: { callback: v => v + '%' } },
        },
        plugins: {
          legend: { display: true, position: 'bottom', labels: { usePointStyle: true, pointStyle: 'line', padding: 12, boxWidth: 22,
            filter: (item) => item.datasetIndex < 3 } },
          tooltip: { filter: (item) => item.datasetIndex < 3, callbacks: { label: c => ` ${c.dataset.label}: ${dec(c.raw)}%` } },
        },
      };
      if (graficos.desfecho) graficos.desfecho.destroy();
      graficos.desfecho = new Chart(document.getElementById('grafico-desfecho'), { type: 'line', data: dados, options: opcoes });
    }

    // ---- gráfico: incidência e caminho até a meta ----
    document.getElementById('nota-meta').innerHTML =
      `O Brasil quer chegar a menos de ${dec(meta, 0)} casos novos por 100 mil habitantes até 2035. Saindo de ${dec(incFim.taxa)} em ${incFim.ano}, ` +
      `seria preciso <strong>cair ${dec(Math.abs(quedaNecessaria))}% ao ano</strong>, mas a taxa subiu nos últimos anos.`;
    if (window.Chart) {
      const anosMeta = anosF.concat(Array.from({ length: 2035 - fimF }, (_, k) => fimF + k + 1));
      const real = anosMeta.map(a => (inc.find(x => x.ano === a) || {}).taxa ?? null);
      const caminho = anosMeta.map(a => (a < incFim.ano ? null : incFim.taxa * Math.pow(1 + quedaNecessaria / 100, a - incFim.ano)));
      const dados = {
        labels: anosMeta,
        datasets: [
          { label: 'Incidência real', data: real, borderColor: COR.roxoProfundo, backgroundColor: 'rgba(59,30,109,0.08)', fill: true,
            borderWidth: 3, tension: 0.25, pointRadius: anosMeta.map(a => (ANOS_ATIPICOS.includes(a) ? 5 : 2.5)),
            pointBackgroundColor: anosMeta.map(a => (ANOS_ATIPICOS.includes(a) ? COR.atipico : COR.roxoProfundo)) },
          { label: 'Caminho necessário até a meta', data: caminho, borderColor: COR.verdeAzulado, borderDash: [7, 5], borderWidth: 2.5,
            pointRadius: anosMeta.map(a => (a === 2035 ? 5 : 0)), pointBackgroundColor: COR.verdeAzulado, fill: false },
        ],
      };
      const opcoes = {
        interaction: { mode: 'index', intersect: false },
        scales: {
          x: { grid: { display: false }, ticks: { maxRotation: 0, autoSkip: true, autoSkipPadding: 10 } },
          y: { min: 0, grid: { color: COR.linha }, ticks: { callback: v => dec(v, 0) } },
        },
        plugins: {
          legend: { display: true, position: 'bottom', labels: { usePointStyle: true, pointStyle: 'line', padding: 12, boxWidth: 22 } },
          tooltip: { filter: (item) => item.raw !== null && !(item.datasetIndex === 1 && Number(item.label) === incFim.ano),
            callbacks: { label: c => ` ${c.dataset.label}: ${dec(c.raw)} por 100 mil` } },
        },
      };
      if (graficos.meta) graficos.meta.destroy();
      graficos.meta = new Chart(document.getElementById('grafico-meta'), { type: 'line', data: dados, options: opcoes });
    }

    // ---- cards: peso de cada grupo nos casos ----
    const maxVar = Math.max(...F.indicadores.map(i => Math.abs(varInd(i))));
    document.getElementById('cards-fatores').innerHTML = lista.map(i => {
      const a = i.pct_dos_casos[idx(i.ano_inicial)], b = i.pct_dos_casos[idx(fimF)], v = varInd(i);
      const classe = v > varTotal(i.ano_inicial) ? 'acima' : (v < 0 ? 'queda' : 'abaixo');
      return `<div class="comp">
        <div class="comp-topo"><span class="comp-nome">${i.nome}</span><span class="comp-grupo">${i.tipo === 'tratamento' ? 'Tratamento' : 'Vulnerabilidade'}</span></div>
        <div class="comp-var ${classe}">${v >= 0 ? '▲' : '▼'} ${pctS(v)}</div>
        <div class="comp-barra"><span class="${classe}" style="width:${(Math.abs(v) / maxVar * 100).toFixed(1)}%"></span></div>
        <div class="comp-casos">${dec(a)}% → <strong>${dec(b)}%</strong> dos casos (${i.ano_inicial} → ${fimF})</div>
        <div class="comp-casos">${i.descricao}</div>
      </div>`;
    }).join('');

    // ---- cuidados de leitura ----
    document.getElementById('nota-fatores-leitura').innerHTML =
      `<strong>Como ler esta tela:</strong> os números mostram <strong>associação, não causa</strong>. Parte da alta também vem de ` +
      `<strong>diagnosticar melhor</strong>: com mais testes (como o teste rápido molecular e o de HIV), aparecem casos que antes passavam despercebidos. ` +
      `Fonte: ${F.fonte}. Os totais do TABNET são de uma consulta mais recente e podem diferir um pouco da base das outras telas.`;
  }

  // =========================================================
  // Início
  // =========================================================
  // espera as fontes carregarem para os gráficos medirem os rótulos certo
  function iniciar() {
    renderVisaoGeral('Brasil');
    renderRegioes();
    renderAlertas();
    renderFatores();
    mostrarTela();
  }
  let iniciado = false;
  const uma = () => { if (!iniciado) { iniciado = true; iniciar(); } };
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(uma);
    setTimeout(uma, 1500);   // se as fontes demorarem (internet lenta), segue sem elas
  } else uma();
})();
