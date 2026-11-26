# Identidade visual — AlertaTB

<img src="logo.svg" alt="Logo AlertaTB" width="300">

## Conceito
O símbolo é uma **linha de pulso** (monitoramento de saúde) que termina numa **seta para cima** (tendência de alta, projeção). Resume o que o AlertaTB faz: acompanha os casos e avisa para onde eles estão indo.

O **roxo** vem do documento do Checkpoint 1 e conversa com a identidade do FMU TECH Inovação. Por isso o projeto fica reconhecível ao lado do material oficial do desafio.

## Arquivos
| Arquivo | Uso |
|---|---|
| [`logo.svg`](logo.svg) | Logo principal, em fundo claro |
| [`logo-negativo.svg`](logo-negativo.svg) | Logo em fundo escuro ou roxo |
| [`icone.svg`](icone.svg) | Só o símbolo: favicon do site, avatar, ícone de app |

> No Canva: importe o SVG ou recrie com as cores e fontes abaixo.

## Paleta de cores

### Marca
| Cor | HEX | Uso |
|---|---|---|
| 🟪 **Roxo Profundo** | `#3B1E6D` | Cor principal: cabeçalhos, títulos, símbolo, série histórica nos gráficos |
| 🟣 **Roxo Médio** | `#6A3EA1` | Destaques, botões, links, "TB" do logo |
| 🔮 **Lavanda** | `#D5C6F5` | Seta do símbolo, bordas, barras secundárias |
| ⬜ **Névoa** | `#F3EFFA` | Fundos de cards e seções |
| 🩵 **Verde-azulado** | `#0E7C7B` | Segunda série nos gráficos (ex.: Feminino), contraste com o roxo |
| ⬛ **Grafite** | `#2A2238` | Texto principal |
| ◽ **Cinza** | `#6B6478` | Texto secundário, legendas |

### Selos de alerta
São cores de **status**, separadas das cores da marca. Use apenas nos alertas.

| Selo | HEX | Quando usar |
|---|---|---|
| 🔴 **Crítico** | `#C0392B` | Crescimento ≥ 2%/ano **e** R² ≥ 0,80 |
| 🟠 **Atenção** | `#D9822B` | Crescimento ≥ 1,5%/ano **ou** R² ≥ 0,80 |
| 🟢 **Moderado** | `#2E8B57` | Demais casos |

### Gráficos
- **Série histórica:** linha contínua em Roxo Profundo `#3B1E6D`
- **Projeção:** linha **tracejada** em Roxo Médio `#6A3EA1`
- **2020 (pandemia):** ponto destacado em cinza com a legenda "ano atípico"
- **Masculino × Feminino:** Roxo Profundo × Verde-azulado

## Tipografia
| Papel | Fonte | Peso | Onde |
|---|---|---|---|
| Títulos e números grandes (KPIs) | **Poppins** | 600–700 | Logo, títulos, cards de indicador |
| Texto, tabelas e filtros | **Inter** | 400–600 | Corpo do site, legendas, tabelas |

As duas são gratuitas no [Google Fonts](https://fonts.google.com) e estão disponíveis no Canva.
No **Power BI**, que não tem essas fontes, use **Segoe UI** (Semibold nos títulos).

Para o site:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet">
```
```css
:root {
  --roxo-profundo: #3B1E6D;
  --roxo-medio:    #6A3EA1;
  --lavanda:       #D5C6F5;
  --nevoa:         #F3EFFA;
  --verde-azulado: #0E7C7B;
  --grafite:       #2A2238;
  --cinza:         #6B6478;
  --critico:       #C0392B;
  --atencao:       #D9822B;
  --moderado:      #2E8B57;
  --fonte-titulo:  'Poppins', 'Segoe UI', sans-serif;
  --fonte-texto:   'Inter', 'Segoe UI', sans-serif;
}
```

## Regras rápidas
- Usar sempre a mesma paleta no **site, Power BI, slides do pitch e vídeo**. A banca avalia "aplicada de forma consistente".
- Não distorcer o logo nem trocar as cores dele.
- Fundo escuro → `logo-negativo.svg`.
- Vermelho, laranja e verde **só nos selos de alerta**, nunca como cor decorativa.
