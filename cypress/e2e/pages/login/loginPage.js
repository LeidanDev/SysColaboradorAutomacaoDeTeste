class LoginPage {
    static seletores() {
        return{
            //Seletores separados para facilitar a manutenção da Página de login
            campoUsuario: "#login-user",
            campoSenha: "#login-pass",
            botaoAcessar: "#login-btn"
        }
    }

    static visitarPaginaLogin() {
        // Visitar a WebPage
        cy.visit('https://project-wbu6c-pjhiekqzm-rickkque-5280s-projects.vercel.app/')
    }
    // Preencher campo usuario
    static preencherUsuario(usuario) {
        cy.get(this.seletores().campoUsuario).type(usuario)
    }
    // Preencher campo senha
    static preencherSenha(senha) {
        cy.get(this.seletores().campoSenha).type(senha)
    }
    // Clicar no botão acessar
    static clicarBotaoLogin() {
        cy.get(this.seletores().botaoAcessar).click()
    }
}

export default LoginPage