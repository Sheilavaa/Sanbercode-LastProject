import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../pom/forgotPW/forgotPW.cy";
import forgotPassword from "../../../pom/forgotPW/forgotPW.cy";

Given('I visit the URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
    cy.wait(10000);
});

When('I should see the Reset Password Page', () => {
    forgotPassword.verifyPasswordPage().should('have.text', 'Reset Password');
})

When('I submit the Username', () => {
    forgotPassword.inputUsername().type('Admin');
})

When('I submit the second Username', () => {
    forgotPassword.inputUsername().type('Sheila');
})

Then('I click the button Reset Password', () => {
    forgotPassword.clickReset().click();
})

Then('I click the button Cancel', () => {
    forgotPassword.cancelUpdate().click();
})

Then('I verify Reset Password Success', () => {
    forgotPassword.successUpdate().should('have.text', 'Reset Password link sent successfully');
})

Then('I cannot Reset Password', () => {
    forgotPassword.fieldRequired().should('have.text', 'Required');
});

Then('I should go back to the Login Page', () => {
    loginPage.LoginPage().should('have.text','Login');
});