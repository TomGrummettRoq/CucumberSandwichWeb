Browser = require("../../browser");
const browser = new Browser();

const assert = require('assert');
const {Given, When, Then, Before, After} = require('@cucumber/cucumber');


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

When('the title is clicked', function() {

});

Then('the title should change colour', function() {

});

Then('the title should be {string}', async function(title) {
    const actual = await browser.headless.getTitle();
    
    assert(actual == title);
});