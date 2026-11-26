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
  // Navegação entre telas (#visao-geral, #regioes, #alertas)
  // =========================================================
  const TELAS = ['visao-geral', 'regioes', 'alertas'];
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

    document.getElementById('titulo-grafico').textContent = `${nome}: evolução histórica e projeção até 2034`;
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

  function desenharLinha(r) {
    if (!window.Chart) return;
    const anosProj = r.projecao.map(p => p.ano);
    const rotulos = ANOS.concat(anosProj);
    const hist = rotulos.map(a => { const h = r.historico.find(x => x.ano === a); return h ? h.casos : null; });
    // a projeção começa no último ano real, para as linhas se encontrarem
    const proj = rotulos.map(a => a === ANO_FINAL ? r.casos_ultimo_ano : (valorEm(r.projecao, a) ?? null));
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
        y: { grid: { color: COR.linha }, ticks: { callback: v => num(v) } },
      },
      plugins: {
        tooltip: {
          filter: (item) => item.raw !== null && !(item.datasetIndex === 1 && item.label == ANO_FINAL),
          callbacks: {
            label: (c) => {
              const ano = Number(c.label);
              const extra = c.datasetIndex === 0 && ANOS_ATIPICOS.includes(ano) ? ' (ano atípico)' : '';
              return ` ${c.dataset.label}: ${num(c.raw)} casos${extra}`;
            },
          },
        },
      },
    };
    if (graficos.linha) { graficos.linha.data = dados; graficos.linha.update(); }
    else graficos.linha = new Chart(document.getElementById('grafico-linha'), { type: 'line', data: dados, options: opcoes });
  }

  selRecorte.addEventListener('change', () => renderVisaoGeral(selRecorte.value));

  // =========================================================
  // TELA 2 — Regiões e perfil
  // =========================================================
  const selAno = document.getElementById('filtro-ano');
  ANOS.slice().reverse().forEach(a => selAno.appendChild(new Option(a, a)));

  function renderRegioes(ano) {
    const total = casosNoAno('Brasil', ano);

    // Barras por região (ordenadas)
    const regs = REGIOES.map(n => ({ nome: n, casos: casosNoAno(n, ano) })).sort((a, b) => b.casos - a.casos);
    const coresBarras = [COR.roxoProfundo, COR.roxoMedio, COR.verdeAzulado, '#8C6BC8', COR.lavanda];
    if (window.Chart) {
      const dados = {
        labels: regs.map(r => r.nome),
        datasets: [{ data: regs.map(r => r.casos), backgroundColor: coresBarras, borderRadius: 6, barThickness: 'flex', maxBarThickness: 34 }],
      };
      const opcoes = {
        indexAxis: 'y',
        scales: { x: { grid: { color: COR.linha }, ticks: { callback: v => num(v) } }, y: { grid: { display: false } } },
        plugins: { tooltip: { callbacks: { label: c => ` ${num(c.raw)} casos (${dec(c.raw / total * 100)}% do Brasil)` } } },
      };
      if (graficos.regioes) { graficos.regioes.data = dados; graficos.regioes.update(); }
      else graficos.regioes = new Chart(document.getElementById('grafico-regioes'), { type: 'bar', data: dados, options: opcoes });
    }

    // Rosca por sexo
    const m = casosNoAno('Masculino', ano), f = casosNoAno('Feminino', ano);
    const pm = m / (m + f) * 100;
    if (window.Chart) {
      const dados = { labels: ['Masculino', 'Feminino'], datasets: [{ data: [m, f], backgroundColor: [COR.roxoProfundo, COR.verdeAzulado], borderWidth: 2, borderColor: '#fff' }] };
      const opcoes = {
        cutout: '62%',
        plugins: {
          legend: { display: true, position: 'right', labels: { usePointStyle: true, pointStyle: 'circle', padding: 16 } },
          tooltip: { callbacks: { label: c => ` ${c.label}: ${num(c.raw)} (${dec(c.raw / (m + f) * 100)}%)` } },
        },
      };
      if (graficos.sexo) { graficos.sexo.data = dados; graficos.sexo.update(); }
      else graficos.sexo = new Chart(document.getElementById('grafico-sexo'), { type: 'doughnut', data: dados, options: opcoes });
    }
    document.getElementById('texto-sexo').innerHTML =
      `Em ${ano}, <strong>${dec(pm)}%</strong> dos casos foram em homens: <strong>${dec(m / f, 1)}×</strong> mais que em mulheres.`;

    // Cards dos estados
    document.getElementById('cards-estados').innerHTML = ESTADOS.map(n => {
      const r = RECORTES[n];
      const c = casosNoAno(n, ano);
      return `<div class="estado">
        <div class="estado-topo"><span class="estado-nome">${n}</span>${selo(r.status)}</div>
        <div class="estado-dados">
          <div><span class="r">Casos em ${ano}</span><span class="v">${num(c)}</span></div>
          <div><span class="r">Participação no Brasil</span><span class="v">${dec(c / total * 100)}%</span></div>
          <div><span class="r">Novos casos/ano</span><span class="v">${sinal(r.coeficiente_anual)}</span></div>
          <div><span class="r">Projeção 2034 · R²</span><span class="v">${num(valorEm(r.projecao, 2034))} · ${dec(r.r2, 2)}</span></div>
        </div>
      </div>`;
    }).join('');
  }

  selAno.addEventListener('change', () => renderRegioes(Number(selAno.value)));

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

  document.querySelectorAll('.chip').forEach(btn => btn.addEventListener('click', () => {
    grupoAtivo = btn.dataset.grupo;
    document.querySelectorAll('.chip').forEach(b => b.classList.toggle('ativo', b === btn));
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
  // Início
  // =========================================================
  // espera as fontes carregarem para os gráficos medirem os rótulos certo
  function iniciar() {
    renderVisaoGeral('Brasil');
    renderRegioes(ANO_FINAL);
    renderAlertas();
    mostrarTela();
  }
  let iniciado = false;
  const uma = () => { if (!iniciado) { iniciado = true; iniciar(); } };
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(uma);
    setTimeout(uma, 1500);   // se as fontes demorarem (internet lenta), segue sem elas
  } else uma();
})();
