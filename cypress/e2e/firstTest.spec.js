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


    it("dokladniejjsze lokalizowanie elementow na stronie", () => {
        cy.contains("span", "Shop Now");
        cy.visit("/contact");
        cy.contains(`div[data-id="3f3d1eda"]`,"Zaznacz opcję").find;
        //
        
    })

    it("klikniecie w dany element na stronie", () => {

        cy.visit("/contact");
        cy.get("#wpforms-submit-10").click();

        cy.contains("a.menu-link","About").click({force:true});
    })

    it("Wpisywanie wartosci w pole tekstowe", () => {
        cy.visit("/contact");
        cy.get("#wpforms-10-field_0").type("Jan Kowalski", {delay:100});
        cy.get("#wpforms-10-field_3").type("454544545");
        
        cy.get("#wpforms-10-field_1").type("example@gmail.com{enter}");
        //czywszczenie pola
        cy.get("#wpforms-10-field_0").clear();
})
        it("przechowywanie elemntow", () => {
            cy.visit("/contact");
            const inputName = cy.get("#wpforms-10-field_0");
          //  inputName.type("Jan Kowalski");

          //then()
            cy.get("#wpforms-10-field_0").then( (inputName) => {
            const placeholder = inputName.attr("placeholder");
            cy.log(placeholder);
            //asercja w srodku then
            expect(placeholder).to.equal("Full name");


         })

         //drugi alias
         cy.get("#wpforms-10-field_0").as("nameInput");
         cy.get("@nameInput").should("have.attr", "placeholder", "Full name");
    })

   it("pobieranie tekstu z elementow", () => {
    cy.visit("/about");


    //przez metode invoke
    cy.get("h1.elementor-heading-title").invoke("text").then((text) =>{
        cy.log(text);
        expect(text).to.contain("WHO ARE WE?");
    })

    //pobioeranie tekstu bez invoku ale z then 

    cy.get("h1.elementor-heading-title").then(($element) => {
        const text = $element.text();
        cy.log(text);
        expect(text).to.contain("WHO ARE WE?"); 
   }); 

// tekst do aliasu
    cy.get("h1.elementor-heading-title").invoke("text").as("title");
    cy.get("@title").then((text) => {
        expect(text).to.contain("WHO ARE WE?");
    })
    })

// checkboxy
    it.only("Obsluga check box i pol oopcji", () =>{
            cy.visit("/contact");
        cy.get("#wpforms-10-field_5_2").check();
        cy.get("#wpforms-10-field_5_2").should("be.checked");   

        cy.get("#wpforms-10-field_5_1").uncheck().should("not.be.checked");


        //radio buttony

        cy.get("#wpforms-10-field_6_3").check();
        cy.get("#wpforms-10-field_6_3").should("be.checked");   
    })
})