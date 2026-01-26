/// reference types="cypress" />

describe("Połączenie z API cypress", () => {
    it("wykonanie zapytania GET", () => {
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/posts/1"

        }).then((response) => {
            expect (response.status).to.eq(200)
            expect(response.body).to.have.property("id", 1);
            // expect (response.body).to.have.property("id", 1);
            // expect (response).to.have.property("headers");
            // expect (response).to.have.property("duration");
        })
    })

    it("[GET] pobieranie danych uzytkownika ", () => {
        cy.request("https://jsonplaceholder.cypress.io/users/1").then((response) => {
            expect (response.status).to.eq(200)
            expect(response.body).to.have.property("name", "Leanne Graham");

        })
    })          

    it("[POST] tworzenie nowego posta", () => {
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/posts",
            
        })
    })
})  