const inputArray = [];

const n = +prompt("Please specify number of elements in the array:");

for (let i = 0; i < n; i++) {
    inputArray[i] = +prompt('Please enter a number');
    console.log(inputArray[i]);
}

console.log('Not sorted array: ' + inputArray);
console.log('Input array: ' + inputCopy(inputArray));

const outputArray = bubbleSort(inputArray);
console.log('Sorted array: ' + outputArray);

function inputCopy(arr){
    const copy = [];
    for (let i = 0; i < arr.length; i++) {
        copy[i] = arr[i];
        //copy.push(arr[i]);
    }
    return copy;
}

function bubbleSort(arr) {
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
