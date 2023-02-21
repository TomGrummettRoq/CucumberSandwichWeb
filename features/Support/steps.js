Browser = require("../../browser");
const browser = new Browser();

const assert = require('assert');
const {Given, When, Then, Before, After} = require('@cucumber/cucumber');
const { time } = require("console");


Before(async function() {
    browser.browserBuild();
    await browser.browserNavigate('http://127.0.0.1:5500/index.html');
});

After(async function() {
    await browser.browserExit();
});

Given('the page loads correctly', function() {
    // Nothing to do as page already loaded
});

// **************************************************//
//Current Test Work in Progress
Given('the text input is {word}', async function() {
    const text = 'ham';
    const textField = await browser.getElement('ingredient');
    
    await textField.sendKeys(text);
});
// **************************************************//

When('the button is clicked', async function() {
    await browser.elementClick('sandwichButton');
});

When('the heading is clicked', async function() {
    await browser.elementClick('headingOne');
});

Then('the screen logs the input', async function() {
    const text = await browser.getElement('currentFillings');
    assert(text == 'bread,butter,ham');
});

Then('the heading should change colour', async function() {
    const titleColour = await browser.elementColor('headingOne');
    assert(titleColour == 'rgba(173, 255, 47, 1)');
});

Then('the title should be {string}', async function(title) {
    const actual = await browser.headless.getTitle();
    
    assert(actual == title);
});