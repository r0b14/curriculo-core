# Código da interface

Esta pasta implementa a página open source publicada no GitHub Pages.

## Arquivos

| Arquivo | Papel |
|---|---|
| [`main.tsx`](main.tsx) | Importa os estilos globais e monta `App` no elemento `#root` |
| [`App.tsx`](App.tsx) | Reúne navegação, arquitetura, mapa do repositório, quick start e contribuição |
| [`index.css`](index.css) | Importa Tailwind CSS, define tokens de tema e estilos globais |
| [`vite-env.d.ts`](vite-env.d.ts) | Tipos fornecidos pelo Vite |
| [`imports/style.md`](imports/style.md) | Especificação visual e de marca |

## Organização de `App.tsx`

A página é composta pelas seções `Hero`, `Principles`, `Architecture`, `RepositoryMap`, `QuickStart` e `Contribute`. No estado atual, componentes e ícones permanecem no mesmo arquivo; ao extrair componentes, mantenha esses limites e preserve os rótulos acessíveis.

O único comportamento que acessa uma API do navegador é a cópia dos comandos para a área de transferência após um clique. A página não recebe dados de currículo e não realiza chamadas de rede próprias.

## Estilos

O Tailwind CSS v4 é carregado em `index.css`. Tokens de cor, tipografia, raio e sombra ficam no bloco `@theme inline`; decisões de marca devem continuar coerentes com `imports/style.md`.

As fontes usam a pilha do sistema operacional, evitando uma requisição externa apenas para tipografia. Animações respeitam `prefers-reduced-motion`.

[Voltar ao frontend](../README.md)
