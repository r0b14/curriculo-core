# AGENTS.md — contrato operacional do Currículo Core

Este arquivo é a fonte canônica de instruções para qualquer agente que trabalhe neste repositório. As regras valem para todo o projeto.

## Missão do projeto

Transformar dados JSON fornecidos pelo usuário em um currículo LaTeX A4 claro, privado e compatível com extração por ATS. O sistema pode priorizar evidências existentes por palavras-chave, mas nunca deve criar fatos profissionais.

## Regras inegociáveis

1. Nunca invente cargo, empresa, formação, competência, idioma, período, resultado ou métrica.
2. Nunca versione currículos reais, arquivos de saída pessoais ou dados sensíveis.
3. Nunca envie dados de currículo a serviço, CI, API ou editor online sem autorização explícita.
4. Preserve o escape de conteúdo em `src/core/latex.js`. Dados do JSON não são comandos LaTeX.
5. Preserve a ocultação de telefone por padrão.
6. Não prometa aprovação universal em ATS; o projeto produz estrutura simples e texto selecionável.
7. Não instale MiKTeX, TeX Live, MacTeX, BasicTeX ou pacotes do sistema sem pedido explícito do usuário.
8. Não trate a ausência de LaTeX como bloqueio para validar JSON, executar testes ou gerar `.tex`.

## Descoberta do ambiente

Antes de compilar PDF, faça apenas verificações não destrutivas adequadas ao sistema:

```text
node --version
npm --version
pdflatex --version
docker --version
```

Não presuma que um executável ausente deve ser instalado. Escolha um dos modos abaixo conforme o pedido.

## Modos de operação

### A. Sem LaTeX e sem Docker

```bash
npm ci
npm run check
npm test
node src/cli.js validate --input examples/curriculo.exemplo.json
node src/cli.js generate --input examples/curriculo.exemplo.json --output output/curriculo-exemplo.tex
```

Entregue o `.tex` e diga explicitamente que o PDF não foi compilado.

### B. LaTeX já instalado

Depois de confirmar `pdflatex`:

```bash
node src/cli.js generate --input examples/curriculo.exemplo.json --output output/curriculo-exemplo.tex --compile
```

Confirme que o `.pdf` existe e que o processo terminou com status zero. Para mudanças de layout, examine o `.log` e, quando houver ferramenta de renderização disponível, revise visualmente o PDF.

### C. Sem LaTeX local, com Docker

Use somente se Docker estiver disponível e isso respeitar o pedido:

```bash
docker build -t curriculo-core-latex -f docker/latex/Dockerfile .
```

Depois siga os comandos específicos do sistema em `docs/latex/without-local-install.md`. Monte somente `output/`, nunca a pasta pessoal. Não use serviço remoto como fallback silencioso.

### D. CI ou serviço externo

Use somente com autorização explícita e dados fictícios ou devidamente avaliados. Avise que os dados sairão da máquina. O workflow padrão compila exclusivamente o exemplo fictício.

## Mapa de responsabilidades

| Área | Arquivos que devem permanecer coerentes |
|---|---|
| Contrato de dados | `schema/resume.schema.json`, `src/core/validate-resume.js`, exemplo, testes, docs |
| Defaults/privacidade | `src/core/normalize-resume.js`, renderer, testes, `SECURITY.md` |
| Ranking | `src/core/rank-items.js`, testes, documentação |
| Sintaxe/escape LaTeX | `src/core/latex.js`, renderer, testes |
| Layout do documento | `src/core/render-latex.js`, docs LaTeX, teste de compilação |
| CLI | `src/cli.js`, `package.json`, documentação de comandos |

Mudanças de schema devem atualizar tanto o JSON Schema quanto a validação em runtime. O projeto não usa uma biblioteca de JSON Schema durante a execução.

## Invariantes do template

- engine padrão: pdfLaTeX;
- papel A4;
- uma coluna;
- texto selecionável;
- links clicáveis;
- sem dependência de shell escape;
- sem foto ou gráficos de proficiência;
- conteúdo do usuário escapado;
- compatibilidade com `pt-BR` e `en`;
- telefone oculto por padrão.

Não adicione `--shell-escape`, execução de comandos, inclusão de arquivos arbitrários ou download durante a compilação.

## Política de dependências

O pacote não possui dependências externas de runtime. Antes de adicionar uma:

1. demonstre que a biblioteca padrão do Node não resolve adequadamente;
2. considere tamanho, manutenção, segurança e compatibilidade com Node 20/22;
3. atualize `package-lock.json` junto com `package.json`;
4. adicione testes para o comportamento introduzido.

## Validação mínima por tipo de mudança

| Mudança | Verificação mínima |
|---|---|
| Documentação | links internos, comandos e `git diff --check` |
| Lógica JS | `npm run check` e `npm test` |
| Schema/validação | checks, testes positivos e negativos, exemplo válido |
| Renderer/escape | testes, geração de `.tex` e compilação se o ambiente permitir |
| Docker/LaTeX | construir imagem e compilar exemplo se Docker estiver disponível |

Não afirme que uma validação passou se ela não foi executada. Diferencie “não executado por ausência de ferramenta” de “falhou”.

## Dados de teste

- Use `example.com`, nomes genéricos e organizações fictícias.
- Não copie dados reais do usuário para fixtures ou snapshots.
- Teste caracteres LaTeX reservados, acentos, listas vazias e controles de privacidade.
- Saídas geradas pertencem a `output/`, que não deve ser versionada.

## Forma de entrega

Ao concluir, informe de modo verificável:

1. o resultado alcançado;
2. arquivos alterados;
3. testes/comandos executados;
4. se houve compilação real de PDF e qual engine foi usada;
5. limitações ou próximos passos genuinamente necessários.

## Documentação operacional

- `docs/project.md`
- `docs/latex/README.md`
- `docs/latex/windows.md`
- `docs/latex/linux.md`
- `docs/latex/macos.md`
- `docs/latex/without-local-install.md`
- `docs/latex/troubleshooting.md`
- `docs/agents.md`
