/// <reference types="cypress" />

context("Add to Cart and Remove", () => {
  const username = Cypress.env("username");
  const password = Cypress.env("password");
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

  it("4| Verify that User Can Add an item to the cart", () => {
    cy.visit("/catalog/?q=mobile");
    cy.wait(2000);
  });
});
