import { browser, element, by } from "protractor";

describe('test suite 2', () => {


    function Calc(a, b, operator):void {

        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);

        element.all(by.tagName("option")).each(function(item) {

            item.getAttribute("value").then(function(value){
                console.log(value);

                if (value == operator)
                 item.click();
            });
        });

        element(by.id('gobutton')).click();
    };

    it('open a website', () => {

        browser.get('http://juliemr.github.io/protractor-demo/');
        
        Calc(2, 3,"ADDITION");       
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("5");

        Calc(9,8, "MULTIPLICATION")
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("72");
    });
        
});