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
  "avisos_consistencia": [
    {
      "ano": 2013,
      "recorte": "regiões",
      "total": 85212,
      "soma": 84222,
      "diferenca": -990
    },
    {
      "ano": 2015,
      "recorte": "regiões",
      "total": 85416,
      "soma": 85462,
      "diferenca": 46
    },
    {
      "ano": 2015,
      "recorte": "sexo",
      "total": 85416,
      "soma": 85652,
      "diferenca": 236
    },
    {
      "ano": 2021,
      "recorte": "regiões",
      "total": 91385,
      "soma": 91345,
      "diferenca": -40
    },
    {
      "ano": 2022,
      "recorte": "regiões",
      "total": 103322,
      "soma": 103124,
      "diferenca": -198
    }
  ],
  "recortes": {
    "Brasil": {
      "grupo": "Brasil",
      "historico": [
        {
          "ano": 2013,
          "casos": 85212
        },
        {
          "ano": 2014,
          "casos": 85216
        },
        {
          "ano": 2015,
          "casos": 85416
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
          "casos": 96685
        },
        {
          "ano": 2020,
          "casos": 86236
        },
        {
          "ano": 2021,
          "casos": 91385
        },
        {
          "ano": 2022,
          "casos": 103322
        },
        {
          "ano": 2023,
          "casos": 109807
        },
        {
          "ano": 2024,
          "casos": 111521
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 110501
        },
        {
          "ano": 2026,
          "casos": 112908
        },
        {
          "ano": 2027,
          "casos": 115315
        },
        {
          "ano": 2028,
          "casos": 117722
        },
        {
          "ano": 2029,
          "casos": 120129
        },
        {
          "ano": 2030,
          "casos": 122536
        },
        {
          "ano": 2031,
          "casos": 124943
        },
        {
          "ano": 2032,
          "casos": 127350
        },
        {
          "ano": 2033,
          "casos": 129757
        },
        {
          "ano": 2034,
          "casos": 132164
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 42.8
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
          "taxa": 46.5
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
          "taxa": 52.5
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 51.8
        },
        {
          "ano": 2026,
          "taxa": 52.7
        },
        {
          "ano": 2027,
          "taxa": 53.6
        },
        {
          "ano": 2028,
          "taxa": 54.6
        },
        {
          "ano": 2029,
          "taxa": 55.5
        },
        {
          "ano": 2030,
          "taxa": 56.5
        },
        {
          "ano": 2031,
          "taxa": 57.4
        },
        {
          "ano": 2032,
          "taxa": 58.4
        },
        {
          "ano": 2033,
          "taxa": 59.4
        },
        {
          "ano": 2034,
          "taxa": 60.3
        }
      ],
      "taxa_ultimo_ano": 52.5,
      "variacao_taxa_pct": 22.7,
      "populacao_ultimo_ano": 212583750,
      "coeficiente_anual": 2407.0,
      "intercepto": -4763652.7,
      "r2": 0.85,
      "crescimento_pct_ano": 2.16,
      "crescimento_total_pct": 30.9,
      "casos_ultimo_ano": 111521,
      "backtest_erro_pct": {
        "2022": -6.4,
        "2023": -10.6,
        "2024": -10.8
      },
      "status": "Crítico"
    },
    "Norte": {
      "grupo": "Região",
      "historico": [
        {
          "ano": 2013,
          "casos": 8887
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
          "casos": 11765
        },
        {
          "ano": 2020,
          "casos": 10494
        },
        {
          "ano": 2021,
          "casos": 11556
        },
        {
          "ano": 2022,
          "casos": 13155
        },
        {
          "ano": 2023,
          "casos": 13939
        },
        {
          "ano": 2024,
          "casos": 15065
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 14842
        },
        {
          "ano": 2026,
          "casos": 15406
        },
        {
          "ano": 2027,
          "casos": 15971
        },
        {
          "ano": 2028,
          "casos": 16535
        },
        {
          "ano": 2029,
          "casos": 17099
        },
        {
          "ano": 2030,
          "casos": 17663
        },
        {
          "ano": 2031,
          "casos": 18227
        },
        {
          "ano": 2032,
          "casos": 18791
        },
        {
          "ano": 2033,
          "casos": 19355
        },
        {
          "ano": 2034,
          "casos": 19919
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 52.9
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
          "taxa": 65.5
        },
        {
          "ano": 2020,
          "taxa": 57.9
        },
        {
          "ano": 2021,
          "taxa": 63.2
        },
        {
          "ano": 2022,
          "taxa": 71.5
        },
        {
          "ano": 2023,
          "taxa": 75.2
        },
        {
          "ano": 2024,
          "taxa": 80.7
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 78.9
        },
        {
          "ano": 2026,
          "taxa": 81.4
        },
        {
          "ano": 2027,
          "taxa": 83.8
        },
        {
          "ano": 2028,
          "taxa": 86.2
        },
        {
          "ano": 2029,
          "taxa": 88.6
        },
        {
          "ano": 2030,
          "taxa": 91.0
        },
        {
          "ano": 2031,
          "taxa": 93.4
        },
        {
          "ano": 2032,
          "taxa": 95.7
        },
        {
          "ano": 2033,
          "taxa": 98.1
        },
        {
          "ano": 2034,
          "taxa": 100.5
        }
      ],
      "taxa_ultimo_ano": 80.7,
      "variacao_taxa_pct": 52.6,
      "populacao_ultimo_ano": 18669345,
      "coeficiente_anual": 564.1,
      "intercepto": -1127480.3,
      "r2": 0.938,
      "crescimento_pct_ano": 3.74,
      "crescimento_total_pct": 69.5,
      "casos_ultimo_ano": 15065,
      "backtest_erro_pct": {
        "2022": -7.0,
        "2023": -9.2,
        "2024": -13.2
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
          "casos": 25407
        },
        {
          "ano": 2020,
          "casos": 22313
        },
        {
          "ano": 2021,
          "casos": 23830
        },
        {
          "ano": 2022,
          "casos": 27206
        },
        {
          "ano": 2023,
          "casos": 27903
        },
        {
          "ano": 2024,
          "casos": 27559
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 28029
        },
        {
          "ano": 2026,
          "casos": 28539
        },
        {
          "ano": 2027,
          "casos": 29048
        },
        {
          "ano": 2028,
          "casos": 29557
        },
        {
          "ano": 2029,
          "casos": 30066
        },
        {
          "ano": 2030,
          "casos": 30575
        },
        {
          "ano": 2031,
          "casos": 31084
        },
        {
          "ano": 2032,
          "casos": 31593
        },
        {
          "ano": 2033,
          "casos": 32102
        },
        {
          "ano": 2034,
          "casos": 32611
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
          "taxa": 45.1
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
          "taxa": 48.3
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 49.0
        },
        {
          "ano": 2026,
          "taxa": 49.7
        },
        {
          "ano": 2027,
          "taxa": 50.5
        },
        {
          "ano": 2028,
          "taxa": 51.3
        },
        {
          "ano": 2029,
          "taxa": 52.1
        },
        {
          "ano": 2030,
          "taxa": 52.9
        },
        {
          "ano": 2031,
          "taxa": 53.7
        },
        {
          "ano": 2032,
          "taxa": 54.5
        },
        {
          "ano": 2033,
          "taxa": 55.4
        },
        {
          "ano": 2034,
          "taxa": 56.2
        }
      ],
      "taxa_ultimo_ano": 48.3,
      "variacao_taxa_pct": 14.2,
      "populacao_ultimo_ano": 57112096,
      "coeficiente_anual": 509.1,
      "intercepto": -1002879.0,
      "r2": 0.794,
      "crescimento_pct_ano": 1.85,
      "crescimento_total_pct": 19.4,
      "casos_ultimo_ano": 27559,
      "backtest_erro_pct": {
        "2022": -7.2,
        "2023": -8.4,
        "2024": -6.1
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
          "casos": 4714
        },
        {
          "ano": 2020,
          "casos": 4194
        },
        {
          "ano": 2021,
          "casos": 4361
        },
        {
          "ano": 2022,
          "casos": 5034
        },
        {
          "ano": 2023,
          "casos": 5670
        },
        {
          "ano": 2024,
          "casos": 5491
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 5410
        },
        {
          "ano": 2026,
          "casos": 5528
        },
        {
          "ano": 2027,
          "casos": 5645
        },
        {
          "ano": 2028,
          "casos": 5763
        },
        {
          "ano": 2029,
          "casos": 5880
        },
        {
          "ano": 2030,
          "casos": 5998
        },
        {
          "ano": 2031,
          "casos": 6115
        },
        {
          "ano": 2032,
          "casos": 6233
        },
        {
          "ano": 2033,
          "casos": 6350
        },
        {
          "ano": 2034,
          "casos": 6468
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
          "taxa": 29.1
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
          "taxa": 33.6
        },
        {
          "ano": 2024,
          "taxa": 32.2
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 31.4
        },
        {
          "ano": 2026,
          "taxa": 31.8
        },
        {
          "ano": 2027,
          "taxa": 32.1
        },
        {
          "ano": 2028,
          "taxa": 32.5
        },
        {
          "ano": 2029,
          "taxa": 32.9
        },
        {
          "ano": 2030,
          "taxa": 33.3
        },
        {
          "ano": 2031,
          "taxa": 33.7
        },
        {
          "ano": 2032,
          "taxa": 34.1
        },
        {
          "ano": 2033,
          "taxa": 34.5
        },
        {
          "ano": 2034,
          "taxa": 34.9
        }
      ],
      "taxa_ultimo_ano": 32.2,
      "variacao_taxa_pct": 6.6,
      "populacao_ultimo_ano": 17071595,
      "coeficiente_anual": 117.5,
      "intercepto": -232528.6,
      "r2": 0.628,
      "crescimento_pct_ano": 2.14,
      "crescimento_total_pct": 21.2,
      "casos_ultimo_ano": 5491,
      "backtest_erro_pct": {
        "2022": -10.8,
        "2023": -20.3,
        "2024": -17.2
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
          "casos": 12065
        },
        {
          "ano": 2020,
          "casos": 10531
        },
        {
          "ano": 2021,
          "casos": 10865
        },
        {
          "ano": 2022,
          "casos": 12065
        },
        {
          "ano": 2023,
          "casos": 13125
        },
        {
          "ano": 2024,
          "casos": 13145
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 12778
        },
        {
          "ano": 2026,
          "casos": 12953
        },
        {
          "ano": 2027,
          "casos": 13128
        },
        {
          "ano": 2028,
          "casos": 13303
        },
        {
          "ano": 2029,
          "casos": 13477
        },
        {
          "ano": 2030,
          "casos": 13652
        },
        {
          "ano": 2031,
          "casos": 13827
        },
        {
          "ano": 2032,
          "casos": 14002
        },
        {
          "ano": 2033,
          "casos": 14176
        },
        {
          "ano": 2034,
          "casos": 14351
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
          "taxa": 40.1
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
          "taxa": 39.3
        },
        {
          "ano": 2023,
          "taxa": 42.5
        },
        {
          "ano": 2024,
          "taxa": 42.2
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 40.8
        },
        {
          "ano": 2026,
          "taxa": 41.1
        },
        {
          "ano": 2027,
          "taxa": 41.4
        },
        {
          "ano": 2028,
          "taxa": 41.8
        },
        {
          "ano": 2029,
          "taxa": 42.1
        },
        {
          "ano": 2030,
          "taxa": 42.5
        },
        {
          "ano": 2031,
          "taxa": 42.8
        },
        {
          "ano": 2032,
          "taxa": 43.2
        },
        {
          "ano": 2033,
          "taxa": 43.6
        },
        {
          "ano": 2034,
          "taxa": 44.0
        }
      ],
      "taxa_ultimo_ano": 42.2,
      "variacao_taxa_pct": 6.8,
      "populacao_ultimo_ano": 31113021,
      "coeficiente_anual": 174.7,
      "intercepto": -341053.0,
      "r2": 0.562,
      "crescimento_pct_ano": 1.33,
      "crescimento_total_pct": 16.7,
      "casos_ultimo_ano": 13145,
      "backtest_erro_pct": {
        "2022": -6.1,
        "2023": -13.5,
        "2024": -13.5
      },
      "status": "Moderado"
    },
    "Sudeste": {
      "grupo": "Região",
      "historico": [
        {
          "ano": 2013,
          "casos": 36467
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
          "casos": 42733
        },
        {
          "ano": 2020,
          "casos": 38704
        },
        {
          "ano": 2021,
          "casos": 40733
        },
        {
          "ano": 2022,
          "casos": 45664
        },
        {
          "ano": 2023,
          "casos": 49171
        },
        {
          "ano": 2024,
          "casos": 50261
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 49538
        },
        {
          "ano": 2026,
          "casos": 50610
        },
        {
          "ano": 2027,
          "casos": 51683
        },
        {
          "ano": 2028,
          "casos": 52755
        },
        {
          "ano": 2029,
          "casos": 53828
        },
        {
          "ano": 2030,
          "casos": 54900
        },
        {
          "ano": 2031,
          "casos": 55972
        },
        {
          "ano": 2032,
          "casos": 57045
        },
        {
          "ano": 2033,
          "casos": 58117
        },
        {
          "ano": 2034,
          "casos": 59190
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 43.3
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
          "taxa": 48.9
        },
        {
          "ano": 2020,
          "taxa": 44.1
        },
        {
          "ano": 2021,
          "taxa": 46.3
        },
        {
          "ano": 2022,
          "taxa": 51.8
        },
        {
          "ano": 2023,
          "taxa": 55.6
        },
        {
          "ano": 2024,
          "taxa": 56.7
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 55.8
        },
        {
          "ano": 2026,
          "taxa": 56.9
        },
        {
          "ano": 2027,
          "taxa": 57.9
        },
        {
          "ano": 2028,
          "taxa": 59.0
        },
        {
          "ano": 2029,
          "taxa": 60.1
        },
        {
          "ano": 2030,
          "taxa": 61.3
        },
        {
          "ano": 2031,
          "taxa": 62.4
        },
        {
          "ano": 2032,
          "taxa": 63.5
        },
        {
          "ano": 2033,
          "taxa": 64.6
        },
        {
          "ano": 2034,
          "taxa": 65.8
        }
      ],
      "taxa_ultimo_ano": 56.7,
      "variacao_taxa_pct": 30.9,
      "populacao_ultimo_ano": 88617693,
      "coeficiente_anual": 1072.4,
      "intercepto": -2122076.7,
      "r2": 0.846,
      "crescimento_pct_ano": 2.13,
      "crescimento_total_pct": 37.8,
      "casos_ultimo_ano": 50261,
      "backtest_erro_pct": {
        "2022": -4.3,
        "2023": -9.8,
        "2024": -10.5
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
          "casos": 21809
        },
        {
          "ano": 2020,
          "casos": 19523
        },
        {
          "ano": 2021,
          "casos": 19959
        },
        {
          "ano": 2022,
          "casos": 22891
        },
        {
          "ano": 2023,
          "casos": 24807
        },
        {
          "ano": 2024,
          "casos": 25318
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 24627
        },
        {
          "ano": 2026,
          "casos": 25056
        },
        {
          "ano": 2027,
          "casos": 25485
        },
        {
          "ano": 2028,
          "casos": 25914
        },
        {
          "ano": 2029,
          "casos": 26343
        },
        {
          "ano": 2030,
          "casos": 26772
        },
        {
          "ano": 2031,
          "casos": 27201
        },
        {
          "ano": 2032,
          "casos": 27630
        },
        {
          "ano": 2033,
          "casos": 28059
        },
        {
          "ano": 2034,
          "casos": 28488
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
          "taxa": 43.7
        },
        {
          "ano": 2022,
          "taxa": 50.0
        },
        {
          "ano": 2023,
          "taxa": 54.1
        },
        {
          "ano": 2024,
          "taxa": 55.1
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 53.4
        },
        {
          "ano": 2026,
          "taxa": 54.3
        },
        {
          "ano": 2027,
          "taxa": 55.1
        },
        {
          "ano": 2028,
          "taxa": 55.9
        },
        {
          "ano": 2029,
          "taxa": 56.8
        },
        {
          "ano": 2030,
          "taxa": 57.6
        },
        {
          "ano": 2031,
          "taxa": 58.5
        },
        {
          "ano": 2032,
          "taxa": 59.3
        },
        {
          "ano": 2033,
          "taxa": 60.2
        },
        {
          "ano": 2034,
          "taxa": 61.1
        }
      ],
      "taxa_ultimo_ano": 55.1,
      "variacao_taxa_pct": 22.7,
      "populacao_ultimo_ano": 45973194,
      "coeficiente_anual": 429.0,
      "intercepto": -844070.9,
      "r2": 0.675,
      "crescimento_pct_ano": 1.69,
      "crescimento_total_pct": 29.6,
      "casos_ultimo_ano": 25318,
      "backtest_erro_pct": {
        "2022": -4.8,
        "2023": -11.5,
        "2024": -12.6
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
          "casos": 15097
        },
        {
          "ano": 2020,
          "casos": 13712
        },
        {
          "ano": 2021,
          "casos": 15091
        },
        {
          "ano": 2022,
          "casos": 16100
        },
        {
          "ano": 2023,
          "casos": 16954
        },
        {
          "ano": 2024,
          "casos": 17228
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 17309
        },
        {
          "ano": 2026,
          "casos": 17688
        },
        {
          "ano": 2027,
          "casos": 18067
        },
        {
          "ano": 2028,
          "casos": 18446
        },
        {
          "ano": 2029,
          "casos": 18825
        },
        {
          "ano": 2030,
          "casos": 19205
        },
        {
          "ano": 2031,
          "casos": 19584
        },
        {
          "ano": 2032,
          "casos": 19963
        },
        {
          "ano": 2033,
          "casos": 20342
        },
        {
          "ano": 2034,
          "casos": 20721
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
          "taxa": 87.8
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
          "taxa": 98.5
        },
        {
          "ano": 2024,
          "taxa": 100.0
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 100.5
        },
        {
          "ano": 2026,
          "taxa": 102.7
        },
        {
          "ano": 2027,
          "taxa": 104.9
        },
        {
          "ano": 2028,
          "taxa": 107.1
        },
        {
          "ano": 2029,
          "taxa": 109.3
        },
        {
          "ano": 2030,
          "taxa": 111.5
        },
        {
          "ano": 2031,
          "taxa": 113.8
        },
        {
          "ano": 2032,
          "taxa": 116.0
        },
        {
          "ano": 2033,
          "taxa": 118.3
        },
        {
          "ano": 2034,
          "taxa": 120.6
        }
      ],
      "taxa_ultimo_ano": 100.0,
      "variacao_taxa_pct": 25.8,
      "populacao_ultimo_ano": 17219679,
      "coeficiente_anual": 379.2,
      "intercepto": -750573.8,
      "r2": 0.937,
      "crescimento_pct_ano": 2.2,
      "crescimento_total_pct": 29.1,
      "casos_ultimo_ano": 17228,
      "backtest_erro_pct": {
        "2022": -3.0,
        "2023": -6.2,
        "2024": -6.0
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
          "casos": 67700
        },
        {
          "ano": 2020,
          "casos": 60769
        },
        {
          "ano": 2021,
          "casos": 64219
        },
        {
          "ano": 2022,
          "casos": 72592
        },
        {
          "ano": 2023,
          "casos": 77611
        },
        {
          "ano": 2024,
          "casos": 78208
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 78233
        },
        {
          "ano": 2026,
          "casos": 80090
        },
        {
          "ano": 2027,
          "casos": 81946
        },
        {
          "ano": 2028,
          "casos": 83803
        },
        {
          "ano": 2029,
          "casos": 85659
        },
        {
          "ano": 2030,
          "casos": 87516
        },
        {
          "ano": 2031,
          "casos": 89373
        },
        {
          "ano": 2032,
          "casos": 91229
        },
        {
          "ano": 2033,
          "casos": 93086
        },
        {
          "ano": 2034,
          "casos": 94942
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
          "taxa": 66.7
        },
        {
          "ano": 2020,
          "taxa": 59.5
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
          "taxa": 75.2
        },
        {
          "ano": 2024,
          "taxa": 75.4
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 75.2
        },
        {
          "ano": 2026,
          "taxa": 76.7
        },
        {
          "ano": 2027,
          "taxa": 78.2
        },
        {
          "ano": 2028,
          "taxa": 79.8
        },
        {
          "ano": 2029,
          "taxa": 81.3
        },
        {
          "ano": 2030,
          "taxa": 82.8
        },
        {
          "ano": 2031,
          "taxa": 84.4
        },
        {
          "ano": 2032,
          "taxa": 85.9
        },
        {
          "ano": 2033,
          "taxa": 87.5
        },
        {
          "ano": 2034,
          "taxa": 89.1
        }
      ],
      "taxa_ultimo_ano": 75.4,
      "variacao_taxa_pct": 26.1,
      "populacao_ultimo_ano": 103662286,
      "coeficiente_anual": 1856.5,
      "intercepto": -3681243.3,
      "r2": 0.878,
      "crescimento_pct_ano": 2.37,
      "crescimento_total_pct": 34.2,
      "casos_ultimo_ano": 78208,
      "backtest_erro_pct": {
        "2022": -5.6,
        "2023": -10.2,
        "2024": -9.3
      },
      "status": "Crítico"
    },
    "Feminino": {
      "grupo": "Sexo",
      "historico": [
        {
          "ano": 2013,
          "casos": 26941
        },
        {
          "ano": 2014,
          "casos": 27135
        },
        {
          "ano": 2015,
          "casos": 26640
        },
        {
          "ano": 2016,
          "casos": 26530
        },
        {
          "ano": 2017,
          "casos": 26920
        },
        {
          "ano": 2018,
          "casos": 28444
        },
        {
          "ano": 2019,
          "casos": 28985
        },
        {
          "ano": 2020,
          "casos": 25461
        },
        {
          "ano": 2021,
          "casos": 27154
        },
        {
          "ano": 2022,
          "casos": 30717
        },
        {
          "ano": 2023,
          "casos": 32185
        },
        {
          "ano": 2024,
          "casos": 33301
        }
      ],
      "projecao": [
        {
          "ano": 2025,
          "casos": 32238
        },
        {
          "ano": 2026,
          "casos": 32782
        },
        {
          "ano": 2027,
          "casos": 33325
        },
        {
          "ano": 2028,
          "casos": 33868
        },
        {
          "ano": 2029,
          "casos": 34412
        },
        {
          "ano": 2030,
          "casos": 34955
        },
        {
          "ano": 2031,
          "casos": 35499
        },
        {
          "ano": 2032,
          "casos": 36042
        },
        {
          "ano": 2033,
          "casos": 36585
        },
        {
          "ano": 2034,
          "casos": 37129
        }
      ],
      "taxa_historico": [
        {
          "ano": 2013,
          "taxa": 26.5
        },
        {
          "ano": 2014,
          "taxa": 26.4
        },
        {
          "ano": 2015,
          "taxa": 25.7
        },
        {
          "ano": 2016,
          "taxa": 25.5
        },
        {
          "ano": 2017,
          "taxa": 25.7
        },
        {
          "ano": 2018,
          "taxa": 26.9
        },
        {
          "ano": 2019,
          "taxa": 27.3
        },
        {
          "ano": 2020,
          "taxa": 23.8
        },
        {
          "ano": 2021,
          "taxa": 25.2
        },
        {
          "ano": 2022,
          "taxa": 28.4
        },
        {
          "ano": 2023,
          "taxa": 29.7
        },
        {
          "ano": 2024,
          "taxa": 30.6
        }
      ],
      "taxa_projecao": [
        {
          "ano": 2025,
          "taxa": 29.5
        },
        {
          "ano": 2026,
          "taxa": 29.9
        },
        {
          "ano": 2027,
          "taxa": 30.2
        },
        {
          "ano": 2028,
          "taxa": 30.6
        },
        {
          "ano": 2029,
          "taxa": 31.0
        },
        {
          "ano": 2030,
          "taxa": 31.4
        },
        {
          "ano": 2031,
          "taxa": 31.8
        },
        {
          "ano": 2032,
          "taxa": 32.2
        },
        {
          "ano": 2033,
          "taxa": 32.6
        },
        {
          "ano": 2034,
          "taxa": 33.0
        }
      ],
      "taxa_ultimo_ano": 30.6,
      "variacao_taxa_pct": 15.5,
      "populacao_ultimo_ano": 108921464,
      "coeficiente_anual": 543.4,
      "intercepto": -1068155.4,
      "r2": 0.721,
      "crescimento_pct_ano": 1.63,
      "crescimento_total_pct": 23.6,
      "casos_ultimo_ano": 33301,
      "backtest_erro_pct": {
        "2022": -8.1,
        "2023": -11.8,
        "2024": -14.3
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
