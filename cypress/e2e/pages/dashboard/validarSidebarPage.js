class ValidarSidebar {
    static seletores() {
        return {
            //Seletores separados para facilitar a manutenção da Página de login
            botaoSidebar: ".menu-btn",
            navBarDashboard: "#nav-dashboard",

        }
    }

    // Clicar no menu hamburguer
    static validarBotaoSidebar() {
        cy.get(this.seletores().botaoSidebar).click()
    }

    // Valida se a sidebar continuar sendo exibida
    static validarSeSidebarEstaVisivel() {
        cy.get(this.seletores().navBarDashboard).should("be.visible")
    }
}

export default ValidarSidebar