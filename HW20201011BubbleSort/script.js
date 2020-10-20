let array =[];
for ( let i=1; i<4;i++) {
    array[i] = +prompt(' insert the number:');
}

console.log(array);


function bubbleSort(inputArray) {
    let isSort=false;
    let sortedArray=[];
    for ( let j = 0; j<inputArray; j++){
        inputArray[j]=sortedArray[j];
    }
    while (!isSort){
        isSort=true;
        for (let i = 0; i<sortedArray.length; i++){
            if (sortedArray[i]<sortedArray[i-1]){
                let temp = sortedArray[i];
                sortedArray[i] = sortedArray[i - 1];
                sortedArray[i - 1] = temp;
                isSort = false;
            }
        }
    }
    return sortedArray;
}
console.log(bubbleSort(array));