/// <reference types="cypress" />

import LoginPage from "../support/pages/LoginPage";

describe("login form tests", () => {
    beforeEach("Open home page", () => {
        cy.visit("/my-account");
    })
    it("poprawne logowanie na stronie -  login test", () => {

        LoginPage.fillForm("admin", "password");
    })
})