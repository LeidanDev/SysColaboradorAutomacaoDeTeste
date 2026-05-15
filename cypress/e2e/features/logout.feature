# language: pt
Funcionalidade: Deslogar
  Descrição da Funcionalidade: Testes do botão Deslogar

# RF001 — Botão Sair

  Cenário: Validar Logout
    Dado que consegui fazer login com perfil "usuarioAdmin"
    Quando clico em sair
    Então devo ver a mensagem "SysColaborador Sistema de Gestão de Pessoas"

