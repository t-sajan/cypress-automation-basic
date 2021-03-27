/// <reference types="cypress" />
context("Daraz", () => {
  // beforeEach(() => {
  //   cy.visit("/");
  // });
  /*
  it("Login to Daraz", () => {
    cy.visit("/");
    cy.get("#anonLogin").should("be.visible").click();
    cy.get(".login-title").contains("Welcome to Daraz! Please login.");
    cy.get(".mod-input-loginName").type("xyz@gmail.com");
    cy.get(".mod-input-password").type("xyz@123");
    cy.get(".mod-login-btn").should("be.visible").click();
    cy.wait(2000);
    cy.get("#myAccountTrigger").contains("Jack's account").click();
    // cy.click().expect(".top-popup-wrap-active");
    // cy.get('a[href="//member.daraz.com.np/user/logout"]').click();
  });
  */
  /*   it("Verify that User can search for an iteam using search functionality", () => {
    cy.visit("/");
    // Search for Mobile Using Search Bar
    cy.get("#q").click().clear().type("mobile");
    cy.get(".search-box__button--1oH7").should("be.visible").click();
    //Assertion for Mobile Search Text
    cy.get("#q").should("have.value", "mobile");
  });
 */
  /* it("Verify that User Can Apply Brand, Rating & Price Filter", () => {
    cy.visit("/catalog/?q=mobile");
    //Find and Apply Filter for Brand, Rating and Price
    cy.get(
      ":nth-child(2) > .c2uiAC > :nth-child(1) > .c1WzWT > :nth-child(1) > .ant-checkbox > .ant-checkbox-input"
    ).check();
    cy.get(".c2uiAC > :nth-child(2) > span").click();
    cy.get('[placeholder="Min"]').should("be.visible").click().type(1000);
    cy.get('[placeholder="Max"]').should("be.visible").click().type(20000);
    cy.get(".ant-btn").click();
    //Assertion for Multiple Filters
    cy.get(":nth-child(2) > .ant-tag-text").should(
      "have.text",
      "Brand: Samsung"
    );
    cy.get(":nth-child(3) > .ant-tag-text").should(
      "have.text",
      "Price: 1000-20000"
    );
    cy.get(":nth-child(4) > .ant-tag-text").should(
      "have.text",
      "Rating: 4 & Up"
    );
  });
 */
  /*   it("Verify that User Search Result by price low to high & Select a result item", () => {
    cy.visit("/catalog/?q=mobile");
    cy.get(".ant-select-selection-selected-value > div").click();
    cy.get(".ant-select-dropdown-menu-item").eq(1).click();
    cy.get(".ant-select-selection-selected-value > div").should(
      "have.text",
      "Price low to high"
    );
    //Click on first item
    cy.get(".c2prKC").first().click();

    //Assertion for item page
    cy.get(".pdp-button_theme_bluedaraz").should("have.text", "Buy Now");
  });
 */
  /*
  it("Search Oliz Store & Visit Store Page", () => {
    cy.get("#q").click().type("Oliz Store");
    cy.get(".search-box__button--1oH7").should("be.visible").click();
    cy.get("#q").should("have.value", "Oliz Store");
    cy.get(".c1ZEkM ").first().click();
    cy.get(".seller-name__detail-name").contains("Oliz Store").click();
    cy.url().should("include", "/shop/oliz-store");
  });
*/
  it("Search Oliz Store & Visit Store Page", () => {
    cy.visit("/");
    cy.get('[data-color="#e52f1b"] > .card-channels-link').click();
    cy.contains("Shop Now").first().click();
    cy.get(".delivery-option-item__promotion > .html-content")
      .should("be.visible")
      .contains("free shipping");
  });
});
