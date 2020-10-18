const str = "Отец мой Андрей Петрович Гринев в молодости своей служил при графе Минихе и вышел в отставку премьер-майором " +
    "в 17.. году. С тех пор жил он в своей Симбирской деревне, где и женился на девице Авдотье Васильевне Ю., дочери " +
    "бедного тамошнего дворянина. Нас было девять человек детей. Все мои братья и сестры умерли во младенчестве.";

function makeArrayFromString(string){
    let tempArray = string.split(" ");
    for (let i = 0; i < tempArray.length; i++) {
        let temp = tempArray[i];
        if (temp.endsWith(".") || temp.endsWith(",")){
            tempArray[i] = temp.substring(0, temp.length - 1);
        }
    }
    return tempArray;
}

function countFrequencyOfUsingWords(array){
    let reader = {};
    for (let i = 0; i < array.length; i++) {
        if (reader[array[i]] != null){
            reader[array[i]] += 1;
        }
        else {
            reader[array[i]] = 1;
        }
    }
    return reader;
}

let arrayFromString = makeArrayFromString(str);
let newTextReader = countFrequencyOfUsingWords(arrayFromString);

console.log(arrayFromString);
console.log(newTextReader);