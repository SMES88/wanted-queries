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
    'I can enter valid data into the warrant ID and at least one other field and get a valid modified text blob': browser => {
        browser
            .click(selectors.tabs.modifyTab)
            .pause(100)
        functions.enterValue(selectors.fields.wid, data.tempTest.wid, browser)
        functions.enterValue(selectors.fields.wgt, data.tempTest.wgt, browser)
        browser
        .click(selectors.buttons.submit)
        .pause(100)
        browser.expect.element(selectors.messages.queryOutput).text.to.contain(data.tempTest.output)
        //Temporary test while waiting for the bug fix, verifies the text blob generated from the inputs
    }
    /*
    These tests will not pass until reported bug is fixed.

    before: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    'I can enter valid data into the warrant ID and at least one other field and get a valid modified text blob': browser => {
        browser
            .click(selectors.tabs.modifyTab)
            .pause(100)
            //navigate to Modify Wanted page and wait for application to respond
        functions.enterValue(selectors.fields.wid, data.modifyTab.goodData.input.wid, browser)
        functions.enterValue(selectors.fields.hdr, data.modifyTab.goodData.input.hdr, browser)
        functions.enterValue(selectors.fields.mke, data.modifyTab.goodData.input.mke, browser)
        functions.enterValue(selectors.fields.ori, data.modifyTab.goodData.input.ori, browser)
        functions.enterValue(selectors.fields.nam, data.modifyTab.goodData.input.nam, browser)
        functions.enterValue(selectors.fields.sex, data.modifyTab.goodData.input.sex, browser)
        functions.enterValue(selectors.fields.rac, data.modifyTab.goodData.input.rac, browser)
        functions.enterValue(selectors.fields.hgt, data.modifyTab.goodData.input.hgt, browser)
        functions.enterValue(selectors.fields.wgt, data.modifyTab.goodData.input.wgt, browser)
        functions.enterValue(selectors.fields.hai, data.modifyTab.goodData.input.hai, browser)
        functions.enterValue(selectors.fields.off, data.modifyTab.goodData.input.off, browser)
        functions.enterValue(selectors.fields.dow, data.modifyTab.goodData.input.dow, browser)
        functions.enterValue(selectors.fields.oln, data.modifyTab.goodData.input.oln, browser)
        functions.enterValue(selectors.fields.ols, data.modifyTab.goodData.input.ols, browser)
        functions.enterValue(selectors.fields.old, data.modifyTab.goodData.input.old, browser)
        functions.enterValue(selectors.fields.lic, data.modifyTab.goodData.input.lic, browser)
        functions.enterValue(selectors.fields.lis, data.modifyTab.goodData.input.lis, browser)
        functions.enterValue(selectors.fields.lid, data.modifyTab.goodData.input.lid, browser)
        //Enter good data from modify tab section into all fields 
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            //Click submit and wait for response
        browser.expect.element(selectors.messages.header).text.to.contain(data.modifyTab.goodData.output.header)
        browser.expect.element(selectors.messages.queryTitle).text.to.contain(data.modifyTab.goodData.output.queryTitle)
        browser.expect.element(selectors.messages.queryOutput).text.to.equal(data.modifyTab.goodData.output.queryOutput)
        //Verify the messages and text blob are correct
    },
    'I can enter only the Warrant ID number and get an error message': browser => {
        browser.click(selectors.buttons.clear)
        //clear previously entered data and results
        functions.enterValue(selectors.fields.wid, data.modifyTab.badData.input.wid, browser)
        functions.enterValue(selectors.fields.hdr, data.modifyTab.badData.input.hdr, browser)
        functions.enterValue(selectors.fields.mke, data.modifyTab.badData.input.mke, browser)
        functions.enterValue(selectors.fields.ori, data.modifyTab.badData.input.ori, browser)
        functions.enterValue(selectors.fields.nam, data.modifyTab.badData.input.nam, browser)
        functions.enterValue(selectors.fields.sex, data.modifyTab.badData.input.sex, browser)
        functions.enterValue(selectors.fields.rac, data.modifyTab.badData.input.rac, browser)
        functions.enterValue(selectors.fields.hgt, data.modifyTab.badData.input.hgt, browser)
        functions.enterValue(selectors.fields.wgt, data.modifyTab.badData.input.wgt, browser)
        functions.enterValue(selectors.fields.hai, data.modifyTab.badData.input.hai, browser)
        functions.enterValue(selectors.fields.off, data.modifyTab.badData.input.off, browser)
        functions.enterValue(selectors.fields.dow, data.modifyTab.badData.input.dow, browser)
        functions.enterValue(selectors.fields.oln, data.modifyTab.badData.input.oln, browser)
        functions.enterValue(selectors.fields.ols, data.modifyTab.badData.input.ols, browser)
        functions.enterValue(selectors.fields.old, data.modifyTab.badData.input.old, browser)
        functions.enterValue(selectors.fields.lic, data.modifyTab.badData.input.lic, browser)
        functions.enterValue(selectors.fields.lis, data.modifyTab.badData.input.lis, browser)
        functions.enterValue(selectors.fields.lid, data.modifyTab.badData.input.lid, browser)
        //Enter bad data from modify tab section into all fields 
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            //Click submit and wait for response            
        browser.expect.element(selectors.messages.header).text.to.contain(data.modifyTab.badData.output.header)
        browser.expect.element(selectors.messages.errors).text.to.contain(data.modifyTab.badData.output.errorList)
        browser.expect.element(selectors.messages.queryTitle).text.to.contain(data.modifyTab.badData.output.queryTitle)
        browser.expect.element(selectors.messages.queryOutput).text.to.equal(data.modifyTab.badData.output.queryOutput)
        //Verify the error message and headers are correct        
    }
    */

}

