const inputText = "Отец мой Андрей Петрович Гринев в молодости своей служил при графе Минихе и вышел в отставку премьер-майором в 17.. году. С тех пор жил он в своей Симбирской деревне, где и женился на девице Авдотье Васильевне Ю., дочери бедного тамошнего дворянина. Нас было девять человек детей. Все мои братья и сестры умерли во младенчестве.";

let wordsArray = inputText.split(/[ .,;:?!-]+/);

function createObjectFromText(wordsArray){
    const wordsCounter = {};
    for (let i = 0; i<wordsArray.length; i++){
        if(!wordsCounter[wordsArray[i]]){
            wordsCounter[wordsArray[i]] = 0;
        }
        wordsCounter[wordsArray[i]] +=1;
    }
    return wordsCounter;
}
console.log(createObjectFromText(wordsArray));
