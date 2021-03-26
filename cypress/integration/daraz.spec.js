/// <reference types="cypress" />
context("Daraz", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Login to Daraz", () => {
    cy.visit("/");
    cy.get("#anonLogin").should("be.visible").click();
    cy.get(".login-title").contains("Welcome to Daraz! Please login.");
    cy.get(".mod-input-loginName").type("xyz@gmail.com");
    cy.get(".mod-input-password").type("xyz@123");
    cy.get(".mod-login-btn").should("be.visible").click();
    cy.get("#myAccountTrigger").contains("Jack's account").click();
  });

  it("Search the item(Mobile) in the Dark Search Box", () => {
    cy.get("#q").click().type("mobile");
    cy.get(".search-box__button--1oH7").should("be.visible").click();
    cy.get("#q").should("have.value", "mobile");
    cy.get(
      "#root > div > div.ant-row.c10-Cg > div.ant-col-24 > div > div.ant-col-4.ant-col-pull-20.c2cfh3 > div > div:nth-child(2) > div.c2uiAC > div > div.c1WzWT.ckylKX > label:nth-child(1) > span.ant-checkbox > input"
    ).check();
    cy.get(".ant-tag-text").contains("Brand");
  });

  it("Search Oliz Store", () => {
    cy.get("#q").click().type("Oliz Store");
    cy.get(".search-box__button--1oH7").should("be.visible").click();
    cy.get("#q").should("have.value", "Oliz Store");
    cy.get(".c1ZEkM ").first().click();
    cy.get(".seller-name__detail-name").contains("Oliz Store").click();
    cy.url().should("include", "/shop/oliz-store");
  });
});
