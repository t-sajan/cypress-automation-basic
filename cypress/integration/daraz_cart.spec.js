/// <reference types="cypress" />

context("Add to Cart and Remove", () => {
  const username = Cypress.env("username");
  const password = Cypress.env("password");

  //Login Before running each test case
  beforeEach(() => {
    cy.visit("/");

    //Click Login Option
    cy.get("#anonLogin").should("be.visible").click();

    //Assertion to verify user is in login page
    cy.get(".login-title").should(
      "contain.text",
      "Welcome to Daraz! Please login."
    );

    //Entering Login Email and Password
    cy.get(".mod-input-loginName").type(username);
    cy.get(".mod-input-password").type(password, { log: false });
    cy.get(".mod-login-btn").should("be.visible").click();
    cy.wait(2000);
    //Assertion to verify user is logged in
    cy.get("#myAccountTrigger").should("have.text", "Jack's account");
  });

  //Logout session after each test
  afterEach(() => {
    cy.visit("/");

    //Click Logout from Profile Dropdown
    cy.get("#myAccountTrigger").should("have.text", "Jack's account").click();
    cy.get('a[href*="//member.daraz.com.np/user/logout"]').click({
      force: true,
    });
    //Assertion to verify that user is logged out
    cy.get("#anonLogin").should("be.visible");
  });

  it("4| Verify that User Can Add an item to the cart", () => {
    //Visit filtered list of items
    cy.visit(
      "/samsung-brand/?from=input&q=mobile&sort=pricedesc&price=100-100000&rating=5"
    );

    //View Product Page of the first item
    cy.get(".c1ZEkM ").first().should("be.visible").click();
    //Adding product to the cart
    cy.get(".pdp-button_theme_orange").should("be.visible").click();
    cy.get(".cart-item-title")
      .invoke("text")
      .then(($item) => {
        //storing product title for assertion
        const mobile = $item;
        cy.get(".next-btn-secondary").should("be.visible").click();

        //Assertion to verify added product is in the cart
        cy.get(".venture-NP").should("contain.text", mobile);

        //Removing the item from cart
        cy.get(".operations > .automation-btn-delete").first().click();
        cy.get("#dialog-footer-2 > .next-btn-primary")
          .should("have.text", "REMOVE")
          .click();

        //Assertion to verift the item is not available in the cart
        cy.get(".venture-NP").should("not.contain.text", mobile);
      });
  });
});
