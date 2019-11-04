import { browser, element, by } from "protractor";
//import { By } from "selenium-webdriver"

describe('test suite 2', () => {

    it('open a website', () => {

        browser.get('http://juliemr.github.io/protractor-demo/');
        
        element(by.model('first')).sendKeys("5");
        element(by.model('second')).sendKeys("10").then( () => {
            element(by.id('gobutton')).click();
        });

        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("15");
    

    });
});