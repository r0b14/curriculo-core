# Currículo Core — Brand & Product Design System

> Documento-mestre para o Figma Make criar todo o front-end do Currículo Core.
> Trate estas decisões como requisitos de produto e de interface, não como sugestões soltas.

---

## 1. Essência da marca

### Nome

**Currículo Core**

Na interface, usar **Currículo Core** na primeira menção e **Core** apenas em contextos curtos, como logo compacta, navegação mobile ou mensagens informais.

### Conceito central

**A verdade da sua trajetória, organizada para abrir portas.**

O produto transforma experiências reais em um currículo claro, relevante para a vaga, legível por pessoas e compatível com ATS. A marca deve unir precisão técnica, acolhimento e sensação de avanço.

### Posicionamento

Currículo Core é o estúdio inteligente e privado onde uma pessoa organiza sua trajetória, adapta o currículo para cada oportunidade e exporta um documento profissional — sem fórmulas vazias, sem inventar experiências e sem entregar seus dados a terceiros.

### Promessa

**Seu currículo no ponto para a próxima oportunidade.**

### Taglines aprovadas

- Principal: **Sua trajetória, pronta para avançar.**
- Produto: **Um currículo forte começa pelo que é essencial.**
- Adaptação por vaga: **Mais aderência. A mesma verdade.**
- Privacidade: **Seus dados ficam com você.**
- Exportação: **Pronto para pessoas. Pronto para ATS.**

### Personalidade

- **Clara:** explica decisões e evita jargão desnecessário.
- **Jovem:** enérgica, otimista e atual, sem infantilizar.
- **Honesta:** nunca promete emprego, nota ATS universal ou sucesso garantido.
- **Capaz:** transmite precisão e domínio técnico.
- **Humana:** conversa com quem está construindo o próprio caminho.
- **Prática:** cada tela deve ajudar a chegar ao próximo passo.

### Arquétipo

**Mentor otimista + Ferramenta de oficina.** A marca orienta, mas a autoria continua sendo da pessoa. O produto ajuda a lapidar; não assume o protagonismo.

### Manifesto curto

Uma carreira não cabe em palavras-chave, mas um bom currículo sabe usá-las. O Currículo Core organiza o que você já viveu, aproxima sua experiência da oportunidade certa e entrega um documento limpo, direto e confiável. Sem inventar. Sem expor. Sem complicar.

---

## 2. Princípios de experiência

1. **A pessoa nunca começa diante de uma tela vazia.** Oferecer exemplo, sugestão contextual e próximo passo claro.
2. **Editar e visualizar acontecem juntos.** Alterações relevantes devem aparecer no preview com feedback imediato.
3. **Aderência é explicável.** Mostrar quais palavras-chave foram encontradas, quais faltam e onde melhorar; nunca exibir uma “nota mágica”.
4. **Privacidade é visível.** Controles de e-mail, telefone e localização ficam próximos ao preview e explicam seu efeito.
5. **Nada é inventado.** Sugestões podem reformular conteúdo fornecido, mas nunca criar competências, cargos ou métricas.
6. **Progresso sem ansiedade.** Usar linguagem encorajadora, estados claros e pequenas conquistas; evitar alertas agressivos.
7. **ATS primeiro, beleza junto.** A estética do app pode ser expressiva; o currículo exportado deve permanecer sóbrio, textual e altamente legível.

---

## 3. Direção criativa

### Ideia visual: “Blocos que ganham direção”

A identidade nasce de módulos de conteúdo organizados por um cursor/trilho vertical. Blocos representam experiências; o movimento ascendente representa priorização para uma vaga. O sistema mistura:

- precisão de um editor profissional;
- ritmo de uma publicação editorial jovem;
- pequenos acentos gráficos inspirados em cursores, tags e marca-texto;
- superfícies claras, muito respiro e contraste alto;
- cor vibrante aplicada com disciplina.

### Sensação desejada

Ao abrir o produto, a pessoa deve pensar: **“isso é simples, atual e confiável; consigo terminar meu currículo aqui.”**

### Evitar

- estética bancária azul-marinho genérica;
- gradientes roxo/azul usados em toda a interface;
- glassmorphism, neon, sombras pesadas ou excesso de blur;
- ilustrações 3D corporativas e personagens infantis;
- fotos genéricas de pessoas em escritórios;
- troféus, foguetes e confetes como linguagem principal;
- score circular que sugira uma precisão inexistente;
- grandes áreas vazias sem função ou dashboards cheios de métricas decorativas.

---

## 4. Identidade visual

### 4.1 Logo

Criar um wordmark tipográfico **Currículo Core** com símbolo opcional.

**Símbolo:** dois colchetes arredondados envolvendo um pequeno bloco vertical deslocado para cima. Deve sugerir simultaneamente código, estrutura de documento e progressão. Construção geométrica simples, reconhecível em 20 px e com cantos levemente arredondados.

**Wordmark:** “Currículo” em peso 650 e “Core” em peso 750. O ponto do “i” pode receber o Lima Pulso em aplicações de destaque. Não inclinar, não usar contorno e não aplicar gradiente no logo.

**Versões:**

- horizontal completa para header e landing page;
- símbolo isolado para favicon e avatar;
- monocromática em Tinta Core ou branco;
- versão compacta “Core” somente abaixo de 360 px, se necessário.

**Área de proteção:** equivalente à largura do bloco interno do símbolo em todos os lados.

**Tamanho mínimo:** 112 px para o wordmark e 20 px para o símbolo.

### 4.2 Paleta principal

| Token | Hex | Uso |
|---|---:|---|
| `brand.core` | `#5B4BFF` | CTA principal, foco, links, seleção |
| `brand.core-hover` | `#4938E8` | Hover do CTA e elementos ativos |
| `brand.core-soft` | `#ECEAFF` | Fundo selecionado e destaque leve |
| `brand.pulse` | `#C8F85A` | Acento jovem, progresso positivo, marca-texto |
| `brand.pulse-strong` | `#A9DE32` | Bordas/ícones sobre fundos claros |
| `brand.sky` | `#BFE8FF` | Informação, onboarding e ilustrações |
| `brand.coral` | `#FF8A72` | Atenção editorial e pontos sem cobertura |
| `ink.950` | `#11111F` | Texto principal e fundos escuros |
| `ink.800` | `#2A293A` | Títulos secundários |
| `ink.600` | `#5D5B70` | Texto de apoio |
| `ink.400` | `#9290A2` | Placeholder e metadados discretos |
| `surface.canvas` | `#F7F7FB` | Fundo geral do app |
| `surface.paper` | `#FFFFFF` | Cards, campos e preview |
| `surface.subtle` | `#F0F0F6` | Grupos, skeletons e áreas secundárias |
| `border.default` | `#DEDEE8` | Bordas comuns |
| `border.strong` | `#B8B7C7` | Divisores e controles destacados |

### 4.3 Cores semânticas

| Estado | Base | Fundo | Texto/ícone |
|---|---:|---:|---:|
| Sucesso | `#16875B` | `#E8F7F0` | `#0C6844` |
| Atenção | `#B66A08` | `#FFF4DE` | `#80500E` |
| Erro | `#D63C4A` | `#FDECEF` | `#A62734` |
| Informação | `#2476A8` | `#E8F5FC` | `#195C83` |

Nunca comunicar estado apenas pela cor. Sempre combinar cor com texto, ícone ou padrão visual.

### 4.4 Regra de proporção de cor

- 70% neutros claros e branco;
- 20% Tinta Core e tons estruturais;
- 8% Roxo Core;
- 2% acentos Lima, Céu ou Coral.

O Lima Pulso é um acento, não uma grande superfície de leitura. Sobre Lima usar apenas `ink.950`; nunca texto branco.

### 4.5 Gradiente permitido

Usar apenas em momentos de marca, nunca em componentes funcionais:

```css
linear-gradient(135deg, #5B4BFF 0%, #7B6DFF 52%, #BFE8FF 100%)
```

Aplicações: fundo de uma pequena composição hero, halo suave atrás do preview ou capa de compartilhamento. Opacidade máxima de 18% quando usado como halo.

---

## 5. Tipografia

### Famílias

- **Títulos e marca:** `Manrope`, fallback `Inter`, `Arial`, sans-serif.
- **Interface e texto:** `Inter`, fallback `Arial`, sans-serif.
- **Dados técnicos/JSON/atalhos:** `JetBrains Mono`, fallback `Consolas`, monospace.

Usar no máximo duas famílias na mesma tela. JetBrains Mono aparece somente em importação JSON, atalhos, tags técnicas ou pequenos rótulos de arquivo.

### Escala desktop

| Estilo | Fonte | Peso | Tamanho/linha | Tracking |
|---|---|---:|---:|---:|
| Display XL | Manrope | 750 | 64/68 | `-0.04em` |
| Display | Manrope | 750 | 48/54 | `-0.035em` |
| H1 | Manrope | 750 | 36/42 | `-0.025em` |
| H2 | Manrope | 720 | 28/34 | `-0.02em` |
| H3 | Manrope | 700 | 22/28 | `-0.01em` |
| H4 | Manrope | 700 | 18/24 | `-0.005em` |
| Body LG | Inter | 450 | 18/28 | `0` |
| Body | Inter | 450 | 16/24 | `0` |
| Body SM | Inter | 450 | 14/20 | `0` |
| Label | Inter | 650 | 14/18 | `0` |
| Caption | Inter | 550 | 12/16 | `0.01em` |
| Overline | Inter | 750 | 11/14 | `0.08em` |

### Escala mobile

- Display: 40/44;
- H1: 32/38;
- H2: 26/32;
- H3: 21/27;
- corpo permanece 16/24 para legibilidade;
- nenhum texto funcional abaixo de 12 px.

### Regras editoriais

- Preferir títulos em sentence case: “Adapte para esta vaga”, não “Adapte Para Esta Vaga”.
- Limitar textos corridos a 68 caracteres por linha.
- Não usar caixa alta em botões.
- Números importantes podem usar `font-variant-numeric: tabular-nums`.
- Evitar títulos com mais de duas linhas.

---

## 6. Grid, espaço e forma

### Grid responsivo

| Breakpoint | Largura | Colunas | Margens | Gutter |
|---|---:|---:|---:|---:|
| Mobile S | 320–479 | 4 | 16 | 16 |
| Mobile L | 480–767 | 4 | 24 | 16 |
| Tablet | 768–1023 | 8 | 32 | 20 |
| Desktop | 1024–1439 | 12 | 48 | 24 |
| Wide | 1440+ | 12 | 64 | 24 |

Largura máxima do conteúdo de marketing: **1280 px**. No editor, permitir até **1600 px** para acomodar formulário e preview.

### Escala de espaçamento

Base de 4 px: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128`.

- Espaço interno de input/botão: 12–16 px;
- card comum: 20 px mobile, 24 px desktop;
- seção de produto: 32–48 px;
- seção de marketing: 80 px mobile, 120 px desktop.

### Raios

| Token | Valor | Uso |
|---|---:|---|
| `radius.sm` | 8 px | tags, pequenos controles |
| `radius.md` | 12 px | inputs e botões |
| `radius.lg` | 16 px | cards e menus |
| `radius.xl` | 24 px | painéis e blocos de marketing |
| `radius.round` | 999 px | pills e avatar |

Evitar arredondar tudo. O papel do currículo deve ter raio de 4 px, remetendo a uma folha real.

### Bordas e sombras

- Borda padrão: `1px solid #DEDEE8`.
- Divisor: `1px solid #E8E8EF`.
- Foco: anel externo de 3 px `rgba(91, 75, 255, 0.24)` mais borda `#5B4BFF`.
- Sombra de card: `0 1px 2px rgba(17,17,31,.05), 0 8px 24px rgba(17,17,31,.06)`.
- Sombra elevada: `0 16px 48px rgba(17,17,31,.14)`.
- Preview A4: `0 18px 60px rgba(17,17,31,.12)`.

Sombras comunicam hierarquia, nunca decoração.

---

## 7. Iconografia e imagens

### Ícones

Usar **Lucide Icons**, traço 1.75–2 px, cantos arredondados.

- 16 px em campos e metadados;
- 20 px em botões e navegação;
- 24 px em cards;
- 32 px apenas em empty states.

Ícones sempre acompanhados de label quando a ação não for universal. Todo icon button deve ter tooltip e nome acessível.

### Ilustração de marca

Criar composições 2D abstratas com folhas, blocos de texto, tags e cursores. Formas planas, contorno Tinta Core de 1.5 px, sombras mínimas e acentos Lima/Céu/Coral. Sem mascote.

### Fotografia

Se necessária no marketing, usar retratos documentais de pessoas reais em transição ou crescimento profissional, com luz natural e ambientes pessoais. Evitar poses corporativas, aperto de mãos e bancos de imagem óbvios. Nunca usar fotografia dentro do editor.

---

## 8. Voz e conteúdo

### Tom

Português brasileiro contemporâneo, direto e caloroso. Usar “você”. Frases curtas, verbos de ação e explicações concretas. Humor pode aparecer em microcopy leve, nunca em erros ou privacidade.

### Vocabulário preferido

- “currículo” em vez de “CV” na navegação principal;
- “vaga” ou “oportunidade” em vez de “job”;
- “aderência” acompanhada de explicação simples;
- “publicar no currículo” em vez de “salvar payload”;
- “baixar PDF” em vez de “gerar artefato”;
- “dados do currículo” em vez de “schema”, exceto no modo avançado.

### CTAs

- Principal da landing: **Criar meu currículo**
- Secundário: **Ver como funciona**
- Novo documento: **Começar do zero**
- Exemplo: **Usar currículo de exemplo**
- Vaga: **Analisar palavras-chave**
- Aplicar: **Aplicar sugestões**
- Exportar: **Baixar PDF**
- Privacidade: **Revisar dados visíveis**

### Microcopy aprovada

- Autosave: “Tudo salvo neste dispositivo”
- Privacidade: “Seu currículo é processado localmente.”
- Telefone oculto: “Telefone oculto no PDF”
- Preview vazio: “Seu currículo vai ganhar forma aqui.”
- Sem palavras-chave: “Cole a descrição da vaga para destacar o que mais combina com ela.”
- Sugestão ética: “Só sugira algo que você realmente fez.”
- Exportação concluída: “Currículo pronto. Boa sorte na próxima etapa.”
- Erro de validação: “Falta revisar 2 campos antes de exportar.”

### Mensagens de erro

Sempre responder a três perguntas: o que aconteceu, onde aconteceu e como resolver.

Exemplo: **“Este link não parece completo. Inclua `https://` no início.”**

Evitar: “Erro inválido”, “Falha inesperada” sem contexto ou culpa atribuída à pessoa.

---

## 9. Arquitetura do front-end

Criar os seguintes ambientes conectados:

1. **Landing page pública**
2. **Início / biblioteca local de currículos**
3. **Onboarding e importação**
4. **Editor principal com preview**
5. **Painel de adaptação para vaga**
6. **Revisão de privacidade**
7. **Fluxo de exportação**
8. **Configurações e modo avançado JSON**
9. **Estados vazios, loading, erro e sucesso**

O produto deve funcionar sem login no primeiro uso. Se houver opção futura de conta/sincronização, tratá-la como secundária e não bloquear a criação do currículo.

---

## 10. App shell

### Desktop

- Header fixo de 64 px com logo à esquerda.
- No editor, centro do header mostra nome do currículo editável e estado de autosave.
- À direita: “Privacidade”, botão secundário “Visualizar” e CTA “Baixar PDF”.
- Sidebar de 248 px com as seções do currículo e indicador discreto de completude por seção.
- Área central de formulário flexível, ideal entre 520 e 680 px.
- Preview A4 à direita, entre 440 e 560 px, sobre fundo `surface.subtle`.
- Preview pode permanecer sticky; formulário é a principal área de rolagem.

Estrutura sugerida:

```text
┌────────────────────────────────────────────────────────────────────┐
│ Logo  Nome do currículo · Salvo        Privacidade  Preview  PDF  │
├──────────────┬────────────────────────────┬────────────────────────┤
│ Navegação    │ Editor da seção           │ Preview A4             │
│              │                            │                         │
│ 1. Perfil    │ Título + ajuda             │ documento em tempo real │
│ 2. Resumo    │ Campos e cards             │                         │
│ 3. ...       │                            │ zoom / página           │
└──────────────┴────────────────────────────┴────────────────────────┘
```

### Tablet

- Sidebar compacta de 72 px com ícones e tooltips.
- Editor e preview alternados por tabs “Editar” e “Preview”, ou split 55/45 em landscape.

### Mobile

- Header de 56 px com voltar, título truncado e menu de ações.
- Stepper horizontal rolável logo abaixo.
- Uma única coluna.
- Barra inferior fixa com ação contextual à esquerda e CTA principal à direita.
- Preview abre em tela cheia; nunca exibir uma miniatura A4 ilegível ao lado do formulário.
- Painéis laterais viram bottom sheets com alça, título e botão fechar.

---

## 11. Componentes essenciais

### Botões

Alturas: 48 px padrão, 40 px compacto, 56 px hero. Padding horizontal de 16–24 px.

- **Primary:** fundo Roxo Core, texto branco, ícone opcional à direita.
- **Secondary:** branco, borda forte, texto Tinta Core.
- **Tertiary:** transparente, texto Roxo Core.
- **Destructive:** fundo vermelho apenas em confirmação final; antes disso, usar ghost vermelho.
- **Lime accent:** reservado para CTA especial de marketing; fundo Lima, texto Tinta.

Estados obrigatórios: default, hover, pressed, focus-visible, disabled e loading. Loading preserva a largura do botão.

### Campos

- Label sempre visível acima do campo.
- Altura mínima 48 px.
- Helper text abaixo; contador alinhado à direita quando necessário.
- Placeholder é exemplo, não instrução permanente.
- Erro aparece abaixo com ícone e orientação de correção.
- Textareas têm resize vertical e altura inicial coerente com o conteúdo.
- Nunca usar somente floating label.

### Cards de conteúdo

Experiências, projetos, educação e competências usam cards reordenáveis com:

- drag handle visível;
- título e metadado;
- badge “Atual” quando aplicável;
- expandir/recolher;
- menu de contexto;
- feedback de aderência à vaga;
- área de drop com 2 px Roxo Core ao arrastar.

No mobile, incluir ações “Mover para cima/baixo” acessíveis além do gesto de drag.

### Tags e palavras-chave

- Altura 28 px; raio 999 px; padding 8–10 px.
- Encontrada: fundo verde suave + check.
- Parcial: fundo amarelo suave + ícone de busca.
- Ausente: fundo coral suave + ícone de menos.
- Informativa: fundo Roxo suave.
- Removível: botão `x` com alvo mínimo total de 36 px.

### Stepper

Etapas: Perfil, Resumo, Competências, Experiência, Projetos, Formação, Idiomas, Revisão.

Estados: não iniciado, em andamento, completo e requer atenção. Não bloquear navegação entre etapas.

### Toasts

- Canto inferior direito no desktop e abaixo do header no mobile.
- Máximo de 3 simultâneos.
- Permanência de 5 s; erros importantes não somem automaticamente.
- Sempre dispensáveis e nunca a única confirmação de uma ação crítica.

### Modais e bottom sheets

- Modal pequeno: 440 px; médio: 640 px; grande: 880 px.
- Cabeçalho e rodapé fixos apenas quando o conteúdo rolar.
- Confirmações destrutivas citam exatamente o item que será removido.
- Foco preso no modal e devolvido ao elemento de origem ao fechar.

### Skeleton e loading

Usar skeleton apenas quando a estrutura final for conhecida. Para ações locais rápidas, preferir mudança imediata de estado. Respeitar `prefers-reduced-motion`.

---

## 12. Telas e fluxos

### 12.1 Landing page

**Objetivo:** converter sem exigir cadastro e explicar os diferenciais reais.

**Header:** logo, “Como funciona”, “Privacidade”, “Open source”, link GitHub e CTA “Criar meu currículo”.

**Hero em duas colunas:**

- eyebrow: “Currículo local, claro e compatível com ATS”;
- H1: **“Sua trajetória, pronta para avançar.”**;
- apoio: “Crie, adapte para cada vaga e exporte um currículo profissional sem inventar experiências — e sem tirar seus dados do seu dispositivo.”;
- CTAs “Criar meu currículo” e “Ver como funciona”;
- linha de confiança: “Sem login obrigatório · Dados locais · PDF com texto selecionável”;
- lado visual: preview de currículo parcialmente sobreposto por três tags de palavras-chave e um pequeno indicador “Processado localmente”.

**Prova de produto:** faixa com 3 fatos, não números inventados: “Compatível com ATS”, “Português e inglês”, “Código aberto”.

**Como funciona:** três passos grandes — Organize, Adapte, Exporte — conectados por um trilho vertical ou horizontal.

**Diferencial de aderência:** demonstração visual de tags encontradas e ausentes, com explicação de que o produto reorganiza evidências reais.

**Privacidade:** bloco escuro em Tinta Core com mini painel de toggles e o texto “O controle continua sendo seu”.

**Open source:** card claro com link para GitHub, arquitetura resumida e selo MIT, sem fingir métricas de comunidade.

**FAQ:** dados, ATS, PDF, LaTeX, adaptação por vaga e funcionamento local.

**CTA final:** fundo Roxo suave, título “A próxima versão da sua trajetória começa aqui.” e botão Lima.

**Footer:** produto, recursos, projeto, legal, GitHub e versão.

### 12.2 Início / biblioteca local

- Saudação curta: “Vamos preparar sua próxima oportunidade?”
- CTA “Novo currículo”.
- Grid de documentos locais com nome, headline, idioma, última alteração e miniatura.
- Ações: abrir, duplicar, renomear, exportar JSON e excluir.
- Card adicional tracejado “Importar JSON”.
- Nenhuma métrica de vaidade.

**Empty state:** ilustração de três blocos se organizando, título “Seu primeiro currículo começa pelo essencial”, texto breve e duas opções: começar do zero ou usar exemplo.

### 12.3 Onboarding

Fluxo curto, pulável, com no máximo quatro telas:

1. escolha “Começar do zero”, “Usar exemplo” ou “Importar JSON”;
2. idioma do currículo: Português (Brasil) ou English;
3. dados básicos: nome, headline e contatos;
4. confirmação de privacidade e entrada no editor.

Mostrar progresso “Etapa 1 de 4”. Não transformar o onboarding em questionário longo.

### 12.4 Editor — Perfil e contatos

- Título “Como você quer se apresentar?”
- Campos: nome, headline, e-mail, telefone, localização e links.
- Cada contato possui toggle “Mostrar no currículo”.
- Links são linhas repetíveis com label e URL.
- Preview destaca por 800 ms a área atualizada, sem piscar.
- Card informativo: “O telefone começa oculto por padrão.”

### 12.5 Editor — Resumo

- Textarea ampla com recomendação de 2–4 frases.
- Exemplos colapsáveis de estrutura, nunca texto para copiar como experiência fictícia.
- Contagem de caracteres como orientação, não limite rígido.
- Chips que indicam palavras-chave da vaga já presentes.
- Sugestão de revisão sempre mostra comparação “Antes / Sugestão” e exige aceite.

### 12.6 Editor — Competências

- Grupos por categoria.
- Campo rápido para inserir itens com Enter.
- Tags internas de aderência podem ser visíveis no app, mas não precisam aparecer no PDF.
- Reordenação por drag-and-drop e controles de teclado.
- Ação “Adicionar categoria”.

### 12.7 Editor — Experiência, projetos e formação

- Lista de cards expansíveis.
- Formulário interno com título/cargo, organização, início, fim, toggle “Atual”, descrição, resultados/destaques e tags.
- Destaques em lista repetível; Enter adiciona outro.
- Datas aceitam texto livre compatível com o core, mas oferecer máscara amigável.
- Card ativo recebe borda Roxo Core e leve fundo roxo.
- Após três cards, permitir recolher todos.

### 12.8 Painel “Adaptar para vaga”

Abrir como painel lateral de 440–520 px no desktop e tela cheia no mobile.

1. Campo grande para colar a descrição da vaga.
2. CTA “Analisar palavras-chave”.
3. Resultado agrupado em “Encontradas”, “Podem ganhar destaque” e “Ainda não aparecem”.
4. Para cada termo, mostrar evidências encontradas em experiências/projetos.
5. Ação “Priorizar itens relevantes” com preview claro da nova ordem.
6. Aviso persistente: “O Core reorganiza o que você informou. Ele não cria experiências ou competências.”

Evitar porcentagem geral de compatibilidade. Se for necessário resumir, usar frases explicáveis como “8 de 12 termos aparecem no currículo”.

### 12.9 Revisão de privacidade

Tela/painel antes da primeira exportação:

- preview resumido dos dados pessoais;
- toggles para e-mail, telefone e localização;
- estado visual “Visível no PDF” ou “Oculto no PDF”;
- explicação “Esses ajustes não apagam os dados do editor.”;
- confirmação “Continuar para exportação”.

### 12.10 Exportação

- Preview final centralizado em fundo cinza suave.
- Opções: nome do arquivo, idioma, cor primária do documento, limite de experiências e projetos.
- Formato principal: PDF; secundário: `.tex`; avançado: JSON.
- Checklist curto: dados visíveis, links, uma página quando possível e texto selecionável.
- CTA “Baixar PDF”.
- Durante compilação: progresso determinístico quando possível e mensagem “Preparando seu currículo”.
- Sucesso: check ilustrado discreto, botão baixar novamente e ação “Voltar ao editor”.

### 12.11 Modo avançado JSON

- Acessível em Configurações > Avançado.
- Editor monoespaçado com numeração de linhas, syntax highlight e validação inline.
- Split view JSON/preview.
- Ações “Formatar”, “Validar” e “Baixar JSON”.
- Mostrar erros com caminho legível, exemplo: `experience[1].role`.
- Aviso antes de substituir alterações feitas no editor visual.

---

## 13. Padrão visual do currículo no preview

O app é expressivo; o documento exportado é editorial e contido.

- Página A4 branca, uma coluna e texto selecionável.
- Nome em 22–28 pt; headline em 10–12 pt.
- Seções com títulos curtos, peso 700 e pequeno filete na cor primária.
- Corpo entre 9.5 e 10.5 pt, line-height confortável.
- Links escritos de forma legível e clicável.
- Sem foto, barras de nível, gráficos, ícones decorativos, duas colunas complexas ou elementos que prejudiquem ATS.
- Cor escolhida atua apenas em títulos, filetes e links.
- Preview deve respeitar proporção A4 real e disponibilizar zoom 50%, 75%, 100% e “Ajustar”.

---

## 14. Interações e movimento

### Princípio

Movimento confirma causa e efeito: salvar, reordenar, aplicar ou concluir. Não usar animação constante.

### Durações

- microinteração: 120–160 ms;
- componente/painel: 180–240 ms;
- transição de tela: 240–320 ms;
- celebração discreta: máximo 600 ms e uma única vez.

### Easing

- entrada: `cubic-bezier(.2,.8,.2,1)`;
- saída: `cubic-bezier(.4,0,1,1)`;
- reordenação: spring suave sem overshoot exagerado.

### Exemplos

- Cards deslocam e abrem espaço ao reordenar.
- Texto atualizado recebe highlight Lima a 16% por 800 ms no preview.
- Painel de vaga desliza da direita; overlay aparece em fade.
- Sucesso de exportação desenha um check simples, sem confete.
- Respeitar integralmente `prefers-reduced-motion`.

---

## 15. Acessibilidade

Meta mínima: **WCAG 2.2 AA**.

- Contraste de texto normal ≥ 4.5:1 e texto grande ≥ 3:1.
- Alvos de toque mínimos de 44 × 44 px.
- Navegação completa por teclado.
- `focus-visible` forte e consistente.
- Ordem do DOM acompanha a ordem visual.
- Headings sem saltos de nível.
- Labels programáticos em todos os campos.
- Erros associados ao campo e resumidos no topo quando houver vários.
- Live region para autosave, reordenação e resultado de validação.
- Drag-and-drop possui alternativa por teclado.
- Zoom até 200% sem perda de conteúdo.
- Não depender de hover para revelar ação essencial.
- Preview do currículo deve possuir alternativa textual acessível.
- Respeitar preferências de movimento, contraste e esquema de cor.

---

## 16. Tema escuro

O MVP pode priorizar tema claro, mas preparar tokens para dark mode. No tema escuro:

- canvas `#0E0E17`;
- superfícies `#171624` e `#201F2E`;
- texto principal `#F5F4FA`;
- texto secundário `#B9B7C8`;
- borda `#343245`;
- Roxo Core clareado para `#8C80FF`;
- Lima permanece `#C8F85A`;
- preview A4 continua branco, pois representa o documento final.

Não simplesmente inverter as cores. Reduzir sombras e usar bordas/superfícies para hierarquia.

---

## 17. Estados obrigatórios para todos os fluxos

Projetar explicitamente:

- primeira visita;
- documento vazio;
- documento parcialmente preenchido;
- documento completo;
- JSON válido e inválido;
- preview indisponível;
- PDF em processamento, concluído e com falha;
- dados não salvos;
- modo offline;
- item sendo reordenado;
- nenhuma palavra-chave encontrada;
- currículo com conteúdo demais para uma página;
- ação desabilitada com motivo visível;
- exclusão cancelada e confirmada.

Nunca deixar uma área central totalmente vazia: oferecer explicação e próxima ação.

---

## 18. Organização do arquivo Figma

Criar as páginas nesta ordem:

1. `00 — Cover & Principles`
2. `01 — Foundations`
3. `02 — Components`
4. `03 — Patterns`
5. `04 — Marketing`
6. `05 — Product Desktop`
7. `06 — Product Mobile`
8. `07 — Prototype`
9. `08 — Archive`

### Foundations

Criar variables/tokens para cores, espaçamento, raio e elevação. Preparar modes Light e Dark. Aplicar estilos tipográficos nomeados por função, não por valor: `Display/XL`, `Heading/H1`, `Body/Default`, etc.

### Componentes

Usar Auto Layout em tudo que for reutilizável. Criar propriedades e variantes de:

- buttons: hierarchy × size × state × icon;
- inputs: type × state × content;
- tags: semantic × removable;
- cards: content type × expanded × selected;
- navigation items: state × density;
- toast, modal, sheet, tooltip e menu;
- progress/stepper;
- resume preview controls;
- privacy row;
- keyword evidence row.

Nomear camadas semanticamente em inglês técnico consistente, evitando `Frame 123` ou `Group 9`.

### Frames mínimos

Produzir telas completas em:

- Desktop: 1440 × 1024;
- Laptop: 1280 × 832;
- Tablet: 768 × 1024;
- Mobile: 390 × 844;
- Mobile pequeno: 320 × 720 para teste de estresse.

Usar conteúdo realista em português, baseado no exemplo fictício do repositório. Não usar lorem ipsum.

---

## 19. Protótipo prioritário

Criar um fluxo navegável com estes passos:

```text
Landing
  → Criar meu currículo
  → Escolher “Usar currículo de exemplo”
  → Confirmar dados básicos
  → Abrir editor em Experiência
  → Abrir “Adaptar para vaga”
  → Colar descrição e analisar
  → Priorizar itens relevantes
  → Revisar privacidade
  → Baixar PDF
  → Sucesso
```

Incluir estados hover, focus, loading, validação e pelo menos um erro recuperável durante o fluxo.

---

## 20. Checklist de qualidade para o Figma Make

Antes de considerar o front concluído, validar:

- [ ] A marca parece jovem e profissional, não infantil nem corporativa genérica.
- [ ] Roxo e Lima têm função clara e não dominam todas as superfícies.
- [ ] Landing explica produto, privacidade, ATS e open source sem promessas falsas.
- [ ] O editor mantém edição e preview próximos.
- [ ] Todos os campos têm label, ajuda, erro e foco previstos.
- [ ] Todos os fluxos têm estados vazio, loading, sucesso e falha.
- [ ] O painel de vaga explica de onde veio cada recomendação.
- [ ] Privacidade aparece antes da exportação e telefone inicia oculto.
- [ ] Mobile não é uma simples redução do desktop.
- [ ] Componentes usam Auto Layout, variables e variants.
- [ ] O layout funciona a 320 px e com zoom de 200%.
- [ ] O currículo exportado permanece sóbrio e ATS-friendly.
- [ ] Nenhum conteúdo profissional fictício é apresentado como se pertencesse à pessoa.
- [ ] Todo texto está em pt-BR natural, sem lorem ipsum.
- [ ] O protótipo principal funciona de ponta a ponta.

---

## 21. Prompt executivo para iniciar no Figma Make

> Crie o front-end completo e responsivo do **Currículo Core**, um editor local e open source de currículos profissionais compatíveis com ATS. A marca deve ser moderna, jovem, otimista e confiável, com estética editorial + tech. Use Manrope em títulos, Inter na interface, Roxo Core `#5B4BFF` como ação principal, Lima Pulso `#C8F85A` como acento e Tinta `#11111F` para estrutura. Trabalhe com superfícies claras, respiro generoso, bordas precisas, raios moderados e ícones Lucide. Construa landing page, biblioteca local, onboarding, editor desktop em três áreas (navegação, formulário e preview A4), adaptação por palavras-chave da vaga, revisão de privacidade, exportação e modo avançado JSON, além das versões mobile. O produto não exige login, processa dados localmente, oculta telefone por padrão e nunca inventa competências ou experiências. Não use score ATS genérico, glassmorphism, dashboards decorativos, fotos corporativas ou lorem ipsum. Crie foundations, variables Light/Dark, componentes com Auto Layout e variants, estados completos e protótipo do fluxo principal. Siga integralmente as especificações, tokens, textos e critérios de acessibilidade deste `style.md`.

---

## 22. Regra final

Toda decisão visual deve reforçar ao menos uma destas ideias: **clareza, autoria, privacidade ou avanço**. Se um elemento não ajuda a pessoa a entender, decidir ou prosseguir, ele não deve entrar na interface.
