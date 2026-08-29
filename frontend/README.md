# Site open source

Esta pasta contém a página pública do Currículo Core, criada com React, TypeScript, Vite e Tailwind CSS. O site apresenta arquitetura, princípios, módulos, guia editorial, assistência local, quick start e caminhos de contribuição; ele não coleta currículos nem chama serviços de IA.

## Executar localmente

Requisitos: Node.js compatível com o projeto e pnpm.

```bash
cd frontend
pnpm install
pnpm dev
```

Por padrão, o servidor usa `http://localhost:8443`. A variável `PORT` permite escolher outra porta.

## Scripts

| Comando | Finalidade |
|---|---|
| `pnpm dev` | Inicia o servidor Vite |
| `pnpm build` | Gera o bundle de produção com Vite |
| `pnpm typecheck` | Verifica tipos sem gerar arquivos |
| `pnpm check` | Executa typecheck e build, como no CI |
| `pnpm preview` | Serve localmente o bundle gerado |
| `pnpm format` | Formata os fontes com oxfmt |

## Estrutura

| Caminho | Responsabilidade |
|---|---|
| [`index.html`](index.html) | Shell HTML e ponto de montagem |
| [`src/`](src/) | Componentes, comportamento e estilos da página |
| [`vite.config.ts`](vite.config.ts) | React, Tailwind, alias `@`, servidor e integração de preview |
| [`src/imports/style.md`](src/imports/style.md) | Marca, tokens e decisões visuais |
| [`package.json`](package.json) | Scripts e dependências exclusivas do frontend |
| [`public/favicon.svg`](public/favicon.svg) | Ícone copiado para o bundle público |

## GitHub Pages

O workflow [`pages.yml`](../.github/workflows/pages.yml) calcula o caminho-base do repositório, executa `pnpm check`, envia somente `dist/` como artifact e publica após o CI da `main`. Veja o [guia de entrega contínua](../docs/github-pages.md).

## Limite de responsabilidade

Esta página é documental e não substitui uma interface para preencher currículos. Uma futura aplicação deve consumir o [contrato JSON](../schema/README.md), integrar-se ao núcleo de `src/core/` e preservar todas as garantias de privacidade e não invenção.

[Voltar ao projeto](../README.md)
