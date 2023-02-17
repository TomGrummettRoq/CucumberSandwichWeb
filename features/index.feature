Feature: Website Functionality

    Scenario: Testing the page title displays properly
        Given the page loads correctly
        Then the page title should be present

    Scenario: Clicking the Title changes its colour
        Given the page loads correctly
        When the title is clicked
        Then the title should change colour

    Scenario: Using the 'add ingredient' form correctly logs input
        Given the text input is "Ham"
        When the button is clicked
        Then the screen logs the input

    Scenario: Clicking the 'Join the Movement' button pops up an alert
        Given the page loads correctly
        When the button is clicked
        Then the screen should push a window alert

    Scenario: 