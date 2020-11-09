function Person(name, age, allergensList) {
    this.name = name;
    this.age = age;
    this.stomach = [];
    this.allergensList = allergensList;
}

Person.prototype.unedible = ['stone', 'wood', 'plastic', 'glass'];

Person.prototype.eat = function (...food) {
    //if (this.unedible.includes(food)){
    if (food.forEach(meal => this.unedible.includes(meal))){
        console.log(food + ' is not edible');
        return;
    }

    if (this.allergensList.length !== 0){
        if (food.forEach(meal => this.unedible.includes(meal))){
            console.log(this.name + ' has allergic from the ' + food);
            return;
        }
    }

    if (this.stomach.length < 10) {
        food.forEach(meat => this.stomach.push(meat));
        //this.stomach.push(food);
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
pers.eat('banana');
pers.poop();
pers.toString();
