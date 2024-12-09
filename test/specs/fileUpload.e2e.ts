
describe("file upload", async ()=> {
    it('Verify file upload on field', async ()=> {
        await browser.url("https://the-internet.herokuapp.com/upload");
        const filePath = "test/testData/image.png";
        const uploadFile = await browser.uploadFile(filePath);
        await $('#file-upload').setValue(uploadFile);
        await $('#file-submit').click();
        await browser.pause(3000);
    });

    it.only('Verify custome alert dialog', async function(){
        await browser.url('https://webdriver.io')
        await browser.on('dialog', async (dialog)=>{
            console.log(dialog.message());
            await dialog.dismiss();
        });

        await browser.execute(()=> alert('Hello Surajit!'));
    });
});