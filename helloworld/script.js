/*alert("Hello, World!");
*
* multi line comment
* */

// one line comment


const a = 10; // number

const str = "Hello, World"; // string "", ''

console.log('"That is it!"');
console.log("That's it!");

console.log('Const a equals ' + a + 'asdkfjkadsj');
console.log(`Const a equals ${a}`); // string with backticks

const b = true; // boolean
const d = false; // boolean

if (a == 10) { // equals
    console.log(" a == 10");
}

if (a === "10") { // equals equals
    console.log('a === "10"');
}

if (a == "10") {
    console.log('a == "10"');
}

let otherStr = "string";
console.log(otherStr);
otherStr = 100;
console.log(otherStr);

console.log('for loop')
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('while loop')
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// array
let arr = [1, 2, 5, 'bingo', true];
console.log(arr);

// iterating over array
for (let i = 0; i < arr.length; i++ ) {
    console.log(`arr[${i}] = ${arr[i]}`);
}

// let stringFromConsole = prompt("Please type some value");
// console.log(stringFromConsole);

const numbers = [];
for (let i = 0; i < 2; i++) {
    numbers[i] = +prompt('Please type some number');
}
numbers[2] = 'Vasya';

console.log(numbers);

// numbers = []; --->>> will be error

//How are we going to manipulate DOM
document.getElementById('introduction_header').innerHTML = 'Hello, world';

