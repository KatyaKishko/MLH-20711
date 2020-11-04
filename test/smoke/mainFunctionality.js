const sel = require ('../../data/selectors.json');
const data = require ('../../data/testData.json');
import {inputValues4} from '../../data/helpers'

describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-040 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType);
            const create = $(sel.createBtn).isEnabled();
            expect(create).toEqual(true);
        });
    });
    describe('Other paths', function () {

        it('TC-041 Gender he is working', function () {
            browser.url('');
            inputValues4(data.name, data.gender.he, data.age, data.storyType);
            $(sel.createBtn).click();
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });
    });
});