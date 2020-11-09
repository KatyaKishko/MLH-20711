const sel = require ('../../data/selectors.json')
const exp = require ('../../data/expected.json')


describe('MLH-502 Header and description are exist and correct', function () {

    it('TC-1.2 Header exists', function () {
        browser.url('');
        const header = $(sel.header).isDisplayed();
        expect(header).toEqual(true);
    });

    it('TC-1.3 Header text is correct', function () {
        const header = $(sel.header).getText();
        expect(header).toEqual(exp.labelHeader);
    });

    it('TC-1.4 Description is present', function () {
        const descr = $(sel.subHeader).isDisplayed();
        expect(descr).toEqual(true);
    });

    it('TC-1.5 Description is correct', function () {
        const descr = $(sel.subHeader).getText();
        expect(descr).toEqual(exp.labelSubheader);
    });

});
