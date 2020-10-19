function getWordsArray(str) {
   return str.split(/[\s.,?:!;\-"()*#~']+/)
        .filter(function (el) {
            return el.length !== 0
        });
}

function frequencyDictionary(str) {
    const dictionary = {};
    wordsArray = getWordsArray(str);
    for (let i = 0; i < wordsArray.length; i++) {
        if (dictionary[wordsArray[i]]) {
            dictionary[wordsArray[i]]++;
        } else {
            dictionary[wordsArray[i]] = 1;
        }
    }
    return dictionary;
}

function onButtonClick() {
    const text = document.getElementById('textForAnalysis').value;
    if (text === '') {
        document.getElementsByClassName('invalid-feedback')[0].style.display = 'block';
        return;
    } else if (getWordsArray(text).length < 2) {
        document.getElementsByClassName('invalid-feedback')[1].style.display = 'block';
        return;
    }
    console.log(frequencyDictionary(text));
}

function handleInput() {
    document.querySelector('textarea#textForAnalysis + div.invalid-feedback').style.display = 'none';
}
