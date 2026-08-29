# Assistência de IA pela CLI

O Currículo Core oferece um fluxo independente de provedor para revisar um currículo com uma IA escolhida pelo usuário. O projeto não armazena chave de API, não chama serviços externos e não executa outra CLI automaticamente.

## Por que o fluxo é local

Uma chave inserida no frontend do GitHub Pages seria pública. Uma integração direta também exigiria definir provedor, política de retenção e consentimento para transmitir dados pessoais. Por isso, a aplicação gera um pacote local e deixa o envio sob controle explícito do usuário.

## 1. Consulte o guia

```bash
npm run guide
```

Para copiar o documento para outro caminho:

```bash
node src/cli.js guide --output output/guia-curriculo.md
```

A fonte canônica permanece em [`guides/resume-creation.md`](../guides/resume-creation.md).

## 2. Gere o pacote de revisão

Prepare uma descrição de vaga em texto e execute:

```bash
node src/cli.js assist \
  --input examples/curriculo.exemplo.json \
  --job examples/vaga.exemplo.txt \
  --output output/assistente-exemplo.md
```

No PowerShell, use uma linha única ou substitua `\` pelo acento grave de continuação.

O comando:

- valida o JSON antes de prosseguir;
- incorpora o guia editorial;
- serializa o currículo e a vaga como dados não confiáveis;
- instrui a IA a não inventar fatos nem transformar requisitos em competências;
- grava o pacote em `output/`, que é ignorada pelo Git;
- não abre conexão de rede e não executa o serviço de IA.

O atalho fictício equivalente é:

```bash
npm run assist:example
```

## 3. Revise antes de enviar

Abra o pacote e verifique quais informações ele contém. Se decidir fornecê-lo a uma CLI ou API de IA, consulte antes as políticas de retenção, treinamento, acesso e exclusão do provedor. Essa etapa transmite dados para fora da máquina e não é executada pelo Currículo Core.

Não coloque chaves em argumentos de terminal, frontend, JSON do currículo ou arquivos versionados. Configure qualquer credencial somente pelo mecanismo seguro documentado pelo provedor escolhido.

## 4. Aprove as sugestões manualmente

A resposta da IA não é uma fonte confiável de fatos. Compare cada alteração com o JSON original, confirme métricas e períodos com a pessoa candidata e aplique somente sugestões aprovadas.

Depois, valide e gere novamente:

```bash
node src/cli.js validate --input caminho/curriculo.json
node src/cli.js generate --input caminho/curriculo.json --output output/curriculo.tex
```

O projeto não aplica automaticamente o JSON retornado pela IA. Essa separação reduz o risco de sobrescrever dados verdadeiros ou incorporar conteúdo inventado.

## Limites

- nenhuma IA é obrigatória para criar ou gerar o currículo;
- não há garantia de compatibilidade ou aprovação universal em ATS;
- as proteções do prompt reduzem riscos, mas não garantem o comportamento de um modelo externo;
- o usuário é responsável por autorizar e revisar qualquer transmissão de dados pessoais.

[Voltar à documentação](README.md)
