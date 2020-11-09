const sel = require ('../../data/selectors.json')
const exp = require ('../../data/expected.json')
const data = require ('../../data/testData.json');
const path = require('path');
import {field, userInput, inputValues4} from "../../data/helpers"


describe('Label 5: Image', function () {
    before(() => {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
        browser.pause(2000);
    });

    it(' TC-7.1/7.2 Label Image is present', function () {
        expect($$(sel.label)[field.image].isDisplayed()).toEqual(true);
    });

    it('TC - 7.3 Image Placeholder is present', function () {
        expect($(sel.dragAndDropField).isDisplayed()).toEqual(true);
    });

    it(' TC - 7.4 / 7.5 / 7.6 Validate user is able to drag and drop Image/Verify that uploading file is jpeg', function () {
        browser.url('');
        inputValues4(data.name, data.gender.she, data.age, data.storyType);
        const filepath = path.join(__dirname, '../../data/image.jpeg');
        const remoteFilePath = browser.uploadFile(filepath);
        const inputDiv = $(".ant-upload input");
        browser.execute(function () {
            document.getElementsByTagName("input")[6].style.display = 'block'
        });
        inputDiv.waitForDisplayed();
        inputDiv.setValue(remoteFilePath)
        $(sel.createBtn).click();
        browser.pause(3000)
        $(sel.tryAgain).click();
        browser.pause(3000)
    });

    it(' TC 7.7  Verify that uploading file is png', function () {
        browser.url('');
        inputValues4(data.name, data.gender.she, data.age, data.storyType);
        const filepath = path.join(__dirname, '../../data/image1.png');
        const remoteFilePath = browser.uploadFile(filepath);
        const inputDiv = $(".ant-upload input");
        browser.execute(function () {
            document.getElementsByTagName("input")[6].style.display = 'block'
        });
        inputDiv.waitForDisplayed();
        inputDiv.setValue(remoteFilePath)
        $(sel.createBtn).click();
        browser.pause(3000)
        $(sel.tryAgain).click();
        browser.pause(3000)
    });

    it(' ', function () {
        browser.url('');
        inputValues4(data.name, data.gender.she, data.age, data.storyType);
        const filepath = path.join(__dirname, '../../data/image1.png');
        const remoteFilePath = browser.uploadFile(filepath);
        const inputDiv = $(".ant-upload input");
        browser.execute(function () {
            document.getElementsByTagName("input")[6].style.display = 'block'
        });
        inputDiv.waitForDisplayed();
        inputDiv.setValue(remoteFilePath)
        $(sel.createBtn).click();
        browser.pause(3000)
        $(sel.tryAgain).click();
        browser.pause(3000)
    });

});

