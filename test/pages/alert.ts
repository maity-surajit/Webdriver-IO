class Alert{

   get result() {
        return $('#result');
    }

     getResultText() {
         this.result.getText();
    }

    getAlertButton(i: number) {
        return  $(`ul li:nth-child(${i}) button`)
    }

     clickOnAlertbutton(i: number) {
        this.getAlertButton(i).waitForDisplayed();
        this.getAlertButton(i).click();
    }
}

module.exports = new Alert();