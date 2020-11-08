const sel = require ('../../data/selectors.json')
const exp = require ('../../data/expected.json')
import {field, gender, userInput} from "../../data/helpers"

describe('Label 2: Gender', function () {
    before(() => {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
        browser.pause(2000)
    });

    it('TC-4.1 Label for gender', function () {
        expect($$(sel.label)[field.gender].isDisplayed()).toEqual(true);
    });

    it('TC-4.1.1 Label for radio button "he"', function () {
        expect($$(sel.gender)[gender.HE].isDisplayed()).toEqual(true);
    });

    it('TC-4.1.2 Label for radio button "she"', function () {
        expect($$(sel.gender)[gender.SHE].isDisplayed()).toEqual(true);
    });

    it('TC-4.1.3 Label for radio button "it"', function () {
        expect($$(sel.gender)[gender.IT].isDisplayed()).toEqual(true);
    });

    it('TC-4.2 Text for gender = 2. Please choose your gender', function () {
        expect($$(sel.label)[field.gender].getText()).toEqual(exp.labelGender);
    });

    it('TC-4.2.1 Text for gender "he"', function () {
        expect($$(sel.radioBtn)[gender.HE].getText()).toEqual(exp.HE);
    });

    it('TC-4.2.2 Text for gender "she"', function () {
        expect($$(sel.radioBtn)[gender.SHE].getText()).toEqual(exp.SHE);
    });

    it('TC-4.2.3 Text for gender "it"', function () {
        expect($$(sel.radioBtn)[gender.IT].getText()).toEqual(exp.IT);
    });

    it('TC 4.3 Verify that all option buttons are selectable and user can select only one at a time (HE)', function () {
        browser.refresh();
        $$(sel.radioBtn)[gender.HE].click();
        expect($$(sel.radioBtn)[gender.HE].getText()).toEqual(exp.HE);
    });

    it('TC 4.3 Verify that all option buttons are selectable and user can select only one at a time (SHE)', function () {
        browser.refresh();
        $$(sel.radioBtn)[gender.SHE].click();
        expect($$(sel.radioBtn)[gender.SHE].getText()).toEqual(exp.SHE);
    });

    it('TC 4.3 Verify that all option buttons are selectable and user can select only one at a time (IT)', function () {
        browser.refresh();
        $$(sel.radioBtn)[gender.IT].click();
        expect($$(sel.radioBtn)[gender.IT].getText()).toEqual(exp.IT);
    });
});
