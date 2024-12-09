import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'

describe('My Login application', () => {
    it.skip('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toBeDisplayedInViewport();
        await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining('You logged into a secure area!'))
    })

    it('alert handling', async function(){
        await browser.url('https://the-internet.herokuapp.com/javascript_alerts');
        browser.on('dialog', async (dialog) => {
            await expect(dialog.message()).toBe("I am a JS Confirm")
            console.log(dialog.message());
            await dialog.accept();
        })

        const alert = await $("//button[text()='Click for JS Confirm']");
        await alert.click();
        const color = await alert.getCSSProperty('color');
        console.log(color.value);
        await expect(color.value).toEqual('rgba(255,255,255,1)');

        const res = $("#result");
        await expect(res).toBePresent();
        await expect(res).toBeDisplayedInViewport();
        console.log(await res.getText());
        await expect(res).toHaveText("You clicked: Ok");
    
    })   
})

