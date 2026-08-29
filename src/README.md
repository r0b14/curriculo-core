# Código-fonte Node.js

Esta pasta contém a CLI e o núcleo do Currículo Core. O código usa módulos ES e apenas APIs nativas do Node.js em runtime.

## Componentes

| Caminho | Responsabilidade |
|---|---|
| [`cli.js`](cli.js) | Lê argumentos e JSON, chama o núcleo, grava `.tex` e opcionalmente executa pdfLaTeX |
| [`core/`](core/) | Validação, defaults de privacidade, pacote de revisão, ranking, escape e renderização |

## CLI

Validar uma entrada:

```bash
node src/cli.js validate --input examples/curriculo.exemplo.json
```

Gerar LaTeX:

```bash
node src/cli.js generate --input examples/curriculo.exemplo.json --output output/curriculo-exemplo.tex
```

Gerar e compilar, somente quando `pdflatex` já estiver disponível:

```bash
node src/cli.js generate --input examples/curriculo.exemplo.json --output output/curriculo-exemplo.tex --compile
```

Exibir o guia canônico de montagem:

```bash
node src/cli.js guide
```

Preparar um pacote local para uma IA escolhida pelo usuário:

```bash
node src/cli.js assist --input examples/curriculo.exemplo.json --job examples/vaga.exemplo.txt --output output/assistente-exemplo.md
```

Atalhos `-i`, `-o` e `-h` também são aceitos. `guide` e `assist` não requerem LaTeX nem chave de API. O último apenas grava um arquivo local e não executa uma IA externa.

## Fluxo interno

```text
JSON → validateResume → normalizeResume → renderLatex → arquivo .tex → PDF opcional
                  ↘ guia + vaga → pacote local de revisão → aprovação humana
```

Erros de entrada produzem uma lista de campos inválidos e encerram a CLI com status diferente de zero.

## Verificação

```bash
npm run check
npm test
```

Detalhes de cada etapa estão no [README do núcleo](core/README.md).

[Voltar ao projeto](../README.md)
