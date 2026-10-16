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
 it('Usuario Invalido', () => {
   //arrange
   cy.visit('https://www.saucedemo.com/')
   cy.screenshot('Login Page')

   //Act
   cy.get('#user-name').type('standard_user1')
   cy.get('#password').type('secret_sauce')
   cy.get('#login-button').click()

   //Assert
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    cy.screenshot('Usuario ou senha invalido')

 });

});


