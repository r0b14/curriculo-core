# Segurança e privacidade

Currículos normalmente contêm dados pessoais. Este projeto processa arquivos localmente e não envia dados para serviços externos.

- Não versione currículos reais, fotos, documentos ou arquivos `.env`.
- Use as opções de `privacy` para controlar a exposição de e-mail, telefone e localização.
- Prefira cidade/estado a endereço residencial completo.
- Revise o `.tex` e o PDF antes de publicá-los.
- Exemplos e testes devem usar somente identidades fictícias e domínios reservados como `example.com`.

Gerar o `.tex` ou compilar com uma distribuição LaTeX local não envia o currículo pela rede. O fluxo Docker documentado monta somente a pasta `output/`, e o `.dockerignore` impede que o repositório seja enviado como contexto de build.

GitHub Actions, editores LaTeX online, chats de IA e outros serviços remotos recebem os dados enviados a eles. Use nesses ambientes apenas o exemplo fictício ou dados anonimizados, salvo quando houver consentimento e uma avaliação consciente das políticas de retenção e acesso. O workflow padrão do projeto compila exclusivamente `examples/curriculo.exemplo.json`.

Para relatar uma vulnerabilidade, abra um aviso privado de segurança no GitHub em vez de publicar dados sensíveis em uma issue.
