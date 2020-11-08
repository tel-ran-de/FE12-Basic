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
Person.prototype.sayAddress = function () {
    return this.address.street + ', ' + this.address.houseNumber + ' ' + this.address.city + ' '
        + this.address.country + ' ' + this.address.zip;
}

Person.prototype.bio = function () {
    return this.firstName + ' ' + this.lastName + ', ' + this.gender;
};

const pushkin = new Person('Alexander', 'Pushkin', 'male');
console.log('for Pushkin: ' + pushkin.sayAddress());

const person3 = new Person(pushkin.firstName, pushkin.lastName, pushkin.gender);
console.log(person3.bio());
person3.address.street = 'Moyka';
person3.address.houseNumber = '12';
person3.address.city = 'St.Petersburg';
person3.address.country = 'Russia';
person3.address.zip = '191186';
console.log('for person3: ' + person3.sayAddress());
