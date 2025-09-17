import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DashboardLogic from "./dasboardLogic";

Given("que estou logado", () => {
    DashboardLogic.realizarLogin();
});

When("acesso o dashboard", () => {
    DashboardLogic.acessarDashboard();
});

Then("visualizo os cards do dashboard", () => {
    DashboardLogic.quantidadeDeCardsEsperada();
});

When("clico no card Time at Work", () => {
    DashboardLogic.clicarTimeAtWorkCard();
});

Then("sou redirecionado para a pagina Time at Work", () => {
    DashboardLogic.acessaTimeAtWork();
});

When("clico no card My Actions", () => {
    DashboardLogic.clicarNoCardMyActions();
});


