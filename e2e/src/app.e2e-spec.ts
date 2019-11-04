import { browser } from "protractor"



describe('test suite 1', () => {

  it('test1', () => {
    browser.waitForAngularEnabled(false)
    browser.get("https://www.google.com/")
    browser.waitForAngularEnabled(true)
    // browser.sleep(5000)
    browser.get('http://juliemr.github.io/protractor-demo/')
  })





})