let text = "Отец мой Андрей Петрович Гринев в молодости своей служил при графе Минихе и вышел в отставку премьер-майором" +
    " в 17.. году. С тех пор жил он в своей Симбирской деревне, где и женился на девице Авдотье Васильевне Ю., дочери" +
    " бедного тамошнего дворянина. Нас было девять человек детей. Все мои братья и сестры умерли во младенчестве.";

let frequency = { //необходимо создать объект
}

let regex = /[,-./... ]/g;
let textWithoutPunctuation = text.replace(regex, ' ');
let arrayWords = textWithoutPunctuation.split(/[ ]+/);
console.log(arrayWords);

function getWordFrequency() {
    for (const word of arrayWords) {
        if (word != "") {
            if (frequency[word]) {
                frequency[word] += 1;
            } else
                frequency[word] = 1;
        }
    }
}
getWordFrequency();
console.log(frequency);
