function getArrayFromText(str) {
    const wordsArray = str.split(/[\s.,?:!;\-"]+/)
        .filter(function (el) {
            return el.length !== 0
        });
    return wordsArray;
}

function frequencyDictionary(str, wordsArray) {
    const dictionary = {};
    wordsArray = getArrayFromText(str);
    for (let i = 0; i < wordsArray.length; i++) {
        if (dictionary[wordsArray[i]]) {
            dictionary[wordsArray[i]]++;
        } else {
            dictionary[wordsArray[i]] = 1;
        }
    }
    return dictionary;
}

function isValid(inputValue) {
    if (inputValue === '') {
        showValidationMsgHandler("Text is empty - please type text here");
        return false;
    }
    if (getArrayFromText(inputValue).length < 2) {
        showValidationMsgHandler("Please type more than 1 word");
        return false;
    }
    return true;
}

function onInputHandler() {
    const text = document.getElementById('textForAnalysis').value;
    if (isValid(text)) {
        document.querySelector('textarea#textForAnalysis + div.invalid-feedback').style.display = 'none';
    }
}

function onButtonClick() {
    const text = document.getElementById('textForAnalysis').value;
    if (isValid(text)) {
        document.querySelector('textarea#textForAnalysis + div.invalid-feedback').style.display = 'none';
        console.log(frequencyDictionary(text));// пример действия при нажатии на кнопку
    }
}

function showValidationMsgHandler(msg) {
    document.querySelector('textarea#textForAnalysis + div.invalid-feedback').textContent = msg;
    document.querySelector('textarea#textForAnalysis + div.invalid-feedback').style.display = 'block';
}
