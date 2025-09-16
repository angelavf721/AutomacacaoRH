import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DashboardLogic from "./dasboardLogic";


Given("que estou logado", () => {
    DashboardLogic.realizarLogin();
});