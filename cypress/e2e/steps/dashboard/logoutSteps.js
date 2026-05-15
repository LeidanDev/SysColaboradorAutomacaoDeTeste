import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../../pages/login/loginPage';
import LogoutPage from '../../pages/dashboard/LogoutPage';


When("clico em sair", () => {
    LogoutPage.clicarBotaoSair()
});
