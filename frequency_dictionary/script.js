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
    return str.split(/[\s.,?:!;'\-1234567890"]+/)
        .filter(function (el) {
            return el.length !== 0
        });
}


function checkTextLength(text) {
    if (text === '') {
        document.querySelector('.input-group div.invalid-feedback.empty').style.display = 'block';
        return false;
    }
    if (wordsStringToArray(text).length < 2) {
        document.querySelector('.input-group div.invalid-feedback.minvalue').style.display = 'block';
        return false;
    }
    return true;
}

function getSorted() {
    const text = document.getElementById('textForAnalysis').value;
    let dictionary = frequencyDictionary(text);
    let sortedDictionary = {};

    if (checkTextLength(text)) {
        sortedDictionary = Object.fromEntries(Object.entries(dictionary).sort(((a, b) => b[1] - a[1])));
    }
    return sortedDictionary;
}

function treeMostFrequentWordsButton() {
    let mostFrequentWords = Object.entries(getSorted()).slice(0, 3);
    insertIntoTable(mostFrequentWords);
}

function treeLeastFrequentWordsButton() {
    let leastFrequentWords = Object.entries(getSorted()).slice(-3);
    insertIntoTable(leastFrequentWords);
}

function showAllWordsButton() {
    insertIntoTable(getSorted());
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
        toBeInserted += `<tr><th scope="row">${i++}</th><td>${wordsObject[word][0]}</td><td>${wordsObject[word][1]}</td></tr>`;
    }
    element.innerHTML = toBeInserted;
}
