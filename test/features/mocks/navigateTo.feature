@mocks
@navigate
Feature: Navigate to the mocks tab

  Developers should be able to open the mocks page

  Scenario: Navigate to the mocks page
    Given I open the mocks page
    Then the mocks tab is active