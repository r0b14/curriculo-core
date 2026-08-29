# Testes automatizados

Os testes usam o runner nativo `node:test` e dados inteiramente fictícios. Não são necessárias dependências de teste externas.

## Executar

Na raiz do repositório:

```bash
npm test
```

Para executar junto com a verificação de sintaxe:

```bash
npm run check
npm test
```

## Cobertura atual

[`core.test.js`](core.test.js) verifica:

- escape de caracteres reservados do LaTeX;
- telefone oculto e e-mail visível por padrão;
- opções explícitas de privacidade;
- ranking por palavras-chave com empates estáveis;
- rejeição de campos obrigatórios ausentes;
- rejeição de locale e tipos inválidos.
- construção do pacote de revisão sem invenção de fatos.

[`cli.test.js`](cli.test.js) executa os comandos `guide` e `assist` de ponta a ponta, sempre com os exemplos fictícios e uma pasta temporária.

## Ao adicionar casos

- use nomes genéricos, organizações fictícias e `example.com`;
- inclua casos positivos e negativos para mudanças de schema;
- teste acentos, caracteres LaTeX reservados, listas vazias e controles de privacidade;
- não grave snapshots ou PDFs com dados reais;
- para alterações no renderer, gere o `.tex` e compile o exemplo apenas se o ambiente já oferecer pdfLaTeX ou Docker.

[Voltar à documentação](../docs/README.md)
