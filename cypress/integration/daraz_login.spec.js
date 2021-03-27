/// <reference types="cypress" />

context("Login to Daraz w/ Email and Password", () => {
  it("1, 2| Verify that user can login to Daraz", () => {
    //Go to Daraz Website
    cy.visit("/");

    //Click Login Option
    cy.get("#anonLogin").should("be.visible").click();
    //Assertion to verify user is in login page
    cy.get(".login-title").should(
      "contain.text",
      "Welcome to Daraz! Please login."
    );

    //Entering Login Email and Password
    cy.get(".mod-input-loginName").type("xyz@gmail.com");
    cy.get(".mod-input-password").type("xyz@123");
    cy.get(".mod-login-btn").should("be.visible").click();
    cy.wait(2000);
    //Assertion to verify user is logged in
    cy.get("#myAccountTrigger").should("have.text", "Jack's account").click();

    //Logout
    cy.get('a[href*="//member.daraz.com.np/user/logout"]').click({
      force: true,
    });
    cy.get("#anonLogin").should("be.visible");
  });
});
