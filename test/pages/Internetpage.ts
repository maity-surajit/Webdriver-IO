class InternetPage {

    get eleCheckbox() {
        return $("a[href*='checkboxes']");
    }

    get eleDefaultSelected() {
        return $("input[type='checkbox']+br+input");
    }
}

module.exports = new InternetPage();