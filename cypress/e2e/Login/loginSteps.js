import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import loginLogic from "../../e2e/Login/loginLogic";

Given("que estou na pagina de login", () => {
    loginLogic.acessarSistema();
});

When("preencho o campo usuario", () => {
    loginLogic.preencherCampoUsuario("Admin");
});

When("preencho o campo senha", () => {
    loginLogic.preencherCampoSenha("admin123");
});     
When("clico no botao login", () => {
    loginLogic.clicarBotaoLogin();
});

Then("devo acessar o sistema", () => {
    loginLogic.validarAcessoSistema();
});

When("Insiro usuario invalido", () => {
    loginLogic.preencherCampoUsuario("Adminx");
});

When("Insiro senha invalida", () => {
    loginLogic.preencherCampoSenha("admin123x");
}); 
Then("devo ver a mensagem de erro", () => {
    loginLogic.validarMensagemErro();
});

When("clico no link esqueci minha senha", () => {
    loginLogic.clicarLinkEsqueciSenha();
});

When("clico no botao recuperar senha", () => {
    loginLogic.clicarBotaoLogin();
});

Then("devo visualizar a mensagem de aviso de email enviado", () => {
    loginLogic.mensagemEnvioEmail();
});