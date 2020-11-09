function Person (name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
}

Person.prototype.unedible = ['stone', 'wood', 'plastik', 'glass'];

Person.prototype.eat = function (food) {
    if (this.unedible.includes(food)) {
        console.log(food + ' is not edible');
        return;
    }
    if (this.stomach.length < 10) {
        this.stomach.push(food);
        console.log('Person ' + Person.name + ' is eating ' + food);
        return;
    }
        console.log('Person ' + Person.name + ' is not hungry.')
}

Person.prototype.poop = function () {
    console.log(Person.name + ' is pooping.')
    return this.stomach.length = 0;
}

Person.prototype.toString = function () {
    return this.name + ', ' + this.age;
}

const person1 = new Person("Mary", 50);

person1.toString();