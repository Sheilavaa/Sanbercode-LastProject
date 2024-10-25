export default class adminPage {
    static inputUsername(){
        return cy.get('[name="username"]');
      }
    static inputPassword(){
        return cy.get('[name="password"]');
      }
    static buttonSubmit(){
        return cy.get('[type="submit"]');
      }
    static dashboardPage(){
        return cy.get('h6').contains('Dashboard');
    }
      
    static clickAdmin(){
        return cy.get(':nth-child(1) > .oxd-main-menu-item');
    }

    static inputAdminUsername() {
        return cy.get(':nth-child(2) > .oxd-input');
    } 

    static chooseRole() {
        return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text');
    }

    static verifyRoleDropdown() {
        return cy.get('.oxd-select-dropdown');
    }

    static chooseAdmin() {
        return cy.get('.oxd-select-dropdown > :nth-child(2)');
    }

    static inputName() {
        return cy.get('.oxd-autocomplete-text-input > input');
    }

    static chooseStatus() {
        return cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text');
    }

    static chooseDisabled(){
        return cy.get('.oxd-select-dropdown > :nth-child(3)');
    }

    static buttonReset() {
        return cy.get('.oxd-button--ghost');
    }

    static buttonSearch() {
        return cy.get('.oxd-form-actions > .oxd-button--secondary');
    }

    static noRecord() {
        return cy.get('.orangehrm-horizontal-padding > .oxd-text').contains('No Records Found');
    }

    static recordFunds() {
        return cy.get('.orangehrm-horizontal-padding > .oxd-text').contains('Records Found');
    }


}