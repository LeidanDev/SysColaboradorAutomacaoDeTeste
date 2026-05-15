class LogoutPage {
    static seletores() {
        return {
            //Seletores separados para facilitar a manutenção da Página de login
            botaoLogout: ".btn-logout",
            

        }
    }

    static paginaDashboard() {
        // Visitar a WebPage
        cy.visit('https://project-wbu6c-pjhiekqzm-rickkque-5280s-projects.vercel.app/')
    }
    // Clicar no botão sair
    static clicarBotaoSair() {
        cy.get(this.seletores().botaoLogout).click()
    }

}

export default LogoutPage