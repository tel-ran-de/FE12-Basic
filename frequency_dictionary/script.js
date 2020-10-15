let text = "Отец мой Андрей Петрович Гринев в молодости своей служил при графе Минихе и вышел в отставку премьер-майором в 17.. году. С тех пор жил он в своей Симбирской деревне, где и женился на девице Авдотье Васильевне Ю., дочери бедного тамошнего дворянина. Нас было девять человек детей. Все мои братья и сестры умерли во младенчестве."

let frequency = {};

let data = text.split(/[ ,.]+/);
console.log(data);

//add word in Object
function frequencyFunction(text) {
    for (const word of text) {
        if (frequency[word]) {
            frequency[word] += 1;
        } else
            frequency[word] = 1;
    }
}

frequencyFunction(data);

// copy Object for sorting
let byFrequency = Object.assign(frequency);

//сортирует, только выводит само слово, без количества вхождений
let sorted = Object.keys(byFrequency).sort(function (a, b) {
    return byFrequency[b]-byFrequency[a];
});

//original Object with word + frequency
    console.log(frequency);

//sorted Object (by frequency)
    console.log(sorted);
