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
    'I can put in information and get a good test message as a result': browser => {

        browser
            .click(selectors.tabs.enterTab)
            .pause(100)
            //navigate to Enter Wanted page and wait for application to respond
        functions.enterValue(selectors.fields.hdr, data.enterTab.goodData.input.hdr, browser)
        functions.enterValue(selectors.fields.mke, data.enterTab.goodData.input.mke, browser)
        functions.enterValue(selectors.fields.ori, data.enterTab.goodData.input.ori, browser)
        functions.enterValue(selectors.fields.nam, data.enterTab.goodData.input.nam, browser)
        functions.enterValue(selectors.fields.sex, data.enterTab.goodData.input.sex, browser)
        functions.enterValue(selectors.fields.rac, data.enterTab.goodData.input.rac, browser)
        functions.enterValue(selectors.fields.hgt, data.enterTab.goodData.input.hgt, browser)
        functions.enterValue(selectors.fields.wgt, data.enterTab.goodData.input.wgt, browser)
        functions.enterValue(selectors.fields.hai, data.enterTab.goodData.input.hai, browser)
        functions.enterValue(selectors.fields.off, data.enterTab.goodData.input.off, browser)
        functions.enterValue(selectors.fields.dow, data.enterTab.goodData.input.dow, browser)
        functions.enterValue(selectors.fields.oln, data.enterTab.goodData.input.oln, browser)
        functions.enterValue(selectors.fields.ols, data.enterTab.goodData.input.ols, browser)
        functions.enterValue(selectors.fields.old, data.enterTab.goodData.input.old, browser)
        functions.enterValue(selectors.fields.lic, data.enterTab.goodData.input.lic, browser)
        functions.enterValue(selectors.fields.lis, data.enterTab.goodData.input.lis, browser)
        functions.enterValue(selectors.fields.lid, data.enterTab.goodData.input.lid, browser)
        //Enter good data from enter tab section into all fields
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            //Click submit and wait for response
        browser.expect.element(selectors.messages.header).text.to.contain('Valid')
        browser.expect.element(selectors.messages.queryTitle).text.to.contain(data.enterTab.goodData.output.queryTitle)
        browser.expect.element(selectors.messages.queryOutput).text.to.contain(data.enterTab.goodData.output.queryOutput)
        //Verify the messages and text blob are correct  
    },
    'If I put in good data, but only one of a set of optional fields, I get an error': browser => {
        browser.click(selectors.buttons.clear)
        //clear previously entered data and results
        functions.enterValue(selectors.fields.hdr, data.enterTab.badData.input.hdr, browser)
        functions.enterValue(selectors.fields.mke, data.enterTab.badData.input.mke, browser)
        functions.enterValue(selectors.fields.ori, data.enterTab.badData.input.ori, browser)
        functions.enterValue(selectors.fields.nam, data.enterTab.badData.input.nam, browser)
        functions.enterValue(selectors.fields.sex, data.enterTab.badData.input.sex, browser)
        functions.enterValue(selectors.fields.rac, data.enterTab.badData.input.rac, browser)
        functions.enterValue(selectors.fields.hgt, data.enterTab.badData.input.hgt, browser)
        functions.enterValue(selectors.fields.wgt, data.enterTab.badData.input.wgt, browser)
        functions.enterValue(selectors.fields.hai, data.enterTab.badData.input.hai, browser)
        functions.enterValue(selectors.fields.off, data.enterTab.badData.input.off, browser)
        functions.enterValue(selectors.fields.dow, data.enterTab.badData.input.dow, browser)
        functions.enterValue(selectors.fields.oln, data.enterTab.badData.input.oln, browser)
        functions.enterValue(selectors.fields.ols, data.enterTab.badData.input.ols, browser)
        functions.enterValue(selectors.fields.old, data.enterTab.badData.input.old, browser)
        functions.enterValue(selectors.fields.lic, data.enterTab.badData.input.lic, browser)
        functions.enterValue(selectors.fields.lis, data.enterTab.badData.input.lis, browser)
        functions.enterValue(selectors.fields.lid, data.enterTab.badData.input.lid, browser)
        //Enter bad data from enter tab section into all fields
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            //Click submit and wait for response            
        browser.expect.element(selectors.messages.header).text.to.contain(data.enterTab.badData.output.header)
        browser.expect.element(selectors.messages.errors).text.to.contain(data.enterTab.badData.output.errorList.oln)
        browser.expect.element(selectors.messages.queryTitle).text.to.contain(data.enterTab.badData.output.queryTitle)
        browser.expect.element(selectors.messages.queryOutput).text.to.equal(data.enterTab.badData.output.queryOutput)
        //Verify the error message and headers are correct        
    }
}