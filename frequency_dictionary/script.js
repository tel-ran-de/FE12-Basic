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
        .filter(function (el) {
            return el.length !== 0
        });
}

function onButtonClick(sortType) {
    const text = document.getElementById('textForAnalysis').value;

    if (text === '') {
        document.querySelector('.input-group div.invalid-feedback.empty').style.display = 'block';
        return;
    }
    if (wordsStringToArray(text).length < 2) {
        document.querySelector('.input-group div.invalid-feedback.minvalue').style.display = 'block';
        return;
    }
    if (sortType === 0) {// показывать все
        return insertIntoTable(frequencyDictionary(text));
    }

    if (sortType === 1) {// по возрастанию
        let sortable = Object.fromEntries(
            Object.entries(frequencyDictionary(text)).sort(([, a], [, b]) => a - b));
        return insertIntoTable(sortable);
    }
    if (sortType === 2) {// по убыванию
        let sortable = Object.fromEntries(
            Object.entries(frequencyDictionary(text)).sort(([, a], [, b]) => b - a));
        return insertIntoTable(sortable, 3);
    }
}

function getTop3OnButtonClick() {
    return onButtonClick(2);
}

function getLow3OnButtonClick() {
    return onButtonClick(1);
}

function getAllOnButtonClick() {
    return onButtonClick(0);
}

function handleOnFocus() {
    for (const element of document.querySelectorAll('.input-group div.invalid-feedback')) {
        element.style.display = 'none';
    }
}

function insertIntoTable(wordsObject) {
    const element = document.querySelector('table.table tbody');

    let toBeInserted = '';
    let i = 1;
    for (const word in wordsObject) {
        toBeInserted += `<tr><th scope="row">${i++}</th><td>${word}</td><td>${wordsObject[word]}</td></tr>`;
    }
    element.innerHTML = toBeInserted;
}
