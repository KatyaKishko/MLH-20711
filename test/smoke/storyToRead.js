const sel = require ('../../data/selectors.json')
const exp = require ('../../data/expected.json')
const data = require ('../../data/testData.json')
const {inputValues4AndClick, number2word, pOfComedy, gender, story, field} = require("../../data/helpers");



describe('MLH-504 Inputs are present in the story', function (){

    it('TC-9.1 Name is present in the title', function (){
        browser.url('');
        inputValues4AndClick(data.name, data.gender.he, data.age, data.storyType);
        const title = $(sel.titleOfComedy);
        expect(title).toHaveTextContaining(data.name);
    });

   it('TC-9.2 Name is present in the body', function (){
        browser.url('');
        inputValues4AndClick(data.name, data.gender.he, data.age, data.storyType);
        const body = $$(sel.bodyOfComedy)[pOfComedy.body];
        expect(body).toHaveTextContaining(data.name);
    });

    it('TC-9.3 Gender He is present in the story', function (){
        browser.url('');
        inputValues4AndClick(data.name, data.gender.he, data.age, data.storyType);
        const body = $$(sel.bodyOfComedy)[pOfComedy.body];
        expect(body).toHaveTextContaining('He');
    });

    it('TC-9.4 Gender He turns His', function (){
        browser.url('');
        inputValues4AndClick(data.name, data.gender.he, data.age, data.storyType);
        const body = $$(sel.bodyOfComedy)[pOfComedy.body];
        expect(body).toHaveTextContaining('his');
    });

    it('TC-9.5 Gender She is present in the story', function (){
        browser.url('');
        inputValues4AndClick(data.name, data.gender.she, data.age, data.storyType);
        const body = $$(sel.bodyOfComedy)[pOfComedy.body];
        expect(body).toHaveTextContaining('She');
    });

    it('TC-9.6 Gender She turns Her', function (){
        browser.url('');
        inputValues4AndClick(data.name, data.gender.she, data.age, data.storyType);
        const body = $$(sel.bodyOfComedy)[pOfComedy.body];
        expect(body).toHaveTextContaining('her');
    });

    it('TC-9.7 Gender It is present in the story', function (){
        browser.url('');
        inputValues4AndClick(data.name, data.gender.it, data.age, data.storyType);
        const body = $$(sel.bodyOfComedy)[pOfComedy.body];
        expect(body).toHaveTextContaining('It');
    })

    it('TC-9.8 Gender It turns its', function (){
        browser.url('');
        inputValues4AndClick(data.name, data.gender.it, data.age, data.storyType);
        const body = $$(sel.bodyOfComedy)[pOfComedy.body];
        expect(body).toHaveTextContaining('its');
    });

    it('TC-9.9 Age is spelled and units are correct', function (){
        browser.url('');
        inputValues4AndClick(data.name, data.gender.it, data.age, data.storyType);
        const body = $$(sel.bodyOfComedy)[pOfComedy.body].getText();
        const ageCheck = body.includes(number2word(data.age));
        expect(ageCheck).toEqual(true);
    })

    it('TC-9.12 No error img when uploading skipped', function (){
        browser.url('');
        inputValues4AndClick(data.name, data.gender.it, data.age, data.storyType);
        const avatar = $(sel.avatarImg).isDisplayed();
        expect(avatar).toEqual(false);
    })

    it('TC-9.13 Story matches Comedy template', function (){
        browser.url('');
        $(sel.name).setValue(data.name);
        $$(sel.genderInput)[gender].click();
        $(sel.age).setValue(data.age);
        $(sel.story).click();
        $$(sel.typeOfStory)[data.storyType].click();
        $(sel.createBtn).click();
        const comedy = $(sel.titleOfComedy).getText().replace(data.name, "") + $$(sel.bodyOfComedy)[pOfComedy.body].getText().replace(data.name, "") + $$(sel.bodyOfComedy)[pOfComedy.moral].getText();
        expect(comedy).toEqual(exp.comedyTemplate);
    })
});

