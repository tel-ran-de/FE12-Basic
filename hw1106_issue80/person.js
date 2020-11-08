// TASK 2 - filename person.js
//
// Write a Person Constructor that initializes name and age from arguments.
//     All instances of Person should initialize with an empty stomach array.
// Give instances of Person the ability to .eat("someFood"):
//     When eating an edible, it should be pushed into the stomach.
//     The eat method should have no effect if there are 10 items in the stomach.
// Give instances of Person the ability to .poop():
//     When an instance poops, its stomach should empty.
// Give instances of Person a method .toString():
//     It should return a string with name and age. Example: "Mary, 50"

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.stomach = [];

Person.prototype.eat = function (someFood, edible) {
    if (edible && someFood < 10) {
        for (let i = 0; i < this.stomach.length; i++) {
            this.stomach.push(i);
        }
        return this.name + ' is full';
    } else if (edible && someFood > 10) {
        return this.name + ' can`t eat anymore';
    } else return this.name + ' is hungry';
}

Person.prototype.poop = function () {
    this.stomach = [];
    return this.stomach + ' is empty';
}

Person.prototype.toString = function () {
    return this.name + ', ' + this.age + ' years old';
}

const person1 = new Person('Jonny', 5);
console.log('This is ' + person1.toString());
console.log('eat result: ' + person1.eat(11, true));
console.log('poop result: ' + person1.poop());
