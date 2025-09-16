/// <reference types="cypress" />

class LoginPage {

  visit() {
    cy.visit('/auth/login');
  }

  campoUsuario() {
    return cy.get('[name="username"]');
  }

  campoSenha() {
    return cy.get('[name="password"]');
  }

  botaoLogin() {
    return cy.get('[type="submit"]');
  }
  
  dashboard() {
    return cy.get(".oxd-topbar-header-title span");
  }
  
  mensagemErro() {
    return cy.get(".oxd-alert-content > p");
  }
  
  linkEsqueciSenha() {
    return cy.get(".orangehrm-login-forgot p");
  }
  
  paginaRecuperacaoSenha() {
    return cy.get("form h6");
  }
  
  mensagemEnvioEmail() {
    return cy.get(".orangehrm-card-container h6");
  }
  
}
export default new LoginPage();
