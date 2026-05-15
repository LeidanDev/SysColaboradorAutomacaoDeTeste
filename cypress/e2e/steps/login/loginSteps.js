import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../pages/login/loginPage';

Given("que estou na página de login", () => {
    loginPage.visitarPaginaLogin();
});

When("informo o usuário do perfil {string}", (perfil) => {
    cy.fixture("userData").then((userData) => {
        loginPage.preencherUsuario(userData[perfil].usuario);
    });
});

When("informo a senha do perfil {string}", (perfil) => {
    cy.fixture("userData").then((userData) => {
        loginPage.preencherSenha(userData[perfil].senha);
    });
});

When("não informo o usuário", () => {
});

When("não informo a senha", () => {
});

When("clico no botão login", () => {
    loginPage.clicarBotaoLogin();
});

Then("devo ver a mensagem {string}", (mensagem) => {
    cy.contains(mensagem, { timeout: 10000 })
      .should("be.visible");
});