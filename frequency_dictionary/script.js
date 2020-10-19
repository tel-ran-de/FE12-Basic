function frequencyDictionary(str) {
    const dictionary = {};

    const wordsArray = wordsStringToArray(str);

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

function wordsStringToArray(str) {
    return str.split(/[\s.,?:!;\-"]+/)
        .filter(function(el) {
            return el.length !== 0
        });
}

function onButtonClick() {
    const text = document.getElementById('textForAnalysis').value;
    if (text === '') {
        document.querySelector('.input-group div.invalid-feedback.empty').style.display = 'block';
        return;
    }
    if (wordsStringToArray(text).length < 2 ) {
        document.querySelector('.input-group div.invalid-feedback.minvalue').style.display = 'block';
        return;
    }
    insertIntoTable(frequencyDictionary(text));
}

function handleOnFocus() {
    for (const element of document.querySelectorAll('.input-group div.invalid-feedback')) {
        element.style.display = 'none';
    }
}

function insertIntoTable(wordsObject) {
    const element = document.querySelector('table.table tbody');
    /* <tr><th scope="row">1</th><td>this</td><td>20</td></tr> */
    for (const word in wordsObject) {
        console.log(word, wordsObject[word]);
    }
}
