// tu 

class LoginPage {

    get usernameField() {
        return cy.get("#username")
    }
    get passwordField() {
        return cy.get("#password")
    }
    get rememberMeCheckbox() {
        return cy.get("#rememberme")
    }

    getsubmitBtn() {
        return cy.get('button[name="login"]');
    }

    get errorMessage() {
        return cy.get("ul.woocommerce-error li")
    }

    fillForm(usernameValue, passwordValue) {
        this.usernameField.type(usernameValue);
        this.passwordField.type(passwordValue);
    }

    checkRememberMe() {
        this.rememberMeCheckbox.check();
    }

    unCheckRememberMe() {
        this.rememberMeCheckbox.uncheck();
    }   

    clickSubmitBtn() {
        this.getsubmitBtn().click();
    }
}
export default new LoginPage();
