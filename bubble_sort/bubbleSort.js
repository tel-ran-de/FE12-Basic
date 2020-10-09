console.log("Not sorted array:")
let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = prompt("Please enter number");
    console.log(arr[i]);
}
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
