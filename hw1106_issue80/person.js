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

// TASK 3 - adding allergens to person
//     Person can have their own allergens list, that can be initialized in constructor.
//     After checking if the food is edible, check if the food is not allergen for this person.
//     Please note, that allergens list can be empty.


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
}

Person.prototype.unedible = ['stone', 'wood', 'plastic'];
Person.prototype.allergens = ['orange', 'cheese'];

Person.prototype.eat = function (someFood) {
    if (this.unedible.includes(someFood)) {
        console.log(someFood + ' is not edible')
        return;
    }
    if (this.allergens.includes(someFood)) {
        console.log(someFood + ' is allergen for ' + this.name)
        return;
    }
    if (this.stomach.length < 10) {
        this.stomach.push(someFood);
        console.log(this.name + ' is eating ' + someFood);
        return;
    }
    console.log(this.name + ' is not hungry');
}

Person.prototype.poop = function () {
    this.stomach = [];
}

Person.prototype.toString = function () {
    console.log(this.name + ', ' + this.age + ' years old');
}

const person1 = new Person('Jonny', 5);
person1.eat('apple');
person1.eat('wood');
person1.eat('cheese');
person1.poop();
person1.toString();
