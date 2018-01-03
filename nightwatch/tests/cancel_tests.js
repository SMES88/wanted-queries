const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')
const functions = require('../test_data/test_functions')

module.exports = {
    before: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
'I can navigate between pages': browser => {
    browser
    .click(selectors.tabs.cancelTab)
    .pause(100)
    .click(selectors.tabs.modifyTab)
    .pause(100)
    .click(selectors.tabs.enterTab)
    //click each tab and wait for response to verifynavigation capabilities
},
    'I can enter valid data into all of the fields on the Cancel Wanted page and have it generate a text blob correctly': browser => {
        browser
            .click(selectors.tabs.cancelTab)
            .pause(100)
            //navigate to Cancel Wanted page and wait for application to respond
        functions.enterValue(selectors.fields.wid, data.cancelTab.goodData.input.wid, browser)
        functions.enterValue(selectors.fields.rfc, data.cancelTab.goodData.input.rfc, browser)
        functions.enterValue(selectors.fields.doc, data.cancelTab.goodData.input.doc, browser)
        //Enter good data from cancel tab section into all fields
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            //Click submit and wait for response
        browser.expect.element(selectors.messages.header).text.to.contain(data.cancelTab.goodData.output.header)
        browser.expect.element(selectors.messages.queryTitle).text.to.contain(data.cancelTab.goodData.output.queryTitle)
        browser.expect.element(selectors.messages.queryOutput).text.to.equal(data.cancelTab.goodData.output.queryOutput)
        //Verify the messages and text blob are correct
    },
    'I can enter valid data into the Warrant ID and Date fields and leave the Reason for cancelation blank and receive and error message': browser => {
        browser
            .click(selectors.buttons.clear)
            .pause(100)
            //clear previously entered data and results
        functions.enterValue(selectors.fields.wid, data.cancelTab.badData.input.wid, browser)
        functions.enterValue(selectors.fields.rfc, data.cancelTab.badData.input.rfc, browser)
        functions.enterValue(selectors.fields.doc, data.cancelTab.badData.input.doc, browser)
        //Enter good data from cancel tab section into all fields
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            //Click submit and wait for response
        browser.expect.element(selectors.messages.header).text.to.contain(data.cancelTab.badData.output.header)
        browser.expect.element(selectors.messages.errors).text.to.contain(data.cancelTab.badData.output.errorList.rfc)
        browser.expect.element(selectors.messages.queryTitle).text.to.contain(data.cancelTab.badData.output.queryTitle)
        browser.expect.element(selectors.messages.queryOutput).text.to.equal(data.cancelTab.badData.output.queryOutput)
        //Verify the error message and headers are correct
    },
    'I can enter valid data into the Warrant ID and Date fields and invalid data into the Reason for cancelation field and receive an error message': browser => {
        browser
            .click(selectors.buttons.clear)
            .pause(100)
            //clear previously entered data and results
        functions.enterValue(selectors.fields.wid, data.cancelTab.badData.input.wid, browser)
        functions.enterValue(selectors.fields.rfc, data.cancelTab.badData.input.rfcInvalid, browser)
        functions.enterValue(selectors.fields.doc, data.cancelTab.badData.input.doc, browser)
        //Enter good data from cancel tab section into all fields
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            //Click submit and wait for response
        browser.expect.element(selectors.messages.header).text.to.contain(data.cancelTab.badData.output.header)
        browser.expect.element(selectors.messages.errors).text.to.contain(data.cancelTab.badData.output.errorList.rfcInvalid)
        browser.expect.element(selectors.messages.queryTitle).text.to.contain(data.cancelTab.badData.output.queryTitle)
        browser.expect.element(selectors.messages.queryOutput).text.to.equal(data.cancelTab.badData.output.queryOutput)
        //Verify the error message and headers are correct
    }

}