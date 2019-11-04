import { browser, element, by, protractor } from "protractor";
import { prototype } from 'stream';

describe('actions demo', () => {


    it('open a website', () => {

        browser.waitForAngularEnabled(false);      
        
        browser.get("http://www.qaclickacademy.com/practice.php");

        browser.manage().window().maximize();
        

        browser.switchTo().frame(element(by.id('courses-iframe')));

        element(by.css('a[href*="sign_in"]')).click();

              
    });
        
});

