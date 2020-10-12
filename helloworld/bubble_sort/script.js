let unsortedArray = Array.from({
    length: +prompt('Please enter the size of your array')
},num => +prompt(('Please enter some number ')));
console.log(unsortedArray);


function bubbleSort(arr) {
    for (let n = 0; n < unsortedArray.length; n++) {
        for (let i = 0; i < unsortedArray.length - 1 - n; i++) {
            if (unsortedArray[i] > unsortedArray[i + 1]) {
                let temp = unsortedArray[i];
                unsortedArray[i] = unsortedArray[i + 1];
                unsortedArray[i + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort(unsortedArray));


bubbleSort(unsortedArray);



