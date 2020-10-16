const text = "При вызове функции результат её вызова на предыдущем элементе массива передаётся как первый аргумент. Звучит сложновато, но всё становится проще, если думать о первом аргументе как «аккумулирующем» результат предыдущих вызовов функции"
console.log(text);

let array = text.split(" ");
console.log(array);

let result = [];
calculateWords(array);
console.log(result);

function calculateWords(array) {
    for (const word of array) {
        if (word !== "") {
            if (result[word]) {
                result[word] = result[word] + 1;
            } else {
                result[word] = 1;
            }
        }
    }
}


