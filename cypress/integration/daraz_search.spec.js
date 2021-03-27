/// <reference types="cypress" />
context("Daraz Search & Filters", () => {
  /* 
    Test Scenario: 
    - Search the item(Mobile) in the Dark Search Box.
  */
  it("3| Verify that User can search for mobile using search functionality", () => {
    cy.visit("/");

    // Search for Mobile Using Search Bar
    cy.get("#q").click().clear().type("mobile");
    cy.get(".search-box__button--1oH7").should("be.visible").click();

    //Assertion for Mobile Search Text
    cy.get("#q").should("have.value", "mobile");
  });

  /* 
    Test Scenario: 
    - Apply multiple filter and add item to the cart (Brand, Price, Rating).
    Scenario Covered: 
    - Apply multiple filter
  */
  it("4| Verify that User Can Apply Brand, Rating & Price Filter", () => {
    cy.visit("/catalog/?q=mobile");
    cy.wait(2000);

    //Apply Filter for Brand  Rating and Price
    cy.get(
      ":nth-child(2) > .c2uiAC > :nth-child(1) > .c1WzWT > :nth-child(1) > .ant-checkbox > .ant-checkbox-input"
    ).check();
    cy.get(".c2uiAC > :nth-child(2) > span").click();
    cy.get('[placeholder="Min"]').should("be.visible").click().type("10000");
    cy.get('[placeholder="Max"]').should("be.visible").click().type("20000");
    cy.get(".ant-btn").click();

    //Assertion for Brand, Ratinge & Price Filters Applied
    cy.get(":nth-child(2) > .ant-tag-text").should(
      "have.text",
      "Brand: Samsung"
    );
    cy.get(".cM5DKB > :nth-child(3)").should("have.text", "Price: 10000-20000");
    cy.get(":nth-child(4) > .ant-tag-text").should(
      "have.text",
      "Rating: 4 & Up"
    );
  });

  /* 
    Test Scenario: 
    - Apply sort by filter from Low to High and select on the mobile search listing.
  */
  it("5| Verify that User Search Result by price low to high & Select a result item", () => {
    //Navigate to Moble Search Results
    cy.visit("/catalog/?q=mobile");

    //Apply Filter for Price Low to High
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

  /* 
    Test Scenario: 
    - Visit the seller homepage (Oliz Homepage) in Daraz.
    - Search for Oliz Store in the Daraz Search Box.
    - Verify the base URL after user visit

  */
  it("7, 8, 9| Verify that user can search for Oliz Store & Visit Store Page", () => {
    //Search for Oliz Store
    cy.get("#q").click().type("Oliz Store");
    cy.get(".search-box__button--1oH7").should("be.visible").click();
    cy.get("#q").should("have.value", "Oliz Store");

    //Click on First item in results
    cy.get(".c1ZEkM ").first().click();
    cy.get(".seller-name__detail-name").contains("Oliz Store").click();

    //Assertion to Verify Store Page
    cy.url().should("include", "/shop/oliz-store");
  });

  /* 
    Test Scenario: 
    - Click for Free delivery -> Search for any item
    - Click Shop Now -> Verify Free Delivery in Product page
  */
  it("10, 11| Verify that user can navigate to free delivery items and click shop now", () => {
    cy.visit("/");

    //Click on Free Delivery Option from Home Page
    cy.get('[data-color="#e52f1b"] > .card-channels-link').click();
    //Click Shop Now on First Item Listing
    cy.contains("Shop Now").first().click();

    //Assertion to verify Free Delivery on Selected item
    cy.get(".delivery-option-item__promotion > .html-content")
      .should("be.visible")
      .contains("free shipping");
  });
});
