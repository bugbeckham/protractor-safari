import { browser, element, by } from "protractor";

describe('test suite 2', () => {

    function Add(a, b){
        return a+b;
    };

    console.log(Add(2,3));
    console.log(Add(4,5));

    it('open a website', () => {

        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys("5");
        element(by.model('second')).sendKeys("10").then( () => {
            element(by.id('gobutton')).click();
        });

        element(by.model('first')).sendKeys("15");
        element(by.model('second')).sendKeys("100").then( () => {
            element(by.id('gobutton')).click();
        });

        element.all(by.repeater("result in memory")).count().then( (n) => {
            console.log(n);
        });


        element.all(by.repeater("result in memory")).each(function(item){
            item.element(by.css("td:nth-child(3)")).getText().then(function(text){
                    console.log(text);
               });
        
        });
    });
});