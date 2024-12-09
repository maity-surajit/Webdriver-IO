

const blazemeter = require("../pages/blazemeter");

describe('Blazemeter test', async function () {
    
    it.skip('header element get', async function(){

        await browser.url('https://www.blazemeter.com/');
        await browser.setWindowSize(1920,1080);

        await browser.execute(() => {
            window.scrollTo(0,8000)
        });

        await browser.pause(1000);

        const nthEle = await blazemeter.footerElement(3);
        console.log(await nthEle.getText());

        await expect(nthEle).toBeDisplayedInViewport({wait:5000});
        await expect(nthEle).toBeClickable();
        await expect(nthEle).toHaveText("Functional");
    });

    it('START TESTING NOW is displayed or not?', async function() {
        await browser.url('https://www.blazemeter.com/');
        await browser.setWindowSize(1920,1080);

       const startTestingBtn =  await blazemeter.startTestingNowBtn;
      // console.log("Displayed element is: ", await blazemeter.startTestingNowBtn.getText());

    
       await expect(startTestingBtn).toExist();
       await expect(startTestingBtn).toBeDisplayedInViewport({wait:3000});
       await expect(startTestingBtn).toBeClickable();
       await expect(startTestingBtn).toHaveAttribute('href', expect.stringContaining('/signup'));
       await expect(startTestingBtn).toHaveText("START TESTING NOW");

    })
});

