const sel = require ('../../data/selectors.json')
const exp = require ('../../data/expected.json')
import {field, userInput} from "../../data/helpers"

describe('Label 1: Name', function () {
    before(() => {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
        browser.pause(2000);
    });

    it('TC-3.1 Verify that the Name field is present', function () {
        expect($(sel.name).isDisplayed()).toEqual(true);
    });

    it('TC-3.2 Verify that a label for the Name field is present', function () {
        expect($$(sel.label)[field.name].isDisplayed()).toEqual(true);
    });

    it('TC-3.3 Verify that placeholder for the Name field is present', function () {
        expect($(sel.name).getAttribute('placeholder')).toEqual(exp.placeholderName);
    });

    it('TC-3.4 Verify that the Name field accepts max length (70 symbols)', function () {
        $(sel.name).setValue(userInput.name1);
        expect($(sel.name).getValue()).toEqual(exp.nameInput1);
    });

    it('TC-3.5 Verify that the Name field accepts min length (1 symbol)', function () {
        browser.refresh();
        $(sel.name).setValue(userInput.name2);
        expect($(sel.name).getValue()).toEqual(exp.nameInput2);
    });

    it('TC-3.6 Verify that the Name field does not accept > max length', function () {
        browser.refresh();
        $(sel.name).setValue(userInput.name3);
        $(sel.errorMsg).waitForDisplayed();
        expect($(sel.errorMsg).getText()).toEqual(exp.errorMessage);
    });

    it('TC-3.7 Verify that input field does not accept only spaces', function () {
        browser.refresh();
        $(sel.name).setValue(userInput.name4);
        expect($(sel.name).getValue()).toEqual(exp.nameInput4);
    });

    it('TC-3.8 Verify that the input field accepts uppercase letters (A-Z)', function () {
        browser.refresh();
        $(sel.name).setValue(userInput.name5);
        expect($(sel.name).getValue()).toEqual(exp.nameInput5);
    });

    it('TC-3.9 Verify that the input field accepts lowercase letters (a-z)', function () {
        browser.refresh();
        $(sel.name).setValue(userInput.name6);
        expect($(sel.name).getValue()).toEqual(exp.nameInput6);
    });

    it('TC-3.10 Verify that the input field accepts digits (0-9)', function () {
        browser.refresh();
        $(sel.name).setValue(userInput.name7);
        expect($(sel.name).getValue()).toEqual(exp.nameInput7);
    });

    it('TC-3.11 Verify that the input field: accepts special characters (!, @, #, $, %, ^, &, *, (, ), -, +, _, =, ~)', function () {
        browser.refresh();
        $(sel.name).setValue(userInput.name8);
        expect($(sel.name).getValue()).toEqual(exp.nameInput8);
    });

    it('TC-3.12 Verify text of the error message = "привет"', function () {
        browser.refresh();
        $(sel.name).setValue(userInput.name9);
        expect($(sel.name).getValue()).toEqual(exp.nameInput9);
    });

    it('TC-3.13 Verify text of the error message = Required', function () {
        browser.refresh();
        $(sel.name).setValue(userInput.randomInput);
        browser.keys("Backspace");
        $(sel.errorMsg).waitForDisplayed();
        browser.pause(2000)
        expect($(sel.errorMsg).getText()).toEqual(exp.errorMsgDefault);
    });

    it('should *******', function () {
        //$(".ant-input-number-input-wrap").moveTo();
        $(".ant-input-number-handler-up-inner").click()
        browser.pause(3000)
    });

});
