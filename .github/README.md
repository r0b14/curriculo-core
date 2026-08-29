# Automação do repositório

Esta pasta reúne as automações executadas pelo GitHub Actions. Os workflows usam somente o exemplo fictício versionado no projeto; currículos reais e dados pessoais não devem ser enviados ao CI.

## Workflows

| Arquivo | Quando executa | O que verifica |
|---|---|---|
| [`workflows/ci.yml`](workflows/ci.yml) | `push` na `main`, `pull_request` e execução manual | Núcleo nas versões 20 e 22 do Node.js; tipos e build do frontend no Node.js 22 |
| [`workflows/latex-smoke.yml`](workflows/latex-smoke.yml) | Alterações no núcleo, exemplo, imagem LaTeX ou no próprio workflow; também manualmente | Validação e geração do exemplo, construção da imagem Docker e compilação real com pdfLaTeX |
| [`workflows/dependency-review.yml`](workflows/dependency-review.yml) | Pull requests para `main` | Bloqueia novas dependências com vulnerabilidades de severidade alta ou crítica |
| [`workflows/codeql.yml`](workflows/codeql.yml) | `push`, pull requests, agenda semanal e execução manual | Análise estática de JavaScript e TypeScript com CodeQL |
| [`workflows/pages.yml`](workflows/pages.yml) | CI concluído com sucesso na `main` ou execução manual | Build do frontend e publicação no ambiente protegido `github-pages` |

O smoke test publica `curriculo-core-example-pdf` como artifact por sete dias. Esse arquivo contém apenas dados fictícios.

## Validação local equivalente

```bash
npm ci
npm run check
npm test
npm run validate:example
npm run generate:example
```

A compilação do PDF exige `pdflatex` ou Docker. Consulte o [guia sem instalação local](../docs/latex/without-local-install.md).

Para reproduzir o check do frontend:

```bash
cd frontend
pnpm install --frozen-lockfile
pnpm check
```

## Dependabot

[`dependabot.yml`](dependabot.yml) verifica semanalmente os pacotes npm do núcleo e do frontend, além das versões usadas pelos workflows. Atualizações minor e patch do frontend são agrupadas para reduzir ruído.

## Publicação

O Pages não publica diretamente a partir de uma branch. `pages.yml` recebe somente o bundle de `frontend/dist` e o deploy depende do job de build. Em eventos automáticos, o workflow usa exatamente o commit da `main` que passou pelo CI.

Consulte [GitHub Pages e entrega contínua](../docs/github-pages.md) para ativação, URL e diagnóstico.

## Cuidados ao alterar workflows

- mantenha `permissions: contents: read` sempre que permissões adicionais não forem necessárias;
- não inclua secrets, currículos reais ou o conteúdo de `output/` em logs, caches ou artifacts;
- fixe actions em versões principais conhecidas e revise mudanças antes de atualizar;
- mantenha o workflow de LaTeX sem `shell-escape`.

[Voltar à documentação](../docs/README.md)
