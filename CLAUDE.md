# CLAUDE.md — Currículo Core

Leia e siga integralmente [`AGENTS.md`](AGENTS.md) antes de modificar ou executar este projeto. Ele é a fonte canônica; este arquivo apenas fornece a entrada específica para sessões Claude.

## Antes de agir

1. Identifique se o usuário quer apenas validar, gerar `.tex` ou também compilar PDF.
2. Verifique de forma não destrutiva se `pdflatex` ou Docker já existem.
3. Se o usuário não pediu instalação, não instale LaTeX nem pacotes do sistema.
4. Se não houver compilador, continue com testes e geração do `.tex`.
5. Nunca envie currículo real a serviço externo ou CI sem consentimento explícito.

## Contexto essencial

- Node.js 20+; módulos ES.
- Sem dependências externas de runtime.
- pdfLaTeX é o engine canônico.
- `src/core/latex.js` protege o limite entre dados e comandos LaTeX.
- Telefone fica oculto por padrão.
- O ranking apenas reorganiza evidências; não autoriza criar conteúdo.

## Verificação padrão

```bash
npm ci
npm run check
npm test
npm run validate:example
npm run generate:example
```

Use `--compile` somente após confirmar `pdflatex`. Para Docker ou instruções por sistema, consulte `docs/latex/`. Ao terminar, declare se o PDF foi realmente compilado.
