import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ValidarSidebar from '../../pages/dashboard/validarSidebarPage';
import LoginPage from '../../pages/login/loginPage';

Given("que consegui fazer login com perfil {string}", (perfil) => {
    cy.fixture("userData").then((userData) => {
        LoginPage.visitarPaginaLogin()
        LoginPage.preencherUsuario(userData[perfil].usuario)
        LoginPage.preencherSenha(userData[perfil].senha)
        LoginPage.clicarBotaoLogin()
    })
})

When ("clico no menu hamburguer", () => {
    ValidarSidebar.validarBotaoSidebar();
})


Then("a sidebar continua sendo exibida", () => {
    ValidarSidebar.validarSeSidebarEstaVisivel()
});