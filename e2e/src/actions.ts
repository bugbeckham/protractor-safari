import { browser, element, by, protractor } from "protractor";
import { prototype } from 'stream';

describe('actions demo', () => {


    it('open a website', () => {

        browser.waitForAngularEnabled(false);

        browser.get("https://clarity.design/icons");

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

        element(by.id("search-icons-sticky")).sendKeys("user").then(()  =>
        {
            browser.sleep(5000)
        });

        //element(by.id("search-icons-sticky")).sendKeys("user")
        
        
        element.all(by.css(".icon-shape-name")).each(function(item) {
            item.getText().then(function(text){
                console.log(text);
            });

        });

        expect(element.all(by.css(".icon-shape-name")).count()).toEqual(3);

        element.all(by.css(".icon-shape-name")).get(0).click().then( ()  => {
            
        });


        element.all(by.css(".icon-shape-name")).last().click().then( ()  => {
            
        });


        browser.sleep(5000);


        //var user_names = element.all(by.css(".icon-shape-name"));

        // user_names.each( (item) => {
        //     if (item.getAttribute() == "user")


        // })




        
    });
        
});