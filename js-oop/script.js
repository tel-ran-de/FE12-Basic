function bio() {

}

const person = {
    firstName: 'John',
    lastName: 'Smith',
    gender: 'male',
    bio: function () {
        return this.firstName + ' ' + this.lastName + ' ' + this.gender;
    },
    greeting: function () {
        console.log("Hello, " + this.bio())
    }
}

function Person(firstName, lastName, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
}

function Address(street, houseNumber, city, country, zip) {
    this.street = street;
    this.houseNumber = houseNumber;
    this.city = city;
    this.country = country;
    this.zip = zip;
}

Person.prototype.address = new Address();

Person.prototype.bio = function () {
    return this.firstName + ' ' + this.lastName + ' ' + this.gender;
}
Person.prototype.greeting = function () {
    return 'Hello, ' + this.bio();
}

Person.prototype.greetOtherPerson = function (person) {
    return person.bio() + ' greets me ' + this.bio()
}

Address.prototype.getAddress = function (){
    return this.zip + ', ' + this.country + ', ' +
        this.city + ', ' + this.street + ', ' + this.houseNumber;
}

Person.prototype.sayAddress = function (){
    return 'address is ' + this.address.getAddress();
}

const person1 = new Person('Vasya', 'Pupkin', 'male');
const person2 = new Person('Jack', 'Russel', 'terrier');
const person3 = new Person('Alexander', 'Pushkin', 'male');

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
