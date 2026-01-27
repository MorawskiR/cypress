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

        //lokalizator po atrybucie 
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
    it("Obsluga check box i pol oopcji", () =>{
            cy.visit("/contact");
        cy.get("#wpforms-10-field_5_2").check();
        cy.get("#wpforms-10-field_5_2").should("be.checked");   

        cy.get("#wpforms-10-field_5_1").uncheck().should("not.be.checked");


        //radio buttony

        cy.get("#wpforms-10-field_6_3").check();
        cy.get("#wpforms-10-field_6_3").should("be.checked");   
    })

    it("ustawianie daty w datapicker", () => {
        //cy.visit("");   

        cy.get("#date").as("datepicker").scrollIntoView({duration:1000});
        cy.get("#date").type("2024-12-31");
        cy.get("@datepicker").should("have.value", "2024-12-31");
        
    })


    it("praca z select i najechanie elementow", () => { 
        cy.visit("/contact");
        cy.get("#wpforms-10-field_4").as("select").select("Polska");
        cy.get("@select").select("Irlandia").should("have.value", "Irlandia");

        cy.get("#menu-item-1341 > a").trigger("mouseover");
        cy.get("#menu-item-1341 > a").click({force:true});
    })
        

    it("obsluga alerow", () => {
        cy.visit("/about");
        cy.contains("span","PURCHASE A POSTCARD").click();
        cy.on("window: confirm",  (text) =>{
            expect(text).to.equal("Przycisk został kliknięty!")
            return true;
        })
    })

    it("wgrywanie pliku", () => {
        cy.visit("/contact");
        cy.get("#upload-file").attachFile("132398239833018778.png")

        //opcjonalne sprawdzenie czy plik zostal wgrany
        cy.get("#upload-file").then( ($input) => {
         const files = $input[0].files;
         expect(files[0].name).to.equal("132398239833018778.png");
        })
    })

    it("asercje", () => {
        //assercje domyslne - lancuchowe
        //weryfikuj tekst
        cy.get("h2.elementor-heading-title").first().should("contain.text", "Multipurpose Store");


        //element jest widoczny
        cy.visit("/about");
        cy.get("span.elementor-button-text").should("be.visible");
        cy.visit("/contact");
        cy.get("#wpforms-10-field_0").type("Jan Kowalski").should("have.value", "Jan Kowalski");

        //czy cos na stronie istnieje 
        cy.get(".error").should("not.exist");

        //Asercje jawne
        cy.get("h1.elementor-heading-title").then( ($title) => {
            expect($title.text()).to.contain("CONTACT US")
        })

        cy.contains("a", "About").click();
        cy.url().should("contain", "/about");

        // weryfikacja atrybutow na elementach
        cy.contains("a", "About").should("have.attr", "href","href=https://test.testowanie-oprogramowania.pl/about/");


    })

    it("zadanie domowe 1", () => {
        //Przejdź na stronę https://test.testowanie-oprogramowania.pl/shop/
        cy.visit("/shop");

        // Zweryfikuj czy zostałeś dobrze przekierowany
        cy.get('.woocommerce-products-header__title.page-title')
            .should('contain.text', 'Shop')
        // Kliknij w pierwszy produkt na liście domyslnie klika pierwszy element z kolekcji
        cy.get('div.astra-shop-thumbnail-wrap').first().click()
        //Kliknij w przycisk “Add to cart”
        cy.get('button[name="add-to-cart"]').first().click()
        //Zweryfikuj czy pojawił się komunikat o tym, że produkt został dodany do koszyka
        cy.contains("Postcard V1” has been added to your cart.");
        //   Przejdź na stronę koszyka (Cart)
        cy.visit("/cart");
        //Zweryfikuj czy dodany produkt jest widoczny
        cy.get('td.product-name').should('contain.text', 'Postcard V1');
        cy.get(".cart-empty woocommerce-info").should("not.exist");
        // cy.visit("/cart");
        // cy.contains("Your cart is currently empty");
        })

 it.only("zadanie domowe 2", () => {
  cy.visit("/shop");

        //Dodaj dowolny produkt do koszyka
        cy.get("h2.woocommerce-loop-product__title").eq(1).click();
        cy.get('button[name="add-to-cart"]').first().click();
        // Przejdź na stronę koszyka
        cy.visit("/cart");
        // Kliknij w przycisk “Proceed to checkout”
        cy.get(".checkout-button").click();


        // Wypełnij wszystkie wymagane pola zakupowe
        cy.get("#billing_first_name").type("Jan");
        cy.get("#billing_last_name").type("Kowalski");
        cy.get("#billing_address_1").type("Ul. Testowa 12");
        cy.get("#billing_city").type("Turyn");
        cy.get("#billing_postcode").type("45-675");
        cy.get("#billing_phone").type("445643333");
        cy.get("#billing_email").type("test@wp.pl");
        
        // Kliknij w przycisk “Place Order”
        cy.get("#place_order").click();

        // Zweryfikuj czy zamówienie produktu zostało złożone
        cy.contains("Invalid payment method.");
    })

    })