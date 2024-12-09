const testLogInPOM = require('../pages/testLogInPOM');
const logInData = require('../testData/TestLogInPOMData');



describe.skip("Log-In Page test", async function() {

    it.skip('Verify the title of the page', async function() {
        await testLogInPOM.goToLogInPage();
        await testLogInPOM.verifyTitleOfThePage();
        await browser.pause(1000);
    });

    it.skip('Verify the functionality', async function(){
        await testLogInPOM.verifyLogIn(logInData.email, logInData.password);
        await browser.pause(2000);
    });
}); 

describe.skip('Window handle', async function() {

    it.skip('Verify the child window handle', async ()=> {
       
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
        const blinkingText =  await $("header > a.blinkingText");
        const parentWindow = await browser.getWindowHandle(); // current window
        await blinkingText.click(); // action to open new Tab
        const windowHandles = await browser.getWindowHandles();
        const childWindow = windowHandles.find( handle  =>  handle !== parentWindow);

        if (childWindow) {
            await browser.switchToWindow(childWindow);
            console.log('Switched to child window');
        } else {
            console.log('No child window found');
        }

        if (childWindow) {
            console.log(await browser.getTitle()); 
        }

    });

    it.skip('Opening new window', async function() {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
        await browser.pause(2000);
        await browser.newWindow("http://www.google.com");
        await browser.pause(2000);
    });

});