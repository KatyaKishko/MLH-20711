const sel = require ('../../data/selectors.json')
const exp = require ('../../data/expected.json')
import {field, gender} from '../../data/helpers'

describe('My Little Hero', function () { //define suite title by passing a string

    describe('Getting to the page', function () { //define sub-suite title by passing a string

        it('TC-001 Title is correct ', function () { //define test title by passing a string
            browser.url('https://qa-apps.netlify.app/app_my_hero'); //open baseUrl
            let title = browser.getTitle(); //get page title and assign it to the "title" variable
            browser.pause(2000); //just pause to visually see that something is happening on the page
            expect(title).toEqual('MLH trial'); //compare {title} (actual) and "MLH trial" (expected)
        });
    });

    describe('Elements are exist', function () {

        it('TC-002 Label for header', function () {
            expect($(sel.header).isDisplayed()).toEqual(true);
        });

        it('TC-003 Label for subheader', function () {
            expect($(sel.subHeader).isDisplayed()).toEqual(true);
        });

        it('TC-004 Label for name', function () {
            expect($$(sel.label)[field.name].isDisplayed()).toEqual(true);
        });

        it('TC-005 Label for placeholder name', function () {
            expect($(sel.name).isDisplayed()).toEqual(true);
        });

        it('TC-006 Label for gender', function () {
            expect($$(sel.label)[field.gender].isDisplayed()).toEqual(true);
        });

        it('TC-007 Label for radio button "he"', function () {
            expect($$(sel.gender)[gender.HE].isDisplayed()).toEqual(true);
        });

        it('TC-008 Label for radio button "she"', function () {
            expect($$(sel.gender)[gender.SHE].isDisplayed()).toEqual(true);
        });

        it('TC-009 Label for radio button "it"', function () {
            expect($$(sel.gender)[gender.IT].isDisplayed()).toEqual(true);
        });

        it('TC-010 Label for age', function () {
            expect($$(sel.label)[field.age].isDisplayed()).toEqual(true);
        });

        it('TC-011 Label for placeholder age', function () {
            expect($(sel.age).isDisplayed()).toEqual(true);
        });

        it('TC-012 Label for story', function () {
            expect($$(sel.label)[field.story].isDisplayed()).toEqual(true);
        });

        it('TC-013 Label for placeholder story', function () {
            expect($(sel.story).isDisplayed()).toEqual(true);
        });

        it('TC-014 Label for image', function () {
            expect($$(sel.label)[field.image].isDisplayed()).toEqual(true);
        });

        it('TC-015 Label for drag and drop field', function () {
            expect($(sel.dragAndDropField).isDisplayed()).toEqual(true);
        });

        it('TC-016 Label for create button', function () {
            expect($(sel.createBtn).isDisplayed()).toEqual(true);
        });
    });

    describe('Labels are correct', function () {

        it('TC-017 Text for header = My Little Hero', function () {
            expect($(sel.header).getText()).toEqual(exp.labelHeader);
        });

        it('TC-018 Text for subheader = Let\'s create your own HERO! It\'s super easy with our application!', function () {
            expect($(sel.subHeader).getText()).toEqual(exp.labelSubheader);
        });

        it('TC-019 Text for name = 1. What is your HERO\'s name?', function () {
            expect($$(sel.label)[field.name].getText()).toEqual(exp.labelName);
        });

        it('TC-020 Text for placeholder name = Hero\'s name', function () {
            expect($(sel.name).getAttribute('placeholder')).toEqual(exp.placeholderName);
        });

        it('TC-021 Text for gender = 2. Please choose your gender', function () {
            expect($$(sel.label)[field.gender].getText()).toEqual(exp.labelGender);
        });

        it('TC-022 Text for gender "he"', function () {
            expect($$(sel.radioBtn)[gender.HE].getText()).toEqual(exp.HE);
        });

        it('TC-023 Text for gender "she"', function () {
            expect($$(sel.radioBtn)[gender.SHE].getText()).toEqual(exp.SHE);
        });

        it('TC-024 Text for gender "it"', function () {
            expect($$(sel.radioBtn)[gender.IT].getText()).toEqual(exp.IT);
        });

        it('TC-025 Text for age = 3. How old is your hero?', function () {
            expect($$(sel.label)[field.age].getText()).toEqual(exp.labelAge);
        });

        it('TC-026 Text for placeholder age = Hero\'s age', function () {
            expect($(sel.age).getAttribute('placeholder')).toEqual(exp.placeholderAge);
        });

        it('TC-027 Text for story = 4. What type of story would you like to read?', function () {
            expect($$(sel.label)[field.story].getText()).toEqual(exp.labelStory);
        });

        it('TC-028 Text for placeholder story = Type of the story', function () {
            expect($(sel.storyPlaceholderText).getText()).toEqual(exp.placeholderStory);
        });

        it('TC-029 Text for image = 5. Upload an image (optional)', function () {
            expect($$(sel.label)[field.image].getText()).toEqual(exp.labelImage);
        });

        it('TC-030 Text for placeholder drag and drop  = Click or drag and drop', function () {
            expect($(sel.dragAndDropField).getText()).toEqual(exp.dragAndDropField);
        });

        it('TC-031 Text for create button  = Create', function () {
            expect($(sel.createBtn).getText()).toEqual(exp.createBtnText);
        });
    });

    describe('TC-032 Verify story type names in drop down menu', function () {

        it('TC-033 Text for create button  = Create', function () {
            expect($(sel.createBtn).getText()).toEqual(exp.createBtnText);
        });

    });
});
