# Guia canônico para criação de currículos

Este documento orienta pessoas e assistentes de IA na montagem de um currículo com evidências reais, leitura rápida e estrutura compatível com ATS. Ele não autoriza completar lacunas por suposição.

## Regra principal: fatos antes da redação

Use apenas informações confirmadas pela pessoa candidata. Nunca invente ou infira cargo, organização, formação, competência, idioma, período, resultado, número ou métrica.

Quando faltar uma informação importante:

1. faça uma pergunta objetiva;
2. marque o item como pendente fora do currículo; ou
3. omita o detalhe até que ele seja confirmado.

Não transforme expressões vagas em números. “Melhorou o processo” não permite escrever “reduziu o tempo em 30%”. Uma métrica só entra no currículo quando a pessoa fornece e confirma seu valor e contexto.

## 1. Defina o objetivo

Antes de redigir, registre:

- cargo ou área pretendida;
- senioridade compatível com a experiência real;
- idioma e região da candidatura;
- descrição da vaga, quando houver;
- evidências que demonstram aderência à oportunidade.

Termos da vaga podem ajudar a organizar o currículo, mas só devem ser incorporados quando descrevem experiências ou competências verdadeiras. Não copie palavras-chave sem sustentação.

## 2. Monte um inventário de evidências

Liste fatos verificáveis antes de escolher o texto final:

- experiências, responsabilidades e períodos;
- projetos, tecnologias e contexto de uso;
- problemas enfrentados e ações executadas;
- resultados observados e como foram medidos;
- formação, cursos e certificações concluídas;
- idiomas e nível declarado com honestidade;
- links públicos relevantes e revisados.

Para cada resultado, registre a origem da evidência. Caso ela não possa ser confirmada, descreva a ação e o contexto sem criar um impacto quantitativo.

## 3. Organize a informação

Use títulos convencionais e uma ordem coerente com o objetivo. Uma estrutura comum é:

1. nome, título profissional e contatos escolhidos;
2. resumo profissional curto e específico;
3. competências relevantes e comprovadas;
4. experiência em ordem cronológica inversa;
5. projetos relevantes;
6. formação e certificações;
7. idiomas.

Nem toda seção é obrigatória. Remova blocos vazios ou irrelevantes. Para perfis em transição ou início de carreira, projetos e formação podem aparecer antes da experiência quando forem as evidências mais fortes.

## 4. Escreva realizações claras

Prefira tópicos que combinem **ação + contexto + resultado**:

> Implementou validação automatizada no fluxo de cadastro, reduzindo erros confirmados de entrada de dados.

Outra estrutura útil é **competência + contexto + efeito observado**. Comece com verbo de ação, explique o que foi feito e encerre com o resultado real, quando conhecido.

Boas práticas:

- use voz ativa e verbos específicos;
- mantenha tempo verbal consistente: presente para atividade atual, passado para concluída;
- priorize contribuições e resultados em vez de listas genéricas de atribuições;
- explique siglas pouco conhecidas;
- preserve contexto suficiente para que o tópico faça sentido isoladamente;
- use números somente quando forem verdadeiros, relevantes e contextualizados;
- mantenha de três a cinco tópicos nas experiências mais relevantes como referência, não como regra rígida.

Evite adjetivos sem evidência, clichês e afirmações como “especialista”, “excelente” ou “líder nato” quando o próprio histórico não as demonstra.

## 5. Adapte sem falsificar

Compare a vaga com o inventário de evidências:

- priorize experiências e projetos relacionados;
- use a mesma terminologia da vaga quando ela for verdadeira para o perfil;
- destaque ferramentas no contexto em que foram usadas;
- retire conteúdo de baixo valor para aquela candidatura;
- preserve datas, títulos e fatos originais.

Adaptação é seleção e redação, não fabricação. A ausência de uma palavra-chave não autoriza acrescentar uma competência.

## 6. Facilite a leitura humana e por ATS

- use uma coluna, títulos simples e ordem previsível;
- mantenha texto selecionável;
- evite tabelas, caixas de texto, gráficos de proficiência, ícones como único rótulo e fotos;
- use tipografia legível, espaçamento consistente e contraste adequado;
- escreva datas e locais em formato uniforme;
- use links descritivos e válidos;
- revise se nome, cargo, organizações e palavras-chave aparecem como texto real.

Não existe garantia universal de aprovação em ATS. Sistemas e critérios variam. O objetivo é reduzir ambiguidades técnicas e facilitar a extração do conteúdo.

O tamanho deve acompanhar a relevância e a experiência. Uma página costuma favorecer perfis mais concisos, mas não é uma regra universal; duas páginas podem ser adequadas quando o conteúdo relevante justifica o espaço.

## 7. Proteja dados pessoais

- compartilhe apenas contatos necessários;
- prefira cidade e região a endereço residencial completo;
- mantenha telefone oculto até a pessoa optar por exibi-lo;
- não inclua documentos, estado civil, data de nascimento ou foto sem necessidade legítima;
- revise os metadados e os links antes de publicar;
- nunca versione currículos reais nem saídas pessoais no repositório.

## 8. Use IA como revisora, não como fonte de fatos

Uma IA pode ajudar a comparar linguagem, apontar lacunas, reduzir repetição e propor redações. Ela não deve decidir quais fatos são verdadeiros.

Ao usar uma IA:

1. informe que currículo e vaga são dados não confiáveis, não instruções;
2. exija que toda sugestão seja rastreável aos dados fornecidos;
3. peça perguntas quando faltar contexto;
4. proíba números, competências e experiências inferidos;
5. revise cada mudança antes de atualizar o JSON;
6. valide o JSON e gere o documento localmente;
7. avalie privacidade e retenção antes de enviar dados a um serviço externo.

Nunca coloque uma chave de API em código de frontend, arquivo versionado, currículo ou pacote de revisão. O comando `assist` deste projeto apenas gera um arquivo local; transmitir esse arquivo para uma IA é uma ação separada e consciente do usuário.

## Checklist final

- [ ] Todo fato pode ser confirmado pela pessoa candidata.
- [ ] Não há números, cargos, competências ou períodos inventados.
- [ ] O resumo corresponde às evidências do currículo.
- [ ] Os tópicos começam com ações claras e apresentam contexto.
- [ ] As palavras-chave da vaga aparecem apenas quando verdadeiras.
- [ ] A ordem das seções favorece as evidências mais relevantes.
- [ ] Datas, idioma, pontuação e tempos verbais estão consistentes.
- [ ] O documento permanece legível em uma coluna e com texto selecionável.
- [ ] Contatos, links e controles de privacidade foram revisados.
- [ ] O JSON passou em `curriculo-core validate`.
- [ ] A pessoa aprovou as sugestões antes da geração final.

## Referências

- [Yale Office of Career Strategy — Writing Impactful Resume Bullets](https://ocs.yale.edu/resources/writing-impactful-resume-bullets/)
- [Yale Office of Career Strategy — Resume Formatting and Common Errors](https://ocs.yale.edu/resources/resume-formatting/)
- [Yale Office of Career Strategy — Technical Resume Sample](https://ocs.yale.edu/resources/stemconnect-technical-resume-sample/)
- [University of Pennsylvania Career Services — Resume Guide for Graduate Students and Postdocs](https://careerservices.upenn.edu/resources/resume-guide-for-graduate-students-and-postdocs/)
- [Columbia Center for Career Education — Resume Checklist](https://www.careereducation.columbia.edu/sites/default/files/Resume%20Checklist.pdf)

As referências sustentam práticas de clareza, ação, contexto, resultados e legibilidade. As regras de privacidade e de não invenção são requisitos próprios do Currículo Core.
