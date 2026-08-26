# Usar sem instalar LaTeX na máquina

Você pode usar o Currículo Core sem instalar TeX Live, MiKTeX ou MacTeX no sistema operacional. Escolha o modo conforme o resultado necessário e a sensibilidade dos dados.

## Matriz de decisão

| Necessidade | Melhor opção | Privacidade | Requisito |
|---|---|---|---|
| Validar o currículo | Node.js | dados locais | Node.js 20+ |
| Gerar o fonte `.tex` | Node.js | dados locais | Node.js 20+ |
| Gerar PDF sem LaTeX no host | Docker | dados locais no fluxo abaixo | Docker |
| Testar o template do repositório | GitHub Actions | somente exemplo fictício | conta GitHub |
| Compilar manualmente na web | serviço LaTeX externo | dados enviados a terceiro | navegador e consentimento |

## Modo 1 — gerar apenas o `.tex`

Esse é o modo padrão e mais leve:

```bash
npm install
node src/cli.js validate --input examples/curriculo.exemplo.json
node src/cli.js generate --input examples/curriculo.exemplo.json --output output/curriculo-exemplo.tex
```

O arquivo `.tex` é um documento completo. Você pode guardá-lo, revisar o texto, enviar a alguém que tenha LaTeX ou compilá-lo mais tarde. Não use `--compile` nesse modo.

Se o objetivo de um agente for apenas alterar regras, template ou dados, gerar o `.tex` e executar os testes é suficiente. A ausência de PDF deve ser informada, não tratada como falha do código.

## Modo 2 — compilar com Docker

Docker mantém a distribuição LaTeX isolada do sistema host. A imagem definida em [`docker/latex/Dockerfile`](../../docker/latex/Dockerfile) contém somente o necessário para executar `pdflatex` sobre uma pasta montada.

### Construir a imagem

Na raiz do repositório:

```bash
docker build -t curriculo-core-latex -f docker/latex/Dockerfile .
```

A primeira construção baixa uma imagem base e pacotes LaTeX, portanto exige rede e pode consumir centenas de megabytes. As execuções seguintes reutilizam o cache local.

### Gerar o `.tex`

```bash
npm run generate:example
```

### Compilar no Linux ou macOS

```bash
docker run --rm \
  --user "$(id -u):$(id -g)" \
  --mount type=bind,source="$PWD/output",target=/work \
  curriculo-core-latex curriculo-exemplo.tex
```

O parâmetro `--user` evita que o PDF seja criado como propriedade de `root` no Linux. No Docker Desktop para macOS ele também é seguro.

### Compilar no Windows PowerShell

```powershell
docker run --rm --mount "type=bind,source=$($PWD.Path)\output,target=/work" curriculo-core-latex curriculo-exemplo.tex
```

O PDF aparecerá na mesma pasta `output/` do host. O contêiner não recebe o repositório inteiro: somente a pasta explicitamente montada.

### Limites de segurança do modo Docker

- os arquivos permanecem no computador durante a compilação;
- a construção da imagem consulta repositórios Debian para baixar software;
- o `.dockerignore` exclui o repositório e a pasta `output/` do contexto enviado ao daemon durante o build;
- não monte a pasta pessoal inteira nem a raiz do repositório sem necessidade;
- a imagem executa `pdflatex` com `-no-shell-escape`;
- compile somente `.tex` gerado pelo projeto ou proveniente de fonte confiável.

## Modo 3 — GitHub Actions para o exemplo fictício

O workflow [`latex-smoke.yml`](../../.github/workflows/latex-smoke.yml) valida e compila apenas `examples/curriculo.exemplo.json`. Ele serve como teste do template em um ambiente limpo e disponibiliza o PDF como artifact.

Na página **Actions** do repositório:

1. abra **LaTeX smoke test**;
2. escolha **Run workflow**;
3. aguarde o job;
4. baixe o artifact `curriculo-core-example-pdf`.

Não altere o workflow para compilar um currículo real em repositório público. Git, logs, caches e artifacts podem preservar dados. Para dados pessoais, use execução local, Docker ou um repositório privado com política adequada.

Referência: [documentação oficial de artifacts do GitHub Actions](https://docs.github.com/actions/using-workflows/storing-workflow-data-as-artifacts).

## Modo 4 — serviço LaTeX externo

Serviços como editores LaTeX online conseguem compilar o `.tex` gerado:

1. gere o arquivo sem `--compile`;
2. crie um projeto em branco no serviço escolhido;
3. envie o `.tex` como arquivo principal;
4. selecione **pdfLaTeX** como compilador;
5. compile e revise o PDF.

Esse caminho envia nome, contatos e histórico profissional para terceiros. Leia termos, retenção de dados, compartilhamento e política de privacidade antes do upload. Remova campos sensíveis ou use o exemplo fictício quando estiver apenas testando.

## O que não funciona

- `--compile` sem `pdflatex` no `PATH`;
- esperar PDF apenas com Node.js;
- abrir `.tex` no navegador e obter a renderização final automaticamente;
- usar um conversor genérico de texto para PDF e esperar o mesmo layout;
- compilar com uma imagem Docker sem montar a pasta de saída como gravável.

## Regra para automações e agentes

Se o usuário disser “não instale LaTeX”, a automação deve:

1. não executar gerenciadores de pacotes do sistema;
2. gerar e validar o `.tex`;
3. usar Docker somente se já estiver disponível ou se o usuário pedir esse caminho;
4. nunca enviar dados reais a CI ou serviço web sem consentimento explícito;
5. declarar com precisão se entregou `.tex`, PDF ou ambos.
