/// <reference types="cypress" />

describe("first test", () => {
before("Open home page", () => {

    cy.visit("");
})

    it("rodzaje lokalizatorow", () => {
        cy.visit("/contact");

        cy.get("h2");
        cy.get("p");
        //lokalizator po ID\
        cy.get("#wpforms-10-field_0")

        //lokalizato po klasie
        cy.get(".elementor-icon-box-description");

        //lokalizator po atrybucie S
        cy.get(`input[name="wpforms[fields][1]"]`);

         //lokalizator po atrybutach
        cy.get(`[name="wpforms[fields][1]"][type="email"]`);

        //lokalizowanie po tekscie
        cy.contains("Talk To Us");
    })


    it.only("dokladniejjsze lokalizowanie elementow na stronie", () => {
        cy.contains("span", "Shop Now");
 cy.visit("/contact");
        cy.contains(`div[data-id="3f3d1eda"]`,"Zaznacz opcję").find;
        //
        
    })

    it.only("klikniecie w dany element na stronie", () => {
    })

})