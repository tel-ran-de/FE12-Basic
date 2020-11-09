function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
}

Person.prototype.eat = function (food) {
    if (this.stomach.length < 10) {
        this.stomach.push(food);
        console.log('Person ' + this.name + ' is eating ' + food);
    } else {
        console.log('Person ' + this.name + ' is not hungry');
    }
}

Person.prototype.poop = function () {
    console.log('Person ' + this.name + ' is pooping');
    return this.stomach.length = 0;
}

Person.prototype.toString = function () {
    return this.name + ', ' + this.age;
}

const pers = new Person("Mary", 50);
pers.eat('banana');
pers.eat('carrot');
pers.eat('carrot');
pers.eat('chips');
pers.eat('fish');
pers.eat('cake');
pers.eat('cake');
pers.eat('cake');
pers.eat('tomato');
pers.eat('tomato');
pers.eat('candy');
pers.poop();
pers.toString();

