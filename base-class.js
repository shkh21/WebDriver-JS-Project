const {Builder}=require('selenium-webdriver');
var driver=new Builder().forBrowser('chrome').build();
const{By,Key,until}=require('selenium-webdriver');

class BaseClass{
    constructor(){
        this.driver=driver;
        this.By=By;
        this.Key=Key;
        this.until=until;
    }

    async baseUrl(baseUrl)
    {
        await driver.get(baseUrl);
    }

}

module.exports=BaseClass;