import { browser, element, by } from "protractor";

describe('test suite 2', () => {

    it('open a website', () => {

        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys("5");
        element(by.model('second')).sendKeys("10").then( () => {
            element(by.id('gobutton')).click();
        });

        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
            console.log(text);
        });
    });
});