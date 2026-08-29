<div align="center">

# Currículo Core

**Sua trajetória, pronta para avançar.**

Gerador local e open source de currículos profissionais, legíveis por pessoas e preparados para sistemas ATS.

[![CI](https://github.com/r0b14/curriculo-core/actions/workflows/ci.yml/badge.svg)](https://github.com/r0b14/curriculo-core/actions/workflows/ci.yml)
[![LaTeX smoke test](https://github.com/r0b14/curriculo-core/actions/workflows/latex-smoke.yml/badge.svg)](https://github.com/r0b14/curriculo-core/actions/workflows/latex-smoke.yml)
[![GitHub Pages](https://github.com/r0b14/curriculo-core/actions/workflows/pages.yml/badge.svg)](https://r0b14.github.io/curriculo-core/)
![Node.js 20+](https://img.shields.io/badge/Node.js-20%2B-3C873A?logo=node.js&logoColor=white)
[![License: MIT](https://img.shields.io/badge/License-MIT-5B4BFF.svg)](LICENSE)

[Começar](#comece-em-1-minuto) · [Site](https://r0b14.github.io/curriculo-core/) · [Documentação](docs/README.md) · [Usar sem LaTeX](docs/latex/without-local-install.md) · [Contribuir](CONTRIBUTING.md)

</div>

---

## Por que o Currículo Core?

- **Local por padrão:** os dados permanecem na sua máquina.
- **Compatível com ATS:** documento A4, textual, selecionável e sem layout frágil.
- **Adaptável por vaga:** prioriza experiências e projetos usando palavras-chave reais.
- **Honesto:** reorganiza evidências fornecidas, sem inventar competências ou resultados.
- **Portável:** gera `.tex` sem exigir LaTeX e PDF quando `pdflatex` está disponível.
- **Simples de integrar:** núcleo em Node.js, sem dependências externas de runtime.
- **Assistência opcional:** a CLI prepara uma revisão orientada por IA sem enviar dados nem exigir chave no projeto.

## Comece em 1 minuto

Requisito: **Node.js 20 ou superior**.

```bash
git clone https://github.com/r0b14/curriculo-core.git
cd curriculo-core
npm install
npm run validate:example
npm run generate:example
```

O currículo de exemplo será gerado em `output/curriculo-exemplo.tex`. Nenhuma instalação LaTeX é necessária para essa etapa.

### Gerar também o PDF

Com `pdflatex` disponível na máquina:

```bash
node src/cli.js generate --input examples/curriculo.exemplo.json --output output/curriculo-exemplo.tex --compile
```

Sem LaTeX local, use o [compilador isolado com Docker](docs/latex/without-local-install.md#modo-2--compilar-com-docker).

## Como funciona

```text
JSON do currículo
  → validação
  → privacidade e normalização
  → priorização por palavras-chave
  → documento LaTeX seguro
  → PDF opcional
```

O telefone começa oculto por padrão. Conteúdo fornecido pelo usuário é escapado antes de entrar no documento LaTeX.

## Guia e assistência opcional

Leia no terminal as técnicas canônicas de montagem:

```bash
npm run guide
```

Para preparar localmente uma revisão baseada em currículo e vaga:

```bash
npm run assist:example
```

O arquivo é criado em `output/assistente-exemplo.md`. Nenhuma IA é chamada e nenhum dado é enviado. A pessoa decide se fornecerá o pacote a uma CLI externa e deve revisar toda sugestão antes de alterar o JSON. Veja o [guia de assistência de IA](docs/ai-assistance.md).

## Site open source

A pasta [`frontend/`](frontend/) contém a página pública do projeto, focada em arquitetura, princípios, quick start e contribuição open source.

Essa implementação usa **React, Vite e Tailwind CSS**, não coleta dados e não chama serviços de IA. O núcleo continua independente em `src/core/`.

Para executar a sugestão de front:

```bash
cd frontend
pnpm install
pnpm dev
```

O deploy é feito pelo GitHub Actions depois que o CI da `main` passa. Consulte o [guia do GitHub Pages](docs/github-pages.md).

## Exemplo mínimo

```json
{
  "basics": {
    "name": "Pessoa Exemplo",
    "headline": "Desenvolvimento de Software"
  },
  "summary": "Profissional com experiência na construção de produtos digitais."
}
```

O contrato completo está em [`schema/resume.schema.json`](schema/resume.schema.json) e um caso preenchido em [`examples/curriculo.exemplo.json`](examples/curriculo.exemplo.json).

## Escolha seu modo de uso

| Objetivo | Precisa de LaTeX local? | Guia |
|---|:---:|---|
| Validar o JSON | Não | [Visão geral](docs/project.md) |
| Gerar o arquivo `.tex` | Não | [LaTeX no projeto](docs/latex/README.md) |
| Gerar PDF localmente | Sim | [Windows](docs/latex/windows.md) · [Linux](docs/latex/linux.md) · [macOS](docs/latex/macos.md) |
| Gerar PDF com Docker | Não | [Sem instalação local](docs/latex/without-local-install.md) |
| Trabalhar com agentes de IA | Não | [Codex, Claude e Gemini](docs/agents.md) |
| Preparar revisão por uma IA escolhida pelo usuário | Não | [Assistência de IA pela CLI](docs/ai-assistance.md) |

## Documentação

| Assunto | Referência |
|---|---|
| Instalação, arquitetura e CLI | [`docs/project.md`](docs/project.md) |
| Técnicas de montagem de currículo | [`guides/resume-creation.md`](guides/resume-creation.md) |
| Assistência opcional por IA | [`docs/ai-assistance.md`](docs/ai-assistance.md) |
| Fundamentos e dependências LaTeX | [`docs/latex/README.md`](docs/latex/README.md) |
| Diagnóstico de erros | [`docs/latex/troubleshooting.md`](docs/latex/troubleshooting.md) |
| Site open source | [`frontend/`](frontend/) |
| GitHub Pages e CI/CD | [`docs/github-pages.md`](docs/github-pages.md) |
| Segurança e dados pessoais | [`SECURITY.md`](SECURITY.md) |
| Instruções para agentes | [`AGENTS.md`](AGENTS.md), [`CLAUDE.md`](CLAUDE.md), [`GEMINI.md`](GEMINI.md) |
| Brand e design system | [`frontend/src/imports/style.md`](frontend/src/imports/style.md) |
| Índice completo | [`docs/README.md`](docs/README.md) |

### Mapa por pasta

Cada área principal mantém um README próximo ao código ou recurso que descreve:

| Área | README local |
|---|---|
| CLI e código-fonte | [`src/README.md`](src/README.md) |
| Pipeline de geração | [`src/core/README.md`](src/core/README.md) |
| Contrato JSON | [`schema/README.md`](schema/README.md) |
| Dados fictícios | [`examples/README.md`](examples/README.md) |
| Testes | [`test/README.md`](test/README.md) |
| Frontend demonstrativo | [`frontend/README.md`](frontend/README.md) |
| Docker e pdfLaTeX | [`docker/README.md`](docker/README.md) |
| GitHub Actions | [`.github/README.md`](.github/README.md) |
| Guias editoriais | [`guides/README.md`](guides/README.md) |

## Desenvolvimento

```bash
npm run check
npm test
```

Mudanças no contrato de dados devem manter alinhados o JSON Schema, a validação em runtime, o exemplo, os testes e a documentação.

> [!IMPORTANT]
> Currículos contêm dados pessoais. Não versione arquivos reais, PDFs gerados ou informações sensíveis. Consulte [`SECURITY.md`](SECURITY.md).

## Contribuição e licença

Contribuições são bem-vindas. Leia [`CONTRIBUTING.md`](CONTRIBUTING.md) antes de abrir um pull request.

Distribuído sob a licença [MIT](LICENSE).
