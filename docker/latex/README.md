# Imagem de compilação LaTeX

O [`Dockerfile`](Dockerfile) cria um ambiente Debian mínimo com pdfLaTeX e os pacotes usados pelo template. A imagem serve apenas para transformar um `.tex` já gerado em PDF; validação, normalização e geração continuam a cargo do Node.js no host.

## Construir

Na raiz do repositório:

```bash
docker build -t curriculo-core-latex -f docker/latex/Dockerfile .
```

## Compilar o exemplo

Primeiro gere o arquivo:

```bash
npm run generate:example
```

No Windows PowerShell:

```powershell
docker run --rm --mount "type=bind,source=$($PWD.Path)\output,target=/work" curriculo-core-latex curriculo-exemplo.tex
```

No Linux ou macOS:

```bash
docker run --rm \
  --user "$(id -u):$(id -g)" \
  --mount type=bind,source="$PWD/output",target=/work \
  curriculo-core-latex curriculo-exemplo.tex
```

O PDF será gravado em `output/`. A entrada da imagem executa `pdflatex` com `-interaction=nonstopmode`, `-halt-on-error` e `-no-shell-escape`.

## Pacotes incluídos

- `lmodern`;
- `texlive-latex-base`;
- `texlive-latex-recommended`;
- `texlive-latex-extra`.

Não acrescente pacotes sem confirmar que o renderer realmente os utiliza. Para detalhes de privacidade, solução de problemas e outros sistemas, consulte a [documentação LaTeX](../../docs/latex/README.md).

[Voltar à visão geral de Docker](../README.md)
