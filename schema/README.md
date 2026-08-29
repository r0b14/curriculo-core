# Contrato de dados do currículo

O arquivo [`resume.schema.json`](resume.schema.json) descreve o formato JSON aceito pelo Currículo Core usando JSON Schema Draft 2020-12. Ele auxilia editores e integrações, mas a CLI executa a validação própria de [`src/core/validate-resume.js`](../src/core/validate-resume.js), sem biblioteca externa.

## Estrutura principal

| Campo | Obrigatório | Conteúdo |
|---|:---:|---|
| `basics` | Sim | Nome, headline e contatos opcionais |
| `summary` | Sim | Resumo profissional fornecido pela pessoa usuária |
| `locale` | Não | `pt-BR` ou `en`; padrão `pt-BR` |
| `targetKeywords` | Não | Termos usados apenas para priorizar evidências existentes |
| `skills` | Não | Categorias e listas de competências |
| `experience` | Não | Cargos e organizações com período e evidências |
| `projects` | Não | Projetos com descrição, evidências e tags |
| `education` | Não | Curso, instituição e período |
| `languages` | Não | Idioma e nível declarado |
| `privacy` | Não | Visibilidade de e-mail, telefone e localização |
| `options` | Não | Cor principal e limites de itens |

## Defaults importantes

Os defaults são aplicados por `normalize-resume.js`, não pelo schema:

- telefone oculto;
- e-mail e localização visíveis quando presentes;
- locale `pt-BR`;
- cor `1F3A5F`;
- todas as experiências e projetos mantidos quando não há limite explícito.

## Validar um arquivo

```bash
node src/cli.js validate --input caminho/para/curriculo.json
```

Use [`examples/curriculo.exemplo.json`](../examples/curriculo.exemplo.json) como referência fictícia.

## Alterar o contrato

Toda mudança deve manter coerentes:

1. `schema/resume.schema.json`;
2. `src/core/validate-resume.js`;
3. `src/core/normalize-resume.js`, quando houver defaults;
4. o exemplo fictício;
5. testes positivos e negativos;
6. documentação afetada.

O runtime não deve aceitar silenciosamente algo que o schema rejeita, nem o inverso.

[Voltar à documentação](../docs/README.md)
