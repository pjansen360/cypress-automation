// ***********************************************
// Custom commands for this project.
// ***********************************************

import LoginPage from '../pages/LoginPage';

/**
 * Logs in through the UI using the Page Object and asserts success.
 * Usage: cy.login('standard_user', 'secret_sauce')
 */
Cypress.Commands.add('login', (username, password) => {
  LoginPage.visit().login(username, password).assertLoggedIn();
});

/**
 * Thin wrapper around cy.request for GETting a single user from the
 * reqres.in test API. Centralizes the base URL and keeps spec files
 * free of hardcoded endpoints.
 * Usage: cy.apiGetUser(2).then((response) => { ... })
 */
Cypress.Commands.add('apiGetUser', (id) => {
  return cy.request({
    method: 'GET',
    url: `https://reqres.in/api/users/${id}`,
    failOnStatusCode: false,
  });
});
