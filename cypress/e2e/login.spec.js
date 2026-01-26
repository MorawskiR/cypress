/// <reference types="cypress" />

import LoginPage from "../support/pages/LoginPage";

describe("login form tests", () => {
    beforeEach("Open home page", () => {
        cy.setViewport("mobile");
        cy.visit("/my-account");
    })
    it("poprawne logowanie na stronie -  login test", () => {

        LoginPage.fillForm("admin", "password");
        LoginPage.checkRememberMe();    
        LoginPage.rememberMeCheckbox.should("be.checked");
        LoginPage.unCheckRememberMe();
        LoginPage.clickSubmitBtn();
        LoginPage.errorMessage.should("be.visible");
    })
})