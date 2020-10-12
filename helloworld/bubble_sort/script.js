const unsortedArray = Array.from({
    length: +prompt('Please enter the size of your array')
},num => +prompt(('Please enter some number ')));
console.log("Unsorted arr "+ unsortedArray);


function bubbleSort(arr) {
    for (let n = 0; n < arr.length; n++) {
        for (let i = 0; i < arr.length - 1 - n; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort(unsortedArray));


bubbleSort(unsortedArray);



