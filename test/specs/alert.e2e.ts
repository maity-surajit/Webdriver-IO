import { Key } from "webdriverio";

const alerts = require('../pages/alert');

describe('Alert checking', async ()=> {
    it.skip('Accept the first alert', async ()=> {
        await browser.url('https://the-internet.herokuapp.com/javascript_alerts');

        const ale = await $("ul li:nth-child(1) button")
        //const result = await browser.getAlertText();
        await ale.click();
        const res = await ale.getAlertText();
        console.log(res);
        await browser.pause(2000);

    })


    it.skip('check status', async () => {
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/')
        const option1 = await $("#checkBoxOption1");

        console.log("status: ", await option1.isEnabled())
        await expect(option1).toBeEnabled();

        console.log("wait for displayed: ", await $("#mousehover").waitForDisplayed());
    })

    it.skip("dynamic control text box status", async function(){

        await browser.url('https://the-internet.herokuapp.com/dynamic_controls');
        const textBox = await $("#input-example>input");
        await expect(textBox).toBeDisabled();
        console.log("Response <false>: ", await textBox.isEnabled()); // false
        const enableBtn = await $("//button[text()='Enable']");
        await enableBtn.click();
        await textBox.waitForEnabled();
        await expect(textBox).toBeEnabled();
        console.log("Response <true>: ", await textBox.isEnabled()); // true

    })

    it.skip('explicite wait example', async function(){
        await browser.url('https://the-internet.herokuapp.com/dynamic_controls');
        const textBox = await $("#input-example>input");
        const enableBtn = await $("//button[text()='Enable']");
        await enableBtn.click();
        await textBox.waitUntil(async function(){
            return await textBox.isEnabled() === true;
        }, {timeout: 6000, timeoutMsg: 'element not enabled'})
        await textBox.setValue("waitUntil example...");
        await browser.pause(3000);
    })

    it.skip('verify the title of the page', async function(){
        await browser.url('https://the-internet.herokuapp.com/dynamic_controls');
        await browser.waitUntil(async function(){
           return await browser.getTitle() === 'The Internet'
        }, {
            timeout:5000, 
            timeoutMsg: 'Title of the page not loaded'
        })

        await expect(browser).toHaveTitle('The Internet');
        
    });

    it.skip('Check key operation', async function(){
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        const ele = await $("#name");
        await ele.click()
       await browser.action('key')
            .down('s')
            .down('u')
            .down('r')
            .down('a')
            .up('j')
            .up('i')
            .up('t')
            .perform();

            console.log(await ele.getValue());
            await browser.pause(3000);
    })

    it.skip('Check key operation', async function(){
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        const ele = $("#alertbtn");
        await ele.click();
        const aText =  browser.getAlertText();
        console.log("Alert Text: ", aText);
    })

    it.skip('Key press', async function(){
        await browser.url('https://the-internet.herokuapp.com/key_presses');
        const target = await $("#target");
        await target.click();
        await browser.keys(Key.Enter);
        
        const result = await $("#result");
        expect(await result).toHaveText("You entered: ENTER");
        await browser.pause(3000);
    })

    it.skip('alert handling', async function(){
        await browser.url('https://the-internet.herokuapp.com/javascript_alerts');
        browser.on('dialog', async (dialog) => {
            await expect(dialog.message()).toBe("I am a JS Alert")
            await browser.pause(2000);
            await dialog.dismiss();
        })
        const alert = await $("//button[text()='Click for JS Alert']");
        await alert.click();
    
        })    

})
