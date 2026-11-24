# Como contribuir

A banca avalia a **contribuição visível de todos os integrantes**. Por isso, cada pessoa deve fazer commits **com a própria conta do GitHub**.

## Primeira vez
```bash
git clone https://github.com/mateusmellomaia12-cloud/alertatb.git
cd alertatb
git config user.name  "Seu Nome"
git config user.email "seu-email-do-github@exemplo.com"
```

## Fluxo de trabalho
```bash
git checkout main
git pull                                # pega a versão mais nova
git checkout -b feat/tela1-kpis         # cria um branch para sua tarefa

# ... faz as alterações ...

git add .
git commit -m "feat(web): cards de KPI da Tela 1"
git push -u origin feat/tela1-kpis
```
Depois, abra um **Pull Request** no GitHub para o `main`. Outra pessoa do grupo revisa e aprova.

## Padrão de mensagens de commit
| Prefixo | Uso |
|---|---|
| `feat:` | nova funcionalidade |
| `fix:` | correção |
| `docs:` | README e documentação |
| `data:` | dados e scripts de tratamento |
| `style:` | visual/CSS sem mudar lógica |

Escopos sugeridos: `web`, `analysis`, `powerbi`, `docs`, `assets`.

## Regras
- Não subir arquivos gigantes (> 50 MB) nem senhas/tokens.
- Trabalhe só na pasta da sua frente para evitar conflitos (ver [divisão de tarefas](docs/divisao_de_tarefas.md)).
- Faça commits pequenos e frequentes: isso também mostra a evolução do projeto.
