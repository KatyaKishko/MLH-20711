const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const exp = require('../../data/expected.json');
const {inputValuesAndClick} = require('../../data/helpers');

describe('Story', function () {

    describe('Story are correct', function () {

        it('TC-10.1 Comedy', function () {
            browser.url('');
            inputValuesAndClick(data.name, data.gender.he, data.age, data.storyType)
            const text = $$(sel.storyMoral)[1].getText()
            expect(text).toEqual(exp.storyMoral);
        });

        it('TC-10.2 Comedy', function () {
            browser.url('');
            inputValuesAndClick(data.name, data.gender.she, data.age, data.storyType)
            const text = $$(sel.storyMoral)[1].getText()
            expect(text).toEqual(exp.storyMoral);
        });

        it('TC-10.3 Comedy', function () {
            browser.url('');
            inputValuesAndClick(data.name, data.gender.it, data.age, data.storyType)
            const text = $$(sel.storyMoral)[1].getText()
            expect(text).toEqual(exp.storyMoral);
        });
    });
});
