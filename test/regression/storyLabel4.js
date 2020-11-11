const sel = require ('../../data/selectors.json')
const exp = require ('../../data/expected.json')
import {field, story} from "../../data/helpers"

describe('Label 4: Story', function () {
    before(() => {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
        browser.pause(2000);
    });

    it('TC-6.1 Verify that a Type of story field is present and contains 7 options', function () {
        expect($(sel.story).isDisplayed()).toEqual(true);
    });

    it('TC-6.1.1 Check placeholder name = Overcoming the Monster', function () {
        $(sel.dropDownMenu).click();
        expect($$(sel.typeOfStory)[story.overcomingTheMonster].getText()).toEqual(exp.overcomingTheMonster);
    });

    it('TC-6.1.2 Check placeholder name = Rebirth', function () {
        expect($$(sel.typeOfStory)[story.rebirth].getText()).toEqual(exp.rebirth);
    });

    it('TC-6.1.3 Check placeholder name = Quest', function () {
        expect($$(sel.typeOfStory)[story.quest].getText()).toEqual(exp.quest);
    });

    it('TC-6.1.4 Check placeholder name = Journey and Return', function () {
        expect($$(sel.typeOfStory)[story.journeyAndReturn].getText()).toEqual(exp.journeyAndReturn);
    });

    it('TC-6.1.5 Check placeholder name = Rags and Riches', function () {
        expect($$(sel.typeOfStory)[story.ragsAndRiches].getText()).toEqual(exp.ragsAndRiches);
    });

    it('TC-6.1.6 Check placeholder name = Tragedy', function () {
        expect($$(sel.typeOfStory)[story.tragedy].getText()).toEqual(exp.tragedy);
    });

    it('TC-6.1.7 Check placeholder name = Comedy', function () {
        expect($$(sel.typeOfStory)[story.comedy].getText()).toEqual(exp.comedy);
    });

    it('TC-6.2 Verify that a label for the Type of story field is present', function () {
        expect($$(sel.label)[field.story].getText()).toEqual(exp.labelStory);
    });

    it('TC-6.3 Verify that a placeholder for the Type of story field is present', function () {
        expect($(sel.storyPlaceholderText).getText()).toEqual(exp.placeholderStory);
    });

    it('TC-6.4 Verify that all story types are selectable from the drop-down list', function () {
        browser.refresh();
        $(sel.dropDownMenu).click();
        $$(sel.typeOfStory)[story.overcomingTheMonster].click();
        $(sel.dropDownMenu).click();
        $$(sel.typeOfStory)[story.tragedy].click();
        expect($$(sel.typeOfStory)[story.tragedy].getText()).toEqual(exp.tragedy);
    });
});
