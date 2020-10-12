const length=prompt("How many numbers?");
let i=0;
let arr=[];
while (i<length){
    arr.push(prompt("your number: "));
    i++;
}
arr=bubbleSort(arr);

for (let i=0;i<length;i++) {
    console.log(arr[i]);
}
function bubbleSort(arr){
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}
