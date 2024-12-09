const logInPage = require("../pages/login");

describe('Log in e2e test',async function(){
    it('user login', async function(){
        await browser.url('https://the-internet.herokuapp.com/login');
        await logInPage.enterUsername('tomsmith');
        await logInPage.enterPassword('SuperSecretPassword!')
        await browser.pause(2000);
        await logInPage.ClickOnLogInBtn();
        await browser.pause(2000); 
    });


    it('user log in using local storage value', async ()=> {
        await browser.url("https://rahulshettyacademy.com/client");
     
        await browser.execute(()=> {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRkNzk2MGViM2M3MWJhNzkyMTBlNzUiLCJ1c2VyRW1haWwiOiJ3ZWJkcml2ZXJpb3Rlc3RAbWFpbGluYXRvci5jb20iLCJ1c2VyTW9iaWxlIjoxMTExMTExMTExLCJ1c2VyUm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzMzMjk2NDAxLCJleHAiOjE3NjQ4NTQwMDF9.RCU1kJMWktCsqj-RAMOJXfC30OLZmbJHnIidqNhzRDg";
            localStorage.setItem('token', token);
        });

        await browser.url("https://rahulshettyacademy.com/client");
        await browser.pause(5000);
    })

    it.only('dropdown option validation', async ()=> {

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
        const dropdown = $$("#dropdown-class-example>option");

       const options = await dropdown.map(async (option)=> {

            return await option.getText();
        });

        console.log(options);

        await expect(options).toEqual(['Select', 'Option1', 'Option2', 'Option3'])

    })
});


