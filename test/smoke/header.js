//const sel = require ('../../data/selectors.json')
const exp = require ('../../data/expected.json')
//import {field, gender, story} from '../../data/helpers'

describe('Getting to the page', function () {

    it('TC-1.1 Title is correct ', function () {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
        let title = browser.getTitle();
        expect(title).toEqual(exp.title);
    });

});
