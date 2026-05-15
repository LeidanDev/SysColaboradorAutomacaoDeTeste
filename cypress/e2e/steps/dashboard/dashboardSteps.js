import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import validarSidebar from '../../pages/dashboard/validarSidebarPage';
import loginPage from '../../pages/login/loginPage';

Given("que consegui fazer login com perfil {string}", (perfil) => {
    cy.fixture("userData").then((userData) => {
        loginPage.visitarPaginaLogin()
        loginPage.preencherUsuario(userData[perfil].usuario)
        loginPage.preencherSenha(userData[perfil].senha)
        loginPage.clicarBotaoLogin()
    })
})

When ("clico no menu hamburguer", () => {
    validarSidebar.validarBotaoSidebar();
})


Then("a sidebar continua sendo exibida", () => {
    validarSidebar.validarSeSidebarEstaVisivel()
});