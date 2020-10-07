console.log("Not sorted array:")
console.log(41, 9, 7, 144, 3, 11, 62, 79, 1, -6, 12);
let arr = [41, 9, 7, 144, 3, 11, 62, 79, 1, -6, 12];
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
console.log("Sorted array:")
console.log(arr);
