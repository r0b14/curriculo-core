# Visão geral do Currículo Core

## O que o projeto faz

O Currículo Core recebe um arquivo JSON, valida os dados, aplica regras explícitas de privacidade, prioriza experiências e projetos por palavras-chave e renderiza um documento LaTeX A4. A compilação para PDF é uma etapa opcional.

O repositório contém somente o núcleo do produto. Não contém currículos reais, fotos, dados pessoais, integrações proprietárias ou uma interface específica.

## Recursos

- CLI sem dependências externas em runtime;
- contrato de dados documentado por JSON Schema;
- template LaTeX A4, de uma coluna e com texto selecionável;
- escape de caracteres reservados do LaTeX;
- ocultação de telefone por padrão;
- ordenação estável por aderência às palavras-chave da vaga;
- conteúdo em português do Brasil ou inglês;
- testes automatizados em Node.js 20 e 22.

## Requisitos

- Node.js 20 ou superior;
- npm;
- opcionalmente, `pdflatex` para gerar PDF;
- opcionalmente, Docker para compilar PDF sem instalar LaTeX no host.

## Primeiro uso

```bash
npm install
npm run validate:example
npm run generate:example
```

O último comando cria `output/curriculo-exemplo.tex`. Isso funciona sem LaTeX instalado.

Com `pdflatex` disponível:

```bash
node src/cli.js generate --input examples/curriculo.exemplo.json --output output/curriculo-exemplo.tex --compile
```

O comando cria o `.tex` e o PDF. Consulte o guia do seu sistema em [docs/latex](latex/README.md) ou use o [modo sem instalação local](latex/without-local-install.md).

## Comandos da CLI

```text
curriculo-core validate --input <arquivo.json>
curriculo-core generate --input <arquivo.json> --output <curriculo.tex> [--compile]
```

| Opção | Forma curta | Função |
|---|---|---|
| `--input` | `-i` | Caminho do JSON de entrada |
| `--output` | `-o` | Caminho do `.tex` de saída |
| `--compile` | — | Executa `pdflatex` depois da geração |
| `--help` | `-h` | Exibe ajuda |

Os caminhos relativos são resolvidos a partir do diretório atual. A pasta de saída é criada automaticamente.

## Dados mínimos

```json
{
  "basics": {
    "name": "Pessoa Exemplo",
    "headline": "Área de atuação"
  },
  "summary": "Resumo profissional objetivo."
}
```

As coleções opcionais são `skills`, `experience`, `projects`, `education` e `languages`. O contrato completo está em [`schema/resume.schema.json`](../schema/resume.schema.json).

## Adaptação para vaga

Informe termos reais da oportunidade em `targetKeywords`. Experiências e projetos que contêm esses termos em tags, títulos, descrições ou resultados sobem na ordem. Empates preservam a ordem original.

`maxExperiences` e `maxProjects` limitam quantos itens aparecem no documento final. O algoritmo reorganiza apenas as evidências fornecidas; ele não cria competências, métricas ou experiências.

## Privacidade

```json
{
  "privacy": {
    "showEmail": true,
    "showPhone": false,
    "showLocation": true
  }
}
```

O telefone fica oculto por padrão. A geração local não envia dados pela rede. Docker também pode manter os dados locais quando somente uma pasta da máquina é montada no contêiner. Serviços online e runners de CI são ambientes externos e exigem outra avaliação de privacidade.

Leia [`SECURITY.md`](../SECURITY.md) antes de trabalhar com dados reais.

## Arquitetura

```text
JSON
  -> validação em JavaScript
  -> normalização e privacidade
  -> priorização por palavras-chave
  -> renderização e escape LaTeX
  -> arquivo .tex
  -> pdflatex opcional
  -> arquivo PDF
```

| Responsabilidade | Arquivo |
|---|---|
| CLI, leitura/escrita e chamada do `pdflatex` | `src/cli.js` |
| Orquestração do domínio | `src/core/generate-resume.js` |
| Validação em runtime | `src/core/validate-resume.js` |
| Defaults e privacidade | `src/core/normalize-resume.js` |
| Priorização | `src/core/rank-items.js` |
| Escape de texto e URLs | `src/core/latex.js` |
| Template LaTeX | `src/core/render-latex.js` |
| Contrato declarativo | `schema/resume.schema.json` |

## Desenvolvimento

```bash
npm run check
npm test
```

Para uma mudança no contrato de dados, atualize em conjunto schema, validação de runtime, normalização quando necessária, exemplo, testes e documentação.
