/*let array = [];
for (let i = 0; i < 20; +i++) {
    array[i] = prompt("Please choose number ");
    console.log(array[i]);
}*/
function bubbleSort(inputArr) {
    let n = inputArr.length;
    let sorted = false;
    let numOfIterations = 0;

    while(!sorted) {
        sorted = true;
        for(let i = 0; i < inputArr.length; i++){
            if(inputArr[i] > inputArr[i+1]){
                let t = inputArr[i];
                inputArr[i] = inputArr[i+1];
                inputArr[i+1] = t;
                sorted = false;
                numOfIterations++;
            }
        }
    }
    return inputArr;
}
let inputArr = [5,1,20,2,8];
bubbleSort(inputArr);
console.log(inputArr)
console.log("Sorted array "+inputArr);