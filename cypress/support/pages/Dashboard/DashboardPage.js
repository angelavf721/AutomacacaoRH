/// <reference types="cypress" />

class DashboardPage {
    cards(){
       return cy.get('.orangehrm-dashboard-widget-body');
    }

    TimeAtWorkCard(){
        return cy.get('.orangehrm-attendance-card [type="button"]');
    }

     TimeAtWorkCard(){
        return cy.get('.orangehrm-attendance-card [type="button"]');
    }


    MyActionsCard(){
        return cy.get('.orangehrm-dashboard-widget-name p').eq(1);
    }

    AssignLeave(){
        return cy.get('button[title="Assign Leave"]');
    }

    LeaveList(){
        return cy.get('button[title="Leave List"]');
    }   

    Timesheets(){
        return cy.get('button[title="Timesheets"]');
    }

    ApplyLeave(){
        return cy.get('button[title="Apply Leave"]');
    }

    MyLeave(){
        return cy.get('button[title="My Leave"]');
    }

    MyTimesheet(){
        return cy.get('button[title="My Timesheet"]');
    }
}
export default new DashboardPage();