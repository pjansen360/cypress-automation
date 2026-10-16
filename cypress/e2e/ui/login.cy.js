import LoginPage from '../../pages/LoginPage';

describe('Login', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('logs in successfully with valid credentials', { tags: ['@smoke', '@regression'] }, () => {
    // Arrange / Act
    LoginPage.login('standard_user', 'secret_sauce');

    // Assert
    LoginPage.assertLoggedIn();
  });

  it('shows an error message with invalid credentials', { tags: '@regression' }, () => {
    // Arrange / Act
    LoginPage.login('standard_user', 'wrong_password');

    // Assert
    LoginPage.assertError('Username and password do not match');
  });

  it('shows an error message for a locked out user', { tags: '@regression' }, () => {
    // Arrange / Act
    LoginPage.login('locked_out_users', 'secret_sauce');

    // Assert
    LoginPage.assertError('Sorry, this user has been locked out');
  });

  it('logs in via the custom command', { tags: '@smoke' }, () => {
    cy.login('standard_user', 'secret_sauce');
  });
});
