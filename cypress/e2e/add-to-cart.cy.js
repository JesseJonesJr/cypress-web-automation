// cart.cy.js
describe("Add Item to Cart Test", () => {
  it("should add a product to the cart and show the correct badge count", () => {
    // Step 1: Visit the site
    cy.visit("https://www.saucedemo.com/");

    // Step 2: Login with valid credentials
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    // Assertion: Confirm login worked
    cy.url().should("include", "/inventory.html");

    // Step 3: Add the first product to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Step 4: Check the cart badge shows "1"
    cy.get(".shopping_cart_badge").should("be.visible").and("have.text", "1");

    // Step 5: (Optional bonus) Navigate to cart and verify product is listed
    cy.get(".shopping_cart_link").click();
    cy.get(".cart_item").should("contain.text", "Sauce Labs Backpack");
  });
});
