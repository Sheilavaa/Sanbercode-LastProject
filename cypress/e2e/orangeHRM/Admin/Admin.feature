Feature: Admin Feature

    Scenario: Search Valid Data
      Given I visit the URL
      When I submit the Username
      And I submit the Password
      Then I click the button Login
      Then I verify login success
      And I visit the Admin Page
      When I submit the Admin Username
      When I choose the Role
      Then I see Roles
      Then I choose Admin
      And I input the Employee Name
      When I choose the Status
      Then I choose Disabled
      When I click Search button
      Then I see the Records

    Scenario: Search Invalid Data
      Given I visit the URL
      When I submit the Username
      And I submit the Password
      Then I click the button Login
      Then I verify login success
      And I visit the Admin Page
      When I submit the Invalid Admin Username
      Then I click Search button
      Then I see no Records

     Scenario: Reset Data
      Given I visit the URL
      When I submit the Username
      And I submit the Password
      Then I click the button Login
      Then I verify login success
      And I visit the Admin Page
      When I submit the Admin Username
      When I choose the Role
      Then I see Roles
      Then I choose Admin
      And I input the Employee Name
      When I choose the Status
      Then I choose Disabled
      When I click Reset button

