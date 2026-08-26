# Playbook para Codex, Claude e Gemini

Este guia explica como pedir ajuda a um agente sem perder privacidade, instalar ferramentas desnecessárias ou confundir geração de `.tex` com compilação de PDF.

As regras operacionais canônicas ficam em [`AGENTS.md`](../AGENTS.md). `CLAUDE.md` e `GEMINI.md` encaminham os respectivos agentes para o mesmo contrato.

## O agente deve identificar o modo

| Modo pedido | O que executar | Entrega esperada |
|---|---|---|
| Validar dados | `validate` + testes relevantes | diagnóstico do JSON |
| Gerar sem LaTeX | `generate` sem `--compile` | `.tex` |
| Gerar PDF local | detectar `pdflatex`, depois `--compile` | `.tex` + PDF |
| Gerar PDF sem instalar | detectar Docker, compilar no contêiner | `.tex` + PDF |
| Alterar o core | testes + geração do exemplo | código e evidências |
| Alterar o template | testes + inspeção do `.tex` + PDF se houver compilador | renderer validado |

Se o pedido for ambíguo, o agente deve começar pelo modo menos invasivo: validar e gerar `.tex`. Instalar uma distribuição LaTeX é uma mudança grande, consome espaço e pode exigir privilégios; isso exige solicitação clara do usuário.

## Pedidos prontos

### Sem LaTeX instalado

> Valide meu JSON e gere o `.tex`, mas não instale LaTeX, não use Docker e não envie meus dados a serviços externos. Execute os testes e informe claramente que não foi gerado PDF.

### PDF via Docker

> Gere meu currículo e compile o PDF usando o Dockerfile do repositório. Não instale LaTeX no host e monte somente a pasta de saída no contêiner.

### Com LaTeX local

> Verifique se `pdflatex` já está disponível. Se estiver, gere e compile o PDF. Se não estiver, pare na geração do `.tex` e indique o guia do meu sistema, sem instalar nada.

### Alterar o template

> Faça a alteração no renderer, preserve o escape LaTeX e a compatibilidade ATS, adicione testes e valide o `.tex`. Compile o exemplo somente se `pdflatex` ou Docker já estiver disponível.

## O que um bom agente deve relatar

- arquivos alterados;
- comandos de validação executados;
- se o `.tex` foi gerado;
- se o PDF foi realmente compilado;
- compilador/distribuição usados;
- qualquer etapa não executada e o motivo;
- riscos de privacidade quando houver ferramenta remota.

## Sinais de uma execução insegura

- instalar TeX Live completo sem avisar;
- fazer upload automático de currículo real;
- versionar `output/` ou JSON pessoal;
- alterar o `.tex` gerado em vez do renderer, quando a mudança é de produto;
- desativar escape para aceitar comandos no conteúdo;
- declarar que o PDF foi validado sem tê-lo compilado;
- trocar pdfLaTeX por outro engine sem revisar compatibilidade e testes.

## Arquivos que o agente precisa conhecer

| Objetivo | Arquivos principais |
|---|---|
| Entender o fluxo | `docs/project.md`, `src/core/generate-resume.js` |
| Alterar contrato | schema, validator, normalizer, exemplo e testes |
| Alterar layout | `src/core/render-latex.js`, `src/core/latex.js` |
| Alterar CLI | `src/cli.js` |
| Diagnosticar LaTeX | `docs/latex/README.md`, guia do SO e troubleshooting |
| Compilar sem instalação | `docs/latex/without-local-install.md`, Dockerfile |
| Trabalhar com dados reais | `SECURITY.md` |

## Privacidade para sessões com IA

Antes de colar dados em qualquer chat ou ferramenta:

1. substitua nome, e-mail, telefone, endereço e URLs privadas;
2. use empresas e instituições fictícias se a identidade não for necessária;
3. mantenha apenas o menor trecho que reproduz o problema;
4. confirme as políticas de retenção da ferramenta utilizada.

O exemplo do repositório foi criado para testes e pode ser compartilhado. Um currículo real não deve entrar em prompts, logs, issues ou commits públicos.
