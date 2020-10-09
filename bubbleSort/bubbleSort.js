let array = createArray();

function createArray(){
    let arr = [];
    for (let i = 0; i < 10; i++){
        arr.push(prompt("Please, enter one number"));
}
    return arr;
}

console.log('Unsorted array is: ' + array);
console.log('Your array after bubble sort:');

function bubbleSort() {
    let tempNumber = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                tempNumber = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tempNumber;
            }
        }
    }
    return array;
}

let sortedArray = bubbleSort(array);
console.log(sortedArray);
