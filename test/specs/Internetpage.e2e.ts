

const internetPage = require('../pages/Internetpage');

describe('checkbox checking', async function() {
    
    it('check checkbox is selected', async function() {
        await browser.setWindowSize(1920,1080);
        await browser.url('https://the-internet.herokuapp.com/');
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/');

        await internetPage.eleCheckbox.click();
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/checkboxes");
        await expect(internetPage.eleDefaultSelected).toExist();
        await expect(internetPage.eleDefaultSelected).toBeDisplayedInViewport({wait:3000});
        await expect(internetPage.eleDefaultSelected).toBeSelected();

    })
})

