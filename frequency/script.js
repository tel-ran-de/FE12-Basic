function frequencyDictionary(str) {
    const dictionary = {};

    const wordsArray = str.split(/[\s.,?:!;\-"]+/)
    if (wordsArray.length==1){
        document.getElementsByClassName('invalid-feedback')[1].style.display = 'block';

        return;
    }

        wordsArray.filter(function(el) {
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
        document.getElementsByClassName('invalid-feedback')[0].style.display = 'block';

        return;
    }
    console.log(frequencyDictionary(text));
}

function handleOnInput() {
    document.getElementsByClassName('invalid-feedback')[0].style.display = 'none';
    document.getElementsByClassName('invalid-feedback')[1].style.display = 'none';
}

//console.log(frequencyDictionary(''));