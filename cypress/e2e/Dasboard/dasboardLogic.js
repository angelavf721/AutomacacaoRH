/// <reference types="cypress" />
import DashboardPage from "../../support/pages/Dashboard/DashboardPage";
class DashboardLogic {  

    realizarLogin(){
        cy.login('admin', 'admin123');
    }

    acessarDashboard(){
        cy.url().should('include', '/dashboard/index');
    }

    acessaTimeAtWork(){
        cy.url().should('include', '/attendance/punchIn');
    }

     acessaMyActions(){
        cy.url().should('include', '/attendance/punchIn');
    }

    quantidadeDeCardsEsperada(){
        DashboardPage.cards().should('be.visible').and('have.length', 7);
    }

    clicarTimeAtWorkCard(){
         DashboardPage.TimeAtWorkCard().click();
    }

    clicarNoCardMyActions(){
        DashboardPage.MyActionsCard().click();
    }

    cliccarAssignLeave(){
        DashboardPage.AssignLeave().click();
    }
    
    clicarLeaveList(){
        DashboardPage.LeaveList().click();
    }

    clicarTimesheets(){
        DashboardPage.Timesheets().click();
    }

    clicarApplyLeave(){
        DashboardPage.ApplyLeave().click();
    }

    clicarMyLeave(){
        DashboardPage.MyLeave().click();
    }

    clicarMyTimesheet(){
        DashboardPage.MyTimesheet().click();
    }

}
export default new DashboardLogic();

