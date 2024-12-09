
import { expect } from "expect-webdriverio";

const home = require("../pages/homepage");

describe('Interaction with the web element', async function(){

    it.skip("Verify the spam text", async function(){
        await browser.setWindowSize(1920,1080);
        await browser.url('https://www.amazon.com/');

        const text = $('.a-size-base.a-color-base');
        const visibleText = await text.getText();
        console.log(visibleText);

        const cssColor = await text.getCSSProperty('color');
        console.log(cssColor.value);

        await expect(text).toExist();
        await expect(text).toBeDisplayedInViewport({wait: 5000});
        await expect(text).toHaveText("You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.")
        await expect(cssColor.value).toEqual('rgba(15,17,17,1)');
        await browser.pause(2000);
    })
    
    it.skip('Verify the search function', async function(){
        await browser.setWindowSize(1920,1080);
        await browser.url('https://www.amazon.com/');
        
        const search = $('#twotabsearchtextbox');
        await search.setValue('Apple Mac Book');
        const searchBtn = $('#nav-search-submit-button');
        await searchBtn.click();

        const searchResult = await $("//h2[text()='Results']");
        const paginationBtn = await $("span[aria-label*='pagination']>ul>li:first-of-type");

        await expect(searchResult).toExist();
        await expect(searchResult).toBeDisplayedInViewport({wait: 5000});
        await expect(searchResult).toHaveText('Results');

        await browser.execute(()=> {
            window.scrollTo(0,5500);
        })

        await expect(paginationBtn).toExist();
        await expect(paginationBtn).toBeDisplayedInViewport({wait: 5000});
        await expect(paginationBtn).toBeClickable();
    });

   it.skip('freshwork heading and footer test', async function() {

        await browser.setWindowSize(1920,1080);
        await browser.url('https://www.freshworks.com/');
        const header = $('#fwhomepagehero>div>div>div>div>h1');
        console.log(await header.getText())

        await expect(header).toExist();
        await expect(header).toBeDisplayedInViewport({wait:3000});
        await expect(header).toHaveText("Same easy software. New AI superpowers.");

        const subHeader = $("div[class='sc-ace17a57-0 dMCehp']>p[class*='sc-5159831f-0 sc-9be75ebe-2 tSOdx eTAQnL']");
        console.log(await subHeader.getText())

        await expect(subHeader).toExist();
        await expect(subHeader).toBeDisplayedInViewport({wait:3000});
        await expect(subHeader).toHaveText("Customer service, IT, and CRM software that’s powerful yet easy to use. Now supercharged with generative AI.");
        

        // await browser.execute(()=>{
        //     window.scrollTo(0,4500);
        // })

        const column = await $$('.sc-b323b31-0.mRShS');

        await column[0].scrollIntoView();

        console.log('Output of: ' + column);
        column.forEach( async (element) => {
            console.log(await element.getText());
            await expect(element).toExist();
            await expect(element).toBeDisplayedInViewport({wait:3000});
            await expect(element).toBeClickable();
        })
    })

    it("Verify LogIn functionality of The Internet page", async function(){
        await browser.url('https://the-internet.herokuapp.com/login');
        await expect(browser).toHaveTitle("The Internet"); 

        //await $('#username').waitForDisplayed({timeout:5000, timeoutMsg: 'username field not found', withinViewport: true});
        //await $('#password').waitForDisplayed({timeout:5000, timeoutMsg:'Password field not found', withinViewport: true});
        //await $('#username').waitForClickable({timeout:5000, timeoutMsg:'ele not clickable'})


        const username = await $('#username');
        await expect(username).toExist();
        await expect(username).toBeDisplayedInViewport();
        await expect(username).toBeClickable();

        const password = await $('#password');

        await expect(password).toExist();
        await expect(password).toBeDisplayedInViewport();
        await expect(password).toBeClickable();

        await username.setValue('tomsmith');
        await expect(username).toHaveValue('tomsmith');

        await password.setValue('SuperSecretPassword!');
        await expect(password).toHaveValue('SuperSecretPassword!');

        //await browser.pause(2000);

        await username.clearValue();
        await expect(username).toHaveValue('');
        await password.clearValue();
        await expect(password).toHaveValue('');

        //await browser.pause(2000);
    })

    

    it.skip("Automation demo", async function(){

        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        
        const label = await $$("label[class='text-white']");          

        console.log(await "length of the elements " + label.length)

        label.forEach(async function(ele){
            console.log(await ele.getAttribute('class'));
        });

        const checkBox = $("input[type='checkbox']");
        await expect(checkBox).toBePresent();
        await expect(checkBox).toBeDisplayedInViewport();
        await expect(checkBox).not.toBeChecked();
        await checkBox.click();
        await expect(checkBox).not.toBeDisabled()
        await expect(checkBox).toBeChecked();
       

        await browser.pause(2000);
    });
});


/* Css-Selector parent to child: 
footer[class*='sc-6293d692-0']>div>div:nth-child(2)>nav>div:first-of-type>ul>li:first-of-type>a

X-Path parent to child:
//footer[@class='sc-6293d692-0 sc-808d9567-0 dBdSZt fgHQEL']/div/div[2]/nav/div[2]//preceding-sibling::div/div
//footer[@class='sc-6293d692-0 sc-808d9567-0 dBdSZt fgHQEL']/div/div[2]/nav/div[2]//following-sibling::div/div

x-path child to parent:
//span[@id='global-menu-item-0']/parent::li/parent::ul/parent::div/parent::div/div/ul/li[2]

e.g: /parent::tagname
*/