/*alert("Hello world!");
*
*
 */

const a = 10; // number

const str = "Hello world!";

console.log('"That is it!"')
console.log("That's it!");

console.log('Const a equals '+a);
console.log(`Const a equals ${a}`);

const b = true;
const d = false;

if (a == 10) {
    console.log(" a = 10");
}

if (a==="10") {
    console.log('a === 10');
}

if (a == "10"){
    console.log(' a == "10"');
}

let otherStr = "string";
console.log(otherStr);
otherStr = 100;
console.log(otherStr);

console.log("for loop");
for (let i = 0; i<10; i++) {
    console.log(i);
}

console.log("while loop");
let i = 0;
while (i<0) {
    console.log(i);
    i++;
}
let arr = [1, 2, 5, 'bingo', true];
console.log(arr);

for (let i = 0; i<arr.length; i++) {
    console.log(`arr[${i}] = ${arr[i]}`)
}

let stringFromConsole = prompt("Please type some value");
console.log(stringFromConsole);
