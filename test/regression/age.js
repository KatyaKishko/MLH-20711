const sel = require ('../../data/selectors.json');
const exp = require('../../data/expected.json');
const val = require('../../data/value.json');

describe('Age', function () {

    describe('Tests Age', function () {

        it('TC-5.1 Age field', function () {
            browser.url('');
            const label = $(sel.age).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-5.2 Age', function () {

            const label = $$(sel.label)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-5.2.1 Age label text', function () {
            const label = $$(sel.label)[2].getText();
            expect(label).toEqual(exp.labelAge);
        });

        it('TG-5.3 Placeholder age' , function () {
            const plhold = $(sel.placeHolderAge).isDisplayed();
            expect(plhold).toEqual(true);
        });

        it('TC-5.3.1 Placeholder age text' , function () {
            const plhold = $(sel.placeHolderAge).getAttribute('placeholder');
            expect(plhold).toEqual(exp.placeholderAge);
        });
        
        it('TC-5.4 Spiner ' , function () {

            $(sel.age).click();
            const spiner = $(sel.spiner).isDisplayed();
            expect(spiner).toEqual(true);
        });

        it('TC-5.5 Input number 1', function () {

            $(sel.age).setValue(val.number1);
            const alert = $(sel.errorMsg).isDisplayed();
            expect(alert).toEqual(false);
        });

        it('TC-5.6 Input number 6.8',function () {

            $(sel.age).doubleClick();
            browser.keys('\u007F');

            $(sel.age).setValue(val.fractionalNumber);
            const alert = $(sel.errorMsg).isDisplayed();
            expect(alert).toEqual(true);
        });

        it('TC-5.7 Input number 999999999999', function () {

            $(sel.age).doubleClick();
            browser.refresh();
            $(sel.age).setValue(val.twelveSymbol);
            const alert = $(sel.errorMsg).isDisplayed();
            expect(alert).toEqual(false);
        });

        it('TC-5.8 Input number -1',function () {

            $(sel.age).doubleClick();
            browser.keys('\u007F');
            $(sel.age).setValue(val.negativeNumber);
            const alert = $(sel.errorMsg).isDisplayed();
            expect(alert).toEqual(true);
        });

        it('TC-5.9 Input number 1000000000000',function () {

            $(sel.age).doubleClick();
            browser.keys('\u007F');
            $(sel.age).setValue(val.maxNumber);
            const alert = $(sel.errorMsg).isDisplayed();
            expect(alert).toEqual(true);
        });

        it('TC-5.10 ', function () {
            $(sel.age).doubleClick();
            browser.keys('\u007F');
            $(sel.age).setValue(val.number1);
            $(sel.spinerUp).click();
            const number = $(sel.age).getValue();
            expect(number).toEqual(val.number2);
        });

        it('TC-5.11 ', function () {
            $(sel.age).doubleClick();
            browser.keys('\u007F');
            $(sel.age).setValue(val.number3);
            $(sel.spinerDown).click();

            $(sel.spinerDown).click();
            const number = $(sel.age).getValue();
            expect(number).toEqual(val.number1);
        });

        it('TC-5.12 ', function () {
            $(sel.age).doubleClick();
            browser.keys('\u007F');
            $(sel.age).setValue(val.number1);
            $(sel.spinerDown).click();

            $(sel.spinerDown).click();

            const input = $(sel.age).getValue();
            expect(input).toEqual(val.negativeNumber);
        });

        it('TC-5.13 ', function () {
            $(sel.age).doubleClick();
            browser.keys('\u007F');
            $(sel.age).setValue(val.twelveSymbol);
            $(sel.spinerUp).click();

            const alert = $(sel.errorMsg).isDisplayed();
            expect(alert).toEqual(false);
        });

        it('TC-5.14 ', function () {
            $(sel.age).doubleClick();
            browser.keys('\u007F');
            $(sel.age).moveTo();
            $(sel.spinerDown).click();

            const alert = $(sel.errorMsg).isDisplayed();
            expect(alert).toEqual(true);
        });

        it('TC-5.15 ', function () {

            browser.refresh();
            $(sel.age).moveTo();
            $(sel.spinerUp).click();

            const alert = $(sel.errorMsg).isDisplayed();
            expect(alert).toEqual(false);
        });

        it('TC-5.16 Input spezchar $', function () {
            $(sel.age).doubleClick();
            browser.keys('\u007F');
            $(sel.age).setValue(val.spezChar$);
            const alert = $(sel.errorMsg).isDisplayed();
            expect(alert).toEqual(true);
        });

        it('TC-5.17', function () {
            $(sel.age).doubleClick();
            browser.keys('\u007F');
            const input =          $(sel.age).setValue(val.spezsymbolPlus);
            const alert = $(sel.errorMsg).isDisplayed();
            expect(alert).toEqual(true);
        });

        it('TC-5.18', function () {
            $(sel.age).doubleClick();
            browser.keys('\u007F');
            const input = $(sel.age).setValue(val.spezCharMinus);
            const alert = $(sel.errorMsg).isDisplayed();
            expect(alert).toEqual(true);
        });

        it('TC-5.19', function () {
            $(sel.age).doubleClick();
            browser.keys('\u007F');
            const input = $(sel.age).setValue(val.spezCharDat);
            const alert = $(sel.errorMsg).isDisplayed();
            expect(alert).toEqual(true);
        });

        it('TC-5.20', function () {
            $(sel.age).doubleClick();
            browser.keys('\u007F');
            $(sel.age).setValue(val.upperLetters);
            const alert = $(sel.errorMsg).isDisplayed();
            expect(alert).toEqual(true);
        });

        it('TC-5.21', function () {
            $(sel.age).doubleClick();
            browser.keys('\u007F');
            $(sel.age).setValue(val.lowerLetters);
            const alert = $(sel.errorMsg).isDisplayed();
            expect(alert).toEqual(true);
        });

        it('TC-5.22', function () {

            $(sel.age).doubleClick();
            browser.keys('\u007F');
            const input = $(sel.age).setValue(val.numberZero);

            const alert = $(sel.errorMsg).getText();
            expect(alert).toEqual(exp.errorMsg);
        });

        it('TC-5.23', function () {
            $(sel.age).doubleClick();
            browser.keys('\u007F');
            const input = $(sel.age).setValue(val.number1);
            $(sel.age).doubleClick();
            browser.keys('\u007F');

            const alert = $(sel.errorMsg).getText();
            expect(alert).toEqual(exp.errorMsgDefault);

        });

        it('TC-5.24', function () {

            $(sel.age).doubleClick();
            browser.keys('\uE003');
            const input = $(sel.age).setValue(val.numberArb);

            const alert = $(sel.errorMsg).getText();
            expect(alert).toEqual(exp.errorMsg);
        });
    });
});
