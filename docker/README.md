# Contêineres

Esta área contém recursos opcionais para tarefas que precisam de ferramentas externas ao núcleo Node.js. O gerador funciona sem Docker e consegue validar JSON e produzir `.tex` normalmente.

## Imagens disponíveis

| Pasta | Finalidade |
|---|---|
| [`latex/`](latex/) | Compilar localmente o `.tex` gerado usando pdfLaTeX isolado |

## Princípios de segurança

- Docker não deve ser instalado automaticamente;
- monte somente a pasta `output/`, nunca a pasta pessoal;
- não envie dados a registries ou serviços externos;
- use apenas arquivos `.tex` gerados pelo projeto ou provenientes de fonte confiável;
- preserve a compilação com `-no-shell-escape`.

Veja o [guia completo de uso sem LaTeX local](../docs/latex/without-local-install.md).

[Voltar à documentação](../docs/README.md)
