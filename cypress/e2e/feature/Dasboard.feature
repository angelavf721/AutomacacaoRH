Feature: Valida Dashboard

  Background:
    Given que estou logado
    
    Scenario: Valida cardas do Dashboard
      When acesso o dashboard
      Then visualizo os cards do dashboard


    Scenario: Valida acesso a pagina Time at Work
        When acesso o dashboard
        And clico no card Time at Work
        Then sou redirecionado para a pagina Time at Work

    Scenario: Valida acesso a pagina My Actions
        When acesso o dashboard
        And clico no card My Actions
        Then sou redirecionado para a pagina My Actions

    Scenario: Valida acesso a pagina Assing Leave
        When acesso o dashboard
        And clico no card Assing Leave 
        Then sou redirecionado para a pagina Assing Leave
       
    Scenario: Valida acesso a pagina Leave List
        When acesso o dashboard
        And clico no card Leave List
        Then sou redirecionado para a pagina Leave List
        
    Scenario: Valida acesso a pagina Timesheets
        When acesso o dashboard
        And clico no card Timesheets
        Then sou redirecionado para a pagina Timesheets

    Scenario: Valida acesso a pagina Apply Leave
        When acesso o dashboard
        And clico no card Buzz
        Then sou redirecionado para a Apply Leave

    Scenario: Valida acesso a pagina My Leave
        When acesso o dashboard
        And clico no card My Leave
        Then sou redirecionado para a pagina My Leave

    Scenario: Valida acesso a pagina My Timesheets 
        When acesso o dashboard
        And clico no card My Timesheets
        Then sou redirecionado para a pagina My Timesheets

 