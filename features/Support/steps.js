const assert = require('assert');
const {Given, When, Then} = require('@cucumber/cucumber');

Given('the page loads correctly', function() {
    
});

Given('the text input is {string}', async function() {
});

When('the title is clicked', function() {
    const element = this.getElement('headingOne');
        element.elementClick();
});

When('the \'sign up\' button is clicked', function(elementClick) {
     const button = this.getElement('alert');
        button.elementClick();
    }
);

Then('the page title should be present', function() {

});

Then('the title should change colour', function() {
    const title = this.getElement(id);
        return title.getCssValue('color');
});

Then('the screen should push a window alert', function() {

});

Then('the screen logs the input', function() {

});

