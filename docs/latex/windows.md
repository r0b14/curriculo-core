# Windows: instalação e uso do LaTeX

## Escolha recomendada

Para a maioria das pessoas no Windows, use **MiKTeX**. Ele oferece instalador gráfico e pode buscar pacotes ausentes sob demanda. **TeX Live** é uma alternativa sólida para quem deseja a mesma distribuição em Windows, Linux e CI.

Não instale as duas distribuições sem necessidade. Múltiplos executáveis `pdflatex` no `PATH` tornam diagnósticos mais difíceis.

## Pré-requisitos

- Windows 10 ou 11;
- Node.js 20 ou superior;
- npm;
- PowerShell;
- espaço em disco compatível com a distribuição escolhida.

Confirme o ambiente do projeto:

```powershell
node --version
npm --version
npm install
npm test
```

## Opção A — MiKTeX

1. Baixe o Basic MiKTeX Installer na [página oficial](https://miktex.org/download).
2. Execute o instalador.
3. Escolha instalação por usuário, salvo se houver uma razão administrativa para instalar para todos.
4. Mantenha A4 como papel padrão.
5. Abra **MiKTeX Console**, procure atualizações e aplique-as.
6. Em Settings, configure a instalação de pacotes ausentes como **Always** ou **Ask me first**. “Always” é mais conveniente para automação; “Ask me first” dá maior controle.
7. Feche e abra novamente o PowerShell para recarregar o `PATH`.

Referências: [instalação oficial](https://miktex.org/howto/install-miktex) e [manual do MiKTeX](https://docs.miktex.org/manual/).

### Verificação

```powershell
where.exe pdflatex
pdflatex --version
```

`where.exe` deve apontar para a instalação esperada do MiKTeX. Se nada aparecer, reinicie o terminal e consulte a seção de `PATH` em [troubleshooting](troubleshooting.md).

### Primeira compilação

Na raiz do projeto:

```powershell
npm run validate:example
node src/cli.js generate --input examples/curriculo.exemplo.json --output output/curriculo-exemplo.tex --compile
```

O resultado esperado é:

```text
LaTeX gerado: ...\output\curriculo-exemplo.tex
PDF gerado: ...\output\curriculo-exemplo.pdf
```

Na primeira execução, o MiKTeX pode baixar `lmodern`, `enumitem`, `titlesec` ou outra dependência. Isso é normal. Se a CLI estiver em modo não interativo e a instalação estiver configurada para perguntar, a compilação pode falhar; instale o pacote pela MiKTeX Console ou altere temporariamente a política.

## Opção B — TeX Live

1. Baixe o instalador de rede para Windows na [página oficial do TeX Live](https://tug.org/texlive/acquire-netinstall.html).
2. Execute `install-tl-windows.exe`.
3. Para máxima previsibilidade, use o esquema completo. Para economizar espaço, escolha um esquema menor e confirme que contém os pacotes listados em [dependências do template](README.md#dependências-latex-do-template).
4. Conclua a instalação e abra um novo PowerShell.

O TeX Live adiciona seus binários ao `PATH` pelo instalador. Confirme:

```powershell
where.exe pdflatex
pdflatex --version
tlmgr --version
```

Para instalar um pacote ausente em uma instalação TeX Live administrada pelo usuário:

```powershell
tlmgr install nome-do-pacote
```

Dependendo de como o TeX Live foi instalado, o terminal pode precisar de privilégios administrativos.

## Uso cotidiano

Validar sem gerar documento:

```powershell
node src/cli.js validate --input caminho\curriculo.json
```

Gerar `.tex` sem compilar:

```powershell
node src/cli.js generate --input caminho\curriculo.json --output output\curriculo.tex
```

Gerar PDF:

```powershell
node src/cli.js generate --input caminho\curriculo.json --output output\curriculo.tex --compile
```

Use aspas quando o caminho tiver espaços:

```powershell
node src/cli.js generate --input "C:\Meus Arquivos\curriculo.json" --output "C:\Meus Arquivos\saida\curriculo.tex" --compile
```

## Diagnóstico rápido

```powershell
Get-Command node
Get-Command pdflatex
pdflatex --version
npm run check
npm test
```

Se `Get-Command pdflatex` e `where.exe pdflatex` apontarem para distribuições diferentes, limpe entradas antigas do `PATH` antes de prosseguir.

## Remoção

Use **Aplicativos instalados** do Windows ou o desinstalador da própria distribuição. Depois, remova somente entradas de `PATH` que pertençam à distribuição desinstalada. Não apague pastas de sistema manualmente sem confirmar o caminho.
