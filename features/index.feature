Feature: Website Functionality

    Scenario: Testing the page title displays properly
        Given the page loads correctly
        Then the title should be "Cucumber Sandwich"

    Scenario: Clicking the Heading One changes its colour
        Given the page loads correctly
        When the heading is clicked
        Then the heading should change colour

    Scenario: Using the 'add ingredient' form correctly logs input
        Given the page loads correctly
        And the text input is "ham"
        When the button is clicked
        Then the screen logs the input

    # Scenario: Clicking the 'Join the Movement' button pops up an alert
    #     Given the page loads correctly
    #     When the button is clicked
    #     Then the screen should push a window alert

    # Scenario: 