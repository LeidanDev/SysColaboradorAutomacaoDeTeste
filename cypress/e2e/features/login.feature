# language: pt
Funcionalidade: Login
  Descrição da Funcionalidade: Testes de login com validação de campos obrigatórios e login incorreto

# RF001 — Login funcional

  Cenário: Login válido
    Dado que estou na página de login
    Quando informo o usuário do perfil "usuarioAdmin"
    E informo a senha do perfil "usuarioAdmin"
    E clico no botão login
    Então devo ver a mensagem "Dashboard"

# Login inválido — usuário ou senha incorretos

  Cenário: Login inválido
    Dado que estou na página de login
    Quando informo o usuário do perfil "usuarioErrado"
    E informo a senha do perfil "usuarioErrado"
    E clico no botão login
    Então devo ver a mensagem "Usuário não encontrado."

# RF002 — Campo usuário obrigatório

  Cenário: Usuário obrigatório
    Dado que estou na página de login
    Quando não informo o usuário
    E informo a senha do perfil "usuarioAdmin"
    E clico no botão login
    Então devo ver a mensagem "Informe o usuário."

# RF003 — Login sem preencher campo Senha

  Cenário: Senha em branco
    Dado que estou na página de login
    Quando informo o usuário do perfil "usuarioSemSenha"
    E não informo a senha
    E clico no botão login
    Então devo ver a mensagem "Dashboard"
