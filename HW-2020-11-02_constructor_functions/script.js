function Address(street, houseNumber, city, country, zip) {
    this.street = street;
    this.houseNumber = houseNumber;
    this.city = city;
    this.country = country;
    this.zip = zip;
}

function Person(firstName, lastName, gender, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.address = function () {
        return address.street + ' ' + address.houseNumber + ' ' + address.city + ' ' + address.country + ' ' + address.zip;
    };
}

Person.prototype.bio = function () {
    return this.firstName + ' ' + this.lastName + ' ' + this.gender + ' ' + this.address();
}

Person.prototype.sayAddress = function () {
    return this.address();
}

const pushkin = new Person('Alexander', 'Pushkin', 'male');

const person3 = new Person('Inga', 'Schwarz', 'female',
    new Address('embankment river Moyka',
        '12', 'St Petersburg',
        'Russia', '191186'));

console.log(pushkin.sayAddress());
console.log(person3.sayAddress());
console.log(person3.bio());
