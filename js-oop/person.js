function Person (name, age, allergensList) {
    this.name = name;
    this.age = age;
    this.stomach = [];
    this.allergensList = allergensList;
}

Person.prototype.unedible = ['stone', 'wood', 'plastik', 'glass'];

Person.prototype.eat = function (food) {

    if (this.unedible.includes(food)) {
        console.log(food + ' is not edible');
        return;
    }

    if (this.stomach.length < 5) {
        if (this.allergensList.includes(food)) {
            console.log('Person ' + this.name + ' has an allergy to  ' + food + '. Try another food.');
            return;
        }
        this.stomach.push(food);
        console.log('Person ' + this.name + ' is eating ' + food);
        return;
    }
        console.log('Person ' + this.name + ' is not hungry. It is time to poop.')

}

Person.prototype.poop = function () {
    console.log(Person.name + ' is pooping.')
    return this.stomach.length = 0;
}

Person.prototype.toString = function () {
    return this.name + ', ' + this.age;
}

const person1 = new Person("Mary", 50, ['eggs']);
const person2 = new Person("Jack", 40);
const person3 = new Person("Anna", 25, ['nuts', 'potato']);

