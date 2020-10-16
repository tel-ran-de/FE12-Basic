function frequencyDictionary(str) {
    const dictionary = {};

    const wordsArray = str.split(/[\s.,?:!;\-"]+/)
        .filter(function(el) {
            return el.length !== 0
        });

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

function onButtonClick() {
    const text = document.getElementById('textForAnalysis').value;
    if (text === '') {
        document.querySelector('textarea#textForAnalysis + div.invalid-feedback').style.display = 'block';
        /*
        Or you can use this selector
        document.getElementsByClassName('invalid-feedback')[0].style.display = 'block';
         */
        return;
    }
    console.log(frequencyDictionary(text));
}

function handleOnFocus() {
    document.querySelector('textarea#textForAnalysis + div.invalid-feedback').style.display = 'none';
}

//console.log(frequencyDictionary(''));
