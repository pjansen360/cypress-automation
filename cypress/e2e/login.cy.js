describe('Login', () => {
 it('Realizar Login com Sucesso', () => {
    //Arrange
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')

    cy.get('#password').type('secret_sauce')
    cy.screenshot('Login Page')
    //Act
    cy.get('#login-button').click()
    //Assert
    cy.url().should('include', '/inventory')
    cy.get('.title').should('contain', 'Products')
    cy.screenshot('Usuario Logado')
 });
})