class Keypress{
    
    
    get headerThree() {
        return $('h3');
    }

    get search() {return $('#target')}
    get result() {return $('#result')}

    get resultLabelText() {
        return this.result.getText();
    }

    async enterSearch(text: string) {
        await this.search.setValue(text);
    }
}

module.exports = new Keypress();