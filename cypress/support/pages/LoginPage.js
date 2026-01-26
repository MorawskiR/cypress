// tu 

class LoginPage {

    get usernameField() {
        return cy("#username")
    }
    get passwordField() {
        return cy("#password")
    }
    get rememberMeCheckbox() {
        return cy("#rememberme")
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

    clickSubmitBtn() {
        this.getsubmitBtn().click();
    }
}
export default new LoginPage();
