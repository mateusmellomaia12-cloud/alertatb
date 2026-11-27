// Gerado por analysis/regressao.py — não editar à mão
window.DADOS = {
  "fonte": "SINAN/DATASUS — Ministério da Saúde",
  "fonte_populacao": "IBGE — Projeções da População, Revisão 2024",
  "periodo_historico": [
    2013,
    2024
  ],
  "anos_excluidos_do_ajuste": [
    2020
  ],
  "regra_status": {
    "Crítico": "crescimento >= 2.0%/ano e R² >= 0.8",
    "Atenção": "crescimento >= 1.5%/ano ou R² >= 0.8",
    "Moderado": "demais casos"
  },
  "avisos_consistencia": [],
  "recortes": {
    "Brasil": {
      "grupo": "Brasil",
      "historico": [
        {
          "ano": 2013,
          "casos": 86212
        },
        {
          "ano": 2014,
          "casos": 85216
        },
        {
          "ano": 2015,
          "casos": 85462
        },
        {
          "ano": 2016,
          "casos": 86210
        },
        {
          "ano": 2017,
          "casos": 90295
        },
        {
          "ano": 2018,
          "casos": 94735
        },
        {
          "ano": 2019,
          "casos": 95849
        },
        {
          "ano": 2020,
          "casos": 86160
        },
        {
          "ano": 2021,
          "casos": 91415
        },
        {
          "ano": 2022,
          "casos": 103382
        },
        {
          "ano": 2023,
          "casos": 109919
        },
        {
          "ano": 2024,
          "casos": 113012
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 110824
        },
        {
          "ano": 2026,
          "casos": 113254
        },
        {
          "ano": 2027,
          "casos": 115683
        },
        {
          "ano": 2028,
          "casos": 118113
        },
        {
          "ano": 2029,
          "casos": 120542
        },
        {
          "ano": 2030,
          "casos": 122972
        },
        {
          "ano": 2031,
          "casos": 125401
        },
        {
          "ano": 2032,
          "casos": 127831
        },
        {
          "ano": 2033,
          "casos": 130260
        },
        {
          "ano": 2034,
          "casos": 132690
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 43.3
        },
        {
          "ano": 2014,
          "taxa": 42.4
        },
        {
          "ano": 2015,
          "taxa": 42.2
        },
        {
          "ano": 2016,
          "taxa": 42.3
        },
        {
          "ano": 2017,
          "taxa": 44.0
        },
        {
          "ano": 2018,
          "taxa": 45.9
        },
        {
          "ano": 2019,
          "taxa": 46.1
        },
        {
          "ano": 2020,
          "taxa": 41.2
        },
        {
          "ano": 2021,
          "taxa": 43.5
        },
        {
          "ano": 2022,
          "taxa": 49.0
        },
        {
          "ano": 2023,
          "taxa": 51.9
        },
        {
          "ano": 2024,
          "taxa": 53.2
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 51.9
        },
        {
          "ano": 2026,
          "taxa": 52.9
        },
        {
          "ano": 2027,
          "taxa": 53.8
        },
        {
          "ano": 2028,
          "taxa": 54.8
        },
        {
          "ano": 2029,
          "taxa": 55.7
        },
        {
          "ano": 2030,
          "taxa": 56.7
        },
        {
          "ano": 2031,
          "taxa": 57.6
        },
        {
          "ano": 2032,
          "taxa": 58.6
        },
        {
          "ano": 2033,
          "taxa": 59.6
        },
        {
          "ano": 2034,
          "taxa": 60.6
        }
      ],
      "taxa_ultimo_ano": 53.2,
      "variacao_taxa_pct": 22.9,
      "populacao_ultimo_ano": 212583750,
      "coeficiente_anual": 2429.5,
      "intercepto": -4809003.9,
      "r2": 0.835,
      "crescimento_pct_ano": 2.15,
      "crescimento_total_pct": 31.1,
      "casos_ultimo_ano": 113012,
      "backtest_erro_pct": {
        "2022": -7.0,
        "2023": -11.4,
        "2024": -12.7
      },
      "status": "Crítico"
    },
    "Norte": {
      "grupo": "Região",
      "historico": [
        {
          "ano": 2013,
          "casos": 8877
        },
        {
          "ano": 2014,
          "casos": 8776
        },
        {
          "ano": 2015,
          "casos": 9013
        },
        {
          "ano": 2016,
          "casos": 9365
        },
        {
          "ano": 2017,
          "casos": 10152
        },
        {
          "ano": 2018,
          "casos": 10413
        },
        {
          "ano": 2019,
          "casos": 11672
        },
        {
          "ano": 2020,
          "casos": 10479
        },
        {
          "ano": 2021,
          "casos": 11546
        },
        {
          "ano": 2022,
          "casos": 13142
        },
        {
          "ano": 2023,
          "casos": 13919
        },
        {
          "ano": 2024,
          "casos": 15199
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 14869
        },
        {
          "ano": 2026,
          "casos": 15437
        },
        {
          "ano": 2027,
          "casos": 16005
        },
        {
          "ano": 2028,
          "casos": 16574
        },
        {
          "ano": 2029,
          "casos": 17142
        },
        {
          "ano": 2030,
          "casos": 17710
        },
        {
          "ano": 2031,
          "casos": 18278
        },
        {
          "ano": 2032,
          "casos": 18847
        },
        {
          "ano": 2033,
          "casos": 19415
        },
        {
          "ano": 2034,
          "casos": 19983
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 52.8
        },
        {
          "ano": 2014,
          "taxa": 51.5
        },
        {
          "ano": 2015,
          "taxa": 52.3
        },
        {
          "ano": 2016,
          "taxa": 53.7
        },
        {
          "ano": 2017,
          "taxa": 57.7
        },
        {
          "ano": 2018,
          "taxa": 58.6
        },
        {
          "ano": 2019,
          "taxa": 64.9
        },
        {
          "ano": 2020,
          "taxa": 57.8
        },
        {
          "ano": 2021,
          "taxa": 63.2
        },
        {
          "ano": 2022,
          "taxa": 71.4
        },
        {
          "ano": 2023,
          "taxa": 75.1
        },
        {
          "ano": 2024,
          "taxa": 81.4
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 79.1
        },
        {
          "ano": 2026,
          "taxa": 81.6
        },
        {
          "ano": 2027,
          "taxa": 84.0
        },
        {
          "ano": 2028,
          "taxa": 86.4
        },
        {
          "ano": 2029,
          "taxa": 88.8
        },
        {
          "ano": 2030,
          "taxa": 91.2
        },
        {
          "ano": 2031,
          "taxa": 93.6
        },
        {
          "ano": 2032,
          "taxa": 96.0
        },
        {
          "ano": 2033,
          "taxa": 98.4
        },
        {
          "ano": 2034,
          "taxa": 100.9
        }
      ],
      "taxa_ultimo_ano": 81.4,
      "variacao_taxa_pct": 54.2,
      "populacao_ultimo_ano": 18669345,
      "coeficiente_anual": 568.3,
      "intercepto": -1135859.0,
      "r2": 0.935,
      "crescimento_pct_ano": 3.74,
      "crescimento_total_pct": 71.2,
      "casos_ultimo_ano": 15199,
      "backtest_erro_pct": {
        "2022": -7.2,
        "2023": -9.4,
        "2024": -14.3
      },
      "status": "Crítico"
    },
    "Nordeste": {
      "grupo": "Região",
      "historico": [
        {
          "ano": 2013,
          "casos": 23073
        },
        {
          "ano": 2014,
          "casos": 22390
        },
        {
          "ano": 2015,
          "casos": 22202
        },
        {
          "ano": 2016,
          "casos": 22545
        },
        {
          "ano": 2017,
          "casos": 23815
        },
        {
          "ano": 2018,
          "casos": 25230
        },
        {
          "ano": 2019,
          "casos": 25038
        },
        {
          "ano": 2020,
          "casos": 22305
        },
        {
          "ano": 2021,
          "casos": 23836
        },
        {
          "ano": 2022,
          "casos": 27217
        },
        {
          "ano": 2023,
          "casos": 27917
        },
        {
          "ano": 2024,
          "casos": 28126
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 28196
        },
        {
          "ano": 2026,
          "casos": 28727
        },
        {
          "ano": 2027,
          "casos": 29258
        },
        {
          "ano": 2028,
          "casos": 29789
        },
        {
          "ano": 2029,
          "casos": 30320
        },
        {
          "ano": 2030,
          "casos": 30851
        },
        {
          "ano": 2031,
          "casos": 31382
        },
        {
          "ano": 2032,
          "casos": 31913
        },
        {
          "ano": 2033,
          "casos": 32444
        },
        {
          "ano": 2034,
          "casos": 32975
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 42.3
        },
        {
          "ano": 2014,
          "taxa": 40.8
        },
        {
          "ano": 2015,
          "taxa": 40.2
        },
        {
          "ano": 2016,
          "taxa": 40.6
        },
        {
          "ano": 2017,
          "taxa": 42.7
        },
        {
          "ano": 2018,
          "taxa": 45.1
        },
        {
          "ano": 2019,
          "taxa": 44.5
        },
        {
          "ano": 2020,
          "taxa": 39.5
        },
        {
          "ano": 2021,
          "taxa": 42.0
        },
        {
          "ano": 2022,
          "taxa": 47.9
        },
        {
          "ano": 2023,
          "taxa": 49.0
        },
        {
          "ano": 2024,
          "taxa": 49.2
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 49.3
        },
        {
          "ano": 2026,
          "taxa": 50.1
        },
        {
          "ano": 2027,
          "taxa": 50.9
        },
        {
          "ano": 2028,
          "taxa": 51.7
        },
        {
          "ano": 2029,
          "taxa": 52.6
        },
        {
          "ano": 2030,
          "taxa": 53.4
        },
        {
          "ano": 2031,
          "taxa": 54.2
        },
        {
          "ano": 2032,
          "taxa": 55.1
        },
        {
          "ano": 2033,
          "taxa": 56.0
        },
        {
          "ano": 2034,
          "taxa": 56.8
        }
      ],
      "taxa_ultimo_ano": 49.2,
      "variacao_taxa_pct": 16.3,
      "populacao_ultimo_ano": 57112096,
      "coeficiente_anual": 531.0,
      "intercepto": -1047114.6,
      "r2": 0.805,
      "crescimento_pct_ano": 1.89,
      "crescimento_total_pct": 21.9,
      "casos_ultimo_ano": 28126,
      "backtest_erro_pct": {
        "2022": -7.7,
        "2023": -9.0,
        "2024": -8.6
      },
      "status": "Atenção"
    },
    "Centro-Oeste": {
      "grupo": "Região",
      "historico": [
        {
          "ano": 2013,
          "casos": 4529
        },
        {
          "ano": 2014,
          "casos": 4295
        },
        {
          "ano": 2015,
          "casos": 4018
        },
        {
          "ano": 2016,
          "casos": 4076
        },
        {
          "ano": 2017,
          "casos": 4162
        },
        {
          "ano": 2018,
          "casos": 4585
        },
        {
          "ano": 2019,
          "casos": 4640
        },
        {
          "ano": 2020,
          "casos": 4195
        },
        {
          "ano": 2021,
          "casos": 4358
        },
        {
          "ano": 2022,
          "casos": 5038
        },
        {
          "ano": 2023,
          "casos": 5695
        },
        {
          "ano": 2024,
          "casos": 5568
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 5437
        },
        {
          "ano": 2026,
          "casos": 5558
        },
        {
          "ano": 2027,
          "casos": 5679
        },
        {
          "ano": 2028,
          "casos": 5800
        },
        {
          "ano": 2029,
          "casos": 5921
        },
        {
          "ano": 2030,
          "casos": 6043
        },
        {
          "ano": 2031,
          "casos": 6164
        },
        {
          "ano": 2032,
          "casos": 6285
        },
        {
          "ano": 2033,
          "casos": 6406
        },
        {
          "ano": 2034,
          "casos": 6527
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 30.2
        },
        {
          "ano": 2014,
          "taxa": 28.3
        },
        {
          "ano": 2015,
          "taxa": 26.1
        },
        {
          "ano": 2016,
          "taxa": 26.1
        },
        {
          "ano": 2017,
          "taxa": 26.3
        },
        {
          "ano": 2018,
          "taxa": 28.7
        },
        {
          "ano": 2019,
          "taxa": 28.6
        },
        {
          "ano": 2020,
          "taxa": 25.6
        },
        {
          "ano": 2021,
          "taxa": 26.3
        },
        {
          "ano": 2022,
          "taxa": 30.1
        },
        {
          "ano": 2023,
          "taxa": 33.7
        },
        {
          "ano": 2024,
          "taxa": 32.6
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 31.5
        },
        {
          "ano": 2026,
          "taxa": 31.9
        },
        {
          "ano": 2027,
          "taxa": 32.3
        },
        {
          "ano": 2028,
          "taxa": 32.7
        },
        {
          "ano": 2029,
          "taxa": 33.1
        },
        {
          "ano": 2030,
          "taxa": 33.5
        },
        {
          "ano": 2031,
          "taxa": 33.9
        },
        {
          "ano": 2032,
          "taxa": 34.4
        },
        {
          "ano": 2033,
          "taxa": 34.8
        },
        {
          "ano": 2034,
          "taxa": 35.2
        }
      ],
      "taxa_ultimo_ano": 32.6,
      "variacao_taxa_pct": 7.9,
      "populacao_ultimo_ano": 17071595,
      "coeficiente_anual": 121.1,
      "intercepto": -239842.2,
      "r2": 0.629,
      "crescimento_pct_ano": 2.18,
      "crescimento_total_pct": 22.9,
      "casos_ultimo_ano": 5568,
      "backtest_erro_pct": {
        "2022": -11.5,
        "2023": -21.3,
        "2024": -19.0
      },
      "status": "Atenção"
    },
    "Sul": {
      "grupo": "Região",
      "historico": [
        {
          "ano": 2013,
          "casos": 11266
        },
        {
          "ano": 2014,
          "casos": 11174
        },
        {
          "ano": 2015,
          "casos": 11026
        },
        {
          "ano": 2016,
          "casos": 10678
        },
        {
          "ano": 2017,
          "casos": 10922
        },
        {
          "ano": 2018,
          "casos": 11476
        },
        {
          "ano": 2019,
          "casos": 11897
        },
        {
          "ano": 2020,
          "casos": 10508
        },
        {
          "ano": 2021,
          "casos": 10864
        },
        {
          "ano": 2022,
          "casos": 12261
        },
        {
          "ano": 2023,
          "casos": 13125
        },
        {
          "ano": 2024,
          "casos": 13428
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 12910
        },
        {
          "ano": 2026,
          "casos": 13101
        },
        {
          "ano": 2027,
          "casos": 13291
        },
        {
          "ano": 2028,
          "casos": 13481
        },
        {
          "ano": 2029,
          "casos": 13672
        },
        {
          "ano": 2030,
          "casos": 13862
        },
        {
          "ano": 2031,
          "casos": 14053
        },
        {
          "ano": 2032,
          "casos": 14243
        },
        {
          "ano": 2033,
          "casos": 14433
        },
        {
          "ano": 2034,
          "casos": 14624
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 39.5
        },
        {
          "ano": 2014,
          "taxa": 38.8
        },
        {
          "ano": 2015,
          "taxa": 37.9
        },
        {
          "ano": 2016,
          "taxa": 36.4
        },
        {
          "ano": 2017,
          "taxa": 36.9
        },
        {
          "ano": 2018,
          "taxa": 38.5
        },
        {
          "ano": 2019,
          "taxa": 39.6
        },
        {
          "ano": 2020,
          "taxa": 34.7
        },
        {
          "ano": 2021,
          "taxa": 35.6
        },
        {
          "ano": 2022,
          "taxa": 39.9
        },
        {
          "ano": 2023,
          "taxa": 42.5
        },
        {
          "ano": 2024,
          "taxa": 43.2
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 41.2
        },
        {
          "ano": 2026,
          "taxa": 41.6
        },
        {
          "ano": 2027,
          "taxa": 42.0
        },
        {
          "ano": 2028,
          "taxa": 42.3
        },
        {
          "ano": 2029,
          "taxa": 42.7
        },
        {
          "ano": 2030,
          "taxa": 43.1
        },
        {
          "ano": 2031,
          "taxa": 43.5
        },
        {
          "ano": 2032,
          "taxa": 43.9
        },
        {
          "ano": 2033,
          "taxa": 44.4
        },
        {
          "ano": 2034,
          "taxa": 44.8
        }
      ],
      "taxa_ultimo_ano": 43.2,
      "variacao_taxa_pct": 9.4,
      "populacao_ultimo_ano": 31113021,
      "coeficiente_anual": 190.4,
      "intercepto": -372594.1,
      "r2": 0.588,
      "crescimento_pct_ano": 1.42,
      "crescimento_total_pct": 19.2,
      "casos_ultimo_ano": 13428,
      "backtest_erro_pct": {
        "2022": -8.2,
        "2023": -14.1,
        "2024": -15.9
      },
      "status": "Moderado"
    },
    "Sudeste": {
      "grupo": "Região",
      "historico": [
        {
          "ano": 2013,
          "casos": 38467
        },
        {
          "ano": 2014,
          "casos": 38581
        },
        {
          "ano": 2015,
          "casos": 39203
        },
        {
          "ano": 2016,
          "casos": 39546
        },
        {
          "ano": 2017,
          "casos": 41243
        },
        {
          "ano": 2018,
          "casos": 43031
        },
        {
          "ano": 2019,
          "casos": 42602
        },
        {
          "ano": 2020,
          "casos": 38673
        },
        {
          "ano": 2021,
          "casos": 40811
        },
        {
          "ano": 2022,
          "casos": 45724
        },
        {
          "ano": 2023,
          "casos": 49263
        },
        {
          "ano": 2024,
          "casos": 50691
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 49412
        },
        {
          "ano": 2026,
          "casos": 50431
        },
        {
          "ano": 2027,
          "casos": 51450
        },
        {
          "ano": 2028,
          "casos": 52468
        },
        {
          "ano": 2029,
          "casos": 53487
        },
        {
          "ano": 2030,
          "casos": 54506
        },
        {
          "ano": 2031,
          "casos": 55525
        },
        {
          "ano": 2032,
          "casos": 56544
        },
        {
          "ano": 2033,
          "casos": 57562
        },
        {
          "ano": 2034,
          "casos": 58581
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 45.6
        },
        {
          "ano": 2014,
          "taxa": 45.4
        },
        {
          "ano": 2015,
          "taxa": 45.9
        },
        {
          "ano": 2016,
          "taxa": 46.0
        },
        {
          "ano": 2017,
          "taxa": 47.7
        },
        {
          "ano": 2018,
          "taxa": 49.5
        },
        {
          "ano": 2019,
          "taxa": 48.8
        },
        {
          "ano": 2020,
          "taxa": 44.1
        },
        {
          "ano": 2021,
          "taxa": 46.4
        },
        {
          "ano": 2022,
          "taxa": 51.9
        },
        {
          "ano": 2023,
          "taxa": 55.7
        },
        {
          "ano": 2024,
          "taxa": 57.2
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 55.6
        },
        {
          "ano": 2026,
          "taxa": 56.7
        },
        {
          "ano": 2027,
          "taxa": 57.7
        },
        {
          "ano": 2028,
          "taxa": 58.7
        },
        {
          "ano": 2029,
          "taxa": 59.8
        },
        {
          "ano": 2030,
          "taxa": 60.8
        },
        {
          "ano": 2031,
          "taxa": 61.9
        },
        {
          "ano": 2032,
          "taxa": 62.9
        },
        {
          "ano": 2033,
          "taxa": 64.0
        },
        {
          "ano": 2034,
          "taxa": 65.1
        }
      ],
      "taxa_ultimo_ano": 57.2,
      "variacao_taxa_pct": 25.4,
      "populacao_ultimo_ano": 88617693,
      "coeficiente_anual": 1018.8,
      "intercepto": -2013613.7,
      "r2": 0.815,
      "crescimento_pct_ano": 2.01,
      "crescimento_total_pct": 31.8,
      "casos_ultimo_ano": 50691,
      "backtest_erro_pct": {
        "2022": -5.6,
        "2023": -11.4,
        "2024": -12.9
      },
      "status": "Crítico"
    },
    "Acre": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 406
        },
        {
          "ano": 2014,
          "casos": 462
        },
        {
          "ano": 2015,
          "casos": 361
        },
        {
          "ano": 2016,
          "casos": 450
        },
        {
          "ano": 2017,
          "casos": 484
        },
        {
          "ano": 2018,
          "casos": 485
        },
        {
          "ano": 2019,
          "casos": 583
        },
        {
          "ano": 2020,
          "casos": 604
        },
        {
          "ano": 2021,
          "casos": 599
        },
        {
          "ano": 2022,
          "casos": 628
        },
        {
          "ano": 2023,
          "casos": 647
        },
        {
          "ano": 2024,
          "casos": 648
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 692
        },
        {
          "ano": 2026,
          "casos": 717
        },
        {
          "ano": 2027,
          "casos": 743
        },
        {
          "ano": 2028,
          "casos": 768
        },
        {
          "ano": 2029,
          "casos": 794
        },
        {
          "ano": 2030,
          "casos": 819
        },
        {
          "ano": 2031,
          "casos": 845
        },
        {
          "ano": 2032,
          "casos": 870
        },
        {
          "ano": 2033,
          "casos": 896
        },
        {
          "ano": 2034,
          "casos": 921
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 50.5
        },
        {
          "ano": 2014,
          "taxa": 56.7
        },
        {
          "ano": 2015,
          "taxa": 43.7
        },
        {
          "ano": 2016,
          "taxa": 53.8
        },
        {
          "ano": 2017,
          "taxa": 57.3
        },
        {
          "ano": 2018,
          "taxa": 57.0
        },
        {
          "ano": 2019,
          "taxa": 68.0
        },
        {
          "ano": 2020,
          "taxa": 69.9
        },
        {
          "ano": 2021,
          "taxa": 69.0
        },
        {
          "ano": 2022,
          "taxa": 72.0
        },
        {
          "ano": 2023,
          "taxa": 73.8
        },
        {
          "ano": 2024,
          "taxa": 73.6
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 78.2
        },
        {
          "ano": 2026,
          "taxa": 80.8
        },
        {
          "ano": 2027,
          "taxa": 83.4
        },
        {
          "ano": 2028,
          "taxa": 86.0
        },
        {
          "ano": 2029,
          "taxa": 88.5
        },
        {
          "ano": 2030,
          "taxa": 91.1
        },
        {
          "ano": 2031,
          "taxa": 93.7
        },
        {
          "ano": 2032,
          "taxa": 96.4
        },
        {
          "ano": 2033,
          "taxa": 99.0
        },
        {
          "ano": 2034,
          "taxa": 101.6
        }
      ],
      "taxa_ultimo_ano": 73.6,
      "variacao_taxa_pct": 45.7,
      "populacao_ultimo_ano": 880631,
      "coeficiente_anual": 25.5,
      "intercepto": -50860.4,
      "r2": 0.881,
      "crescimento_pct_ano": 3.93,
      "crescimento_total_pct": 59.6,
      "casos_ultimo_ano": 648,
      "backtest_erro_pct": {
        "2022": -1.4,
        "2023": -0.3,
        "2024": 3.6
      },
      "status": "Crítico",
      "sigla": "AC",
      "regiao": "Norte"
    },
    "Alagoas": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 1324
        },
        {
          "ano": 2014,
          "casos": 1245
        },
        {
          "ano": 2015,
          "casos": 1068
        },
        {
          "ano": 2016,
          "casos": 1236
        },
        {
          "ano": 2017,
          "casos": 1262
        },
        {
          "ano": 2018,
          "casos": 1349
        },
        {
          "ano": 2019,
          "casos": 1289
        },
        {
          "ano": 2020,
          "casos": 1053
        },
        {
          "ano": 2021,
          "casos": 1088
        },
        {
          "ano": 2022,
          "casos": 1190
        },
        {
          "ano": 2023,
          "casos": 1331
        },
        {
          "ano": 2024,
          "casos": 1325
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 1265
        },
        {
          "ano": 2026,
          "casos": 1268
        },
        {
          "ano": 2027,
          "casos": 1270
        },
        {
          "ano": 2028,
          "casos": 1273
        },
        {
          "ano": 2029,
          "casos": 1276
        },
        {
          "ano": 2030,
          "casos": 1279
        },
        {
          "ano": 2031,
          "casos": 1282
        },
        {
          "ano": 2032,
          "casos": 1284
        },
        {
          "ano": 2033,
          "casos": 1287
        },
        {
          "ano": 2034,
          "casos": 1290
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 41.9
        },
        {
          "ano": 2014,
          "taxa": 39.2
        },
        {
          "ano": 2015,
          "taxa": 33.6
        },
        {
          "ano": 2016,
          "taxa": 38.8
        },
        {
          "ano": 2017,
          "taxa": 39.5
        },
        {
          "ano": 2018,
          "taxa": 42.2
        },
        {
          "ano": 2019,
          "taxa": 40.2
        },
        {
          "ano": 2020,
          "taxa": 32.8
        },
        {
          "ano": 2021,
          "taxa": 33.8
        },
        {
          "ano": 2022,
          "taxa": 37.0
        },
        {
          "ano": 2023,
          "taxa": 41.4
        },
        {
          "ano": 2024,
          "taxa": 41.1
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 39.3
        },
        {
          "ano": 2026,
          "taxa": 39.4
        },
        {
          "ano": 2027,
          "taxa": 39.4
        },
        {
          "ano": 2028,
          "taxa": 39.5
        },
        {
          "ano": 2029,
          "taxa": 39.6
        },
        {
          "ano": 2030,
          "taxa": 39.7
        },
        {
          "ano": 2031,
          "taxa": 39.9
        },
        {
          "ano": 2032,
          "taxa": 40.0
        },
        {
          "ano": 2033,
          "taxa": 40.1
        },
        {
          "ano": 2034,
          "taxa": 40.3
        }
      ],
      "taxa_ultimo_ano": 41.1,
      "variacao_taxa_pct": -1.9,
      "populacao_ultimo_ano": 3220104,
      "coeficiente_anual": 2.8,
      "intercepto": -4435.6,
      "r2": 0.012,
      "crescimento_pct_ano": 0.21,
      "crescimento_total_pct": 0.1,
      "casos_ultimo_ano": 1325,
      "backtest_erro_pct": {
        "2022": -0.3,
        "2023": -11.5,
        "2024": -11.7
      },
      "status": "Moderado",
      "sigla": "AL",
      "regiao": "Nordeste"
    },
    "Amapá": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 220
        },
        {
          "ano": 2014,
          "casos": 211
        },
        {
          "ano": 2015,
          "casos": 225
        },
        {
          "ano": 2016,
          "casos": 287
        },
        {
          "ano": 2017,
          "casos": 298
        },
        {
          "ano": 2018,
          "casos": 284
        },
        {
          "ano": 2019,
          "casos": 353
        },
        {
          "ano": 2020,
          "casos": 321
        },
        {
          "ano": 2021,
          "casos": 430
        },
        {
          "ano": 2022,
          "casos": 519
        },
        {
          "ano": 2023,
          "casos": 513
        },
        {
          "ano": 2024,
          "casos": 582
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 586
        },
        {
          "ano": 2026,
          "casos": 621
        },
        {
          "ano": 2027,
          "casos": 655
        },
        {
          "ano": 2028,
          "casos": 690
        },
        {
          "ano": 2029,
          "casos": 724
        },
        {
          "ano": 2030,
          "casos": 759
        },
        {
          "ano": 2031,
          "casos": 793
        },
        {
          "ano": 2032,
          "casos": 828
        },
        {
          "ano": 2033,
          "casos": 863
        },
        {
          "ano": 2034,
          "casos": 897
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 30.4
        },
        {
          "ano": 2014,
          "taxa": 28.7
        },
        {
          "ano": 2015,
          "taxa": 30.1
        },
        {
          "ano": 2016,
          "taxa": 37.9
        },
        {
          "ano": 2017,
          "taxa": 38.9
        },
        {
          "ano": 2018,
          "taxa": 36.8
        },
        {
          "ano": 2019,
          "taxa": 45.3
        },
        {
          "ano": 2020,
          "taxa": 40.9
        },
        {
          "ano": 2021,
          "taxa": 54.4
        },
        {
          "ano": 2022,
          "taxa": 65.2
        },
        {
          "ano": 2023,
          "taxa": 64.2
        },
        {
          "ano": 2024,
          "taxa": 72.5
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 72.7
        },
        {
          "ano": 2026,
          "taxa": 76.6
        },
        {
          "ano": 2027,
          "taxa": 80.6
        },
        {
          "ano": 2028,
          "taxa": 84.5
        },
        {
          "ano": 2029,
          "taxa": 88.4
        },
        {
          "ano": 2030,
          "taxa": 92.3
        },
        {
          "ano": 2031,
          "taxa": 96.3
        },
        {
          "ano": 2032,
          "taxa": 100.2
        },
        {
          "ano": 2033,
          "taxa": 104.1
        },
        {
          "ano": 2034,
          "taxa": 108.0
        }
      ],
      "taxa_ultimo_ano": 72.5,
      "variacao_taxa_pct": 138.5,
      "populacao_ultimo_ano": 802837,
      "coeficiente_anual": 34.6,
      "intercepto": -69420.6,
      "r2": 0.945,
      "crescimento_pct_ano": 5.94,
      "crescimento_total_pct": 164.5,
      "casos_ultimo_ano": 582,
      "backtest_erro_pct": {
        "2022": -16.9,
        "2023": -10.7,
        "2024": -16.8
      },
      "status": "Crítico",
      "sigla": "AP",
      "regiao": "Norte"
    },
    "Amazonas": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 3060
        },
        {
          "ano": 2014,
          "casos": 3143
        },
        {
          "ano": 2015,
          "casos": 3404
        },
        {
          "ano": 2016,
          "casos": 3259
        },
        {
          "ano": 2017,
          "casos": 3694
        },
        {
          "ano": 2018,
          "casos": 3802
        },
        {
          "ano": 2019,
          "casos": 3955
        },
        {
          "ano": 2020,
          "casos": 3515
        },
        {
          "ano": 2021,
          "casos": 3943
        },
        {
          "ano": 2022,
          "casos": 4599
        },
        {
          "ano": 2023,
          "casos": 4936
        },
        {
          "ano": 2024,
          "casos": 5436
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 5227
        },
        {
          "ano": 2026,
          "casos": 5422
        },
        {
          "ano": 2027,
          "casos": 5617
        },
        {
          "ano": 2028,
          "casos": 5813
        },
        {
          "ano": 2029,
          "casos": 6008
        },
        {
          "ano": 2030,
          "casos": 6204
        },
        {
          "ano": 2031,
          "casos": 6399
        },
        {
          "ano": 2032,
          "casos": 6594
        },
        {
          "ano": 2033,
          "casos": 6790
        },
        {
          "ano": 2034,
          "casos": 6985
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 81.9
        },
        {
          "ano": 2014,
          "taxa": 82.8
        },
        {
          "ano": 2015,
          "taxa": 88.2
        },
        {
          "ano": 2016,
          "taxa": 83.3
        },
        {
          "ano": 2017,
          "taxa": 93.1
        },
        {
          "ano": 2018,
          "taxa": 94.6
        },
        {
          "ano": 2019,
          "taxa": 97.1
        },
        {
          "ano": 2020,
          "taxa": 85.3
        },
        {
          "ano": 2021,
          "taxa": 94.8
        },
        {
          "ano": 2022,
          "taxa": 109.5
        },
        {
          "ano": 2023,
          "taxa": 116.4
        },
        {
          "ano": 2024,
          "taxa": 127.0
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 120.9
        },
        {
          "ano": 2026,
          "taxa": 124.3
        },
        {
          "ano": 2027,
          "taxa": 127.7
        },
        {
          "ano": 2028,
          "taxa": 131.0
        },
        {
          "ano": 2029,
          "taxa": 134.3
        },
        {
          "ano": 2030,
          "taxa": 137.6
        },
        {
          "ano": 2031,
          "taxa": 140.8
        },
        {
          "ano": 2032,
          "taxa": 144.1
        },
        {
          "ano": 2033,
          "taxa": 147.3
        },
        {
          "ano": 2034,
          "taxa": 150.6
        }
      ],
      "taxa_ultimo_ano": 127.0,
      "variacao_taxa_pct": 55.1,
      "populacao_ultimo_ano": 4281209,
      "coeficiente_anual": 195.4,
      "intercepto": -390415.9,
      "r2": 0.909,
      "crescimento_pct_ano": 3.59,
      "crescimento_total_pct": 77.6,
      "casos_ultimo_ano": 5436,
      "backtest_erro_pct": {
        "2022": -8.3,
        "2023": -12.0,
        "2024": -17.8
      },
      "status": "Crítico",
      "sigla": "AM",
      "regiao": "Norte"
    },
    "Bahia": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 5679
        },
        {
          "ano": 2014,
          "casos": 5612
        },
        {
          "ano": 2015,
          "casos": 5304
        },
        {
          "ano": 2016,
          "casos": 5300
        },
        {
          "ano": 2017,
          "casos": 5486
        },
        {
          "ano": 2018,
          "casos": 5670
        },
        {
          "ano": 2019,
          "casos": 5635
        },
        {
          "ano": 2020,
          "casos": 4683
        },
        {
          "ano": 2021,
          "casos": 5057
        },
        {
          "ano": 2022,
          "casos": 5508
        },
        {
          "ano": 2023,
          "casos": 5536
        },
        {
          "ano": 2024,
          "casos": 5712
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 5498
        },
        {
          "ano": 2026,
          "casos": 5497
        },
        {
          "ano": 2027,
          "casos": 5497
        },
        {
          "ano": 2028,
          "casos": 5496
        },
        {
          "ano": 2029,
          "casos": 5496
        },
        {
          "ano": 2030,
          "casos": 5496
        },
        {
          "ano": 2031,
          "casos": 5495
        },
        {
          "ano": 2032,
          "casos": 5495
        },
        {
          "ano": 2033,
          "casos": 5495
        },
        {
          "ano": 2034,
          "casos": 5494
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 39.6
        },
        {
          "ano": 2014,
          "taxa": 38.9
        },
        {
          "ano": 2015,
          "taxa": 36.7
        },
        {
          "ano": 2016,
          "taxa": 36.5
        },
        {
          "ano": 2017,
          "taxa": 37.6
        },
        {
          "ano": 2018,
          "taxa": 38.7
        },
        {
          "ano": 2019,
          "taxa": 38.4
        },
        {
          "ano": 2020,
          "taxa": 31.8
        },
        {
          "ano": 2021,
          "taxa": 34.2
        },
        {
          "ano": 2022,
          "taxa": 37.2
        },
        {
          "ano": 2023,
          "taxa": 37.3
        },
        {
          "ano": 2024,
          "taxa": 38.5
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 37.0
        },
        {
          "ano": 2026,
          "taxa": 36.9
        },
        {
          "ano": 2027,
          "taxa": 36.9
        },
        {
          "ano": 2028,
          "taxa": 36.8
        },
        {
          "ano": 2029,
          "taxa": 36.8
        },
        {
          "ano": 2030,
          "taxa": 36.8
        },
        {
          "ano": 2031,
          "taxa": 36.7
        },
        {
          "ano": 2032,
          "taxa": 36.7
        },
        {
          "ano": 2033,
          "taxa": 36.7
        },
        {
          "ano": 2034,
          "taxa": 36.7
        }
      ],
      "taxa_ultimo_ano": 38.5,
      "variacao_taxa_pct": -2.8,
      "populacao_ultimo_ano": 14850513,
      "coeficiente_anual": -0.4,
      "intercepto": 6227.1,
      "r2": 0.0,
      "crescimento_pct_ano": -0.01,
      "crescimento_total_pct": 0.6,
      "casos_ultimo_ano": 5712,
      "backtest_erro_pct": {
        "2022": -4.4,
        "2023": -5.6,
        "2024": -9.2
      },
      "status": "Moderado",
      "sigla": "BA",
      "regiao": "Nordeste"
    },
    "Ceará": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 4052
        },
        {
          "ano": 2014,
          "casos": 3879
        },
        {
          "ano": 2015,
          "casos": 4012
        },
        {
          "ano": 2016,
          "casos": 4045
        },
        {
          "ano": 2017,
          "casos": 4291
        },
        {
          "ano": 2018,
          "casos": 4569
        },
        {
          "ano": 2019,
          "casos": 4543
        },
        {
          "ano": 2020,
          "casos": 3837
        },
        {
          "ano": 2021,
          "casos": 4121
        },
        {
          "ano": 2022,
          "casos": 4767
        },
        {
          "ano": 2023,
          "casos": 4757
        },
        {
          "ano": 2024,
          "casos": 4707
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 4834
        },
        {
          "ano": 2026,
          "casos": 4908
        },
        {
          "ano": 2027,
          "casos": 4982
        },
        {
          "ano": 2028,
          "casos": 5057
        },
        {
          "ano": 2029,
          "casos": 5131
        },
        {
          "ano": 2030,
          "casos": 5205
        },
        {
          "ano": 2031,
          "casos": 5280
        },
        {
          "ano": 2032,
          "casos": 5354
        },
        {
          "ano": 2033,
          "casos": 5428
        },
        {
          "ano": 2034,
          "casos": 5503
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 46.6
        },
        {
          "ano": 2014,
          "taxa": 44.3
        },
        {
          "ano": 2015,
          "taxa": 45.5
        },
        {
          "ano": 2016,
          "taxa": 45.6
        },
        {
          "ano": 2017,
          "taxa": 48.1
        },
        {
          "ano": 2018,
          "taxa": 50.9
        },
        {
          "ano": 2019,
          "taxa": 50.3
        },
        {
          "ano": 2020,
          "taxa": 42.2
        },
        {
          "ano": 2021,
          "taxa": 45.1
        },
        {
          "ano": 2022,
          "taxa": 52.0
        },
        {
          "ano": 2023,
          "taxa": 51.7
        },
        {
          "ano": 2024,
          "taxa": 51.0
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 52.1
        },
        {
          "ano": 2026,
          "taxa": 52.8
        },
        {
          "ano": 2027,
          "taxa": 53.4
        },
        {
          "ano": 2028,
          "taxa": 54.0
        },
        {
          "ano": 2029,
          "taxa": 54.6
        },
        {
          "ano": 2030,
          "taxa": 55.3
        },
        {
          "ano": 2031,
          "taxa": 55.9
        },
        {
          "ano": 2032,
          "taxa": 56.5
        },
        {
          "ano": 2033,
          "taxa": 57.2
        },
        {
          "ano": 2034,
          "taxa": 57.9
        }
      ],
      "taxa_ultimo_ano": 51.0,
      "variacao_taxa_pct": 9.4,
      "populacao_ultimo_ano": 9233656,
      "coeficiente_anual": 74.3,
      "intercepto": -145687.1,
      "r2": 0.69,
      "crescimento_pct_ano": 1.58,
      "crescimento_total_pct": 16.2,
      "casos_ultimo_ano": 4707,
      "backtest_erro_pct": {
        "2022": -5.8,
        "2023": -4.4,
        "2024": -2.2
      },
      "status": "Atenção",
      "sigla": "CE",
      "regiao": "Nordeste"
    },
    "Distrito Federal": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 473
        },
        {
          "ano": 2014,
          "casos": 512
        },
        {
          "ano": 2015,
          "casos": 478
        },
        {
          "ano": 2016,
          "casos": 463
        },
        {
          "ano": 2017,
          "casos": 418
        },
        {
          "ano": 2018,
          "casos": 482
        },
        {
          "ano": 2019,
          "casos": 490
        },
        {
          "ano": 2020,
          "casos": 414
        },
        {
          "ano": 2021,
          "casos": 396
        },
        {
          "ano": 2022,
          "casos": 465
        },
        {
          "ano": 2023,
          "casos": 561
        },
        {
          "ano": 2024,
          "casos": 646
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 540
        },
        {
          "ano": 2026,
          "casos": 548
        },
        {
          "ano": 2027,
          "casos": 555
        },
        {
          "ano": 2028,
          "casos": 563
        },
        {
          "ano": 2029,
          "casos": 570
        },
        {
          "ano": 2030,
          "casos": 578
        },
        {
          "ano": 2031,
          "casos": 586
        },
        {
          "ano": 2032,
          "casos": 593
        },
        {
          "ano": 2033,
          "casos": 601
        },
        {
          "ano": 2034,
          "casos": 609
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 17.3
        },
        {
          "ano": 2014,
          "taxa": 18.5
        },
        {
          "ano": 2015,
          "taxa": 17.1
        },
        {
          "ano": 2016,
          "taxa": 16.4
        },
        {
          "ano": 2017,
          "taxa": 14.7
        },
        {
          "ano": 2018,
          "taxa": 16.8
        },
        {
          "ano": 2019,
          "taxa": 16.9
        },
        {
          "ano": 2020,
          "taxa": 14.2
        },
        {
          "ano": 2021,
          "taxa": 13.5
        },
        {
          "ano": 2022,
          "taxa": 15.7
        },
        {
          "ano": 2023,
          "taxa": 18.9
        },
        {
          "ano": 2024,
          "taxa": 21.7
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 18.0
        },
        {
          "ano": 2026,
          "taxa": 18.2
        },
        {
          "ano": 2027,
          "taxa": 18.4
        },
        {
          "ano": 2028,
          "taxa": 18.6
        },
        {
          "ano": 2029,
          "taxa": 18.7
        },
        {
          "ano": 2030,
          "taxa": 18.9
        },
        {
          "ano": 2031,
          "taxa": 19.1
        },
        {
          "ano": 2032,
          "taxa": 19.3
        },
        {
          "ano": 2033,
          "taxa": 19.5
        },
        {
          "ano": 2034,
          "taxa": 19.7
        }
      ],
      "taxa_ultimo_ano": 21.7,
      "variacao_taxa_pct": 25.4,
      "populacao_ultimo_ano": 2982818,
      "coeficiente_anual": 7.6,
      "intercepto": -14879.4,
      "r2": 0.178,
      "crescimento_pct_ano": 1.18,
      "crescimento_total_pct": 36.6,
      "casos_ultimo_ano": 646,
      "backtest_erro_pct": {
        "2022": -9.7,
        "2023": -26.6,
        "2024": -37.5
      },
      "status": "Moderado",
      "sigla": "DF",
      "regiao": "Centro-Oeste"
    },
    "Espírito Santo": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 1384
        },
        {
          "ano": 2014,
          "casos": 1314
        },
        {
          "ano": 2015,
          "casos": 1395
        },
        {
          "ano": 2016,
          "casos": 1239
        },
        {
          "ano": 2017,
          "casos": 1402
        },
        {
          "ano": 2018,
          "casos": 1488
        },
        {
          "ano": 2019,
          "casos": 1459
        },
        {
          "ano": 2020,
          "casos": 1513
        },
        {
          "ano": 2021,
          "casos": 1723
        },
        {
          "ano": 2022,
          "casos": 1956
        },
        {
          "ano": 2023,
          "casos": 2250
        },
        {
          "ano": 2024,
          "casos": 2358
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 2251
        },
        {
          "ano": 2026,
          "casos": 2344
        },
        {
          "ano": 2027,
          "casos": 2437
        },
        {
          "ano": 2028,
          "casos": 2530
        },
        {
          "ano": 2029,
          "casos": 2623
        },
        {
          "ano": 2030,
          "casos": 2716
        },
        {
          "ano": 2031,
          "casos": 2809
        },
        {
          "ano": 2032,
          "casos": 2902
        },
        {
          "ano": 2033,
          "casos": 2995
        },
        {
          "ano": 2034,
          "casos": 3088
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 36.9
        },
        {
          "ano": 2014,
          "taxa": 34.6
        },
        {
          "ano": 2015,
          "taxa": 36.4
        },
        {
          "ano": 2016,
          "taxa": 32.0
        },
        {
          "ano": 2017,
          "taxa": 35.9
        },
        {
          "ano": 2018,
          "taxa": 37.8
        },
        {
          "ano": 2019,
          "taxa": 36.8
        },
        {
          "ano": 2020,
          "taxa": 37.8
        },
        {
          "ano": 2021,
          "taxa": 42.8
        },
        {
          "ano": 2022,
          "taxa": 48.3
        },
        {
          "ano": 2023,
          "taxa": 55.2
        },
        {
          "ano": 2024,
          "taxa": 57.5
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 54.5
        },
        {
          "ano": 2026,
          "taxa": 56.5
        },
        {
          "ano": 2027,
          "taxa": 58.4
        },
        {
          "ano": 2028,
          "taxa": 60.3
        },
        {
          "ano": 2029,
          "taxa": 62.2
        },
        {
          "ano": 2030,
          "taxa": 64.1
        },
        {
          "ano": 2031,
          "taxa": 66.0
        },
        {
          "ano": 2032,
          "taxa": 67.9
        },
        {
          "ano": 2033,
          "taxa": 69.8
        },
        {
          "ano": 2034,
          "taxa": 71.7
        }
      ],
      "taxa_ultimo_ano": 57.5,
      "variacao_taxa_pct": 55.8,
      "populacao_ultimo_ano": 4102129,
      "coeficiente_anual": 93.0,
      "intercepto": -186138.3,
      "r2": 0.811,
      "crescimento_pct_ano": 3.95,
      "crescimento_total_pct": 70.4,
      "casos_ultimo_ano": 2358,
      "backtest_erro_pct": {
        "2022": -15.7,
        "2023": -24.9,
        "2024": -26.6
      },
      "status": "Crítico",
      "sigla": "ES",
      "regiao": "Sudeste"
    },
    "Goiás": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 1072
        },
        {
          "ano": 2014,
          "casos": 991
        },
        {
          "ano": 2015,
          "casos": 1095
        },
        {
          "ano": 2016,
          "casos": 1027
        },
        {
          "ano": 2017,
          "casos": 1170
        },
        {
          "ano": 2018,
          "casos": 1221
        },
        {
          "ano": 2019,
          "casos": 1193
        },
        {
          "ano": 2020,
          "casos": 1105
        },
        {
          "ano": 2021,
          "casos": 1180
        },
        {
          "ano": 2022,
          "casos": 1293
        },
        {
          "ano": 2023,
          "casos": 1449
        },
        {
          "ano": 2024,
          "casos": 1270
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 1378
        },
        {
          "ano": 2026,
          "casos": 1408
        },
        {
          "ano": 2027,
          "casos": 1438
        },
        {
          "ano": 2028,
          "casos": 1468
        },
        {
          "ano": 2029,
          "casos": 1498
        },
        {
          "ano": 2030,
          "casos": 1528
        },
        {
          "ano": 2031,
          "casos": 1558
        },
        {
          "ano": 2032,
          "casos": 1588
        },
        {
          "ano": 2033,
          "casos": 1618
        },
        {
          "ano": 2034,
          "casos": 1648
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 16.6
        },
        {
          "ano": 2014,
          "taxa": 15.2
        },
        {
          "ano": 2015,
          "taxa": 16.5
        },
        {
          "ano": 2016,
          "taxa": 15.3
        },
        {
          "ano": 2017,
          "taxa": 17.2
        },
        {
          "ano": 2018,
          "taxa": 17.7
        },
        {
          "ano": 2019,
          "taxa": 17.1
        },
        {
          "ano": 2020,
          "taxa": 15.7
        },
        {
          "ano": 2021,
          "taxa": 16.5
        },
        {
          "ano": 2022,
          "taxa": 18.0
        },
        {
          "ano": 2023,
          "taxa": 19.9
        },
        {
          "ano": 2024,
          "taxa": 17.3
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 18.6
        },
        {
          "ano": 2026,
          "taxa": 18.8
        },
        {
          "ano": 2027,
          "taxa": 19.0
        },
        {
          "ano": 2028,
          "taxa": 19.2
        },
        {
          "ano": 2029,
          "taxa": 19.5
        },
        {
          "ano": 2030,
          "taxa": 19.7
        },
        {
          "ano": 2031,
          "taxa": 19.9
        },
        {
          "ano": 2032,
          "taxa": 20.1
        },
        {
          "ano": 2033,
          "taxa": 20.4
        },
        {
          "ano": 2034,
          "taxa": 20.6
        }
      ],
      "taxa_ultimo_ano": 17.3,
      "variacao_taxa_pct": 4.2,
      "populacao_ultimo_ano": 7350483,
      "coeficiente_anual": 30.1,
      "intercepto": -59481.0,
      "r2": 0.733,
      "crescimento_pct_ano": 2.37,
      "crescimento_total_pct": 18.5,
      "casos_ultimo_ano": 1270,
      "backtest_erro_pct": {
        "2022": -3.4,
        "2023": -12.2,
        "2024": 2.1
      },
      "status": "Atenção",
      "sigla": "GO",
      "regiao": "Centro-Oeste"
    },
    "Maranhão": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 2278
        },
        {
          "ano": 2014,
          "casos": 2111
        },
        {
          "ano": 2015,
          "casos": 2238
        },
        {
          "ano": 2016,
          "casos": 2442
        },
        {
          "ano": 2017,
          "casos": 2469
        },
        {
          "ano": 2018,
          "casos": 2649
        },
        {
          "ano": 2019,
          "casos": 2657
        },
        {
          "ano": 2020,
          "casos": 2485
        },
        {
          "ano": 2021,
          "casos": 2888
        },
        {
          "ano": 2022,
          "casos": 3198
        },
        {
          "ano": 2023,
          "casos": 3382
        },
        {
          "ano": 2024,
          "casos": 3601
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 3562
        },
        {
          "ano": 2026,
          "casos": 3689
        },
        {
          "ano": 2027,
          "casos": 3816
        },
        {
          "ano": 2028,
          "casos": 3943
        },
        {
          "ano": 2029,
          "casos": 4070
        },
        {
          "ano": 2030,
          "casos": 4197
        },
        {
          "ano": 2031,
          "casos": 4324
        },
        {
          "ano": 2032,
          "casos": 4451
        },
        {
          "ano": 2033,
          "casos": 4578
        },
        {
          "ano": 2034,
          "casos": 4705
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 33.7
        },
        {
          "ano": 2014,
          "taxa": 31.1
        },
        {
          "ano": 2015,
          "taxa": 32.8
        },
        {
          "ano": 2016,
          "taxa": 35.6
        },
        {
          "ano": 2017,
          "taxa": 35.8
        },
        {
          "ano": 2018,
          "taxa": 38.3
        },
        {
          "ano": 2019,
          "taxa": 38.2
        },
        {
          "ano": 2020,
          "taxa": 35.6
        },
        {
          "ano": 2021,
          "taxa": 41.3
        },
        {
          "ano": 2022,
          "taxa": 45.7
        },
        {
          "ano": 2023,
          "taxa": 48.3
        },
        {
          "ano": 2024,
          "taxa": 51.4
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 50.8
        },
        {
          "ano": 2026,
          "taxa": 52.5
        },
        {
          "ano": 2027,
          "taxa": 54.3
        },
        {
          "ano": 2028,
          "taxa": 56.1
        },
        {
          "ano": 2029,
          "taxa": 57.8
        },
        {
          "ano": 2030,
          "taxa": 59.6
        },
        {
          "ano": 2031,
          "taxa": 61.4
        },
        {
          "ano": 2032,
          "taxa": 63.2
        },
        {
          "ano": 2033,
          "taxa": 65.0
        },
        {
          "ano": 2034,
          "taxa": 66.8
        }
      ],
      "taxa_ultimo_ano": 51.4,
      "variacao_taxa_pct": 52.5,
      "populacao_ultimo_ano": 7010960,
      "coeficiente_anual": 127.0,
      "intercepto": -253631.1,
      "r2": 0.937,
      "crescimento_pct_ano": 3.53,
      "crescimento_total_pct": 58.1,
      "casos_ultimo_ano": 3601,
      "backtest_erro_pct": {
        "2022": -7.5,
        "2023": -9.9,
        "2024": -12.8
      },
      "status": "Crítico",
      "sigla": "MA",
      "regiao": "Nordeste"
    },
    "Mato Grosso": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 1886
        },
        {
          "ano": 2014,
          "casos": 1794
        },
        {
          "ano": 2015,
          "casos": 1442
        },
        {
          "ano": 2016,
          "casos": 1456
        },
        {
          "ano": 2017,
          "casos": 1429
        },
        {
          "ano": 2018,
          "casos": 1419
        },
        {
          "ano": 2019,
          "casos": 1523
        },
        {
          "ano": 2020,
          "casos": 1269
        },
        {
          "ano": 2021,
          "casos": 1242
        },
        {
          "ano": 2022,
          "casos": 1408
        },
        {
          "ano": 2023,
          "casos": 1570
        },
        {
          "ano": 2024,
          "casos": 1732
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 1428
        },
        {
          "ano": 2026,
          "casos": 1412
        },
        {
          "ano": 2027,
          "casos": 1395
        },
        {
          "ano": 2028,
          "casos": 1379
        },
        {
          "ano": 2029,
          "casos": 1363
        },
        {
          "ano": 2030,
          "casos": 1346
        },
        {
          "ano": 2031,
          "casos": 1330
        },
        {
          "ano": 2032,
          "casos": 1314
        },
        {
          "ano": 2033,
          "casos": 1297
        },
        {
          "ano": 2034,
          "casos": 1281
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 58.5
        },
        {
          "ano": 2014,
          "taxa": 54.8
        },
        {
          "ano": 2015,
          "taxa": 43.3
        },
        {
          "ano": 2016,
          "taxa": 43.1
        },
        {
          "ano": 2017,
          "taxa": 41.6
        },
        {
          "ano": 2018,
          "taxa": 40.7
        },
        {
          "ano": 2019,
          "taxa": 42.9
        },
        {
          "ano": 2020,
          "taxa": 35.1
        },
        {
          "ano": 2021,
          "taxa": 33.9
        },
        {
          "ano": 2022,
          "taxa": 37.8
        },
        {
          "ano": 2023,
          "taxa": 41.6
        },
        {
          "ano": 2024,
          "taxa": 45.1
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 36.7
        },
        {
          "ano": 2026,
          "taxa": 35.7
        },
        {
          "ano": 2027,
          "taxa": 34.8
        },
        {
          "ano": 2028,
          "taxa": 34.0
        },
        {
          "ano": 2029,
          "taxa": 33.1
        },
        {
          "ano": 2030,
          "taxa": 32.3
        },
        {
          "ano": 2031,
          "taxa": 31.5
        },
        {
          "ano": 2032,
          "taxa": 30.7
        },
        {
          "ano": 2033,
          "taxa": 30.0
        },
        {
          "ano": 2034,
          "taxa": 29.3
        }
      ],
      "taxa_ultimo_ano": 45.1,
      "variacao_taxa_pct": -22.9,
      "populacao_ultimo_ano": 3836399,
      "coeficiente_anual": -16.3,
      "intercepto": 34506.5,
      "r2": 0.101,
      "crescimento_pct_ano": -0.94,
      "crescimento_total_pct": -8.2,
      "casos_ultimo_ano": 1732,
      "backtest_erro_pct": {
        "2022": -16.7,
        "2023": -29.5,
        "2024": -39.9
      },
      "status": "Moderado",
      "sigla": "MT",
      "regiao": "Centro-Oeste"
    },
    "Mato Grosso do Sul": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 1098
        },
        {
          "ano": 2014,
          "casos": 998
        },
        {
          "ano": 2015,
          "casos": 1003
        },
        {
          "ano": 2016,
          "casos": 1130
        },
        {
          "ano": 2017,
          "casos": 1145
        },
        {
          "ano": 2018,
          "casos": 1463
        },
        {
          "ano": 2019,
          "casos": 1434
        },
        {
          "ano": 2020,
          "casos": 1407
        },
        {
          "ano": 2021,
          "casos": 1540
        },
        {
          "ano": 2022,
          "casos": 1872
        },
        {
          "ano": 2023,
          "casos": 2115
        },
        {
          "ano": 2024,
          "casos": 1920
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 2091
        },
        {
          "ano": 2026,
          "casos": 2191
        },
        {
          "ano": 2027,
          "casos": 2291
        },
        {
          "ano": 2028,
          "casos": 2391
        },
        {
          "ano": 2029,
          "casos": 2490
        },
        {
          "ano": 2030,
          "casos": 2590
        },
        {
          "ano": 2031,
          "casos": 2690
        },
        {
          "ano": 2032,
          "casos": 2790
        },
        {
          "ano": 2033,
          "casos": 2890
        },
        {
          "ano": 2034,
          "casos": 2989
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 42.5
        },
        {
          "ano": 2014,
          "taxa": 38.1
        },
        {
          "ano": 2015,
          "taxa": 37.8
        },
        {
          "ano": 2016,
          "taxa": 42.1
        },
        {
          "ano": 2017,
          "taxa": 42.2
        },
        {
          "ano": 2018,
          "taxa": 53.3
        },
        {
          "ano": 2019,
          "taxa": 51.6
        },
        {
          "ano": 2020,
          "taxa": 50.1
        },
        {
          "ano": 2021,
          "taxa": 54.4
        },
        {
          "ano": 2022,
          "taxa": 65.6
        },
        {
          "ano": 2023,
          "taxa": 73.5
        },
        {
          "ano": 2024,
          "taxa": 66.2
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 71.5
        },
        {
          "ano": 2026,
          "taxa": 74.4
        },
        {
          "ano": 2027,
          "taxa": 77.2
        },
        {
          "ano": 2028,
          "taxa": 80.0
        },
        {
          "ano": 2029,
          "taxa": 82.9
        },
        {
          "ano": 2030,
          "taxa": 85.7
        },
        {
          "ano": 2031,
          "taxa": 88.5
        },
        {
          "ano": 2032,
          "taxa": 91.3
        },
        {
          "ano": 2033,
          "taxa": 94.1
        },
        {
          "ano": 2034,
          "taxa": 96.8
        }
      ],
      "taxa_ultimo_ano": 66.2,
      "variacao_taxa_pct": 55.8,
      "populacao_ultimo_ano": 2901895,
      "coeficiente_anual": 99.8,
      "intercepto": -199988.4,
      "r2": 0.892,
      "crescimento_pct_ano": 5.2,
      "crescimento_total_pct": 74.9,
      "casos_ultimo_ano": 1920,
      "backtest_erro_pct": {
        "2022": -13.5,
        "2023": -20.0,
        "2024": -8.0
      },
      "status": "Crítico",
      "sigla": "MS",
      "regiao": "Centro-Oeste"
    },
    "Minas Gerais": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 4200
        },
        {
          "ano": 2014,
          "casos": 4193
        },
        {
          "ano": 2015,
          "casos": 4055
        },
        {
          "ano": 2016,
          "casos": 4073
        },
        {
          "ano": 2017,
          "casos": 4052
        },
        {
          "ano": 2018,
          "casos": 4241
        },
        {
          "ano": 2019,
          "casos": 4332
        },
        {
          "ano": 2020,
          "casos": 3938
        },
        {
          "ano": 2021,
          "casos": 3993
        },
        {
          "ano": 2022,
          "casos": 4719
        },
        {
          "ano": 2023,
          "casos": 5151
        },
        {
          "ano": 2024,
          "casos": 5358
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 5028
        },
        {
          "ano": 2026,
          "casos": 5123
        },
        {
          "ano": 2027,
          "casos": 5218
        },
        {
          "ano": 2028,
          "casos": 5313
        },
        {
          "ano": 2029,
          "casos": 5409
        },
        {
          "ano": 2030,
          "casos": 5504
        },
        {
          "ano": 2031,
          "casos": 5599
        },
        {
          "ano": 2032,
          "casos": 5694
        },
        {
          "ano": 2033,
          "casos": 5789
        },
        {
          "ano": 2034,
          "casos": 5884
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 20.8
        },
        {
          "ano": 2014,
          "taxa": 20.6
        },
        {
          "ano": 2015,
          "taxa": 19.8
        },
        {
          "ano": 2016,
          "taxa": 19.8
        },
        {
          "ano": 2017,
          "taxa": 19.6
        },
        {
          "ano": 2018,
          "taxa": 20.4
        },
        {
          "ano": 2019,
          "taxa": 20.7
        },
        {
          "ano": 2020,
          "taxa": 18.7
        },
        {
          "ano": 2021,
          "taxa": 18.9
        },
        {
          "ano": 2022,
          "taxa": 22.3
        },
        {
          "ano": 2023,
          "taxa": 24.2
        },
        {
          "ano": 2024,
          "taxa": 25.1
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 23.5
        },
        {
          "ano": 2026,
          "taxa": 23.9
        },
        {
          "ano": 2027,
          "taxa": 24.2
        },
        {
          "ano": 2028,
          "taxa": 24.6
        },
        {
          "ano": 2029,
          "taxa": 25.0
        },
        {
          "ano": 2030,
          "taxa": 25.4
        },
        {
          "ano": 2031,
          "taxa": 25.8
        },
        {
          "ano": 2032,
          "taxa": 26.1
        },
        {
          "ano": 2033,
          "taxa": 26.5
        },
        {
          "ano": 2034,
          "taxa": 26.9
        }
      ],
      "taxa_ultimo_ano": 25.1,
      "variacao_taxa_pct": 20.7,
      "populacao_ultimo_ano": 21322691,
      "coeficiente_anual": 95.1,
      "intercepto": -187565.6,
      "r2": 0.576,
      "crescimento_pct_ano": 1.78,
      "crescimento_total_pct": 27.6,
      "casos_ultimo_ano": 5358,
      "backtest_erro_pct": {
        "2022": -12.8,
        "2023": -20.2,
        "2024": -23.4
      },
      "status": "Atenção",
      "sigla": "MG",
      "regiao": "Sudeste"
    },
    "Paraná": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 2650
        },
        {
          "ano": 2014,
          "casos": 2554
        },
        {
          "ano": 2015,
          "casos": 2466
        },
        {
          "ano": 2016,
          "casos": 2436
        },
        {
          "ano": 2017,
          "casos": 2408
        },
        {
          "ano": 2018,
          "casos": 2733
        },
        {
          "ano": 2019,
          "casos": 2667
        },
        {
          "ano": 2020,
          "casos": 2627
        },
        {
          "ano": 2021,
          "casos": 2497
        },
        {
          "ano": 2022,
          "casos": 2798
        },
        {
          "ano": 2023,
          "casos": 2947
        },
        {
          "ano": 2024,
          "casos": 3100
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 2938
        },
        {
          "ano": 2026,
          "casos": 2980
        },
        {
          "ano": 2027,
          "casos": 3022
        },
        {
          "ano": 2028,
          "casos": 3064
        },
        {
          "ano": 2029,
          "casos": 3106
        },
        {
          "ano": 2030,
          "casos": 3148
        },
        {
          "ano": 2031,
          "casos": 3190
        },
        {
          "ano": 2032,
          "casos": 3232
        },
        {
          "ano": 2033,
          "casos": 3274
        },
        {
          "ano": 2034,
          "casos": 3316
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 24.3
        },
        {
          "ano": 2014,
          "taxa": 23.2
        },
        {
          "ano": 2015,
          "taxa": 22.2
        },
        {
          "ano": 2016,
          "taxa": 21.8
        },
        {
          "ano": 2017,
          "taxa": 21.3
        },
        {
          "ano": 2018,
          "taxa": 24.0
        },
        {
          "ano": 2019,
          "taxa": 23.3
        },
        {
          "ano": 2020,
          "taxa": 22.7
        },
        {
          "ano": 2021,
          "taxa": 21.5
        },
        {
          "ano": 2022,
          "taxa": 23.9
        },
        {
          "ano": 2023,
          "taxa": 25.1
        },
        {
          "ano": 2024,
          "taxa": 26.2
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 24.7
        },
        {
          "ano": 2026,
          "taxa": 24.9
        },
        {
          "ano": 2027,
          "taxa": 25.2
        },
        {
          "ano": 2028,
          "taxa": 25.4
        },
        {
          "ano": 2029,
          "taxa": 25.6
        },
        {
          "ano": 2030,
          "taxa": 25.9
        },
        {
          "ano": 2031,
          "taxa": 26.1
        },
        {
          "ano": 2032,
          "taxa": 26.4
        },
        {
          "ano": 2033,
          "taxa": 26.7
        },
        {
          "ano": 2034,
          "taxa": 26.9
        }
      ],
      "taxa_ultimo_ano": 26.2,
      "variacao_taxa_pct": 7.8,
      "populacao_ultimo_ano": 11824665,
      "coeficiente_anual": 42.0,
      "intercepto": -82105.1,
      "r2": 0.506,
      "crescimento_pct_ano": 1.35,
      "crescimento_total_pct": 17.0,
      "casos_ultimo_ano": 3100,
      "backtest_erro_pct": {
        "2022": -8.5,
        "2023": -13.1,
        "2024": -17.3
      },
      "status": "Moderado",
      "sigla": "PR",
      "regiao": "Sul"
    },
    "Paraíba": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 1429
        },
        {
          "ano": 2014,
          "casos": 1312
        },
        {
          "ano": 2015,
          "casos": 1250
        },
        {
          "ano": 2016,
          "casos": 1215
        },
        {
          "ano": 2017,
          "casos": 1342
        },
        {
          "ano": 2018,
          "casos": 1529
        },
        {
          "ano": 2019,
          "casos": 1464
        },
        {
          "ano": 2020,
          "casos": 1299
        },
        {
          "ano": 2021,
          "casos": 1439
        },
        {
          "ano": 2022,
          "casos": 1602
        },
        {
          "ano": 2023,
          "casos": 1775
        },
        {
          "ano": 2024,
          "casos": 1778
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 1748
        },
        {
          "ano": 2026,
          "casos": 1790
        },
        {
          "ano": 2027,
          "casos": 1832
        },
        {
          "ano": 2028,
          "casos": 1875
        },
        {
          "ano": 2029,
          "casos": 1917
        },
        {
          "ano": 2030,
          "casos": 1959
        },
        {
          "ano": 2031,
          "casos": 2002
        },
        {
          "ano": 2032,
          "casos": 2044
        },
        {
          "ano": 2033,
          "casos": 2086
        },
        {
          "ano": 2034,
          "casos": 2129
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 36.8
        },
        {
          "ano": 2014,
          "taxa": 33.6
        },
        {
          "ano": 2015,
          "taxa": 31.8
        },
        {
          "ano": 2016,
          "taxa": 30.7
        },
        {
          "ano": 2017,
          "taxa": 33.7
        },
        {
          "ano": 2018,
          "taxa": 38.1
        },
        {
          "ano": 2019,
          "taxa": 36.3
        },
        {
          "ano": 2020,
          "taxa": 32.0
        },
        {
          "ano": 2021,
          "taxa": 35.2
        },
        {
          "ano": 2022,
          "taxa": 39.0
        },
        {
          "ano": 2023,
          "taxa": 43.0
        },
        {
          "ano": 2024,
          "taxa": 42.9
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 42.0
        },
        {
          "ano": 2026,
          "taxa": 42.8
        },
        {
          "ano": 2027,
          "taxa": 43.6
        },
        {
          "ano": 2028,
          "taxa": 44.5
        },
        {
          "ano": 2029,
          "taxa": 45.3
        },
        {
          "ano": 2030,
          "taxa": 46.1
        },
        {
          "ano": 2031,
          "taxa": 47.0
        },
        {
          "ano": 2032,
          "taxa": 47.8
        },
        {
          "ano": 2033,
          "taxa": 48.7
        },
        {
          "ano": 2034,
          "taxa": 49.6
        }
      ],
      "taxa_ultimo_ano": 42.9,
      "variacao_taxa_pct": 16.6,
      "populacao_ultimo_ano": 4145040,
      "coeficiente_anual": 42.3,
      "intercepto": -83976.8,
      "r2": 0.688,
      "crescimento_pct_ano": 2.38,
      "crescimento_total_pct": 24.4,
      "casos_ultimo_ano": 1778,
      "backtest_erro_pct": {
        "2022": -7.8,
        "2023": -15.7,
        "2024": -14.8
      },
      "status": "Atenção",
      "sigla": "PB",
      "regiao": "Nordeste"
    },
    "Pará": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 4119
        },
        {
          "ano": 2014,
          "casos": 3940
        },
        {
          "ano": 2015,
          "casos": 3991
        },
        {
          "ano": 2016,
          "casos": 4224
        },
        {
          "ano": 2017,
          "casos": 4509
        },
        {
          "ano": 2018,
          "casos": 4669
        },
        {
          "ano": 2019,
          "casos": 5500
        },
        {
          "ano": 2020,
          "casos": 4906
        },
        {
          "ano": 2021,
          "casos": 5267
        },
        {
          "ano": 2022,
          "casos": 5921
        },
        {
          "ano": 2023,
          "casos": 6108
        },
        {
          "ano": 2024,
          "casos": 6782
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 6652
        },
        {
          "ano": 2026,
          "casos": 6900
        },
        {
          "ano": 2027,
          "casos": 7149
        },
        {
          "ano": 2028,
          "casos": 7397
        },
        {
          "ano": 2029,
          "casos": 7646
        },
        {
          "ano": 2030,
          "casos": 7894
        },
        {
          "ano": 2031,
          "casos": 8142
        },
        {
          "ano": 2032,
          "casos": 8391
        },
        {
          "ano": 2033,
          "casos": 8639
        },
        {
          "ano": 2034,
          "casos": 8888
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 51.7
        },
        {
          "ano": 2014,
          "taxa": 49.0
        },
        {
          "ano": 2015,
          "taxa": 49.1
        },
        {
          "ano": 2016,
          "taxa": 51.5
        },
        {
          "ano": 2017,
          "taxa": 54.5
        },
        {
          "ano": 2018,
          "taxa": 56.0
        },
        {
          "ano": 2019,
          "taxa": 65.4
        },
        {
          "ano": 2020,
          "taxa": 58.0
        },
        {
          "ano": 2021,
          "taxa": 61.8
        },
        {
          "ano": 2022,
          "taxa": 69.1
        },
        {
          "ano": 2023,
          "taxa": 70.9
        },
        {
          "ano": 2024,
          "taxa": 78.3
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 76.4
        },
        {
          "ano": 2026,
          "taxa": 78.8
        },
        {
          "ano": 2027,
          "taxa": 81.2
        },
        {
          "ano": 2028,
          "taxa": 83.7
        },
        {
          "ano": 2029,
          "taxa": 86.1
        },
        {
          "ano": 2030,
          "taxa": 88.5
        },
        {
          "ano": 2031,
          "taxa": 90.9
        },
        {
          "ano": 2032,
          "taxa": 93.3
        },
        {
          "ano": 2033,
          "taxa": 95.7
        },
        {
          "ano": 2034,
          "taxa": 98.1
        }
      ],
      "taxa_ultimo_ano": 78.3,
      "variacao_taxa_pct": 51.5,
      "populacao_ultimo_ano": 8664306,
      "coeficiente_anual": 248.5,
      "intercepto": -496496.7,
      "r2": 0.919,
      "crescimento_pct_ano": 3.66,
      "crescimento_total_pct": 64.7,
      "casos_ultimo_ano": 6782,
      "backtest_erro_pct": {
        "2022": -5.7,
        "2023": -5.3,
        "2024": -11.8
      },
      "status": "Crítico",
      "sigla": "PA",
      "regiao": "Norte"
    },
    "Pernambuco": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 5420
        },
        {
          "ano": 2014,
          "casos": 5443
        },
        {
          "ano": 2015,
          "casos": 5649
        },
        {
          "ano": 2016,
          "casos": 5513
        },
        {
          "ano": 2017,
          "casos": 5985
        },
        {
          "ano": 2018,
          "casos": 5956
        },
        {
          "ano": 2019,
          "casos": 6140
        },
        {
          "ano": 2020,
          "casos": 5629
        },
        {
          "ano": 2021,
          "casos": 6091
        },
        {
          "ano": 2022,
          "casos": 7093
        },
        {
          "ano": 2023,
          "casos": 7444
        },
        {
          "ano": 2024,
          "casos": 7455
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 7479
        },
        {
          "ano": 2026,
          "casos": 7672
        },
        {
          "ano": 2027,
          "casos": 7865
        },
        {
          "ano": 2028,
          "casos": 8058
        },
        {
          "ano": 2029,
          "casos": 8251
        },
        {
          "ano": 2030,
          "casos": 8443
        },
        {
          "ano": 2031,
          "casos": 8636
        },
        {
          "ano": 2032,
          "casos": 8829
        },
        {
          "ano": 2033,
          "casos": 9022
        },
        {
          "ano": 2034,
          "casos": 9215
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 59.6
        },
        {
          "ano": 2014,
          "taxa": 59.5
        },
        {
          "ano": 2015,
          "taxa": 61.3
        },
        {
          "ano": 2016,
          "taxa": 59.5
        },
        {
          "ano": 2017,
          "taxa": 64.3
        },
        {
          "ano": 2018,
          "taxa": 63.7
        },
        {
          "ano": 2019,
          "taxa": 65.3
        },
        {
          "ano": 2020,
          "taxa": 59.6
        },
        {
          "ano": 2021,
          "taxa": 64.3
        },
        {
          "ano": 2022,
          "taxa": 74.7
        },
        {
          "ano": 2023,
          "taxa": 78.2
        },
        {
          "ano": 2024,
          "taxa": 78.2
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 78.2
        },
        {
          "ano": 2026,
          "taxa": 80.1
        },
        {
          "ano": 2027,
          "taxa": 81.9
        },
        {
          "ano": 2028,
          "taxa": 83.8
        },
        {
          "ano": 2029,
          "taxa": 85.6
        },
        {
          "ano": 2030,
          "taxa": 87.5
        },
        {
          "ano": 2031,
          "taxa": 89.3
        },
        {
          "ano": 2032,
          "taxa": 91.2
        },
        {
          "ano": 2033,
          "taxa": 93.1
        },
        {
          "ano": 2034,
          "taxa": 95.0
        }
      ],
      "taxa_ultimo_ano": 78.2,
      "variacao_taxa_pct": 31.2,
      "populacao_ultimo_ano": 9539029,
      "coeficiente_anual": 192.9,
      "intercepto": -383111.5,
      "r2": 0.872,
      "crescimento_pct_ano": 2.59,
      "crescimento_total_pct": 37.5,
      "casos_ultimo_ano": 7455,
      "backtest_erro_pct": {
        "2022": -10.8,
        "2023": -13.7,
        "2024": -12.4
      },
      "status": "Crítico",
      "sigla": "PE",
      "regiao": "Nordeste"
    },
    "Piauí": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 908
        },
        {
          "ano": 2014,
          "casos": 813
        },
        {
          "ano": 2015,
          "casos": 754
        },
        {
          "ano": 2016,
          "casos": 812
        },
        {
          "ano": 2017,
          "casos": 790
        },
        {
          "ano": 2018,
          "casos": 892
        },
        {
          "ano": 2019,
          "casos": 873
        },
        {
          "ano": 2020,
          "casos": 797
        },
        {
          "ano": 2021,
          "casos": 889
        },
        {
          "ano": 2022,
          "casos": 925
        },
        {
          "ano": 2023,
          "casos": 1053
        },
        {
          "ano": 2024,
          "casos": 1033
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 1013
        },
        {
          "ano": 2026,
          "casos": 1032
        },
        {
          "ano": 2027,
          "casos": 1051
        },
        {
          "ano": 2028,
          "casos": 1070
        },
        {
          "ano": 2029,
          "casos": 1089
        },
        {
          "ano": 2030,
          "casos": 1109
        },
        {
          "ano": 2031,
          "casos": 1128
        },
        {
          "ano": 2032,
          "casos": 1147
        },
        {
          "ano": 2033,
          "casos": 1166
        },
        {
          "ano": 2034,
          "casos": 1185
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 28.1
        },
        {
          "ano": 2014,
          "taxa": 25.1
        },
        {
          "ano": 2015,
          "taxa": 23.2
        },
        {
          "ano": 2016,
          "taxa": 24.8
        },
        {
          "ano": 2017,
          "taxa": 24.0
        },
        {
          "ano": 2018,
          "taxa": 27.0
        },
        {
          "ano": 2019,
          "taxa": 26.3
        },
        {
          "ano": 2020,
          "taxa": 23.9
        },
        {
          "ano": 2021,
          "taxa": 26.6
        },
        {
          "ano": 2022,
          "taxa": 27.6
        },
        {
          "ano": 2023,
          "taxa": 31.3
        },
        {
          "ano": 2024,
          "taxa": 30.6
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 29.9
        },
        {
          "ano": 2026,
          "taxa": 30.4
        },
        {
          "ano": 2027,
          "taxa": 30.9
        },
        {
          "ano": 2028,
          "taxa": 31.4
        },
        {
          "ano": 2029,
          "taxa": 31.9
        },
        {
          "ano": 2030,
          "taxa": 32.4
        },
        {
          "ano": 2031,
          "taxa": 33.0
        },
        {
          "ano": 2032,
          "taxa": 33.5
        },
        {
          "ano": 2033,
          "taxa": 34.0
        },
        {
          "ano": 2034,
          "taxa": 34.6
        }
      ],
      "taxa_ultimo_ano": 30.6,
      "variacao_taxa_pct": 8.9,
      "populacao_ultimo_ano": 3375646,
      "coeficiente_anual": 19.2,
      "intercepto": -37780.5,
      "r2": 0.579,
      "crescimento_pct_ano": 1.85,
      "crescimento_total_pct": 13.8,
      "casos_ultimo_ano": 1033,
      "backtest_erro_pct": {
        "2022": -5.2,
        "2023": -16.1,
        "2024": -13.9
      },
      "status": "Atenção",
      "sigla": "PI",
      "regiao": "Nordeste"
    },
    "Rio Grande do Norte": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 1273
        },
        {
          "ano": 2014,
          "casos": 1187
        },
        {
          "ano": 2015,
          "casos": 1156
        },
        {
          "ano": 2016,
          "casos": 1182
        },
        {
          "ano": 2017,
          "casos": 1357
        },
        {
          "ano": 2018,
          "casos": 1630
        },
        {
          "ano": 2019,
          "casos": 1426
        },
        {
          "ano": 2020,
          "casos": 1638
        },
        {
          "ano": 2021,
          "casos": 1360
        },
        {
          "ano": 2022,
          "casos": 1752
        },
        {
          "ano": 2023,
          "casos": 1483
        },
        {
          "ano": 2024,
          "casos": 1483
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 1624
        },
        {
          "ano": 2026,
          "casos": 1660
        },
        {
          "ano": 2027,
          "casos": 1695
        },
        {
          "ano": 2028,
          "casos": 1730
        },
        {
          "ano": 2029,
          "casos": 1766
        },
        {
          "ano": 2030,
          "casos": 1801
        },
        {
          "ano": 2031,
          "casos": 1836
        },
        {
          "ano": 2032,
          "casos": 1872
        },
        {
          "ano": 2033,
          "casos": 1907
        },
        {
          "ano": 2034,
          "casos": 1942
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 38.9
        },
        {
          "ano": 2014,
          "taxa": 36.0
        },
        {
          "ano": 2015,
          "taxa": 34.8
        },
        {
          "ano": 2016,
          "taxa": 35.4
        },
        {
          "ano": 2017,
          "taxa": 40.4
        },
        {
          "ano": 2018,
          "taxa": 48.3
        },
        {
          "ano": 2019,
          "taxa": 42.0
        },
        {
          "ano": 2020,
          "taxa": 48.1
        },
        {
          "ano": 2021,
          "taxa": 39.8
        },
        {
          "ano": 2022,
          "taxa": 51.1
        },
        {
          "ano": 2023,
          "taxa": 43.2
        },
        {
          "ano": 2024,
          "taxa": 43.0
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 47.0
        },
        {
          "ano": 2026,
          "taxa": 47.9
        },
        {
          "ano": 2027,
          "taxa": 48.8
        },
        {
          "ano": 2028,
          "taxa": 49.7
        },
        {
          "ano": 2029,
          "taxa": 50.7
        },
        {
          "ano": 2030,
          "taxa": 51.6
        },
        {
          "ano": 2031,
          "taxa": 52.5
        },
        {
          "ano": 2032,
          "taxa": 53.4
        },
        {
          "ano": 2033,
          "taxa": 54.4
        },
        {
          "ano": 2034,
          "taxa": 55.3
        }
      ],
      "taxa_ultimo_ano": 43.0,
      "variacao_taxa_pct": 10.5,
      "populacao_ultimo_ano": 3446071,
      "coeficiente_anual": 35.3,
      "intercepto": -69917.3,
      "r2": 0.484,
      "crescimento_pct_ano": 2.38,
      "crescimento_total_pct": 16.5,
      "casos_ultimo_ano": 1483,
      "backtest_erro_pct": {
        "2022": -13.9,
        "2023": 4.1,
        "2024": 6.4
      },
      "status": "Atenção",
      "sigla": "RN",
      "regiao": "Nordeste"
    },
    "Rio Grande do Sul": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 6348
        },
        {
          "ano": 2014,
          "casos": 6372
        },
        {
          "ano": 2015,
          "casos": 6380
        },
        {
          "ano": 2016,
          "casos": 6043
        },
        {
          "ano": 2017,
          "casos": 6310
        },
        {
          "ano": 2018,
          "casos": 6482
        },
        {
          "ano": 2019,
          "casos": 6993
        },
        {
          "ano": 2020,
          "casos": 6045
        },
        {
          "ano": 2021,
          "casos": 6295
        },
        {
          "ano": 2022,
          "casos": 6935
        },
        {
          "ano": 2023,
          "casos": 7383
        },
        {
          "ano": 2024,
          "casos": 7479
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 7304
        },
        {
          "ano": 2026,
          "casos": 7404
        },
        {
          "ano": 2027,
          "casos": 7504
        },
        {
          "ano": 2028,
          "casos": 7604
        },
        {
          "ano": 2029,
          "casos": 7705
        },
        {
          "ano": 2030,
          "casos": 7805
        },
        {
          "ano": 2031,
          "casos": 7905
        },
        {
          "ano": 2032,
          "casos": 8005
        },
        {
          "ano": 2033,
          "casos": 8106
        },
        {
          "ano": 2034,
          "casos": 8206
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 57.8
        },
        {
          "ano": 2014,
          "taxa": 57.8
        },
        {
          "ano": 2015,
          "taxa": 57.6
        },
        {
          "ano": 2016,
          "taxa": 54.4
        },
        {
          "ano": 2017,
          "taxa": 56.6
        },
        {
          "ano": 2018,
          "taxa": 58.0
        },
        {
          "ano": 2019,
          "taxa": 62.5
        },
        {
          "ano": 2020,
          "taxa": 53.9
        },
        {
          "ano": 2021,
          "taxa": 56.1
        },
        {
          "ano": 2022,
          "taxa": 61.8
        },
        {
          "ano": 2023,
          "taxa": 65.8
        },
        {
          "ano": 2024,
          "taxa": 66.6
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 65.0
        },
        {
          "ano": 2026,
          "taxa": 65.9
        },
        {
          "ano": 2027,
          "taxa": 66.8
        },
        {
          "ano": 2028,
          "taxa": 67.7
        },
        {
          "ano": 2029,
          "taxa": 68.7
        },
        {
          "ano": 2030,
          "taxa": 69.7
        },
        {
          "ano": 2031,
          "taxa": 70.6
        },
        {
          "ano": 2032,
          "taxa": 71.7
        },
        {
          "ano": 2033,
          "taxa": 72.7
        },
        {
          "ano": 2034,
          "taxa": 73.7
        }
      ],
      "taxa_ultimo_ano": 66.6,
      "variacao_taxa_pct": 15.2,
      "populacao_ultimo_ano": 11229915,
      "coeficiente_anual": 100.3,
      "intercepto": -195711.3,
      "r2": 0.614,
      "crescimento_pct_ano": 1.34,
      "crescimento_total_pct": 17.8,
      "casos_ultimo_ano": 7479,
      "backtest_erro_pct": {
        "2022": -5.3,
        "2023": -10.6,
        "2024": -11.3
      },
      "status": "Moderado",
      "sigla": "RS",
      "regiao": "Sul"
    },
    "Rio de Janeiro": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 13349
        },
        {
          "ano": 2014,
          "casos": 13095
        },
        {
          "ano": 2015,
          "casos": 13367
        },
        {
          "ano": 2016,
          "casos": 13645
        },
        {
          "ano": 2017,
          "casos": 13929
        },
        {
          "ano": 2018,
          "casos": 14857
        },
        {
          "ano": 2019,
          "casos": 15024
        },
        {
          "ano": 2020,
          "casos": 13710
        },
        {
          "ano": 2021,
          "casos": 15086
        },
        {
          "ano": 2022,
          "casos": 16097
        },
        {
          "ano": 2023,
          "casos": 16940
        },
        {
          "ano": 2024,
          "casos": 17121
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 17255
        },
        {
          "ano": 2026,
          "casos": 17629
        },
        {
          "ano": 2027,
          "casos": 18003
        },
        {
          "ano": 2028,
          "casos": 18377
        },
        {
          "ano": 2029,
          "casos": 18751
        },
        {
          "ano": 2030,
          "casos": 19125
        },
        {
          "ano": 2031,
          "casos": 19499
        },
        {
          "ano": 2032,
          "casos": 19873
        },
        {
          "ano": 2033,
          "casos": 20247
        },
        {
          "ano": 2034,
          "casos": 20621
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 79.5
        },
        {
          "ano": 2014,
          "taxa": 77.5
        },
        {
          "ano": 2015,
          "taxa": 78.8
        },
        {
          "ano": 2016,
          "taxa": 80.1
        },
        {
          "ano": 2017,
          "taxa": 81.5
        },
        {
          "ano": 2018,
          "taxa": 86.6
        },
        {
          "ano": 2019,
          "taxa": 87.4
        },
        {
          "ano": 2020,
          "taxa": 79.6
        },
        {
          "ano": 2021,
          "taxa": 87.6
        },
        {
          "ano": 2022,
          "taxa": 93.5
        },
        {
          "ano": 2023,
          "taxa": 98.4
        },
        {
          "ano": 2024,
          "taxa": 99.4
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 100.2
        },
        {
          "ano": 2026,
          "taxa": 102.3
        },
        {
          "ano": 2027,
          "taxa": 104.5
        },
        {
          "ano": 2028,
          "taxa": 106.7
        },
        {
          "ano": 2029,
          "taxa": 108.9
        },
        {
          "ano": 2030,
          "taxa": 111.1
        },
        {
          "ano": 2031,
          "taxa": 113.3
        },
        {
          "ano": 2032,
          "taxa": 115.5
        },
        {
          "ano": 2033,
          "taxa": 117.8
        },
        {
          "ano": 2034,
          "taxa": 120.1
        }
      ],
      "taxa_ultimo_ano": 99.4,
      "variacao_taxa_pct": 25.0,
      "populacao_ultimo_ano": 17219679,
      "coeficiente_anual": 373.9,
      "intercepto": -739986.0,
      "r2": 0.939,
      "crescimento_pct_ano": 2.18,
      "crescimento_total_pct": 28.3,
      "casos_ultimo_ano": 17121,
      "backtest_erro_pct": {
        "2022": -3.2,
        "2023": -6.3,
        "2024": -5.6
      },
      "status": "Crítico",
      "sigla": "RJ",
      "regiao": "Sudeste"
    },
    "Rondônia": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 711
        },
        {
          "ano": 2014,
          "casos": 686
        },
        {
          "ano": 2015,
          "casos": 665
        },
        {
          "ano": 2016,
          "casos": 775
        },
        {
          "ano": 2017,
          "casos": 776
        },
        {
          "ano": 2018,
          "casos": 674
        },
        {
          "ano": 2019,
          "casos": 742
        },
        {
          "ano": 2020,
          "casos": 598
        },
        {
          "ano": 2021,
          "casos": 671
        },
        {
          "ano": 2022,
          "casos": 729
        },
        {
          "ano": 2023,
          "casos": 892
        },
        {
          "ano": 2024,
          "casos": 951
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 856
        },
        {
          "ano": 2026,
          "casos": 872
        },
        {
          "ano": 2027,
          "casos": 888
        },
        {
          "ano": 2028,
          "casos": 903
        },
        {
          "ano": 2029,
          "casos": 919
        },
        {
          "ano": 2030,
          "casos": 935
        },
        {
          "ano": 2031,
          "casos": 951
        },
        {
          "ano": 2032,
          "casos": 966
        },
        {
          "ano": 2033,
          "casos": 982
        },
        {
          "ano": 2034,
          "casos": 998
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 43.5
        },
        {
          "ano": 2014,
          "taxa": 41.5
        },
        {
          "ano": 2015,
          "taxa": 39.9
        },
        {
          "ano": 2016,
          "taxa": 46.1
        },
        {
          "ano": 2017,
          "taxa": 45.9
        },
        {
          "ano": 2018,
          "taxa": 39.6
        },
        {
          "ano": 2019,
          "taxa": 43.3
        },
        {
          "ano": 2020,
          "taxa": 34.7
        },
        {
          "ano": 2021,
          "taxa": 38.8
        },
        {
          "ano": 2022,
          "taxa": 42.0
        },
        {
          "ano": 2023,
          "taxa": 51.3
        },
        {
          "ano": 2024,
          "taxa": 54.5
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 48.9
        },
        {
          "ano": 2026,
          "taxa": 49.6
        },
        {
          "ano": 2027,
          "taxa": 50.4
        },
        {
          "ano": 2028,
          "taxa": 51.1
        },
        {
          "ano": 2029,
          "taxa": 51.9
        },
        {
          "ano": 2030,
          "taxa": 52.6
        },
        {
          "ano": 2031,
          "taxa": 53.4
        },
        {
          "ano": 2032,
          "taxa": 54.2
        },
        {
          "ano": 2033,
          "taxa": 55.0
        },
        {
          "ano": 2034,
          "taxa": 55.8
        }
      ],
      "taxa_ultimo_ano": 54.5,
      "variacao_taxa_pct": 25.3,
      "populacao_ultimo_ano": 1746227,
      "coeficiente_anual": 15.7,
      "intercepto": -30971.3,
      "r2": 0.398,
      "crescimento_pct_ano": 1.65,
      "crescimento_total_pct": 33.8,
      "casos_ultimo_ano": 951,
      "backtest_erro_pct": {
        "2022": -2.7,
        "2023": -20.5,
        "2024": -25.5
      },
      "status": "Atenção",
      "sigla": "RO",
      "regiao": "Norte"
    },
    "Roraima": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 167
        },
        {
          "ano": 2014,
          "casos": 148
        },
        {
          "ano": 2015,
          "casos": 174
        },
        {
          "ano": 2016,
          "casos": 160
        },
        {
          "ano": 2017,
          "casos": 205
        },
        {
          "ano": 2018,
          "casos": 269
        },
        {
          "ano": 2019,
          "casos": 303
        },
        {
          "ano": 2020,
          "casos": 332
        },
        {
          "ano": 2021,
          "casos": 377
        },
        {
          "ano": 2022,
          "casos": 487
        },
        {
          "ano": 2023,
          "casos": 580
        },
        {
          "ano": 2024,
          "casos": 553
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 589
        },
        {
          "ano": 2026,
          "casos": 631
        },
        {
          "ano": 2027,
          "casos": 673
        },
        {
          "ano": 2028,
          "casos": 714
        },
        {
          "ano": 2029,
          "casos": 756
        },
        {
          "ano": 2030,
          "casos": 798
        },
        {
          "ano": 2031,
          "casos": 840
        },
        {
          "ano": 2032,
          "casos": 882
        },
        {
          "ano": 2033,
          "casos": 924
        },
        {
          "ano": 2034,
          "casos": 966
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 32.9
        },
        {
          "ano": 2014,
          "taxa": 28.4
        },
        {
          "ano": 2015,
          "taxa": 32.6
        },
        {
          "ano": 2016,
          "taxa": 29.2
        },
        {
          "ano": 2017,
          "taxa": 36.3
        },
        {
          "ano": 2018,
          "taxa": 45.8
        },
        {
          "ano": 2019,
          "taxa": 49.0
        },
        {
          "ano": 2020,
          "taxa": 51.8
        },
        {
          "ano": 2021,
          "taxa": 57.6
        },
        {
          "ano": 2022,
          "taxa": 72.3
        },
        {
          "ano": 2023,
          "taxa": 83.4
        },
        {
          "ano": 2024,
          "taxa": 77.1
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 79.7
        },
        {
          "ano": 2026,
          "taxa": 82.9
        },
        {
          "ano": 2027,
          "taxa": 85.8
        },
        {
          "ano": 2028,
          "taxa": 88.6
        },
        {
          "ano": 2029,
          "taxa": 91.2
        },
        {
          "ano": 2030,
          "taxa": 93.6
        },
        {
          "ano": 2031,
          "taxa": 95.9
        },
        {
          "ano": 2032,
          "taxa": 98.3
        },
        {
          "ano": 2033,
          "taxa": 100.7
        },
        {
          "ano": 2034,
          "taxa": 103.2
        }
      ],
      "taxa_ultimo_ano": 77.1,
      "variacao_taxa_pct": 134.3,
      "populacao_ultimo_ano": 716793,
      "coeficiente_anual": 41.8,
      "intercepto": -84149.4,
      "r2": 0.918,
      "crescimento_pct_ano": 7.57,
      "crescimento_total_pct": 231.1,
      "casos_ultimo_ano": 553,
      "backtest_erro_pct": {
        "2022": -21.9,
        "2023": -29.4,
        "2024": -20.8
      },
      "status": "Crítico",
      "sigla": "RR",
      "regiao": "Norte"
    },
    "Santa Catarina": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 2268
        },
        {
          "ano": 2014,
          "casos": 2248
        },
        {
          "ano": 2015,
          "casos": 2180
        },
        {
          "ano": 2016,
          "casos": 2199
        },
        {
          "ano": 2017,
          "casos": 2204
        },
        {
          "ano": 2018,
          "casos": 2261
        },
        {
          "ano": 2019,
          "casos": 2237
        },
        {
          "ano": 2020,
          "casos": 1836
        },
        {
          "ano": 2021,
          "casos": 2072
        },
        {
          "ano": 2022,
          "casos": 2528
        },
        {
          "ano": 2023,
          "casos": 2795
        },
        {
          "ano": 2024,
          "casos": 2849
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 2669
        },
        {
          "ano": 2026,
          "casos": 2717
        },
        {
          "ano": 2027,
          "casos": 2765
        },
        {
          "ano": 2028,
          "casos": 2813
        },
        {
          "ano": 2029,
          "casos": 2861
        },
        {
          "ano": 2030,
          "casos": 2909
        },
        {
          "ano": 2031,
          "casos": 2957
        },
        {
          "ano": 2032,
          "casos": 3005
        },
        {
          "ano": 2033,
          "casos": 3054
        },
        {
          "ano": 2034,
          "casos": 3102
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 34.1
        },
        {
          "ano": 2014,
          "taxa": 33.2
        },
        {
          "ano": 2015,
          "taxa": 31.6
        },
        {
          "ano": 2016,
          "taxa": 31.4
        },
        {
          "ano": 2017,
          "taxa": 30.9
        },
        {
          "ano": 2018,
          "taxa": 31.1
        },
        {
          "ano": 2019,
          "taxa": 30.2
        },
        {
          "ano": 2020,
          "taxa": 24.3
        },
        {
          "ano": 2021,
          "taxa": 27.0
        },
        {
          "ano": 2022,
          "taxa": 32.4
        },
        {
          "ano": 2023,
          "taxa": 35.3
        },
        {
          "ano": 2024,
          "taxa": 35.4
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 32.6
        },
        {
          "ano": 2026,
          "taxa": 32.7
        },
        {
          "ano": 2027,
          "taxa": 32.8
        },
        {
          "ano": 2028,
          "taxa": 32.9
        },
        {
          "ano": 2029,
          "taxa": 33.0
        },
        {
          "ano": 2030,
          "taxa": 33.1
        },
        {
          "ano": 2031,
          "taxa": 33.2
        },
        {
          "ano": 2032,
          "taxa": 33.4
        },
        {
          "ano": 2033,
          "taxa": 33.5
        },
        {
          "ano": 2034,
          "taxa": 33.7
        }
      ],
      "taxa_ultimo_ano": 35.4,
      "variacao_taxa_pct": 3.8,
      "populacao_ultimo_ano": 8058441,
      "coeficiente_anual": 48.1,
      "intercepto": -94777.7,
      "r2": 0.488,
      "crescimento_pct_ano": 1.69,
      "crescimento_total_pct": 25.6,
      "casos_ultimo_ano": 2849,
      "backtest_erro_pct": {
        "2022": -15.7,
        "2023": -24.3,
        "2024": -26.2
      },
      "status": "Atenção",
      "sigla": "SC",
      "regiao": "Sul"
    },
    "Sergipe": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 710
        },
        {
          "ano": 2014,
          "casos": 788
        },
        {
          "ano": 2015,
          "casos": 771
        },
        {
          "ano": 2016,
          "casos": 800
        },
        {
          "ano": 2017,
          "casos": 833
        },
        {
          "ano": 2018,
          "casos": 986
        },
        {
          "ano": 2019,
          "casos": 1011
        },
        {
          "ano": 2020,
          "casos": 884
        },
        {
          "ano": 2021,
          "casos": 903
        },
        {
          "ano": 2022,
          "casos": 1182
        },
        {
          "ano": 2023,
          "casos": 1156
        },
        {
          "ano": 2024,
          "casos": 1032
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 1174
        },
        {
          "ano": 2026,
          "casos": 1211
        },
        {
          "ano": 2027,
          "casos": 1249
        },
        {
          "ano": 2028,
          "casos": 1286
        },
        {
          "ano": 2029,
          "casos": 1324
        },
        {
          "ano": 2030,
          "casos": 1361
        },
        {
          "ano": 2031,
          "casos": 1399
        },
        {
          "ano": 2032,
          "casos": 1436
        },
        {
          "ano": 2033,
          "casos": 1474
        },
        {
          "ano": 2034,
          "casos": 1511
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 33.1
        },
        {
          "ano": 2014,
          "taxa": 36.4
        },
        {
          "ano": 2015,
          "taxa": 35.3
        },
        {
          "ano": 2016,
          "taxa": 36.4
        },
        {
          "ano": 2017,
          "taxa": 37.6
        },
        {
          "ano": 2018,
          "taxa": 44.3
        },
        {
          "ano": 2019,
          "taxa": 45.1
        },
        {
          "ano": 2020,
          "taxa": 39.2
        },
        {
          "ano": 2021,
          "taxa": 39.9
        },
        {
          "ano": 2022,
          "taxa": 52.0
        },
        {
          "ano": 2023,
          "taxa": 50.7
        },
        {
          "ano": 2024,
          "taxa": 45.0
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 51.0
        },
        {
          "ano": 2026,
          "taxa": 52.5
        },
        {
          "ano": 2027,
          "taxa": 54.0
        },
        {
          "ano": 2028,
          "taxa": 55.4
        },
        {
          "ano": 2029,
          "taxa": 56.9
        },
        {
          "ano": 2030,
          "taxa": 58.3
        },
        {
          "ano": 2031,
          "taxa": 59.8
        },
        {
          "ano": 2032,
          "taxa": 61.3
        },
        {
          "ano": 2033,
          "taxa": 62.7
        },
        {
          "ano": 2034,
          "taxa": 64.2
        }
      ],
      "taxa_ultimo_ano": 45.0,
      "variacao_taxa_pct": 36.0,
      "populacao_ultimo_ano": 2291077,
      "coeficiente_anual": 37.5,
      "intercepto": -74801.8,
      "r2": 0.775,
      "crescimento_pct_ano": 3.64,
      "crescimento_total_pct": 45.4,
      "casos_ultimo_ano": 1032,
      "backtest_erro_pct": {
        "2022": -13.3,
        "2023": -8.5,
        "2024": 5.7
      },
      "status": "Atenção",
      "sigla": "SE",
      "regiao": "Nordeste"
    },
    "São Paulo": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 19534
        },
        {
          "ano": 2014,
          "casos": 19979
        },
        {
          "ano": 2015,
          "casos": 20386
        },
        {
          "ano": 2016,
          "casos": 20589
        },
        {
          "ano": 2017,
          "casos": 21860
        },
        {
          "ano": 2018,
          "casos": 22445
        },
        {
          "ano": 2019,
          "casos": 21787
        },
        {
          "ano": 2020,
          "casos": 19512
        },
        {
          "ano": 2021,
          "casos": 20009
        },
        {
          "ano": 2022,
          "casos": 22952
        },
        {
          "ano": 2023,
          "casos": 24922
        },
        {
          "ano": 2024,
          "casos": 25854
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 24878
        },
        {
          "ano": 2026,
          "casos": 25334
        },
        {
          "ano": 2027,
          "casos": 25791
        },
        {
          "ano": 2028,
          "casos": 26248
        },
        {
          "ano": 2029,
          "casos": 26705
        },
        {
          "ano": 2030,
          "casos": 27161
        },
        {
          "ano": 2031,
          "casos": 27618
        },
        {
          "ano": 2032,
          "casos": 28075
        },
        {
          "ano": 2033,
          "casos": 28531
        },
        {
          "ano": 2034,
          "casos": 28988
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 44.9
        },
        {
          "ano": 2014,
          "taxa": 45.5
        },
        {
          "ano": 2015,
          "taxa": 46.1
        },
        {
          "ano": 2016,
          "taxa": 46.2
        },
        {
          "ano": 2017,
          "taxa": 48.8
        },
        {
          "ano": 2018,
          "taxa": 49.8
        },
        {
          "ano": 2019,
          "taxa": 48.1
        },
        {
          "ano": 2020,
          "taxa": 42.9
        },
        {
          "ano": 2021,
          "taxa": 43.8
        },
        {
          "ano": 2022,
          "taxa": 50.2
        },
        {
          "ano": 2023,
          "taxa": 54.4
        },
        {
          "ano": 2024,
          "taxa": 56.2
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 54.0
        },
        {
          "ano": 2026,
          "taxa": 54.9
        },
        {
          "ano": 2027,
          "taxa": 55.7
        },
        {
          "ano": 2028,
          "taxa": 56.6
        },
        {
          "ano": 2029,
          "taxa": 57.5
        },
        {
          "ano": 2030,
          "taxa": 58.4
        },
        {
          "ano": 2031,
          "taxa": 59.4
        },
        {
          "ano": 2032,
          "taxa": 60.3
        },
        {
          "ano": 2033,
          "taxa": 61.2
        },
        {
          "ano": 2034,
          "taxa": 62.2
        }
      ],
      "taxa_ultimo_ano": 56.2,
      "variacao_taxa_pct": 25.2,
      "populacao_ultimo_ano": 45973194,
      "coeficiente_anual": 456.7,
      "intercepto": -899923.7,
      "r2": 0.681,
      "crescimento_pct_ano": 1.77,
      "crescimento_total_pct": 32.4,
      "casos_ultimo_ano": 25854,
      "backtest_erro_pct": {
        "2022": -5.0,
        "2023": -11.8,
        "2024": -14.3
      },
      "status": "Atenção",
      "sigla": "SP",
      "regiao": "Sudeste"
    },
    "Tocantins": {
      "grupo": "Estado",
      "historico": [
        {
          "ano": 2013,
          "casos": 194
        },
        {
          "ano": 2014,
          "casos": 186
        },
        {
          "ano": 2015,
          "casos": 193
        },
        {
          "ano": 2016,
          "casos": 210
        },
        {
          "ano": 2017,
          "casos": 186
        },
        {
          "ano": 2018,
          "casos": 230
        },
        {
          "ano": 2019,
          "casos": 236
        },
        {
          "ano": 2020,
          "casos": 203
        },
        {
          "ano": 2021,
          "casos": 259
        },
        {
          "ano": 2022,
          "casos": 259
        },
        {
          "ano": 2023,
          "casos": 243
        },
        {
          "ano": 2024,
          "casos": 247
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 267
        },
        {
          "ano": 2026,
          "casos": 274
        },
        {
          "ano": 2027,
          "casos": 281
        },
        {
          "ano": 2028,
          "casos": 288
        },
        {
          "ano": 2029,
          "casos": 295
        },
        {
          "ano": 2030,
          "casos": 301
        },
        {
          "ano": 2031,
          "casos": 308
        },
        {
          "ano": 2032,
          "casos": 315
        },
        {
          "ano": 2033,
          "casos": 322
        },
        {
          "ano": 2034,
          "casos": 329
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 13.5
        },
        {
          "ano": 2014,
          "taxa": 12.8
        },
        {
          "ano": 2015,
          "taxa": 13.1
        },
        {
          "ano": 2016,
          "taxa": 14.1
        },
        {
          "ano": 2017,
          "taxa": 12.4
        },
        {
          "ano": 2018,
          "taxa": 15.2
        },
        {
          "ano": 2019,
          "taxa": 15.5
        },
        {
          "ano": 2020,
          "taxa": 13.2
        },
        {
          "ano": 2021,
          "taxa": 16.7
        },
        {
          "ano": 2022,
          "taxa": 16.6
        },
        {
          "ano": 2023,
          "taxa": 15.5
        },
        {
          "ano": 2024,
          "taxa": 15.7
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 16.8
        },
        {
          "ano": 2026,
          "taxa": 17.2
        },
        {
          "ano": 2027,
          "taxa": 17.5
        },
        {
          "ano": 2028,
          "taxa": 17.8
        },
        {
          "ano": 2029,
          "taxa": 18.2
        },
        {
          "ano": 2030,
          "taxa": 18.5
        },
        {
          "ano": 2031,
          "taxa": 18.8
        },
        {
          "ano": 2032,
          "taxa": 19.2
        },
        {
          "ano": 2033,
          "taxa": 19.5
        },
        {
          "ano": 2034,
          "taxa": 19.9
        }
      ],
      "taxa_ultimo_ano": 15.7,
      "variacao_taxa_pct": 16.3,
      "populacao_ultimo_ano": 1577342,
      "coeficiente_anual": 6.8,
      "intercepto": -13544.8,
      "r2": 0.776,
      "crescimento_pct_ano": 2.76,
      "crescimento_total_pct": 27.3,
      "casos_ultimo_ano": 247,
      "backtest_erro_pct": {
        "2022": 0.2,
        "2023": 10.5,
        "2024": 12.3
      },
      "status": "Atenção",
      "sigla": "TO",
      "regiao": "Norte"
    },
    "Masculino": {
      "grupo": "Sexo",
      "historico": [
        {
          "ano": 2013,
          "casos": 58271
        },
        {
          "ano": 2014,
          "casos": 58081
        },
        {
          "ano": 2015,
          "casos": 59012
        },
        {
          "ano": 2016,
          "casos": 59680
        },
        {
          "ano": 2017,
          "casos": 63375
        },
        {
          "ano": 2018,
          "casos": 66291
        },
        {
          "ano": 2019,
          "casos": 67110
        },
        {
          "ano": 2020,
          "casos": 60719
        },
        {
          "ano": 2021,
          "casos": 64243
        },
        {
          "ano": 2022,
          "casos": 72622
        },
        {
          "ano": 2023,
          "casos": 77712
        },
        {
          "ano": 2024,
          "casos": 79395
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 78630
        },
        {
          "ano": 2026,
          "casos": 80536
        },
        {
          "ano": 2027,
          "casos": 82442
        },
        {
          "ano": 2028,
          "casos": 84348
        },
        {
          "ano": 2029,
          "casos": 86254
        },
        {
          "ano": 2030,
          "casos": 88160
        },
        {
          "ano": 2031,
          "casos": 90066
        },
        {
          "ano": 2032,
          "casos": 91972
        },
        {
          "ano": 2033,
          "casos": 93878
        },
        {
          "ano": 2034,
          "casos": 95784
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 59.8
        },
        {
          "ano": 2014,
          "taxa": 59.2
        },
        {
          "ano": 2015,
          "taxa": 59.7
        },
        {
          "ano": 2016,
          "taxa": 59.9
        },
        {
          "ano": 2017,
          "taxa": 63.2
        },
        {
          "ano": 2018,
          "taxa": 65.7
        },
        {
          "ano": 2019,
          "taxa": 66.1
        },
        {
          "ano": 2020,
          "taxa": 59.4
        },
        {
          "ano": 2021,
          "taxa": 62.6
        },
        {
          "ano": 2022,
          "taxa": 70.6
        },
        {
          "ano": 2023,
          "taxa": 75.3
        },
        {
          "ano": 2024,
          "taxa": 76.6
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 75.6
        },
        {
          "ano": 2026,
          "taxa": 77.1
        },
        {
          "ano": 2027,
          "taxa": 78.7
        },
        {
          "ano": 2028,
          "taxa": 80.3
        },
        {
          "ano": 2029,
          "taxa": 81.9
        },
        {
          "ano": 2030,
          "taxa": 83.4
        },
        {
          "ano": 2031,
          "taxa": 85.0
        },
        {
          "ano": 2032,
          "taxa": 86.6
        },
        {
          "ano": 2033,
          "taxa": 88.3
        },
        {
          "ano": 2034,
          "taxa": 89.9
        }
      ],
      "taxa_ultimo_ano": 76.6,
      "variacao_taxa_pct": 28.1,
      "populacao_ultimo_ano": 103662286,
      "coeficiente_anual": 1906.0,
      "intercepto": -3781063.1,
      "r2": 0.876,
      "crescimento_pct_ano": 2.4,
      "crescimento_total_pct": 36.3,
      "casos_ultimo_ano": 79395,
      "backtest_erro_pct": {
        "2022": -5.9,
        "2023": -10.6,
        "2024": -11.0
      },
      "status": "Crítico"
    },
    "Feminino": {
      "grupo": "Sexo",
      "historico": [
        {
          "ano": 2013,
          "casos": 27933
        },
        {
          "ano": 2014,
          "casos": 27130
        },
        {
          "ano": 2015,
          "casos": 26445
        },
        {
          "ano": 2016,
          "casos": 26527
        },
        {
          "ano": 2017,
          "casos": 26915
        },
        {
          "ano": 2018,
          "casos": 28436
        },
        {
          "ano": 2019,
          "casos": 28731
        },
        {
          "ano": 2020,
          "casos": 25435
        },
        {
          "ano": 2021,
          "casos": 27160
        },
        {
          "ano": 2022,
          "casos": 30748
        },
        {
          "ano": 2023,
          "casos": 32197
        },
        {
          "ano": 2024,
          "casos": 33608
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 32182
        },
        {
          "ano": 2026,
          "casos": 32705
        },
        {
          "ano": 2027,
          "casos": 33228
        },
        {
          "ano": 2028,
          "casos": 33751
        },
        {
          "ano": 2029,
          "casos": 34274
        },
        {
          "ano": 2030,
          "casos": 34797
        },
        {
          "ano": 2031,
          "casos": 35320
        },
        {
          "ano": 2032,
          "casos": 35843
        },
        {
          "ano": 2033,
          "casos": 36366
        },
        {
          "ano": 2034,
          "casos": 36889
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 27.4
        },
        {
          "ano": 2014,
          "taxa": 26.4
        },
        {
          "ano": 2015,
          "taxa": 25.6
        },
        {
          "ano": 2016,
          "taxa": 25.4
        },
        {
          "ano": 2017,
          "taxa": 25.6
        },
        {
          "ano": 2018,
          "taxa": 26.9
        },
        {
          "ano": 2019,
          "taxa": 27.0
        },
        {
          "ano": 2020,
          "taxa": 23.8
        },
        {
          "ano": 2021,
          "taxa": 25.3
        },
        {
          "ano": 2022,
          "taxa": 28.5
        },
        {
          "ano": 2023,
          "taxa": 29.7
        },
        {
          "ano": 2024,
          "taxa": 30.9
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 29.4
        },
        {
          "ano": 2026,
          "taxa": 29.8
        },
        {
          "ano": 2027,
          "taxa": 30.1
        },
        {
          "ano": 2028,
          "taxa": 30.5
        },
        {
          "ano": 2029,
          "taxa": 30.9
        },
        {
          "ano": 2030,
          "taxa": 31.3
        },
        {
          "ano": 2031,
          "taxa": 31.6
        },
        {
          "ano": 2032,
          "taxa": 32.0
        },
        {
          "ano": 2033,
          "taxa": 32.4
        },
        {
          "ano": 2034,
          "taxa": 32.8
        }
      ],
      "taxa_ultimo_ano": 30.9,
      "variacao_taxa_pct": 12.8,
      "populacao_ultimo_ano": 108921464,
      "coeficiente_anual": 523.0,
      "intercepto": -1026812.7,
      "r2": 0.651,
      "crescimento_pct_ano": 1.56,
      "crescimento_total_pct": 20.3,
      "casos_ultimo_ano": 33608,
      "backtest_erro_pct": {
        "2022": -9.4,
        "2023": -13.2,
        "2024": -16.6
      },
      "status": "Atenção"
    }
  },
  "fatores": {
    "fonte": "SINAN/TABNET (DATASUS) — casos confirmados por ano de diagnóstico; população: IBGE, Projeções 2024",
    "anos": [
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024
    ],
    "total_casos": [
      86212,
      85216,
      85462,
      86210,
      90295,
      94735,
      95849,
      86160,
      91415,
      103382,
      109919,
      113012
    ],
    "indicadores": [
      {
        "id": "abandono",
        "nome": "Abandono do tratamento",
        "descricao": "Pacientes que pararam o tratamento antes do fim (inclui abandono primário)",
        "tipo": "tratamento",
        "ano_inicial": 2013,
        "casos": [
          11661,
          11397,
          10742,
          11032,
          11939,
          13205,
          13989,
          13808,
          15297,
          17773,
          20100,
          21339
        ],
        "pct_dos_casos": [
          13.53,
          13.37,
          12.57,
          12.8,
          13.22,
          13.94,
          14.59,
          16.03,
          16.73,
          17.19,
          18.29,
          18.88
        ],
        "pct_ignorado": [
          1.9,
          1.8,
          3.9,
          2.8,
          2.9,
          2.6,
          2.6,
          2.8,
          2.6,
          2.7,
          3.2,
          5.2
        ]
      },
      {
        "id": "reingresso",
        "nome": "Retorno após abandono",
        "descricao": "Pessoas que voltam ao sistema depois de abandonar",
        "tipo": "tratamento",
        "ano_inicial": 2013,
        "casos": [
          6342,
          6593,
          6537,
          6513,
          6460,
          7003,
          7340,
          7662,
          9476,
          12251,
          15029,
          16752
        ],
        "pct_dos_casos": [
          7.36,
          7.74,
          7.65,
          7.55,
          7.15,
          7.39,
          7.66,
          8.89,
          10.37,
          11.85,
          13.67,
          14.82
        ],
        "pct_ignorado": null
      },
      {
        "id": "obito_tb",
        "nome": "Óbitos por tuberculose",
        "descricao": "Casos notificados que terminaram em óbito pela doença",
        "tipo": "tratamento",
        "ano_inicial": 2013,
        "casos": [
          3100,
          3117,
          3112,
          2987,
          3319,
          3518,
          3395,
          3352,
          3948,
          4549,
          4913,
          5092
        ],
        "pct_dos_casos": [
          3.6,
          3.66,
          3.64,
          3.46,
          3.68,
          3.71,
          3.54,
          3.89,
          4.32,
          4.4,
          4.47,
          4.51
        ],
        "pct_ignorado": [
          1.9,
          1.8,
          3.9,
          2.8,
          2.9,
          2.6,
          2.6,
          2.8,
          2.6,
          2.7,
          3.2,
          5.2
        ]
      },
      {
        "id": "situacao_rua",
        "nome": "Pessoas em situação de rua",
        "descricao": "Casos em pessoas vivendo nas ruas",
        "tipo": "vulnerabilidade",
        "ano_inicial": 2015,
        "casos": [
          720,
          1628,
          2961,
          2986,
          3156,
          3523,
          3622,
          3489,
          3703,
          4650,
          5774,
          6370
        ],
        "pct_dos_casos": [
          0.84,
          1.91,
          3.46,
          3.46,
          3.5,
          3.72,
          3.78,
          4.05,
          4.05,
          4.5,
          5.25,
          5.64
        ],
        "pct_ignorado": [
          74.1,
          53.6,
          11.6,
          6.5,
          6.0,
          5.0,
          5.1,
          5.4,
          5.7,
          4.4,
          3.9,
          4.1
        ]
      },
      {
        "id": "drogas",
        "nome": "Uso de drogas ilícitas",
        "descricao": "Casos com uso de drogas registrado",
        "tipo": "vulnerabilidade",
        "ano_inicial": 2015,
        "casos": [
          3230,
          5554,
          10244,
          11364,
          13344,
          15219,
          15555,
          13744,
          14859,
          18402,
          21903,
          22335
        ],
        "pct_dos_casos": [
          3.75,
          6.52,
          11.99,
          13.18,
          14.78,
          16.06,
          16.23,
          15.95,
          16.25,
          17.8,
          19.93,
          19.76
        ],
        "pct_ignorado": [
          74.0,
          52.0,
          10.6,
          8.6,
          7.8,
          7.4,
          8.0,
          8.1,
          8.4,
          7.0,
          5.6,
          5.8
        ]
      },
      {
        "id": "alcool",
        "nome": "Alcoolismo",
        "descricao": "Casos com alcoolismo registrado",
        "tipo": "vulnerabilidade",
        "ano_inicial": 2013,
        "casos": [
          13886,
          14003,
          14986,
          15373,
          16660,
          18079,
          18077,
          16343,
          17369,
          20731,
          23275,
          23892
        ],
        "pct_dos_casos": [
          16.11,
          16.43,
          17.54,
          17.83,
          18.45,
          19.08,
          18.86,
          18.97,
          19.0,
          20.05,
          21.17,
          21.14
        ],
        "pct_ignorado": [
          8.9,
          8.8,
          7.6,
          6.9,
          6.4,
          6.1,
          7.0,
          7.4,
          7.7,
          6.3,
          5.0,
          5.1
        ]
      },
      {
        "id": "hiv",
        "nome": "Coinfecção TB-HIV",
        "descricao": "Casos com teste de HIV positivo",
        "tipo": "vulnerabilidade",
        "ano_inicial": 2013,
        "casos": [
          9858,
          10123,
          9867,
          9543,
          9851,
          9833,
          9712,
          8589,
          9233,
          10407,
          12377,
          14891
        ],
        "pct_dos_casos": [
          11.43,
          11.88,
          11.55,
          11.07,
          10.91,
          10.38,
          10.13,
          9.97,
          10.1,
          10.07,
          11.26,
          13.18
        ],
        "pct_ignorado": [
          0.3,
          0.3,
          0.4,
          0.3,
          0.3,
          0.5,
          0.4,
          0.3,
          0.3,
          0.3,
          0.3,
          0.2
        ]
      },
      {
        "id": "ppl",
        "nome": "Pessoas privadas de liberdade",
        "descricao": "Casos no sistema prisional",
        "tipo": "vulnerabilidade",
        "ano_inicial": 2015,
        "casos": [
          2486,
          4196,
          7648,
          8542,
          10387,
          10963,
          11625,
          10316,
          9809,
          10699,
          11100,
          10460
        ],
        "pct_dos_casos": [
          2.88,
          4.92,
          8.95,
          9.91,
          11.5,
          11.57,
          12.13,
          11.97,
          10.73,
          10.35,
          10.1,
          9.26
        ],
        "pct_ignorado": [
          74.0,
          53.3,
          10.9,
          6.2,
          5.5,
          4.5,
          4.0,
          4.2,
          4.3,
          3.7,
          3.4,
          3.7
        ]
      }
    ],
    "desfecho": {
      "cura": [
        70.4,
        69.8,
        67.9,
        69.1,
        68.5,
        67.7,
        67.3,
        64.8,
        63.0,
        62.6,
        60.9,
        58.0
      ],
      "abandono": [
        13.5,
        13.4,
        12.6,
        12.8,
        13.2,
        13.9,
        14.6,
        16.0,
        16.7,
        17.2,
        18.3,
        18.9
      ],
      "obito_tb": [
        3.6,
        3.7,
        3.6,
        3.5,
        3.7,
        3.7,
        3.5,
        3.9,
        4.3,
        4.4,
        4.5,
        4.5
      ],
      "outros": [
        10.5,
        11.3,
        12.0,
        11.8,
        11.7,
        12.1,
        12.0,
        12.5,
        13.3,
        13.1,
        13.2,
        13.4
      ],
      "sem_informacao": [
        1.9,
        1.8,
        3.9,
        2.8,
        2.9,
        2.6,
        2.6,
        2.8,
        2.6,
        2.7,
        3.2,
        5.2
      ],
      "metas_oms": {
        "cura": 85,
        "abandono": 5
      }
    },
    "incidencia_casos_novos": [
      {
        "ano": 2013,
        "casos_novos": 70690,
        "taxa": 35.5
      },
      {
        "ano": 2014,
        "casos_novos": 69494,
        "taxa": 34.6
      },
      {
        "ano": 2015,
        "casos_novos": 69002,
        "taxa": 34.1
      },
      {
        "ano": 2016,
        "casos_novos": 69554,
        "taxa": 34.1
      },
      {
        "ano": 2017,
        "casos_novos": 72771,
        "taxa": 35.5
      },
      {
        "ano": 2018,
        "casos_novos": 76327,
        "taxa": 37.0
      },
      {
        "ano": 2019,
        "casos_novos": 77210,
        "taxa": 37.1
      },
      {
        "ano": 2020,
        "casos_novos": 68514,
        "taxa": 32.8
      },
      {
        "ano": 2021,
        "casos_novos": 71895,
        "taxa": 34.2
      },
      {
        "ano": 2022,
        "casos_novos": 79980,
        "taxa": 37.9
      },
      {
        "ano": 2023,
        "casos_novos": 83518,
        "taxa": 39.5
      },
      {
        "ano": 2024,
        "casos_novos": 84704,
        "taxa": 39.8
      }
    ],
    "meta_incidencia_2035": 10.0
  },
  "modelagem": {
    "abandono": {
      "periodos": {
        "treino": "2015–2019",
        "teste": "2021–2023"
      },
      "n_treino": 368865,
      "n_teste": 242325,
      "taxa_abandono_treino": 16.5,
      "taxa_abandono_teste": 21.9,
      "n_perfis": 435,
      "auc_treino": 0.687,
      "auc_teste": 0.69,
      "ks": 0.277,
      "ks_estatistica_teste": 0.277,
      "ks_p_valor": 0.0,
      "corte": 0.152,
      "sensibilidade": 51.9,
      "especificidade": 75.9,
      "pct_sinalizados": 30.2,
      "precisao": 37.6,
      "matriz": {
        "vp": 27562,
        "fp": 45657,
        "fn": 25583,
        "vn": 143523
      },
      "roc": [
        {
          "fpr": 0.0,
          "tpr": 0.0
        },
        {
          "fpr": 0.0004,
          "tpr": 0.0036
        },
        {
          "fpr": 0.0009,
          "tpr": 0.008
        },
        {
          "fpr": 0.001,
          "tpr": 0.0094
        },
        {
          "fpr": 0.0015,
          "tpr": 0.0136
        },
        {
          "fpr": 0.0016,
          "tpr": 0.0156
        },
        {
          "fpr": 0.0019,
          "tpr": 0.0181
        },
        {
          "fpr": 0.0019,
          "tpr": 0.0181
        },
        {
          "fpr": 0.002,
          "tpr": 0.0206
        },
        {
          "fpr": 0.0033,
          "tpr": 0.0316
        },
        {
          "fpr": 0.0035,
          "tpr": 0.0331
        },
        {
          "fpr": 0.0058,
          "tpr": 0.0456
        },
        {
          "fpr": 0.0058,
          "tpr": 0.0456
        },
        {
          "fpr": 0.0059,
          "tpr": 0.0466
        },
        {
          "fpr": 0.0061,
          "tpr": 0.0481
        },
        {
          "fpr": 0.0064,
          "tpr": 0.0506
        },
        {
          "fpr": 0.0069,
          "tpr": 0.0534
        },
        {
          "fpr": 0.0069,
          "tpr": 0.0535
        },
        {
          "fpr": 0.0069,
          "tpr": 0.054
        },
        {
          "fpr": 0.0085,
          "tpr": 0.0609
        },
        {
          "fpr": 0.0088,
          "tpr": 0.0632
        },
        {
          "fpr": 0.0096,
          "tpr": 0.0687
        },
        {
          "fpr": 0.0097,
          "tpr": 0.0691
        },
        {
          "fpr": 0.0105,
          "tpr": 0.0744
        },
        {
          "fpr": 0.0107,
          "tpr": 0.0752
        },
        {
          "fpr": 0.0109,
          "tpr": 0.0768
        },
        {
          "fpr": 0.011,
          "tpr": 0.0777
        },
        {
          "fpr": 0.0113,
          "tpr": 0.0796
        },
        {
          "fpr": 0.0113,
          "tpr": 0.0797
        },
        {
          "fpr": 0.0118,
          "tpr": 0.0834
        },
        {
          "fpr": 0.0124,
          "tpr": 0.0856
        },
        {
          "fpr": 0.0125,
          "tpr": 0.0857
        },
        {
          "fpr": 0.0144,
          "tpr": 0.0918
        },
        {
          "fpr": 0.0147,
          "tpr": 0.0936
        },
        {
          "fpr": 0.0151,
          "tpr": 0.0968
        },
        {
          "fpr": 0.017,
          "tpr": 0.1025
        },
        {
          "fpr": 0.017,
          "tpr": 0.1027
        },
        {
          "fpr": 0.0178,
          "tpr": 0.1065
        },
        {
          "fpr": 0.0179,
          "tpr": 0.1066
        },
        {
          "fpr": 0.0179,
          "tpr": 0.1066
        },
        {
          "fpr": 0.0184,
          "tpr": 0.1095
        },
        {
          "fpr": 0.0186,
          "tpr": 0.1103
        },
        {
          "fpr": 0.019,
          "tpr": 0.1138
        },
        {
          "fpr": 0.0191,
          "tpr": 0.1141
        },
        {
          "fpr": 0.0192,
          "tpr": 0.1143
        },
        {
          "fpr": 0.0201,
          "tpr": 0.1173
        },
        {
          "fpr": 0.0215,
          "tpr": 0.1224
        },
        {
          "fpr": 0.0218,
          "tpr": 0.1243
        },
        {
          "fpr": 0.0234,
          "tpr": 0.1293
        },
        {
          "fpr": 0.0234,
          "tpr": 0.1294
        },
        {
          "fpr": 0.0254,
          "tpr": 0.1374
        },
        {
          "fpr": 0.0258,
          "tpr": 0.1385
        },
        {
          "fpr": 0.0265,
          "tpr": 0.1432
        },
        {
          "fpr": 0.0266,
          "tpr": 0.1438
        },
        {
          "fpr": 0.0267,
          "tpr": 0.1442
        },
        {
          "fpr": 0.0267,
          "tpr": 0.1443
        },
        {
          "fpr": 0.035,
          "tpr": 0.1611
        },
        {
          "fpr": 0.0354,
          "tpr": 0.1633
        },
        {
          "fpr": 0.0355,
          "tpr": 0.1641
        },
        {
          "fpr": 0.0539,
          "tpr": 0.2019
        },
        {
          "fpr": 0.0542,
          "tpr": 0.2025
        },
        {
          "fpr": 0.0544,
          "tpr": 0.203
        },
        {
          "fpr": 0.0546,
          "tpr": 0.2036
        },
        {
          "fpr": 0.069,
          "tpr": 0.2351
        },
        {
          "fpr": 0.0701,
          "tpr": 0.2377
        },
        {
          "fpr": 0.0714,
          "tpr": 0.242
        },
        {
          "fpr": 0.073,
          "tpr": 0.2477
        },
        {
          "fpr": 0.0744,
          "tpr": 0.2503
        },
        {
          "fpr": 0.076,
          "tpr": 0.2558
        },
        {
          "fpr": 0.0776,
          "tpr": 0.261
        },
        {
          "fpr": 0.0779,
          "tpr": 0.2619
        },
        {
          "fpr": 0.0779,
          "tpr": 0.2619
        },
        {
          "fpr": 0.0781,
          "tpr": 0.2628
        },
        {
          "fpr": 0.0785,
          "tpr": 0.2639
        },
        {
          "fpr": 0.0852,
          "tpr": 0.2767
        },
        {
          "fpr": 0.0997,
          "tpr": 0.3047
        },
        {
          "fpr": 0.1212,
          "tpr": 0.34
        },
        {
          "fpr": 0.1242,
          "tpr": 0.3455
        },
        {
          "fpr": 0.134,
          "tpr": 0.3631
        },
        {
          "fpr": 0.1347,
          "tpr": 0.3649
        },
        {
          "fpr": 0.1354,
          "tpr": 0.3668
        },
        {
          "fpr": 0.1356,
          "tpr": 0.367
        },
        {
          "fpr": 0.1472,
          "tpr": 0.3855
        },
        {
          "fpr": 0.157,
          "tpr": 0.3979
        },
        {
          "fpr": 0.1593,
          "tpr": 0.4046
        },
        {
          "fpr": 0.1593,
          "tpr": 0.4047
        },
        {
          "fpr": 0.1604,
          "tpr": 0.4073
        },
        {
          "fpr": 0.1617,
          "tpr": 0.4113
        },
        {
          "fpr": 0.1639,
          "tpr": 0.4148
        },
        {
          "fpr": 0.1684,
          "tpr": 0.4215
        },
        {
          "fpr": 0.1712,
          "tpr": 0.4269
        },
        {
          "fpr": 0.1716,
          "tpr": 0.4276
        },
        {
          "fpr": 0.185,
          "tpr": 0.449
        },
        {
          "fpr": 0.189,
          "tpr": 0.4563
        },
        {
          "fpr": 0.2045,
          "tpr": 0.4773
        },
        {
          "fpr": 0.2049,
          "tpr": 0.4778
        },
        {
          "fpr": 0.2127,
          "tpr": 0.4867
        },
        {
          "fpr": 0.2148,
          "tpr": 0.4891
        },
        {
          "fpr": 0.2155,
          "tpr": 0.4903
        },
        {
          "fpr": 0.2158,
          "tpr": 0.4905
        },
        {
          "fpr": 0.2179,
          "tpr": 0.4928
        },
        {
          "fpr": 0.2215,
          "tpr": 0.4973
        },
        {
          "fpr": 0.2413,
          "tpr": 0.5186
        },
        {
          "fpr": 0.3218,
          "tpr": 0.5939
        },
        {
          "fpr": 0.3222,
          "tpr": 0.5945
        },
        {
          "fpr": 0.4298,
          "tpr": 0.6963
        },
        {
          "fpr": 0.5056,
          "tpr": 0.7574
        },
        {
          "fpr": 0.5089,
          "tpr": 0.7602
        },
        {
          "fpr": 0.509,
          "tpr": 0.7604
        },
        {
          "fpr": 0.5613,
          "tpr": 0.7961
        },
        {
          "fpr": 0.6144,
          "tpr": 0.8282
        },
        {
          "fpr": 0.6618,
          "tpr": 0.8504
        },
        {
          "fpr": 0.6774,
          "tpr": 0.8624
        },
        {
          "fpr": 0.6774,
          "tpr": 0.8625
        },
        {
          "fpr": 0.747,
          "tpr": 0.9051
        },
        {
          "fpr": 0.7494,
          "tpr": 0.9067
        },
        {
          "fpr": 0.8055,
          "tpr": 0.9286
        },
        {
          "fpr": 0.8632,
          "tpr": 0.9529
        },
        {
          "fpr": 0.9299,
          "tpr": 0.9775
        },
        {
          "fpr": 1.0,
          "tpr": 1.0
        }
      ],
      "ks_curvas": [
        {
          "score": 0.0651,
          "abandono": 0.0119,
          "cura": 0.0348
        },
        {
          "score": 0.0762,
          "abandono": 0.0403,
          "cura": 0.1211
        },
        {
          "score": 0.0794,
          "abandono": 0.0714,
          "cura": 0.1945
        },
        {
          "score": 0.0911,
          "abandono": 0.0787,
          "cura": 0.2104
        },
        {
          "score": 0.0963,
          "abandono": 0.0938,
          "cura": 0.2515
        },
        {
          "score": 0.1079,
          "abandono": 0.1337,
          "cura": 0.3157
        },
        {
          "score": 0.1147,
          "abandono": 0.1376,
          "cura": 0.3226
        },
        {
          "score": 0.1166,
          "abandono": 0.1492,
          "cura": 0.3377
        },
        {
          "score": 0.118,
          "abandono": 0.1708,
          "cura": 0.3838
        },
        {
          "score": 0.1238,
          "abandono": 0.2038,
          "cura": 0.4386
        },
        {
          "score": 0.1314,
          "abandono": 0.2392,
          "cura": 0.4908
        },
        {
          "score": 0.133,
          "abandono": 0.2398,
          "cura": 0.4911
        },
        {
          "score": 0.1351,
          "abandono": 0.242,
          "cura": 0.4934
        },
        {
          "score": 0.1368,
          "abandono": 0.3034,
          "cura": 0.57
        },
        {
          "score": 0.1412,
          "abandono": 0.3063,
          "cura": 0.5736
        },
        {
          "score": 0.1476,
          "abandono": 0.4058,
          "cura": 0.6782
        },
        {
          "score": 0.151,
          "abandono": 0.4061,
          "cura": 0.6782
        },
        {
          "score": 0.1534,
          "abandono": 0.4826,
          "cura": 0.7597
        },
        {
          "score": 0.1605,
          "abandono": 0.5029,
          "cura": 0.7788
        },
        {
          "score": 0.1689,
          "abandono": 0.5072,
          "cura": 0.7821
        },
        {
          "score": 0.17,
          "abandono": 0.5095,
          "cura": 0.7842
        },
        {
          "score": 0.1753,
          "abandono": 0.5098,
          "cura": 0.7846
        },
        {
          "score": 0.1777,
          "abandono": 0.5133,
          "cura": 0.7872
        },
        {
          "score": 0.1873,
          "abandono": 0.5201,
          "cura": 0.7937
        },
        {
          "score": 0.1897,
          "abandono": 0.5226,
          "cura": 0.7953
        },
        {
          "score": 0.1939,
          "abandono": 0.5227,
          "cura": 0.7955
        },
        {
          "score": 0.201,
          "abandono": 0.5445,
          "cura": 0.8117
        },
        {
          "score": 0.2033,
          "abandono": 0.5571,
          "cura": 0.8187
        },
        {
          "score": 0.2095,
          "abandono": 0.573,
          "cura": 0.8288
        },
        {
          "score": 0.2116,
          "abandono": 0.5731,
          "cura": 0.8288
        },
        {
          "score": 0.214,
          "abandono": 0.5786,
          "cura": 0.8316
        },
        {
          "score": 0.2171,
          "abandono": 0.5887,
          "cura": 0.8383
        },
        {
          "score": 0.2192,
          "abandono": 0.5889,
          "cura": 0.8383
        },
        {
          "score": 0.2239,
          "abandono": 0.5952,
          "cura": 0.8406
        },
        {
          "score": 0.2258,
          "abandono": 0.5953,
          "cura": 0.8407
        },
        {
          "score": 0.2288,
          "abandono": 0.6016,
          "cura": 0.8427
        },
        {
          "score": 0.232,
          "abandono": 0.6139,
          "cura": 0.8525
        },
        {
          "score": 0.2412,
          "abandono": 0.6194,
          "cura": 0.8544
        },
        {
          "score": 0.2418,
          "abandono": 0.633,
          "cura": 0.8644
        },
        {
          "score": 0.2462,
          "abandono": 0.6332,
          "cura": 0.8646
        },
        {
          "score": 0.2482,
          "abandono": 0.6351,
          "cura": 0.8653
        },
        {
          "score": 0.2497,
          "abandono": 0.6545,
          "cura": 0.8758
        },
        {
          "score": 0.2533,
          "abandono": 0.6545,
          "cura": 0.8758
        },
        {
          "score": 0.2567,
          "abandono": 0.66,
          "cura": 0.8788
        },
        {
          "score": 0.2608,
          "abandono": 0.6972,
          "cura": 0.9015
        },
        {
          "score": 0.2788,
          "abandono": 0.7234,
          "cura": 0.9149
        },
        {
          "score": 0.2808,
          "abandono": 0.7368,
          "cura": 0.9218
        },
        {
          "score": 0.2825,
          "abandono": 0.7372,
          "cura": 0.9219
        },
        {
          "score": 0.2903,
          "abandono": 0.7381,
          "cura": 0.9221
        },
        {
          "score": 0.2919,
          "abandono": 0.7389,
          "cura": 0.9224
        },
        {
          "score": 0.3008,
          "abandono": 0.7439,
          "cura": 0.9239
        },
        {
          "score": 0.3063,
          "abandono": 0.7442,
          "cura": 0.924
        },
        {
          "score": 0.3123,
          "abandono": 0.7497,
          "cura": 0.9256
        },
        {
          "score": 0.318,
          "abandono": 0.7565,
          "cura": 0.928
        },
        {
          "score": 0.3273,
          "abandono": 0.7585,
          "cura": 0.9288
        },
        {
          "score": 0.328,
          "abandono": 0.7648,
          "cura": 0.931
        },
        {
          "score": 0.3357,
          "abandono": 0.7649,
          "cura": 0.931
        },
        {
          "score": 0.3375,
          "abandono": 0.7964,
          "cura": 0.9454
        },
        {
          "score": 0.3417,
          "abandono": 0.797,
          "cura": 0.9456
        },
        {
          "score": 0.3458,
          "abandono": 0.798,
          "cura": 0.9461
        },
        {
          "score": 0.3487,
          "abandono": 0.7981,
          "cura": 0.9461
        },
        {
          "score": 0.3497,
          "abandono": 0.8359,
          "cura": 0.9645
        },
        {
          "score": 0.3606,
          "abandono": 0.8367,
          "cura": 0.9646
        },
        {
          "score": 0.3655,
          "abandono": 0.8555,
          "cura": 0.9732
        },
        {
          "score": 0.3685,
          "abandono": 0.8557,
          "cura": 0.9733
        },
        {
          "score": 0.3717,
          "abandono": 0.8558,
          "cura": 0.9733
        },
        {
          "score": 0.3774,
          "abandono": 0.8562,
          "cura": 0.9734
        },
        {
          "score": 0.3792,
          "abandono": 0.8615,
          "cura": 0.9742
        },
        {
          "score": 0.385,
          "abandono": 0.8624,
          "cura": 0.9745
        },
        {
          "score": 0.388,
          "abandono": 0.8626,
          "cura": 0.9746
        },
        {
          "score": 0.3921,
          "abandono": 0.8706,
          "cura": 0.9766
        },
        {
          "score": 0.4012,
          "abandono": 0.8757,
          "cura": 0.9782
        },
        {
          "score": 0.4086,
          "abandono": 0.877,
          "cura": 0.9784
        },
        {
          "score": 0.4113,
          "abandono": 0.8776,
          "cura": 0.9785
        },
        {
          "score": 0.4178,
          "abandono": 0.8827,
          "cura": 0.9799
        },
        {
          "score": 0.4257,
          "abandono": 0.8857,
          "cura": 0.9808
        },
        {
          "score": 0.4412,
          "abandono": 0.8861,
          "cura": 0.9809
        },
        {
          "score": 0.4504,
          "abandono": 0.8862,
          "cura": 0.981
        },
        {
          "score": 0.4506,
          "abandono": 0.8897,
          "cura": 0.9814
        },
        {
          "score": 0.4546,
          "abandono": 0.8905,
          "cura": 0.9816
        },
        {
          "score": 0.4706,
          "abandono": 0.8934,
          "cura": 0.9821
        },
        {
          "score": 0.4745,
          "abandono": 0.8935,
          "cura": 0.9822
        },
        {
          "score": 0.4812,
          "abandono": 0.8935,
          "cura": 0.9822
        },
        {
          "score": 0.4832,
          "abandono": 0.8973,
          "cura": 0.983
        },
        {
          "score": 0.4924,
          "abandono": 0.8975,
          "cura": 0.983
        },
        {
          "score": 0.4948,
          "abandono": 0.9058,
          "cura": 0.9853
        },
        {
          "score": 0.4959,
          "abandono": 0.9064,
          "cura": 0.9853
        },
        {
          "score": 0.5054,
          "abandono": 0.9082,
          "cura": 0.9856
        },
        {
          "score": 0.5094,
          "abandono": 0.9143,
          "cura": 0.9875
        },
        {
          "score": 0.5139,
          "abandono": 0.9144,
          "cura": 0.9876
        },
        {
          "score": 0.5201,
          "abandono": 0.9183,
          "cura": 0.9883
        },
        {
          "score": 0.5234,
          "abandono": 0.9203,
          "cura": 0.9887
        },
        {
          "score": 0.5294,
          "abandono": 0.9204,
          "cura": 0.9887
        },
        {
          "score": 0.5346,
          "abandono": 0.9223,
          "cura": 0.989
        },
        {
          "score": 0.5507,
          "abandono": 0.9238,
          "cura": 0.9892
        },
        {
          "score": 0.5515,
          "abandono": 0.9248,
          "cura": 0.9893
        },
        {
          "score": 0.5586,
          "abandono": 0.9256,
          "cura": 0.9895
        },
        {
          "score": 0.5621,
          "abandono": 0.9309,
          "cura": 0.9903
        },
        {
          "score": 0.5711,
          "abandono": 0.9313,
          "cura": 0.9904
        },
        {
          "score": 0.5763,
          "abandono": 0.9372,
          "cura": 0.9913
        },
        {
          "score": 0.5921,
          "abandono": 0.9391,
          "cura": 0.9915
        },
        {
          "score": 0.6009,
          "abandono": 0.946,
          "cura": 0.9931
        },
        {
          "score": 0.6119,
          "abandono": 0.9465,
          "cura": 0.9931
        },
        {
          "score": 0.6239,
          "abandono": 0.9494,
          "cura": 0.9936
        },
        {
          "score": 0.63,
          "abandono": 0.9494,
          "cura": 0.9936
        },
        {
          "score": 0.6365,
          "abandono": 0.9519,
          "cura": 0.9939
        },
        {
          "score": 0.6512,
          "abandono": 0.9534,
          "cura": 0.9941
        },
        {
          "score": 0.653,
          "abandono": 0.9544,
          "cura": 0.9942
        },
        {
          "score": 0.6608,
          "abandono": 0.9544,
          "cura": 0.9942
        },
        {
          "score": 0.6684,
          "abandono": 0.9669,
          "cura": 0.9965
        },
        {
          "score": 0.6739,
          "abandono": 0.9684,
          "cura": 0.9967
        },
        {
          "score": 0.6857,
          "abandono": 0.9794,
          "cura": 0.998
        },
        {
          "score": 0.7003,
          "abandono": 0.9819,
          "cura": 0.9981
        },
        {
          "score": 0.7033,
          "abandono": 0.9819,
          "cura": 0.9981
        },
        {
          "score": 0.7099,
          "abandono": 0.9844,
          "cura": 0.9984
        },
        {
          "score": 0.7345,
          "abandono": 0.9864,
          "cura": 0.9985
        },
        {
          "score": 0.7598,
          "abandono": 0.9906,
          "cura": 0.999
        },
        {
          "score": 0.7695,
          "abandono": 0.992,
          "cura": 0.9991
        },
        {
          "score": 0.7892,
          "abandono": 0.9964,
          "cura": 0.9996
        },
        {
          "score": 0.809,
          "abandono": 1.0,
          "cura": 1.0
        }
      ],
      "odds_ratios": [
        {
          "variavel": "Sexo masculino",
          "or": 1.18,
          "ic_inf": 1.16,
          "ic_sup": 1.21
        },
        {
          "variavel": "Situação de rua",
          "or": 3.86,
          "ic_inf": 3.7,
          "ic_sup": 4.01
        },
        {
          "variavel": "Uso de drogas ilícitas",
          "or": 2.1,
          "ic_inf": 2.05,
          "ic_sup": 2.15
        },
        {
          "variavel": "Alcoolismo",
          "or": 1.53,
          "ic_inf": 1.49,
          "ic_sup": 1.57
        },
        {
          "variavel": "HIV positivo",
          "or": 1.91,
          "ic_inf": 1.85,
          "ic_sup": 1.96
        },
        {
          "variavel": "Idade 0 a 14 anos (vs 35 a 44 anos)",
          "or": 0.63,
          "ic_inf": 0.59,
          "ic_sup": 0.68
        },
        {
          "variavel": "Idade 15 a 24 anos (vs 35 a 44 anos)",
          "or": 1.13,
          "ic_inf": 1.1,
          "ic_sup": 1.16
        },
        {
          "variavel": "Idade 25 a 34 anos (vs 35 a 44 anos)",
          "or": 1.06,
          "ic_inf": 1.03,
          "ic_sup": 1.08
        },
        {
          "variavel": "Idade 45 a 54 anos (vs 35 a 44 anos)",
          "or": 0.76,
          "ic_inf": 0.74,
          "ic_sup": 0.79
        },
        {
          "variavel": "Idade 55 a 64 anos (vs 35 a 44 anos)",
          "or": 0.54,
          "ic_inf": 0.52,
          "ic_sup": 0.57
        },
        {
          "variavel": "Idade 65 ou + (vs 35 a 44 anos)",
          "or": 0.52,
          "ic_inf": 0.5,
          "ic_sup": 0.55
        }
      ],
      "faixas_risco": [
        {
          "faixa": "Muito baixo",
          "pacientes": 52369,
          "taxa_abandono": 9.5
        },
        {
          "faixa": "Baixo",
          "pacientes": 53189,
          "taxa_abandono": 14.6
        },
        {
          "faixa": "Médio",
          "pacientes": 44222,
          "taxa_abandono": 20.0
        },
        {
          "faixa": "Alto",
          "pacientes": 44124,
          "taxa_abandono": 25.1
        },
        {
          "faixa": "Muito alto",
          "pacientes": 48421,
          "taxa_abandono": 42.4
        }
      ]
    },
    "residuos_ks": [
      {
        "recorte": "Brasil",
        "grupo": "Brasil",
        "n": 11,
        "ks": 0.212,
        "p_valor": 0.176,
        "normal": true
      },
      {
        "recorte": "Norte",
        "grupo": "Região",
        "n": 11,
        "ks": 0.17,
        "p_valor": 0.482,
        "normal": true
      },
      {
        "recorte": "Nordeste",
        "grupo": "Região",
        "n": 11,
        "ks": 0.173,
        "p_valor": 0.455,
        "normal": true
      },
      {
        "recorte": "Centro-Oeste",
        "grupo": "Região",
        "n": 11,
        "ks": 0.141,
        "p_valor": 0.781,
        "normal": true
      },
      {
        "recorte": "Sul",
        "grupo": "Região",
        "n": 11,
        "ks": 0.16,
        "p_valor": 0.594,
        "normal": true
      },
      {
        "recorte": "Sudeste",
        "grupo": "Região",
        "n": 11,
        "ks": 0.26,
        "p_valor": 0.039,
        "normal": false
      },
      {
        "recorte": "Acre",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.117,
        "p_valor": 0.951,
        "normal": true
      },
      {
        "recorte": "Alagoas",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.213,
        "p_valor": 0.171,
        "normal": true
      },
      {
        "recorte": "Amapá",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.116,
        "p_valor": 0.955,
        "normal": true
      },
      {
        "recorte": "Amazonas",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.152,
        "p_valor": 0.668,
        "normal": true
      },
      {
        "recorte": "Bahia",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.199,
        "p_valor": 0.254,
        "normal": true
      },
      {
        "recorte": "Ceará",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.155,
        "p_valor": 0.638,
        "normal": true
      },
      {
        "recorte": "Distrito Federal",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.172,
        "p_valor": 0.462,
        "normal": true
      },
      {
        "recorte": "Espírito Santo",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.188,
        "p_valor": 0.333,
        "normal": true
      },
      {
        "recorte": "Goiás",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.159,
        "p_valor": 0.6,
        "normal": true
      },
      {
        "recorte": "Maranhão",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.154,
        "p_valor": 0.658,
        "normal": true
      },
      {
        "recorte": "Mato Grosso",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.197,
        "p_valor": 0.264,
        "normal": true
      },
      {
        "recorte": "Mato Grosso do Sul",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.219,
        "p_valor": 0.144,
        "normal": true
      },
      {
        "recorte": "Minas Gerais",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.165,
        "p_valor": 0.531,
        "normal": true
      },
      {
        "recorte": "Paraná",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.146,
        "p_valor": 0.733,
        "normal": true
      },
      {
        "recorte": "Paraíba",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.115,
        "p_valor": 0.958,
        "normal": true
      },
      {
        "recorte": "Pará",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.196,
        "p_valor": 0.269,
        "normal": true
      },
      {
        "recorte": "Pernambuco",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.207,
        "p_valor": 0.206,
        "normal": true
      },
      {
        "recorte": "Piauí",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.203,
        "p_valor": 0.228,
        "normal": true
      },
      {
        "recorte": "Rio Grande do Norte",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.185,
        "p_valor": 0.354,
        "normal": true
      },
      {
        "recorte": "Rio Grande do Sul",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.172,
        "p_valor": 0.468,
        "normal": true
      },
      {
        "recorte": "Rio de Janeiro",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.123,
        "p_valor": 0.924,
        "normal": true
      },
      {
        "recorte": "Rondônia",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.18,
        "p_valor": 0.399,
        "normal": true
      },
      {
        "recorte": "Roraima",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.171,
        "p_valor": 0.47,
        "normal": true
      },
      {
        "recorte": "Santa Catarina",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.152,
        "p_valor": 0.672,
        "normal": true
      },
      {
        "recorte": "Sergipe",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.139,
        "p_valor": 0.799,
        "normal": true
      },
      {
        "recorte": "São Paulo",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.227,
        "p_valor": 0.114,
        "normal": true
      },
      {
        "recorte": "Tocantins",
        "grupo": "Estado",
        "n": 11,
        "ks": 0.186,
        "p_valor": 0.341,
        "normal": true
      },
      {
        "recorte": "Masculino",
        "grupo": "Sexo",
        "n": 11,
        "ks": 0.236,
        "p_valor": 0.081,
        "normal": true
      },
      {
        "recorte": "Feminino",
        "grupo": "Sexo",
        "n": 11,
        "ks": 0.134,
        "p_valor": 0.844,
        "normal": true
      }
    ],
    "teste_crescimento_estados": {
      "pergunta": "O estado vai crescer mais que o Brasil no ano seguinte?",
      "n_treino": 108,
      "n_teste": 81,
      "auc_teste": 0.459
    }
  }
};
