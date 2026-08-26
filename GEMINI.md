# GEMINI.md — Currículo Core

O contrato completo deste repositório está em [`AGENTS.md`](AGENTS.md). Leia-o antes de fazer alterações; em caso de divergência, `AGENTS.md` é a referência canônica.

## Roteamento obrigatório

- Entender o projeto: `docs/project.md`.
- Instalar ou diagnosticar LaTeX: `docs/latex/README.md` e guia do sistema.
- Trabalhar sem LaTeX local: `docs/latex/without-local-install.md`.
- Alterar schema: atualizar schema, validator, exemplo, testes e docs em conjunto.
- Alterar template: preservar pdfLaTeX, escape, A4, uma coluna e texto selecionável.

## Restrições

- Não inventar dados profissionais.
- Não expor nem versionar dados pessoais.
- Não instalar distribuições/pacotes sem solicitação explícita.
- Não usar serviço externo como fallback automático.
- Não remover escape LaTeX nem habilitar shell escape.
- Não declarar PDF validado quando apenas o `.tex` foi gerado.

## Verificação padrão

```bash
npm ci
npm run check
npm test
npm run validate:example
npm run generate:example
```

Se `pdflatex` já estiver disponível e a tarefa exigir PDF, execute a geração com `--compile`. Caso contrário, entregue o `.tex` e documente a limitação com precisão.
