describe('Login – invalid credentials', () => {
  it('shows an error message', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('invalid_user');
    cy.get('[data-test="password"]').type('wrong_password');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Username and password do not match'); // partial match is fine
  });
});
