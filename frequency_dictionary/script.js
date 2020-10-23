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
    return str.toLowerCase().split(/[\s.,?:!;\-"'()]+/)
        .filter(function (el) {
            return el.length !== 0
        });
}

function onButtonClick() {
    const text = document.getElementById('textForAnalysis').value;
    if (text === '') {
        document.querySelector('.input-group div.invalid-feedback.empty').style.display = 'block';
        return;
    }
    if (wordsStringToArray(text).length < 2) {
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
    let toBeInserted = '';
    let i = 1;
    for (const word in wordsObject) {
        toBeInserted += `<tr><th scope="row">${i++}</th><td>${word}</td><td>${wordsObject[word]}</td></tr>`;
    }
    element.innerHTML = toBeInserted;
}


function showTop3() {
    const text = document.getElementById('textForAnalysis').value;
    let sorted = Object.fromEntries(
        Object.entries(frequencyDictionary(text))
            .sort((a, b) => b[1] - a[1]).slice(0, 3)
    );
    insertIntoTable(sorted);
}

function showBottom3() {
    const text = document.getElementById('textForAnalysis').value;
    let sorted = Object.fromEntries(
        Object.entries(frequencyDictionary(text))
            .sort((a, b) => a[1] - b[1]).slice(0, 3)
        )
    ;
    insertIntoTable(sorted);
}

function showAllSorted() {
    const text = document.getElementById('textForAnalysis').value;
    let sorted = Object.fromEntries(
        Object.entries(frequencyDictionary(text))
            .sort((a, b) => b[1] - a[1])
    );
    insertIntoTable(sorted);
}
