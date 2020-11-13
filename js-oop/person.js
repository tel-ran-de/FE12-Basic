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
// TASK 3 - adding allergens to person
// Person can have their own allergens list, that can be initialized in constructor.
//     After checking if the food is edible, check if the food is not allergen for this person. Please note, that
//     allergens list can be empty.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.unedible = ['stone', 'wood', 'plastic', 'glass'];
Person.prototype.allergens = ['orange', 'nuts'];

Person.prototype.stomach = [];

Person.prototype.eat = function (...food) {
    food.forEach(meal => {
        if (this.stomach.length < 10) {
            this.stomach.push(meal);
            if (this.unedible.includes(meal) || this.allergens.includes(meal)) {
                console.log(`${meal} is not edible or may cause allergies`);
            }
            if (!this.unedible.includes(meal)) {
                console.log(`Person ${this.name} is eating ${meal}`);
            }
        } else {
            console.log(`Person ${this.name} is not `);
        }
    })
}

Person.prototype.poop = function () {
    this.stomach = [];
}

Person.prototype.toString = function () {
    return this.name + ' , ' + this.age;
}

const pers = new Person("Daniel", 55);
pers.eat('plastic', 'meat', 'water', 'wood', 'plastic', 'orange', 'nuts');
console.log(pers.stomach);
pers.poop();
console.log(pers.stomach);
