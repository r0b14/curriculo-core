# Curriculo Core

Gerador local e open source de currículos legíveis por pessoas e sistemas ATS. O projeto transforma dados JSON em um documento LaTeX A4, com validação, controle explícito de privacidade e priorização simples por palavras-chave da vaga.

O repositório contém somente o núcleo do produto: não inclui currículos reais, fotos, dados pessoais, integrações proprietárias ou uma interface específica.

## Recursos

- CLI sem dependências externas de runtime;
- contrato de dados documentado por JSON Schema;
- template LaTeX A4, de uma coluna e com texto selecionável;
- escape de caracteres reservados do LaTeX;
- ocultação de telefone por padrão;
- ordenação estável de experiências e projetos por aderência à vaga;
- português do Brasil e inglês;
- testes automatizados em Node.js 20 e 22.

## Requisitos

- Node.js 20 ou superior;
- opcionalmente, uma distribuição LaTeX com `pdflatex` para gerar o PDF.

## Começando

```bash
npm install
npm run validate:example
npm run generate:example
```

O último comando cria `output/curriculo-exemplo.tex`. Para também gerar o PDF:

```bash
node src/cli.js generate \
  --input examples/curriculo.exemplo.json \
  --output output/curriculo-exemplo.tex \
  --compile
```

No PowerShell, execute o mesmo comando em uma única linha ou use a crase como continuação.

## Contrato de dados

O arquivo [schema/resume.schema.json](schema/resume.schema.json) descreve o formato completo. Um currículo mínimo é:

```json
{
  "basics": {
    "name": "Pessoa Exemplo",
    "headline": "Área de atuação"
  },
  "summary": "Resumo profissional objetivo."
}
```

As coleções opcionais são `skills`, `experience`, `projects`, `education` e `languages`. Veja [examples/curriculo.exemplo.json](examples/curriculo.exemplo.json) para um caso completo com identidade fictícia.

## Adaptação para uma vaga

Informe termos reais da oportunidade em `targetKeywords`. Experiências e projetos com esses termos em `tags`, títulos, descrições ou resultados sobem na ordem, preservando a ordem original em caso de empate. Os limites `maxExperiences` e `maxProjects` controlam o tamanho final.

Esse mecanismo apenas reorganiza evidências fornecidas. Ele não inventa competências, métricas ou experiências.

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

O telefone fica oculto por padrão. O processamento é local e nenhum dado é enviado pela aplicação. Consulte [SECURITY.md](SECURITY.md) antes de trabalhar com currículos reais.

## Arquitetura

```text
JSON do currículo
  -> validação
  -> normalização e regras de privacidade
  -> priorização por palavras-chave
  -> renderização segura em LaTeX
  -> .tex
  -> PDF opcional via pdflatex
```

O código de domínio está em `src/core/`; `src/cli.js` cuida somente de arquivos, argumentos e compilação opcional. Essa separação permite reutilizar `generateResume()` futuramente em uma API, interface web ou fila de documentos.

## Desenvolvimento

```bash
npm run check
npm test
```

## Licença

[MIT](LICENSE)
