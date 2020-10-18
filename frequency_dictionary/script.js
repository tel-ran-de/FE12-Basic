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

function onButtonClick(){
    const text = document.getElementById('textForAmnalysis').value;
    if (text == '') {
        document.querySelector('textarea#textForAmnalysis + div.invalid-feedback').style.display = 'block';
        /*
        Or you can use this selector
        document.getElementsByClassName('invalid-feedback')[0].style.display = 'block';
*/
        return;
    }
    console.log(frequencyDictionary(text));
}

function handleOnFocus() {
    document.querySelector('textarea#textForAmnalysis + div.invalid-feedback').style.display = 'none';
}



//console.log(frequencyDictionary('Отец мой Андрей Петрович Гринев в молодости своей служил при графе Минихе и вышел в отставку премьер-майором в 17.. году. С тех пор жил он в своей Симбирской деревне, где и женился на девице Авдотье Васильевне Ю., дочери бедного тамошнего дворянина. Нас было девять человек детей. Все мои братья и сестры умерли во младенчестве.'));