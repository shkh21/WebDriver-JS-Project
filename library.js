/*
const {Builder, By, until} = require('selenium-webdriver');

let driver = await new Builder()
    .forBrowser('chrome')
    .build();

await driver.get('https://library-app.firebaseapp.com');
await driver.findElement(By.xpath("//input[@id='ember26']"))
.sendKeys('abc@gmail.com');

await driver.quit();

*/
/*
// method 1
const {Builder, By, until} = require('selenium-webdriver');
(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://library-app.firebaseapp.com');
        await driver.manage().setTimeouts({implicit:5000});
        //await driver.sleep(2000);
        await driver.findElement(By.xpath("//input[@id='ember26']")).sendKeys('abc@gmail.com');
        await driver.sleep(2000);
    } finally {
      await driver.quit();
    }
  })();
  
 */
 /*
 // method 2
  const {Builder, By, until} = require('selenium-webdriver');
new Builder()
    .forBrowser('chrome')
    .build()
    .then(driver => {
      return driver.get('https://library-app.firebaseapp.com')
        .then(_ => driver.findElement(By.xpath("//input[@id='ember26']")).sendKeys('abc@gmail.com'))
        .then(_=>driver.sleep(4000))
       // .then(_ => driver.findElement(By.name('btnK')).click())
       // .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
        .then(_ => driver.quit());
    });
 */

/*   
const {Builder, By, until} = require('selenium-webdriver');

//promise.USE_PROMISE_MANAGER = false;

describe('Library App', function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterEach(async function() {
    await driver.quit();
  });

  it('emailTyping', async function() {
    await driver.get('https://library-app.firebaseapp.com');

    await driver.findElement(By.xpath("//input[@id='ember26']")).sendKeys('abc@gmail.com');
    await driver.sleep(2000);
  });
});

*/
