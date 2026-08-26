# macOS: instalação e uso do LaTeX

## Escolha recomendada

Use **MacTeX completo** se houver espaço em disco e você quiser uma instalação pronta, previsível e com os pacotes mais comuns. Use **BasicTeX** apenas quando o tamanho da instalação for decisivo e você aceitar instalar dependências manualmente.

O MacTeX é a distribuição TeX Live empacotada e configurada para macOS. A página oficial informa os requisitos atuais de versão do sistema e oferece binários para Apple Silicon e Intel.

## Pré-requisitos

- macOS compatível com a versão atual do MacTeX;
- Node.js 20 ou superior;
- npm;
- espaço em disco compatível com a opção escolhida.

```bash
node --version
npm --version
npm install
npm test
```

## Opção A — MacTeX completo

1. Acesse a [página oficial de download](https://tug.org/mactex/mactex-download.html).
2. Confirme na própria página a versão mínima do macOS e o tamanho do pacote.
3. Baixe `MacTeX.pkg` e, se necessário, verifique o checksum publicado.
4. Execute o instalador padrão do macOS.
5. Feche e abra novamente o Terminal.

O MacTeX configura o link estável `/Library/TeX/texbin`. Verifique:

```bash
command -v pdflatex
pdflatex --version
echo "$PATH" | tr ':' '\n' | grep '/Library/TeX/texbin'
```

Se o diretório não estiver no `PATH`, adicione ao arquivo de configuração do shell:

```bash
export PATH="/Library/TeX/texbin:$PATH"
```

No macOS moderno, o shell padrão costuma ser zsh; nesse caso use `~/.zprofile` ou `~/.zshrc`, de acordo com a configuração do seu terminal.

## Opção B — BasicTeX

O BasicTeX é significativamente menor, mas o template pode solicitar pacotes que não vêm no conjunto básico. Baixe-o pela [área oficial do MacTeX](https://tug.org/mactex/).

Depois da instalação:

```bash
sudo tlmgr update --self
sudo tlmgr install lmodern geometry enumitem titlesec xcolor tools hyperref
```

O pacote TeX Live `tools` fornece, entre outros recursos, `tabularx`. Confirme todos os arquivos:

```bash
for file in geometry.sty enumitem.sty titlesec.sty xcolor.sty tabularx.sty hyperref.sty lmodern.sty; do
  kpsewhich "$file" || echo "AUSENTE: $file"
done
```

O TeX Users Group recomenda o MacTeX completo para a maioria das pessoas porque reduz a necessidade de procurar dependências ausentes. Consulte a [comparação oficial](https://tug.org/mactex/).

## Compilação

Na raiz do projeto:

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

## Apple Silicon e Intel

Use sempre o instalador atual publicado pelo MacTeX. Não copie manualmente binários de outra arquitetura. O caminho `/Library/TeX/texbin` abstrai o diretório específico da versão e deve ser preferido no `PATH`.

## Atualização

O MacTeX inclui o **TeX Live Utility**, disponível em `/Applications/TeX`, para gerenciar atualizações. Também é possível usar `tlmgr` no terminal.

Evite atualizar a distribuição no meio de uma entrega importante: mudanças de fonte ou pacote podem alterar paginação. Gere e revise novamente o PDF depois de qualquer atualização.

## Diagnóstico rápido

```bash
command -v node
command -v pdflatex
type -a pdflatex
pdflatex --version
kpsewhich lmodern.sty
npm run check
npm test
```

Se `pdflatex` existir em `/Library/TeX/texbin` mas não for encontrado, consulte [troubleshooting](troubleshooting.md#pdflatex-não-foi-encontrado).
