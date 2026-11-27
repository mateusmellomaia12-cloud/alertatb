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
      "status": "Atenção"
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
      "status": "Crítico"
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
  }
};
