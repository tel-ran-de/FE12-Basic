function Person(name, age, allergensList) {
    this.name = name;
    this.age = age;
    this.stomach = [];
    if (allergensList !== undefined) {
        this.allergensList = allergensList;
    }
    else this.allergensList = [];
}

Person.prototype.unedible = ['stone', 'wood', 'plastic', 'glass'];

Person.prototype.eat = function (food) {
    //if (food.forEach(meal => (this.unedible.includes(meal)))){  -> doesn't works
    if (this.unedible.includes(food)){
        console.log('This meal is not edible');
        return;
    }

    if (this.allergensList.length !== 0){
        if (this.allergensList.includes(food)){
            console.log(this.name + ' has allergic from the ' + food);
            return;
        }
    }

    if (this.stomach.length < 10) {
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
pers.eat('banana');
pers.poop();
console.log(pers.toString());
pers.allergensList = ['milk', 'egg'];
pers.eat('milk');
pers.eat('apple');
pers.eat('wood');
console.log(pers.stomach);