function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
}

Person.prototype.unedible = ['stone', 'glass', 'wood', 'plastic'];

Person.prototype.eat = function (food) {
    if (this.unedible.includes(food)) {
        console.log(`${food} is not edible`);
        return;
    }

    if (this.stomach.length < 10) {
        console.log(food);
        this.stomach.push(food);
        console.log('Person ' + this.name + ' is eating ' + food);
        return;
    }

    console.log('Person ' + this.name + ' is not hungry');
}

Person.prototype.poop = function () {
    console.log('Person ' + this.name + ' is pooping');
    return this.stomach.length = 0;
}

Person.prototype.toString = function () {
    return this.name + ', ' + this.age;
}

const pers = new Person("Mary", 50);
