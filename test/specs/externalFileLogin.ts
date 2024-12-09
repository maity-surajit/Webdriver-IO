/*


const loginData = require('../testData/loginData')

describe('External file data fetch', async ()=> {
    it.skip('Login test', async ()=> {
        await browser.url('https://the-internet.herokuapp.com/login');
        const userN = await $('#username');
        await userN.setValue(loginData.username);
        const pass = await $('#password');
        await pass.setValue(loginData.password);
        await browser.pause(3000);
    })

    it('Move To element', async ()=> {
        //await browser.url("https://www.amazon.com/");
        await browser.url('/');
        await browser.fullscreenWindow();
        await browser.pause(1000);
        // const navSignIn = $("#nav-link-accountList-nav-line-1");
        // await navSignIn.moveTo();
        // await browser.pause(3000);
        // console.log(await navSignIn.getAttribute('class'));
        // const search = $("#twotabsearchtextbox");
        // console.log(await search.getComputedLabel()); // basically print the aria-label.
        // console.log(await search.getComputedRole()); 
        // console.log(await search.getLocation());
        // await navSignIn.moveTo()
    })
})


*/