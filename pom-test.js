const lambdaPage=require("../POM/lambda-page");

describe('pom testing', function () {
    var link = "https://lambdatest.github.io/sample-todo-app/";

    before(() => {
        lambdaPage.gotoWebsite(link);
    });

    after(async () => {
        await lambdaPage.driver.quit();
    });

    it('test library checkbox',async function () {
        await lambdaPage.clickCheckbox();
    });

    it('test library email field',async function(){
        await lambdaPage.enterEmail("abc@gmail.com");
    });
});