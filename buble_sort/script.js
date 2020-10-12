const inputArray = [];

const n = +prompt("Please specify number of elements in the array:");

for (let i = 0; i < n; i++) {
    inputArray[i] = +prompt('Please enter a number');
    console.log(inputArray[i]);
}
console.log('Not sorted array: ' + inputArray);

const outputArray = bubbleSort(inputArray);
console.log('Sorted array: ' + outputArray);
console.log('Input array: ' + sortCopy(inputArray));

 function sortCopy(arr) {
      return arr.slice(0).sort();  //The slice(0) expression creates a copy of the array starting at element 0.
    }

function bubbleSort() {

    let unsorted = true;
    while (unsorted) {
        unsorted = false;
        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i] > inputArray[i + 1]) {
                let temp = inputArray[i];
                inputArray[i] = inputArray[i + 1];
                inputArray[i + 1] = temp;
                unsorted = true;
            }
        }
    }




}
