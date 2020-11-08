function Address(street, houseNumber, city, country, zip) {
    this.street = street;
    this.houseNumber = houseNumber;
    this.city = city;
    this.country = country;
    this.zip = zip;
}

function Person(firstName, lastName, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;

}

Person.prototype.address = new Address();

Person.prototype.bio = function () {
    return this.firstName + ' ' + this.lastName + ' ' + this.gender + ' ' + this.sayAddress();
}

Person.prototype.sayAddress = function () {
    return this.address.street + ' ' + this.address.houseNumber + ' ' + this.address.city + ' ' + this.address.country + ' ' + this.address.zip;
}

const pushkin = new Person('Alexander', 'Pushkin', 'male');

const person3 = new Person('Inga', 'Schwarz', 'female');
person3.address.street = 'embankment river Moyka';
person3.address.houseNumber = '12';
person3.address.city = 'St Petersburg';
person3.address.country = 'Russia';
person3.address.zip = '191186';

console.log(pushkin.sayAddress());
console.log(person3.sayAddress());
console.log(person3.bio());
