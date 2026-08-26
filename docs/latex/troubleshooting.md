# Troubleshooting de LaTeX

## Diagnóstico mínimo

Execute a partir da raiz do projeto e guarde a saída:

```bash
node --version
npm --version
pdflatex --version
npm run check
npm test
npm run generate:example
```

Depois tente a compilação direta na pasta de saída:

```bash
cd output
pdflatex -interaction=nonstopmode -halt-on-error curriculo-exemplo.tex
```

O primeiro erro iniciado por `!` no `.log` costuma ser a causa real. Erros posteriores podem ser apenas consequência.

## `pdflatex não foi encontrado`

### Causa

Nenhuma distribuição está instalada ou o diretório de binários não está no `PATH` da sessão atual.

### Windows

```powershell
where.exe pdflatex
Get-Command pdflatex -ErrorAction SilentlyContinue
```

Feche e abra o terminal depois da instalação. Verifique o `PATH` na MiKTeX Console ou no instalador TeX Live.

### Linux e macOS

```bash
command -v pdflatex
type -a pdflatex
```

No macOS com MacTeX, o caminho recomendado é `/Library/TeX/texbin`. No TeX Live oficial para Linux, use o caminho exibido pelo instalador, com ano e plataforma corretos.

## `LaTeX Error: File 'nome.sty' not found`

### Causa

Um pacote do template não está instalado.

Descubra se o arquivo existe:

```bash
kpsewhich nome.sty
```

- MiKTeX: instale pela MiKTeX Console ou habilite instalação sob demanda.
- TeX Live oficial/MacTeX/BasicTeX: `tlmgr install nome-do-pacote`.
- Debian/Ubuntu: instale o pacote da distribuição que contém o arquivo; para este projeto, revise `texlive-latex-recommended`, `texlive-latex-extra` e `lmodern`.

Consulte a lista exata em [dependências do template](README.md#dependências-latex-do-template).

## `spawnSync pdflatex ENOENT`

É a forma de baixo nível do mesmo erro de executável ausente. A CLI converte esse caso para uma mensagem amigável. Se aparecer diretamente em outro script, confirme que o processo Node herdou o mesmo `PATH` do terminal.

Ambientes gráficos, IDEs e agentes iniciados antes da instalação podem manter um `PATH` antigo. Reinicie o aplicativo, não apenas o terminal embutido.

## A compilação funciona no terminal, mas falha na CLI

1. Confirme que o caminho de saída termina em `.tex`.
2. Verifique se a pasta é gravável.
3. Execute `pdflatex` dentro da pasta de saída, pois esse é o comportamento da CLI.
4. Compare `pdflatex --version` no terminal normal e no terminal/agent que executa o Node.
5. Procure caracteres especiais no caminho da pasta e teste temporariamente um caminho simples.

## Caracteres especiais quebraram o documento

Campos normais são escapados pelo renderer. Não insira comandos LaTeX no JSON. Se um caractere válido não for renderizado:

1. crie um exemplo mínimo e fictício;
2. adicione um teste em `test/core.test.js`;
3. corrija `src/core/latex.js` ou o renderer sem remover o escape existente;
4. gere `.tex` e compile novamente.

## Acentos aparecem incorretos

O JSON e o `.tex` devem estar em UTF-8. A CLI lê e grava explicitamente em UTF-8. Confirme que o editor não salvou o JSON como ANSI/Windows-1252.

No PowerShell, a aparência do terminal não é prova de que o arquivo esteja corrompido. Abra o arquivo em editor com indicador de encoding ou examine o PDF.

## O PDF passou de uma página

Isso não é erro de LaTeX. Opções seguras:

- reduzir `maxExperiences` ou `maxProjects`;
- tornar highlights mais objetivos;
- remover itens pouco aderentes à vaga;
- evitar descrições redundantes.

Não reduza indiscriminadamente a fonte ou as margens; isso prejudica legibilidade. O projeto prioriza clareza, não a regra absoluta de uma página.

## Links não abrem

- links em `basics.links` devem começar com `http://` ou `https://`;
- e-mails são convertidos em links `mailto:`;
- confira se o leitor de PDF permite links;
- revise o `.log` para avisos do `hyperref`.

## Cor primária inválida

Use exatamente seis dígitos hexadecimais sem `#`:

```json
{
  "options": {
    "primaryColor": "5B4BFF"
  }
}
```

## A saída ficou diferente em outra máquina

Registre:

```bash
pdflatex --version
kpsewhich lmodern.sty
```

Compare distribuição, ano e versões de pacote. Para reprodutibilidade forte, compile ambos os lados com a mesma imagem definida em `docker/latex/Dockerfile`.

## Docker não grava o PDF

- confirme que `output/` existe no host;
- use caminho absoluto no `source` do mount;
- no Docker Desktop, confirme que a unidade/pasta pode ser compartilhada;
- verifique permissões de escrita da pasta;
- confirme que o nome do `.tex` é relativo a `/work`.

Liste a pasta dentro do contêiner:

```bash
docker run --rm --entrypoint sh \
  --user "$(id -u):$(id -g)" \
  --mount type=bind,source="$PWD/output",target=/work \
  curriculo-core-latex -c 'ls -la /work'
```

Se um PDF antigo já tiver sido criado como `root` no Linux, corrija a propriedade somente do arquivo conhecido antes de tentar novamente. Não aplique `chown -R` em diretórios amplos.

## Limpeza de auxiliares

É seguro remover `.aux`, `.log` e `.out` de uma pasta de saída específica. Não use comandos recursivos sobre a raiz do repositório ou a pasta pessoal.

PowerShell, dentro de `output`:

```powershell
Remove-Item -LiteralPath .\curriculo-exemplo.aux, .\curriculo-exemplo.log, .\curriculo-exemplo.out -ErrorAction SilentlyContinue
```

Bash, dentro de `output`:

```bash
rm -f -- curriculo-exemplo.aux curriculo-exemplo.log curriculo-exemplo.out
```

## Ao pedir ajuda

Compartilhe:

- sistema operacional;
- `node --version`;
- primeiras linhas de `pdflatex --version`;
- comando executado;
- primeiro erro relevante do `.log`;
- um JSON mínimo e fictício que reproduza o problema.

Nunca publique currículo real, e-mail, telefone, endereço ou links privados em issue.
