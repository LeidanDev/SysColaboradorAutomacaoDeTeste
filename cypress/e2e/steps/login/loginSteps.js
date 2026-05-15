import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../../pages/login/loginPage';

Given("que estou na página de login", () => {
    LoginPage.visitarPaginaLogin();
});

When("informo o usuário do perfil {string}", (perfil) => {
    cy.fixture("userData").then((userData) => {
        LoginPage.preencherUsuario(userData[perfil].usuario);
    });
});

When("informo a senha do perfil {string}", (perfil) => {
    cy.fixture("userData").then((userData) => {
        LoginPage.preencherSenha(userData[perfil].senha);
    });
});

When("não informo o usuário", () => {
});

When("não informo a senha", () => {
});

When("clico no botão login", () => {
    LoginPage.clicarBotaoLogin();
});

Then("devo ver a mensagem {string}", (mensagem) => {
    cy.contains(mensagem, { timeout: 10000 })
      .should("be.visible");
});