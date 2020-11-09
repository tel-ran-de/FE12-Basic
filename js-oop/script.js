// const person = {};
//
// person.firstName = 'John';
// person['lastName'] = 'Smith';

function bio() {

}

const person = {
    firstName: 'John',
    lastName: 'Smith',
    gender: 'male',
    bio: function() {
        return this.firstName + ' ' + this.lastName + ' ' + this.gender;
    },
    greeting: function() {
        console.log("Hello, " + this.bio())
    }
}

// function Person(firstName, lastName, gender) {
//     const person = {};
//     person.firstName = firstName;
//     person.lastName = lastName;
//     person.gender = gender;
//     person.bio = function() {
//         return person.firstName + ' ' + person.lastName + ' ' + person.gender;
//     };
//     person.greeting = function() {
//         return "Hello, " + person.bio()
//     };
//     return person;
// }
//
// const person1 = Person('Vasya', 'Pupkin', 'male');
// const person2 = Person('Jack', 'Russel', 'terrier');

function Person(firstName, lastName, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
}

Person.prototype.bio = function() {
    return this.firstName + ' ' + this.lastName + ' ' + this.gender;
}
Person.prototype.greeting = function() {
    return 'Hello, ' + this.bio();
}

const person1 = new Person('Vasya', 'Pupkin', 'male');
const person2 = new Person('Jack', 'Russel', 'terrier');

Person.prototype.greetOtherPerson = function(person) {
    return person.bio() + ' greets me ' + this.bio()
}

function Address(street, houseNumber, city, country, zip) {
    this.street = street;
    this.houseNumber = houseNumber;
    this.city = city;
    this.country = country;
    this.zip = zip;
}

Person.prototype.address = new Address();

Person.prototype.sayAddress = function() {
    return this.address.houseNumber + ' ' + this.address.street + ', '
            + this.address.city + ', ' + this.address.country + ', '
            + this.address.zip;
}

const pushkin = new Person("Alexander", "Pushkin", "male");
console.log(pushkin.sayAddress());

pushkin.address.street = 'embankment river Moyka';
pushkin.address.houseNumber = '12';
pushkin.address.city = 'St Petersburg';
pushkin.address.country = 'Russia';
pushkin.address.zip = '191186';

//Also possible
//pushkin.address = new Address('embankment river Moyka','12', 'St Petersburg', 'Russia', '191186');

console.log(pushkin.sayAddress());
