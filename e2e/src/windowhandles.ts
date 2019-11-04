import { browser, element, by, protractor } from "protractor";
import { prototype } from 'stream';

describe('actions demo', () => {


    it('open a website', () => {

        browser.waitForAngularEnabled(false);

        browser.get("https://www.madewithangular.com/");

        // browser.actions().mouseMove(element(by.model("locationQuery"))).sendKeys("London").perform();

        // browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        // browser.actions().sendKeys(protractor.Key.ENTER).perform().then(() => {
        //     browser.sleep(10000);
        // })
        

        //browser.actions().mouseMove(element(by.name("q"))).sendKeys("g").perform();
        // browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        // browser.actions().sendKeys(protractor.Key.ENTER).perform().then( ()  => {

        //     browser.sleep(10000);
        // });


        

        // element.all(by.css("a > h3")).each(function(item) {
            
        //     item.getText().then((text) => {
        //         console.log(text);
        //     });
        //     item.click();
            
        // });

        element.all(by.css("a > h3")).get(0).click().then(() => {

        });

        browser.getAllWindowHandles().then((handles) => {
            browser.switchTo().window(handles[1]);
            expect(browser.getTitle()).toEqual("Forward").then(() => {
            });
            browser.switchTo().window(handles[0]);
            expect(browser.getTitle()).toEqual("Home").then(() => {
            });
        });

        

        browser.sleep(10000);

        


        // element.all(by.css("a > h3")).first().click().then(() => {
        //     browser.sleep(5000);
        // });
       
    });
        
});