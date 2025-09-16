/// <reference types="cypress" />
import LoginPage from "../../support/pages/login/loginPage";
class LoginLogic {

    acessarSistema() {  
        LoginPage.visit();
    }

    preencherCampoUsuario(usuario) {
        LoginPage.campoUsuario().type(usuario);
    }

    preencherCampoSenha(senha) {
        LoginPage.campoSenha().type(senha);
    }   

    clicarBotaoLogin() {
        LoginPage.botaoLogin().click();
    }

    validarAcessoSistema() {
        LoginPage.dashboard().should("be.visible").and("have.text", "Dashboard");
    }

    validarMensagemErro() {
        LoginPage.mensagemErro().should("be.visible").and("have.text", "Invalid credentials");
    }

    clicarLinkEsqueciSenha() {
        LoginPage.linkEsqueciSenha().click();
    }

    validarPaginaRecuperacaoSenha() {
        LoginPage.paginaRecuperacaoSenha().should("be.visible").and("have.text", "Reset Password");
    }

    mensagemEnvioEmail() {
        LoginPage.mensagemEnvioEmail().should("be.visible").and("have.text", "Reset Password link sent successfully");
    }

}

export default new LoginLogic();