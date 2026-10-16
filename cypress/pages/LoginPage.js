// Page Object for the SauceDemo login page.
// Keeps selectors and page actions in one place, separate from the test logic.
class LoginPage {
  elements = {
    usernameInput: () => cy.get('#user-name'),
    passwordInput: () => cy.get('#password'),
    loginButton: () => cy.get('#login-button'),
    errorMessage: () => cy.get('[data-test="error"]'),
    pageTitle: () => cy.get('.title'),
  };

  visit() {
    cy.visit('https://www.saucedemo.com/');
    return this;
  }

  login(username, password) {
    this.elements.usernameInput().clear().type(username);
    this.elements.passwordInput().clear().type(password, { log: false });
    this.elements.loginButton().click();
    return this;
  }

  assertLoggedIn() {
    cy.url().should('include', '/inventory');
    this.elements.pageTitle().should('contain', 'Products');
    return this;
  }

  assertError(message) {
    this.elements.errorMessage().should('be.visible').and('contain', message);
    return this;
  }
}

export default new LoginPage();
