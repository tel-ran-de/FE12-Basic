console.log('bubble sort:');
let array = [32, 43, 5, -3, 54, 452, 0];

function bubbleSort(array) {
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
