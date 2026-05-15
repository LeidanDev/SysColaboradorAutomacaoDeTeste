# language: pt
Funcionalidade: Interação com menu hamburguer
  Descrição da Funcionalidade: Ao clicar no menu hamburguer a sidebar continua sendo exibida erroneamente

# RF001 — Funcionalidade menu hamburguer

  Cenário: Menu hamburguer deveria ocultar sidebar
    Dado que consegui fazer login com perfil "usuarioAdmin"
    Quando clico no menu hamburguer
    Então a sidebar continua sendo exibida