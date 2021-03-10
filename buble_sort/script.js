const inputArray = [];

const n = +prompt("Please specify number of elements in the array:");

for (let i = 0; i < n; i++) {
    inputArray[i] = +prompt('Please enter a number');
    console.log(inputArray[i]);
}
console.log('Not sorted array: ' + inputArray);

const outputArray = bubbleSort(inputArray);
console.log('Sorted array: ' + outputArray);
console.log('Input array: ' + inputArray);

function bubbleSort(inArray) {
    const arr = [...inArray];
    let unsorted = true;
    while (unsorted) {
        unsorted = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                unsorted = true;
            }
        }
    }
    return arr;
}
