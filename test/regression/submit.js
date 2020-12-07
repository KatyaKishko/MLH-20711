const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');
const help = require('../../data/helpers')
const data = require('../../data/testData.json');

describe('Submit Button', function () {
  
    it('TC-8.1 Submit button is present', function () {
      browser.url('');
      const name = $(sel.createBtn).isDisplayed();
      expect(name).toEqual(true);
    });
    
    it('TC-8.2 Name of the button is Create!', function () {
      browser.url('');
      const text = $(sel.createBtn).getText();
      expect(text).toEqual(exp.createBtnText);
    });

    it('TC-8.4 Submit button is enabled when fields 1-4 have valid inputs ', function () {
      help.inputValues4(data.name, data.gender.she, data.age, data.storyType);

      const create = $(sel.createBtn).isEnabled();
      expect(create).toEqual(true);
    });

    it('TC-8.5 Submit button is disabled when all or either of fields 1-4 are missing input ', function () {
      browser.url('');
      help.inputValues3(data.name, data.gender.she, data.age);
      browser.pause(2000);
      const create = $(sel.createBtn).isEnabled();
      expect(create).toEqual(false);
    });

    it('TC-8.6 Submit button generates a story to read ', function () {
      browser.url('');
      help.inputValuesAndClick(data.name, data.gender.she, data.age, data.storyType);
      const tryAgain = $(sel.tryAgain).isDisplayed();
      expect(tryAgain).toEqual(true);
    });
});
