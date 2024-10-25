import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import adminPage from "../../../pom/Admin/Admin.cy";

Given('I visit the URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(10000);
});


When('I submit the Username', () => {
    adminPage.inputUsername().type('Admin');
});

When('I submit the Password', () => {
    adminPage.inputPassword().type('admin123');
});

Then('I click the button Login', () => {
    cy.intercept('GET', '**/action-summary').as('action');
    adminPage.buttonSubmit().click();
    cy.wait('@action');
});

Then('I verify login success', () => {
    adminPage.dashboardPage().should('have.text', 'Dashboard')
});

Then('I visit the Admin Page', () => {
    adminPage.clickAdmin().click();
});

When('I submit the Admin Username', () => {
    adminPage.inputAdminUsername().type('Admin123');
});

When('I submit the Invalid Admin Username', () => {
    adminPage.inputAdminUsername().type('Sheila');
});

When('I choose the Role', ()  => {
    adminPage.chooseRole().click();
});

Then('I see Roles', ()  => {
    adminPage.verifyRoleDropdown();
});

Then('I choose Admin', () => {
    adminPage.chooseAdmin().click();
});

Then('I input the Employee Name', () => {
    adminPage.inputName().type('Ranga Akunuri');
});

Then('I input the Invalid Employee Name', () => {
    adminPage.inputName().type('Sheila');
});

Then('I choose the Status', () => {
    adminPage.chooseStatus().click();
});

Then('I choose Disabled', () => {
    adminPage.chooseDisabled().click();
});

Then('I click Reset button', () => {
    adminPage.buttonReset().click();
})

Then('I click Search button', () => {
    adminPage.buttonSearch().click();
})

Then('I see the Records', () => {
    adminPage.recordFunds();
})

Then('I see no Records', () => {
    adminPage.noRecord();
})