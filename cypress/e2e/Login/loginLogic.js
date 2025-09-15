/// <reference types="cypress" />
import loginPage from "../../support/pages/login/loginPage";

class LoginLogic {

    acessarSistema() {  
        loginPage.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    preencherCampoUsuario(usuario) {
        loginPage.campoUsuario().type(usuario);
    }

    preencherCampoSenha(senha) {
        loginPage.campoSenha().type(senha);
    }   

    clicarBotaoLogin() {
        loginPage.botaoLogin().click();
    }

    validarAcessoSistema() {
        loginPage.dashboard().should("be.visible").and("have.text", "Dashboard");
    }

    validarMensagemErro() {
        loginPage.mensagemErro().should("be.visible").and("have.text", "Invalid credentials");
    }

    clicarLinkEsqueciSenha() {
        loginPage.linkEsqueciSenha().click();
    }

    validarPaginaRecuperacaoSenha() {
        loginPage.paginaRecuperacaoSenha().should("be.visible").and("have.text", "Reset Password");
    }

    mensagemEnvioEmail() {
        loginPage.mensagemEnvioEmail().should("be.visible").and("have.text", "Reset Password link sent successfully");
    }

}

export default new LoginLogic();