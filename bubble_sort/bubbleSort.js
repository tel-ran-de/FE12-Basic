let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = +prompt('Please enter a number');
    //console.log(arr[i]);
}
console.log('Not sorted array: ' + arr);

arr = bubbleSort(arr);

function bubbleSort(arr) {
    unsorted = true;
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
    return console.log('Sorted array: ' + arr);
}
