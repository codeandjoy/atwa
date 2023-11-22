const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

(async function test(){
    let search = "Automation testing with Selenium and JS";

    let driver = await new Builder().forBrowser("chrome").build();

    // CLICK
    await driver.get("http://google.com");
    await driver.findElement(By.name("q")).sendKeys(search);
    let button = await driver.findElement(By.css('div.vOY7J'));
    await button.click();
    console.log('Clicked');
    //

    // INPUT
    await driver.get("http://google.com");
    await driver.findElement(By.name("q")).sendKeys(search, Key.RETURN);

    let title = await driver.getTitle();
    console.log('Title is:', title);
    //

    // CONDITION
    await driver.get("http://google.com");
    await driver.wait(driver => driver.getTitle().then(title => title === 'Google'));
    console.log('Condition is true');
    //

    await driver.quit();
})();

