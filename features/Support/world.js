const cucumber = require("@cucumber/cucumber");

class CustomWorld {
    constructor() {
        
    }
}


// Creates the Cucumber Test Environment
cucumber.setWorldConstructor(CustomWorld);