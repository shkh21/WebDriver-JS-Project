const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
var should=require("chai").should();
var expect=require("chai").expect();

let driver;

async function example() {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://lambdatest.github.io/sample-todo-app/");
    await driver.findElement(By.id("sampletodotext")).sendKeys("Hello World", Key.RETURN);

    //assert
    let actualText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
        return value;
    }); // then function will return the value from getText() and store it in actualText variable

    //assert.strictEqual(actualText, "Hello World");
    actualText.should.equal("Hello World");
    await driver.quit();
}
example() // it will call the function while running the test



