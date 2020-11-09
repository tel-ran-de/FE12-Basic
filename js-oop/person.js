// TASK 2 - filename person.js
// Write a Person Constructor that initializes name and age from arguments.
//     All instances of Person should initialize with an empty stomach array.
//     Give instances of Person the ability to .eat("someFood"):
// When eating an edible, it should be pushed into the stomach.
//     The eat method should have no effect if there are 10 items in the stomach.
//     Give instances of Person the ability to .poop():
// When an instance poops, its stomach should empty.
//     Give instances of Person a method .toString():
// It should return a string with name and age. Example: "Mary, 50"

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.stomach = [];
let someFood = ['meat', 'bacon', 'beef', 'chicken', 'cooked meat', 'duck', 'ham', 'lamb', 'liver', 'mince', 'salami', 'sausages',
    'sausage', 'roll', 'turkey', 'veal'];

Person.prototype.eat = function () {
    for (let i = 0; i < someFood.length; i++) {
        while (this.stomach.length < 10) {
            this.stomach.push(someFood[i]);
            i++;
        }
        // if (this.stomach.length === 10) {
        //     this.poop();
        // } else {
        //     return this.stomach
        // }
    }
    return this.stomach;
}

Person.prototype.poop = function () {
    this.stomach = [];
    return this.stomach;
}

Person.prototype.toString = function () {
    return this.name + ' , ' + this.age;
}

const person1 = new Person("Daniel", 55);
person1.eat();
console.log(person1.eat());
