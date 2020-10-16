const inputArray = [];

const n = +prompt("Please specify number of elements in the array:");

for (let i = 0; i < n; i++) {
    inputArray[i] = +prompt('Please enter a number');
    console.log(inputArray[i]);
}
console.log('Sorted array: ' + bubbleSort(getCopyInputArray(inputArray)));
console.log('Not sorted array: ' + inputArray);

 function getCopyInputArray(array1) {
 const numbersCopy = [];
    for (i = 0; i < array1.length; i++) {
    numbersCopy[i] = array1[i];
 }
    return numbersCopy;
  }

function bubbleSort(array) {
    let unsorted = true;
    while (unsorted) {
        unsorted = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                unsorted = true;
            }
        }
    }
    return array
}
