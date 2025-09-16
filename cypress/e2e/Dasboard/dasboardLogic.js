/// <reference types="cypress" />

import DashboardPage from "../../support/pages/Dashboard/DashboardPage";

class DashboardLogic {  

    realizarLogin(){
        cy.login('admin', 'admin123');
    }

}
export default new DashboardLogic();