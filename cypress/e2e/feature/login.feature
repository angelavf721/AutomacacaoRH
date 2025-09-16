Feature: Login

  Background:
    Given que estou na pagina de login

  Scenario: Realiza login com sucesso 
    When preencho o campo usuario 
    And preencho o campo senha
    And clico no botao login
    Then devo acessar o sistema

  Scenario: Realiza login com falha
    When Insiro usuario invalido
    And Insiro senha invalida   
    And clico no botao login
    Then devo ver a mensagem de erro

  Scenario: Recupera senha
    When clico no link esqueci minha senha
    And preencho o campo usuario 
    And clico no botao recuperar senha
    Then devo visualizar a mensagem de aviso de email enviado