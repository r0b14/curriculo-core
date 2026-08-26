# LaTeX no Currículo Core

## O papel do LaTeX

LaTeX é o sistema de composição responsável pela etapa final do documento. O Currículo Core não exige que a pessoa escreva comandos LaTeX: os dados ficam em JSON e o código gera um `.tex` completo.

Há uma separação importante:

```text
Node.js gera .tex              pdflatex transforma .tex em PDF
(LaTeX não é necessário)       (uma distribuição LaTeX é necessária)
```

Portanto, `validate` e `generate` sem `--compile` funcionam somente com Node.js. A opção `--compile` procura o executável `pdflatex` no `PATH`.

## Fluxos suportados

| Modo | LaTeX no host | Dados saem da máquina | Resultado |
|---|---:|---:|---|
| Validar JSON | Não | Não | confirmação ou erros |
| Gerar `.tex` | Não | Não | fonte LaTeX |
| Compilar localmente | Sim | Não | `.tex` + PDF |
| Compilar com Docker | Não | Não, na configuração documentada | `.tex` + PDF |
| Compilar em CI/serviço web | Não | Sim | PDF remoto |

Para currículos reais, prefira geração local ou Docker. Não envie dados pessoais a um serviço externo sem consentimento e sem entender a política desse serviço.

## O template gerado

O renderer produz um documento:

- classe `article`;
- papel A4;
- tamanho base de 10.5 pt;
- uma coluna;
- margens compactas;
- links clicáveis;
- texto selecionável;
- sem foto, gráficos de nível ou tabelas complexas de layout;
- compatível com caracteres acentuados em UTF-8;
- com cor primária configurável.

Essas decisões favorecem leitura humana e extração de texto por ATS. “Compatível com ATS” não significa aprovação garantida por todo sistema: fornecedores usam parsers e regras diferentes.

## Dependências LaTeX do template

O arquivo gerado usa estes componentes:

| Componente | Responsabilidade |
|---|---|
| `article` | classe base do documento |
| `fontenc` | codificação T1 das fontes |
| `inputenc` | entrada UTF-8 para pdfLaTeX |
| `lmodern` | fonte Latin Modern |
| `geometry` | margens A4 |
| `enumitem` | listas compactas |
| `titlesec` | títulos de seção |
| `xcolor` | cor primária |
| `tabularx` | alinhamento de cargo e período |
| `hyperref` | links e e-mail clicáveis |

Uma distribuição completa normalmente inclui tudo. Instalações mínimas podem exigir pacotes adicionais; os guias por sistema indicam como proceder.

## Comandos fundamentais

Validar dados:

```bash
node src/cli.js validate --input examples/curriculo.exemplo.json
```

Gerar apenas o `.tex`:

```bash
node src/cli.js generate --input examples/curriculo.exemplo.json --output output/curriculo-exemplo.tex
```

Gerar e compilar:

```bash
node src/cli.js generate --input examples/curriculo.exemplo.json --output output/curriculo-exemplo.tex --compile
```

Compilar manualmente um `.tex` já existente:

```bash
pdflatex -interaction=nonstopmode -halt-on-error -output-directory=output output/curriculo-exemplo.tex
```

O CLI usa `pdflatex -interaction=nonstopmode -halt-on-error` dentro da pasta do arquivo de saída. A compilação para no primeiro erro e o processo devolve status diferente de zero.

## Arquivos gerados

Uma compilação pdfLaTeX pode produzir:

| Extensão | Função | Versionar? |
|---|---|---:|
| `.tex` | fonte LaTeX gerada | normalmente não |
| `.pdf` | documento final | não, se contiver dados reais |
| `.aux` | estado auxiliar | não |
| `.log` | log detalhado | não |
| `.out` | metadados auxiliares | não |

O `.gitignore` já cobre `output/` e os principais arquivos temporários.

## Segurança do conteúdo

Textos fornecidos pelo JSON passam por escape para os caracteres reservados `\`, `{`, `}`, `$`, `&`, `#`, `%`, `_`, `~` e `^`. URLs têm um tratamento próprio.

Não desative o escape para “corrigir” um caso visual. Isso pode quebrar o documento ou permitir injeção de comandos LaTeX. Se um novo campo aceitar conteúdo rico no futuro, ele precisará de modelo, validação e renderer próprios.

## Reprodutibilidade

Versões diferentes de TeX Live ou MiKTeX podem alterar discretamente quebra de linha e paginação. Para resultados consistentes entre pessoas e CI:

1. mantenha o template simples;
2. registre a distribuição e a versão no diagnóstico;
3. use a mesma imagem Docker em automações importantes;
4. evite atualizar pacotes no meio de uma entrega;
5. sempre revise o PDF final, não apenas o `.tex`.

## Guias por ambiente

- [Windows](windows.md)
- [Linux](linux.md)
- [macOS](macos.md)
- [Sem instalação local](without-local-install.md)
- [Troubleshooting](troubleshooting.md)

## Fontes oficiais

- [TeX Live](https://tug.org/texlive/)
- [Documentação do instalador TeX Live](https://tug.org/texlive/doc/install-tl.html)
- [MiKTeX](https://miktex.org/)
- [MacTeX](https://tug.org/mactex/)
- [CTAN — repositório de pacotes](https://ctan.org/)
