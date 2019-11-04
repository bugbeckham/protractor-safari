import { browser, element, by, protractor } from "protractor";
import { prototype } from 'stream';

describe('actions demo', () => {


    it('open a website', () => {

        browser.waitForAngularEnabled(false);

        browser.get("http://www.qaclickacademy.com/practice.php");



        element(by.id("alertbtn")).click().then(() => {

        });

        

        browser.switchTo().alert().accept().then(() => {
            browser.sleep(5000);
        });
        

     


  
    });
        
});