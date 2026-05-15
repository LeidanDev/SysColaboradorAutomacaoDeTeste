import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../pages/login/loginPage';
import logoutPage from '../../pages/dashboard/logoutPage';


When("clico em sair", () => {
    logoutPage.clicarBotaoSair()
});
