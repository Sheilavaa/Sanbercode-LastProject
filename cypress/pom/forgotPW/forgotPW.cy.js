export default class forgotPassword {
    static verifyPasswordPage() {
        return cy.get('.oxd-form').contains('Reset Password');
      }

    static inputUsername() {
        return cy.get('.oxd-input');
    }

    static cancelUpdate() {
        return cy.get('.oxd-button--ghost');
    }

    static clickReset() {
        return cy.get('.oxd-button--secondary');
    }

    static successUpdate() {
        return cy.get('h6');
    }

    static fieldRequired() {
        return cy.get('.oxd-input-group > .oxd-text').contains('Required');
    }

    static LoginPage() {
        return cy.get('h5').contains('Login');
      }

}