# Núcleo de geração

O núcleo transforma um objeto JavaScript válido em um documento LaTeX completo. Ele não lê arquivos, não grava saídas e não compila PDFs; essas responsabilidades pertencem à CLI.

## Pipeline

| Ordem | Módulo | Responsabilidade |
|:---:|---|---|
| 1 | [`validate-resume.js`](validate-resume.js) | Verifica campos obrigatórios, tipos, locale, URLs e opções |
| 2 | [`normalize-resume.js`](normalize-resume.js) | Aplica defaults, privacidade e limites de itens |
| 3 | [`rank-items.js`](rank-items.js) | Prioriza experiências e projetos por palavras-chave existentes |
| 4 | [`render-latex.js`](render-latex.js) | Monta o documento A4 em uma coluna e traduz os rótulos |
| 5 | [`latex.js`](latex.js) | Escapa texto e URLs antes de inseri-los no LaTeX |

[`generate-resume.js`](generate-resume.js) orquestra as etapas. [`errors.js`](errors.js) define `ResumeValidationError`, incluindo a lista de problemas encontrados.

## Garantias que devem ser preservadas

- nenhum campo profissional é criado ou completado pelo núcleo;
- palavras-chave apenas reordenam itens já fornecidos;
- empates de ranking preservam a ordem original;
- telefone fica oculto por padrão;
- conteúdo do JSON é tratado como texto, nunca como comando LaTeX;
- o template permanece A4, textual, selecionável, em uma coluna e sem `shell-escape`;
- rótulos funcionam em `pt-BR` e `en`.

## API programática

```js
import { generateResume } from './src/core/generate-resume.js';

const latex = generateResume({
  basics: {
    name: 'Pessoa Exemplo',
    headline: 'Desenvolvimento de Software'
  },
  summary: 'Profissional com experiência em produtos digitais.'
});
```

Uma entrada inválida lança `ResumeValidationError`. Consulte o [contrato de dados](../../schema/README.md) antes de integrar.

## Alterações sensíveis

Mudanças em `latex.js` ou `render-latex.js` exigem testes com caracteres reservados e geração de `.tex`. Compile o exemplo quando pdfLaTeX ou Docker já estiver disponível, sem instalar ferramentas automaticamente.

Mudanças de privacidade devem atualizar normalização, renderer, testes e `SECURITY.md`. Mudanças no formato de entrada devem atualizar tanto o JSON Schema quanto a validação em runtime.

[Voltar ao código-fonte](../README.md)
