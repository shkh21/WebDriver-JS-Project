const {Builder, By, until} = require('selenium-webdriver');


describe('Library App Part 2', function() {
  
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://library-app.firebaseapp.com');
    await driver.manage().setTimeouts({implicit:5000});
  });

  after(async function() {
    await driver.quit();
  });
  


  it('Part 2 email Typing', async function() {
    
    //await driver.get('https://library-app.firebaseapp.com');
    
    await driver.findElement(By.xpath("//input[@id='ember26']")).sendKeys('abc@gmail.com');
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//button[contains(text(),'Request invitation')]")).click();
    var enableElement=await driver.findElement(By.xpath("//div[contains(text(),'Thank you! We saved a fake email address with the ')]"));
    await driver.wait(until.elementIsEnabled(enableElement), 4000);
   
    
  })//.timeout(5000);

 
  it('Part 2 About tab', async function(){
    await driver.findElement(By.xpath("//a[@id='ember19']")).click();
    await driver.findElement(By.xpath("//a[contains(text(),'Ember Octane tutorial')]")).click();
  });

});



