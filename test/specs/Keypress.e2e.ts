
import { Key } from "webdriverio";

const keyPress = require('../pages/keypress');

describe('keypress example > ', async function(){

    it.skip('MoveTo element example', async function(){
        await browser.url('https://the-internet.herokuapp.com/key_presses');
        await keyPress.headerThree.moveTo();       
        await keyPress.search.click();
        await browser.keys(Key.Tab);
        await expect(keyPress.result).toHaveText("You entered: TAB")
    })

    it.skip('KeyPress test', async function(){
        await browser.setWindowSize(1900, 1000);
        await browser.url('https://the-internet.herokuapp.com/key_presses');
        await expect(keyPress.search).toExist();
        await expect(keyPress.search).toBeDisplayedInViewport({wait:3000});
        await expect(keyPress.search).toBeClickable();

        await keyPress.enterSearch("a");
        console.log(await keyPress.resultLabelText);

        await expect(keyPress.result).toBePresent();
        await expect(keyPress.result).toBeDisplayedInViewport({wait:3000});
        await expect(keyPress.result).toHaveText("You entered: A")
        
    })


    it.skip('drag and drop', async function(){
        await browser.url('https://jqueryui.com/droppable/');
        await browser.switchFrame($('iframe.demo-frame'));
        const ele =  await $("div[id='draggable']");
        const target = await $("div[id='droppable']");
        await ele.dragAndDrop(target);
        await browser.pause(2000);
    })


    it.skip('Verify scroll feature and help footer check', async function(){
        await browser.setWindowSize(1920,1080);
        await browser.url('https://webdriver.io/docs/api');
        const help = await $("a[href*='/community/support']:last-of-type");
        await help.scrollIntoView();

        await expect(help).toExist();
        await expect(help).toBeDisplayedInViewport({wait:3000});
        await expect(help).toBeClickable();
        await expect(help).toHaveText('Help');
        await expect(help).not.toContain(' ');
    })

    it.skip('key copy and paste example', async function(){
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        const username = await $('#username');
        const password = await $('#password');
        const text = await $("label[class='text-info']>span:last-of-type");
        const userText = await text.getText();
        await username.setValue(userText);
        await browser.keys([Key.Ctrl, 'a']);
        await browser.keys([Key.Ctrl, 'c']);
        await browser.pause(2000);
        await username.clearValue();
        await browser.pause(2000);
        await username.click();
        await browser.keys([Key.Ctrl, 'v']);
        await browser.pause(5000);
       
    });

    it('veirfy the dropdown selection', async function(){
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        const dropdown = await $("#dropdown-class-example");
        const options = await $$("#dropdown-class-example>option");
        await dropdown.selectByVisibleText('Option2');
        await expect(dropdown).toBePresent();
        await expect(dropdown).toBeDisplayedInViewport({wait:3000});
        
        const optionTexts = await Promise.all(
            await options.map(async (option) => {
                return await option.getText();
            })
        );

        await expect(optionTexts).toEqual(['Select','Option1','Option2','Option3']);

    })
        
});

