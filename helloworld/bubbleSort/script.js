let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers[i] = +prompt(`Please type some number ${i + 1}`);
}
console.log(`unsorted array: ${numbers}`);
bubbleSort(numbers);
console.log(`sorted array: ` + numbers);

function bubbleSort(numbers) {
    unsorted = true;
    while (unsorted) {
        unsorted = false;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > numbers[i + 1]) {
                let temp = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = temp;
                unsorted = true;
            }
        }
    }
}
