'use strict';
//start index.html

let size, arr = [];
// 1. Вариант
//arr = prompt("Введите значения массива, если можно, то только числа. Через запятую").split(',');
//использована только запятая, а не запятая и пробел.

// 2.Вариант
size = prompt("Введите размер массива, например 5");
console.log("размер массива: " + size);

for (let i = 0; i < size; i++) {
    arr[i] = prompt(`Введите ${i}-ый элемент массива`);
}

console.log("первая распечатка: " + arr)
setTimeout(bubbleSort(arr), 1000);
console.log("Массив после сортировки: " + arr)

console.log("It works!")

function bubbleSort(arrUnsort) {
    let count = 0;
    for (let i = 0; i < arrUnsort.length; i++) {
        if (arrUnsort[i] > arrUnsort[i + 1]) {
            let temp = arrUnsort[i];
            arrUnsort[i] = arrUnsort[i + 1];
            arrUnsort[i + 1] = temp;
            count++;
        }
    }
    if (count > 0) {
        bubbleSort(arrUnsort);
    }
}