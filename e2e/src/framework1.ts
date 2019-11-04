import { browser, element, by, protractor } from "protractor";
import { prototype } from 'stream';

describe('actions demo', () => {


    it('open a website', () => {

        browser.get("https://qaclickacademy.github.io/protocommerce/");

        element(by.name("name")).sendKeys("yuvi");
        element(by.css('input[class="form-control"]')).sendKeys("password");
        element(by.name("email")).sendKeys("yuvi@test.com");
        element(by.css('input[type="checkbox"]')).click();
        element(by.cssContainingText('[id="exampleFormControlSelect1"] option', "Female")).click();
        element.all(by.css('div[class*=form-check-inline]')).get(1).click();

        element(by.buttonText("Submit")).click().then(() => {
            expect(element(by.css('div[class*=alert-dismissible]')).getText()).toEqual("Success! The Form has been submitted successfully!.")

        });

        browser.sleep(5000);








 
    });
        
});


