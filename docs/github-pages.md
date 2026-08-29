# GitHub Pages e entrega contínua

O site público do Currículo Core é o bundle estático da pasta [`frontend/`](../frontend/). A publicação usa GitHub Actions e nunca inclui currículos, arquivos de `output/` ou o restante do repositório no artifact.

URL esperada do projeto:

```text
https://r0b14.github.io/curriculo-core/
```

## Fluxo de entrega

```text
push na main
  → CI do núcleo e frontend
  → conclusão com sucesso
  → build do site no commit validado
  → artifact com frontend/dist
  → deploy no ambiente github-pages
```

O workflow [`pages.yml`](../.github/workflows/pages.yml) também pode ser iniciado manualmente pela aba **Actions**. Execuções automáticas usam `workflow_run`, portanto uma falha no CI impede a publicação.

## Ativação inicial no GitHub

No repositório principal, o Pages já está configurado com fonte **GitHub Actions**, HTTPS obrigatório e ambiente `github-pages` limitado à branch `main`.

Em um fork ou repositório recriado, uma pessoa com permissão administrativa deve fazer a ativação uma única vez:

1. abra **Settings → Pages** no repositório;
2. em **Build and deployment → Source**, selecione **GitHub Actions**;
3. abra **Settings → Environments → github-pages** depois do primeiro deploy;
4. permita deployments apenas a partir da branch `main`;
5. execute **Deploy GitHub Pages** manualmente ou envie uma alteração para `main`.

Não selecione uma pasta ou branch como fonte. O artifact é produzido pelo workflow customizado.

## Caminho-base

`actions/configure-pages` informa o `base_path` real do site. O workflow repassa esse valor como `FIGMA_PUBLIC_URL`, e o Vite gera URLs corretas tanto em `/curriculo-core/` quanto em um domínio personalizado.

## Testar localmente

```bash
cd frontend
pnpm install --frozen-lockfile
pnpm check
pnpm preview
```

Para simular o caminho do repositório:

```bash
FIGMA_PUBLIC_URL=/curriculo-core pnpm build
```

No PowerShell:

```powershell
$env:FIGMA_PUBLIC_URL='/curriculo-core'
pnpm build
Remove-Item Env:FIGMA_PUBLIC_URL
```

## Proteções recomendadas

- torne `CI`, `Dependency review` e `CodeQL` checks obrigatórios na proteção da `main`;
- exija pull request e ao menos uma revisão para mudanças de terceiros;
- limite o ambiente `github-pages` à `main`;
- mantenha as permissões dos workflows no menor nível necessário;
- não adicione secrets ao frontend: todo conteúdo publicado é público;
- revise pull requests automáticos do Dependabot antes de mesclar.

## Diagnóstico

### `Get Pages site failed`

Confirme que a fonte **GitHub Actions** foi habilitada em **Settings → Pages**.

### CSS ou JavaScript retorna 404

Confirme que o build recebeu `steps.pages.outputs.base_path` e que `vite.config.ts` mantém `FIGMA_PUBLIC_URL` como `base`.

### O deploy não iniciou

Abra o workflow `CI` do mesmo commit. O deploy automático só executa quando a conclusão é `success`. Uma publicação manual continua disponível em `workflow_dispatch`.

### O site está desatualizado

Compare o SHA exibido no job **Checkout validated revision** com o commit mais recente da `main` que passou pelo CI.

## Referências oficiais

- [GitHub Docs — usar workflows customizados no Pages](https://docs.github.com/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [GitHub Docs — configurar a fonte de publicação](https://docs.github.com/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Docs — proteger environments](https://docs.github.com/actions/deployment/targeting-different-environments/managing-environments-for-deployment)

[Voltar ao índice](README.md)
