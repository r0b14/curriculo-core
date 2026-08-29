# Documentação

Este diretório contém a documentação detalhada do Currículo Core. O `README.md` da raiz funciona apenas como porta de entrada.

## Produto e desenvolvimento

- [Visão geral, requisitos, primeiro uso e arquitetura](project.md)
- [Guia canônico de criação de currículos](../guides/resume-creation.md)
- [Assistência opcional de IA pela CLI](ai-assistance.md)
- [CLI e código-fonte](../src/README.md)
- [Pipeline interno de geração](../src/core/README.md)
- [Contrato de dados JSON](../schema/README.md)
- [Exemplos fictícios](../examples/README.md)
- [Testes automatizados](../test/README.md)
- [Frontend demonstrativo](../frontend/README.md)
- [GitHub Pages e entrega contínua](github-pages.md)
- [Contêineres Docker](../docker/README.md)
- [Automações do GitHub Actions](../.github/README.md)
- [JSON Schema do currículo](../schema/resume.schema.json)
- [Exemplo completo e fictício](../examples/curriculo.exemplo.json)
- [Segurança e privacidade](../SECURITY.md)
- [Como contribuir](../CONTRIBUTING.md)
- [Brand e design system](../frontend/src/imports/style.md)

## LaTeX

1. [Fundamentos e integração com o Currículo Core](latex/README.md)
2. [Windows — MiKTeX ou TeX Live](latex/windows.md)
3. [Linux — pacotes da distribuição ou TeX Live](latex/linux.md)
4. [macOS — MacTeX ou BasicTeX](latex/macos.md)
5. [Sem instalação local — `.tex`, Docker ou serviço remoto](latex/without-local-install.md)
6. [Diagnóstico e solução de problemas](latex/troubleshooting.md)

## Agentes de IA

- [Fluxo local de revisão para uma IA escolhida pelo usuário](ai-assistance.md)
- [Playbook para Codex, Claude e Gemini](agents.md)
- [Contrato canônico do repositório para agentes](../AGENTS.md)
- [Entrada específica do Claude](../CLAUDE.md)
- [Entrada específica do Gemini](../GEMINI.md)

## Escolha rápida

| Ambiente | Para gerar `.tex` | Para gerar PDF |
|---|---|---|
| Qualquer sistema com Node.js 20+ | Node.js apenas | LaTeX local, Docker ou serviço externo |
| Windows | `npm run generate:example` | [Guia Windows](latex/windows.md) |
| Linux | `npm run generate:example` | [Guia Linux](latex/linux.md) |
| macOS | `npm run generate:example` | [Guia macOS](latex/macos.md) |
| Sem LaTeX local | `npm run generate:example` | [Guia sem instalação](latex/without-local-install.md) |
