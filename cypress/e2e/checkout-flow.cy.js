describe("Checkout Flow", () => {
  it("should complete a purchase successfully", () => {
    // Step 1: Visit login page
    cy.visit("https://www.saucedemo.com/");

    // Step 2: Log in with valid credentials
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    // Step 3: Add first product to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Step 4: Go to cart
    cy.get('.shopping_cart_link').click();

    // Step 5: Click checkout
    cy.get('[data-test="checkout"]').click();

    // Step 6: Fill in checkout form
    cy.get('[data-test="firstName"]').type("Jesse");
    cy.get('[data-test="lastName"]').type("QA");
    cy.get('[data-test="postalCode"]').type("00233");
    cy.get('[data-test="continue"]').click();

    // Step 7: Finish order
    cy.get('[data-test="finish"]').click();

    // Step 8: Assert success message
    cy.get('h2.complete-header')
  .should("be.visible")
  .should("contain.text", "Thank you for your order!");
  });
});
