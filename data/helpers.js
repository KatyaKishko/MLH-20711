const sel = require ('../data/selectors.json');

const field = {
    name: 0,
    gender: 1,
    age: 2,
    story: 3,
    image: 4,
}
const gender = {
    HE: 0,
    SHE: 1,
    IT: 2,
}
const story = {
    overcomingTheMonster: 0,
    rebirth: 1,
    quest: 2,
    journeyAndReturn: 3,
    ragsAndRiches: 4,
    tragedy: 5,
    comedy: 6,
}
const userInput = {
    name1: 'fgggggggggggggggggggggggggggggffffffffffffffffffffffffffffffffffffdfsd',
    name2: 'a',
    name3: 'fgggggggggggggggggggggggggggggffffffffffffffffffffffffffffffffffffdfsda',
    name4: '     ',
    name5: 'H',
    name6: 'h',
    name7: 6,
    name8: '$',
    name9: 'привет',
    randomInput: 'k'
}

function inputValues4 (name, gender, age, storyType) {

    $(sel.name).setValue(name);
    $$(sel.genderInput)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.typeOfStory)[storyType].click();
}

module.exports = {field, gender, story, userInput, inputValues4}