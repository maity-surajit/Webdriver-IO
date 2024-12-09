class Login {
    get username(){
        return $('#username');
    }
    get password() {
        return $('#password');
    }

    get loginBtn() {
        return $('button');
    }

    async enterUsername(text: string) {
        await this.username.setValue(text);
    }

    async enterPassword(text: string) {
        await this.password.setValue(text);
    }

   async ClickOnLogInBtn() {
       await this.loginBtn.click();
    }

}

module.exports = new Login();