# Exemplos

Esta pasta contém entradas fictícias para demonstrar e testar o Currículo Core. Nenhum currículo real deve ser versionado aqui.

## Arquivo disponível

[`curriculo.exemplo.json`](curriculo.exemplo.json) cobre os principais campos do contrato: dados básicos, privacidade, competências, experiências, projetos, formação, idiomas, palavras-chave e opções de layout.

Validar o exemplo:

```bash
npm run validate:example
```

Gerar o documento LaTeX:

```bash
npm run generate:example
```

O resultado é criado em `output/curriculo-exemplo.tex`, uma pasta ignorada pelo Git.

## Criar outro exemplo

- use nomes genéricos, organizações fictícias e domínios `example.com`;
- não copie telefone, endereço, histórico profissional ou qualquer dado real;
- mantenha o campo `$schema` apontando para `../schema/resume.schema.json`;
- valide o arquivo pela CLI antes de propor sua inclusão;
- cubra alterações de contrato também no schema, na validação em runtime, nos testes e na documentação.

O formato completo está descrito em [`schema/README.md`](../schema/README.md).

[Voltar à documentação](../docs/README.md)
