const data = require ('../../data/testData.json');
import {inputValues4} from '../../data/helpers'
const path = require('path');

describe('General', function () {
    before(() => {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
        browser.pause(2000);
    });

    it('TC-2.4 Verify that browser control menu is integrated', function () {
        inputValues4(data.name, data.gender.she, data.age, data.storyType);
        const filepath  = path.join(__dirname, '../../data/image.jpeg')
        const remoteFilePath = browser.uploadFile(filepath)
        const inputDiv = $(".ant-upload input");
        browser.execute(function (){
            document.getElementsByTagName("input")[6].style.display ='block'
        })
        inputDiv.waitForDisplayed();
        inputDiv.setValue(remoteFilePath)
        browser.pause(3000)
        browser.refresh();

    });
});
