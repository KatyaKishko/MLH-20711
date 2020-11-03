import {field} from "../../data/helpers";
const sel = require ('../../data/selectors.json')
const exp = require ('../../data/expected.json')

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

    it('TC-3.6 Verify that the Name field does not accept > max length', function () {


    });

    });