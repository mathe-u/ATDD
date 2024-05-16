// Automated test:
// Feature: User login

// Scenario: Successful login
//     Given the user is on the login page
//     When the user enters "user@example.com" into the email field
//     And the user enters "password" into the password field
//     And the user clicks the login button
//     Then the user should be logged in to the application

// Automated test JavaScript:
const { Given, When, Then } = require('cucumber');
const { page } = require('./pageObjects/loginPage');

Given('the user is on the login page', async () => {
  await page.goToLogin();
});

When('the user enters a valid email and password', async () => {
  await page.enterEmail('user@example.com');
  await page.enterPassword('password');
});

When('the user clicks the login button', async () => {
  await page.clickLoginButton();
});

Then('the user should be logged in to the application', async () => {
  await page.verifyLoggedIn();
});


