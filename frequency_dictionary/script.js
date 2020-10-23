let frequencyDictionary;

const comparators = {
    'bottomToTop': function(a, b) {
        return a - b
    },
    'topToBottom': function(a, b) {
        return b - a
    }
};

function generateFrequencyDictionary(str) {
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

    const dictionaryArray = [];
    for (const word in dictionary) {
        dictionaryArray.push(
            {
                word: word,
                counter: dictionary[word]
            }
        );
    }

    return dictionaryArray;
}

function bubbleSort(inArray, comparator) {
    const arr = [...inArray];
    let unsorted = true;
    while (unsorted) {
        unsorted = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (comparator(arr[i].counter, arr[i + 1].counter) > 0) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                unsorted = true;
            }
        }
    }
    return arr;
}

function wordsStringToArray(str) {
    return str.split(/[\s.,?:!;\-"]+/)
        .filter(function(el) {
            return el.length !== 0
        });
}

function analyseAndInsertIntoTable() {
    const text = document.getElementById('textForAnalysis').value;
    if (text === '') {
        document.querySelector('.input-group div.invalid-feedback.empty').style.display = 'block';
        return;
    }
    if (wordsStringToArray(text).length < 2 ) {
        document.querySelector('.input-group div.invalid-feedback.minvalue').style.display = 'block';
        return;
    }
    frequencyDictionary = generateFrequencyDictionary(text);
    insertIntoTable(frequencyDictionary);
}

function handleOnFocus() {
    for (const element of document.querySelectorAll('.input-group div.invalid-feedback')) {
        element.style.display = 'none';
    }
}

function insertIntoTable(dictionaryArray) {
    const element = document.querySelector('table.table tbody');
    let toBeInserted = '';
    let i = 1;
    for (const word of dictionaryArray) {
        toBeInserted += `<tr><th scope="row">${i++}</th><td>${word.word}</td><td>${word.counter}</td></tr>`;
    }
    element.innerHTML = toBeInserted;
}

function show(startNumber, endNumber, sorted) {
    if (frequencyDictionary) {
        if (sorted)
            insertIntoTable(bubbleSort(frequencyDictionary, comparators[sorted]).slice(startNumber, endNumber));
        else
            insertIntoTable(frequencyDictionary.slice(startNumber, endNumber));
    }
}

function showTop3() {
    show(0, 3, 'topToBottom');
}

function showBottom3() {
    show(0, 3, 'bottomToTop');
}

function showAll() {
    show();
}
