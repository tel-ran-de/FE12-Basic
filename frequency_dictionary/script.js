function frequencyDictionary(str) {
    const dictionary = {};
    const wordsArray = makeArray(str);

    console.log(wordsArray);
    for (let i = 0; i < wordsArray.length; i++) {
        if (dictionary[wordsArray[i]]) {
            dictionary[wordsArray[i]]++;
        } else {
            dictionary[wordsArray[i]] = 1;
        }
    }
    return dictionary;
}

function makeArray(string) {
    return string.split(/[\s.,?:!;\-"]+/)
        .filter(function (el) {
            return el.length !== 0
        });
}

function onButtonClick() {
    const text = document.getElementById('textForAnalysis').value;
    const array = makeArray(text);
    if (array.length === 0) {
        document.getElementById('nullInput').style.display = 'block';
    } else if (array.length === 1) {
        document.getElementById('less2words').style.display = 'block';
    } else {
        console.log(frequencyDictionary(text));
    }
}

function startTyping() {
    document.getElementsByClassName('invalid-feedback')[1].style.display = 'none';
    document.getElementsByClassName('invalid-feedback')[0].style.display = 'none';
}
