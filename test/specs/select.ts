/*
const homePage = require('../pages/homepage')

describe('Automation select example', async function() {
    
    it('select the options', async function() {

            await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
            const dropdown = await $('#dropdown-class-example');
            await dropdown.selectByIndex(2);
            await browser.pause(2000);
            await dropdown.selectByVisibleText('Option3');
            await browser.pause(2000);
            await dropdown.selectByAttribute('value','option1');
            await browser.pause(2000);

            const select = await $$('#dropdown-class-example>option');
            console.log(await select.length)
            select.forEach(async (ele) => {
                console.log(await ele.getText());
            });
    });


    it('Heading text', async function() {

        await browser.url('https://www.freshworks.com/');
        const headerText = await homePage.pageHeader.getText();
        console.log(headerText);

        console.log(await homePage.subHeading.getText());
    })
});

*/


describe("window handle", async ()=> {

    it('parent to child window handle', async ()=> {

        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
       
        const blinkingEle: ChainablePromiseElement = await $("a[href*='qasummit']");
        const currentWin: string = await browser.getWindowHandle();
        await blinkingEle.click();
        const Windows: string[] = await browser.getWindowHandles();
        const childWin: string | undefined = Windows.find(window => window !== currentWin);

        if(childWin) {
            await browser.switchToWindow(childWin);
            console.log('Switch to child window: ', await browser.getTitle());
        }

        const title: string = await browser.getTitle()

        await browser.waitUntil(async ()=> {
            return title === 'RSTEK Events';
        },{
            timeout:5000,
            timeoutMsg: 'element not found expection'
        });

        await expect(browser).toHaveUrl('https://qasummit.org/');
        await expect(browser).toHaveTitle("RSTEK Events");
        await browser.switchToWindow(currentWin);
        console.log("Switching to the parent Window: ", await browser.getTitle());
    });
});