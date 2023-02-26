var baseClass= require('./base-class');

class LambdaPage extends baseClass{

    async gotoWebsite(url) {
        await this.baseUrl(url);
    }

    async clickCheckbox() {
        await this.driver.findElement(this.By.xpath("//input[@type='checkbox' and @name='li2']")).click();
        await this.driver.sleep(2000);
    }

    async enterEmail(email){
      await this.driver.findElement(this.By.id("sampletodotext")).sendKeys(email);
      await this.driver.sleep(2000);
    }
}
module.exports=new LambdaPage();