let frequencyDictionary;

const comparators = {
    'bottomToTop': function (a, b) {
        return a - b
    },
    'topToBottom': function (a, b) {
        return b - a
    }
};

function generateFrequencyDictionary(str) {
    const dictionary = {};
    const wordsArray = wordsStringToArray(str);

    for (let i = 0; i < wordsArray.length; i++) {
        if (dictionary[wordsArray[i]]) {
            dictionary[wordsArray[i]]++;
        } else {
            dictionary[wordsArray[i]] = 1;
        }
    }

    const dictionaryArray = [];

    for (let i = 1; i < wordsArray.length; i++) {
        dictionaryArray.push(
            {
                id: i,
                word: wordsArray[i],
                counter: dictionary[wordsArray[i]]
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
        .filter(function (el) {
            return el.length !== 0
        });
}

function analyseAndInsertIntoTable() {
    const text = document.getElementById('textForAnalysis').value;
    if (text === '') {
        document.querySelector('.input-group div.invalid-feedback.empty').style.display = 'block';
        return;
    }
    if (wordsStringToArray(text).length < 2) {
        document.querySelector('.input-group div.invalid-feedback.minvalue').style.display = 'block';
        return;
    }
    loadList();
}

function handleOnFocus() {
    for (const element of document.querySelectorAll('.input-group div.invalid-feedback')) {
        element.style.display = 'none';
    }
}

function insertIntoTable(dictionaryArray) {
    const element = document.querySelector('table.table tbody');
    let toBeInserted = '';

    for (const row of dictionaryArray) {
        toBeInserted += `<tr><th scope="row">${row.id}</th><td>${row.word}</td><td>${row.counter}</td></tr>`;
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

// global JavaScript variables
let currentPage = 1;
let numberPerPage = 5;

function getNumberOfPages() {
    const text = document.getElementById('textForAnalysis').value;
    frequencyDictionary = generateFrequencyDictionary(text);
    return Math.ceil(frequencyDictionary.length / numberPerPage);
}

function nextPage() {
    currentPage += 1;
    loadList();
}

function previousPage() {
    currentPage -= 1;
    loadList();
}

function firstPage() {
    currentPage = 1;
    loadList();
}

function lastPage() {
    currentPage = getNumberOfPages();
    loadList();
}

function loadList() {
    let begin = ((currentPage - 1) * numberPerPage);
    let end = begin + numberPerPage;

    check(); // проверка статусов pagination buttons
    show(begin, end);
}

window.onload = loadList;

//Обновление статусов кнопок
function check() {
    document.getElementById("next").disabled = currentPage == getNumberOfPages() ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == getNumberOfPages() ? true : false;
}
