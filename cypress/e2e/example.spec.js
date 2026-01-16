/// <reference types="cypress" />

describe("first test", () => {

    it("rodzaje lokalizatorow", () => {
        cy.visit("/contact");
    })
 // lokalizator po tagu

    cy.get("h2");
 

})