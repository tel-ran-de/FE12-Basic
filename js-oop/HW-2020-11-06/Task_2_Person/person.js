function Person(name, age) {
    this.name = name;
    this.age = age;
}

const someFood = ['meat', 'fish', 'salad', 'apple', 'banana', 'bread', 'chocolate', 'chips', 'avocado', 'cookies', 'hamburger'];

Person.prototype.stomach = [];

Person.prototype.eat = function () {
    for (let i = 0; i < someFood.length && this.stomach.length < 10; i++) {
        this.stomach.push(someFood[i]);
    }
    return this.stomach;
}

Person.prototype.poop = function () {
    return this.stomach = [];
}

Person.prototype.toString = function () {
    return this.name + ' , ' + this.age;
}

const person1 = new Person('Ivan', 25);

console.log(person1.toString());
console.log(person1.name + ' ate ' + person1.eat().length + ' following food items: ' + person1.eat() + '.');
console.log(person1.name + "'s stomach is empty and contains " + person1.poop().length + ' food items.');
