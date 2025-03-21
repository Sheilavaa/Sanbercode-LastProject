export default class loginPage {
    static verifyLoginPage() {
      return cy.get('h5').contains('Login');
    }
    static inputUsername(){
        return cy.get('[name="username"]');
    }
    static inputPassword(){
        return cy.get('[name="password"]');
    }
    static buttonSubmit(){
        return cy.get('[type="submit"]');
    }
    static invalidCredentials(){
        return cy.get('[class="orangehrm-login-error"]');
    }
    static fieldRequired(){
        return cy.get('.oxd-input-group > .oxd-text').contains('Required')
    };
    static dashboardPage(){
        return cy.get('h6').contains('Dashboard');
    }
}