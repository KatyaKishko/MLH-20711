const sel = require ('../../data/selectors.json');
const data = require ('../../data/testData.json');
import {inputValues4} from '../../data/helpers'
const path = require('path');

describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-040 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType);
            const create = $(sel.createBtn).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-041 Create a story with our IMAGE', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType);
            const filepath  = path.join(__dirname, '../../data/image.jpeg')
            const remoteFilePath = browser.uploadFile(filepath)
            const inputDiv = $(".ant-upload input");
            browser.execute(function (){
                document.getElementsByTagName("input")[6].style.display ='block'
            })
            inputDiv.waitForDisplayed();
            inputDiv.setValue(remoteFilePath)
            $(sel.createBtn).click();
            browser.pause(3000)
            $(sel.tryAgain).click();
            browser.pause(3000)

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