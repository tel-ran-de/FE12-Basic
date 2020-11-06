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
    return this.firstName + ' ' + this.lastName + ' ' + this.gender + ' ' + this.address;
}

Person.prototype.sayAddress = function () {
    return this.address.street + ' ' + this.address.houseNumber + ' ' + this.address.city + ' ' + this.address.country + ' ' + this.address.zip;
}

const pushkin = new Person('Alexander', 'Pushkin', 'male');

const person3 = new Person('Inga', 'Schwarz', 'female',
    new Address('embankment river Moyka',
        '12', 'St Petersburg',
        'Russia', '191186'));

console.log(pushkin.sayAddress());
console.log(person3.sayAddress());
console.log(person3.bio());
