Feature: Forgot Password Feature

    Scenario: Verify Reset Password Page
      Given I visit the URL
      And I should see the Reset Password Page

    Scenario: Reset Password with Valid Credentials
      Given I visit the URL
      And I should see the Reset Password Page
      When I submit the Username
      Then I click the button Reset Password
      Then I verify Reset Password Success

    Scenario: Reset Password with Another Valid Credentials
      Given I visit the URL
      And I should see the Reset Password Page
      When I submit the second Username
      Then I click the button Reset Password
      Then I verify Reset Password Success

    Scenario: Reset Password with empty field
      Given I visit the URL
      And I should see the Reset Password Page
      Then I click the button Reset Password
      Then I cannot Reset Password

    Scenario: Cancel Reset Old Password
      Given I visit the URL
      And I should see the Reset Password Page
      When I submit the second Username
      Then I click the button Cancel
      Then I should go back to the Login Page