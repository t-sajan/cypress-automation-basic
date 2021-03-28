// <reference types="cypress" />
context("Daraz Stubbing", () => {
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

  /* 
    Test Scenario: 
    - Ask Question for the particular product in Daraz and verify the question(Use API Stub)
    */
  it("Verify that user can ask question for a product", () => {
    //Stubbing Request for Asking Question
    cy.intercept("POST", "https://my.daraz.com.np/pdp/item/addItemSkuQA", {
      fixture: "askquestion.json",
    });

    //Stubbing Request response for asked Question
    cy.intercept("GET", "/getQnAList", { fixture: "question.json" });

    //Visiting a Product Page
    cy.visit(
      "/products/testing-product-ignore-dont-buy-i104626173-s1025920215.html"
    );

    //Entering Question for the product
    cy.get(".qna-ask-box > .next-input > input").click();
    cy.get("textarea").type("Hello this is a Test... -_-");

    //Assertion to verify & submit question
    cy.get(".next-btn").should("be.visible").click();
    cy.get(".qna-content").should("have.text", "Hello this is a Test... -_-");
  });
});
