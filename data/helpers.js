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

function inputValues4AndClick (name, gender, age, storyType){
    $(sel.name).setValue(name);
    $$(sel.genderInput)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.typeOfStory)[storyType].click();
    $(sel.createBtn).click();
}

let num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
let tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

function number2word(age){
    if (age < 20) return num[age];
    let digit = age%10;
    if (age < 100) return tens[~~(age/10)-2] + (digit? " " + num[digit]: "");
    if (age < 1000) return num[~~(age/100)] +" hundred" + (age%100 === 0? "": " " + number2word(age%100));
    if (age < 1000000) return number2word(~~(age/1000)) + " thousand" + (age%1000 !== 0? " " + number2word(age%1000): "");
    if (age < 1000000000) return number2word(~~(age/1000000)) + " million" + (age%1000000 !== 0? " " + number2word(age%1000000): "");
    return number2word(~~(age/1000000000)) + " billion" + (age%1000000000 !== 0? " " + number2word(age%1000000000): "");

}

const pOfComedy = {
    body: 0,
    moral: 1
}

module.exports = {field, gender, story, userInput, inputValues4, inputValues4AndClick, number2word, pOfComedy}