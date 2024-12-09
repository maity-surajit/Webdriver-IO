const logInPageData = require('../testData/TestLogInPOMData');

class TestLogInPOM {

    get emailField(){
        return $("#userEmail");
    }

    get passwordField(){
        return $("#userPassword");
    }
    
    get logInBtn() {
        return $("#login");
    }

    get signOutBtn() {
        return $("//button[text()=' Sign Out ']");
    }

    async goToLogInPage() {
        await browser.url("https://rahulshettyacademy.com/client");
        await browser.waitUntil(async function() {
            return (await browser.getTitle()) === logInPageData.title;
        })
    }

    async verifyTitleOfThePage(){
        await expect(browser).toHaveTitle(logInPageData.title);
    }

    async verifyLogIn(email: string, password: string) {
        await this.emailField.setValue(email); // webdriveriotest@mailinator.com
        await this.passwordField.setValue(password); // Abc@12345
        await this.logInBtn.click();
        await expect(this.signOutBtn).toBeDisplayedInViewport({wait: 10000});
    }

}

module.exports = new TestLogInPOM();