# Linux: instalação e uso do LaTeX

## Escolha recomendada

Há dois caminhos seguros:

1. **pacotes da distribuição Linux:** instalação simples, integrada às atualizações do sistema e suficiente para a maioria das pessoas;
2. **instalador oficial TeX Live:** versão mais recente e consistente entre distribuições, mas exige mais espaço e manutenção separada.

Não misture pacotes TeX Live do sistema com uma instalação em `/usr/local/texlive` sem entender qual diretório vem primeiro no `PATH`.

## Pré-requisitos

- Node.js 20 ou superior;
- npm;
- uma distribuição Linux mantida;
- espaço em disco para os pacotes escolhidos.

```bash
node --version
npm --version
npm install
npm test
```

## Opção A — Debian e Ubuntu

Conjunto suficiente para o template atual:

```bash
sudo apt update
sudo apt install texlive-latex-base texlive-latex-recommended texlive-latex-extra lmodern
```

O pacote `texlive-latex-extra` cobre componentes como `enumitem` e `titlesec`; `lmodern` fornece a fonte usada pelo documento. Para uma estação dedicada a LaTeX e com espaço disponível, `texlive-full` reduz o risco de pacotes ausentes, mas é uma instalação muito maior.

Verifique:

```bash
command -v pdflatex
pdflatex --version
kpsewhich enumitem.sty
kpsewhich titlesec.sty
kpsewhich lmodern.sty
```

Cada `kpsewhich` deve devolver um caminho.

## Opção B — pacotes de outras distribuições

Os nomes e agrupamentos mudam entre Fedora, Arch, openSUSE e outras distribuições. Procure os equivalentes a:

- LaTeX base / pdfTeX;
- pacotes LaTeX recommended;
- pacotes LaTeX extra;
- Latin Modern.

Antes de instalar, consulte o catálogo oficial da sua distribuição. Depois valide pelos nomes de arquivo, que são independentes do gerenciador:

```bash
for file in geometry.sty enumitem.sty titlesec.sty xcolor.sty tabularx.sty hyperref.sty lmodern.sty; do
  kpsewhich "$file" || echo "AUSENTE: $file"
done
```

Essa verificação é mais confiável do que assumir que um metapacote contém tudo.

## Opção C — TeX Live oficial

Use esta opção se precisar de uma versão atual e uniforme entre ambientes. O guia oficial está em [TeX Live Quick install](https://tug.org/texlive/quickinstall.html).

Resumo do procedimento oficial:

```bash
cd /tmp
curl -L -o install-tl-unx.tar.gz https://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz
zcat < install-tl-unx.tar.gz | tar xf -
cd install-tl-2*
sudo perl ./install-tl
```

O esquema completo é grande. O instalador permite escolher um esquema menor, mas instalações reduzidas podem exigir pacotes depois. Ao terminar, adicione ao `PATH` o diretório exato informado pelo instalador, por exemplo:

```bash
export PATH="/usr/local/texlive/YYYY/bin/PLATFORM:$PATH"
```

Substitua `YYYY` e `PLATFORM` pelos valores reais. Grave a linha no arquivo de inicialização do shell apropriado (`~/.profile`, `~/.bashrc`, `~/.zshrc`) e abra uma nova sessão.

Gerencie pacotes dessa instalação com `tlmgr`, não com `apt`, `dnf` ou `pacman`:

```bash
sudo tlmgr update --self
sudo tlmgr install lmodern geometry enumitem titlesec xcolor tools hyperref
```

## Compilação

Na raiz do repositório:

```bash
npm run validate:example
node src/cli.js generate --input examples/curriculo.exemplo.json --output output/curriculo-exemplo.tex --compile
```

Para um arquivo próprio:

```bash
node src/cli.js generate \
  --input ./dados/curriculo.json \
  --output ./output/curriculo.tex \
  --compile
```

## Diagnóstico rápido

```bash
command -v node
command -v pdflatex
pdflatex --version
kpsewhich lmodern.sty
npm run check
npm test
```

Liste todas as ocorrências no `PATH`:

```bash
type -a pdflatex
```

Se houver mais de uma, decida qual distribuição será a fonte canônica e ajuste o `PATH`.

## Atualizações

- Instalação da distribuição: atualize com o gerenciador do sistema.
- TeX Live oficial: use `tlmgr` e siga a política anual do TeX Live.

Não execute `tlmgr` sobre uma instalação empacotada pelo Debian/Ubuntu; a distribuição do sistema deve ser atualizada pelo `apt`.
