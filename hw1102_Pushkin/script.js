function Address(street, houseNumber, city, country, zip) {
    this.address = {
        street: street,
        houseNumber: houseNumber,
        city: city,
        country: country,
        zip: zip
    };
    return this.address.street + ', ' + this.address.houseNumber + ' ' + this.address.city + ' '
        + this.address.country + ' ' + this.address.zip;
}

function Person(firstName, lastName, gender) {
    const person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.gender = gender;
    Person.prototype.address = new Address();
    person.sayAddress = function () {
        return "The address is: " + person.address;
    }
    person.bio = function () {
        return person.firstName + ' ' + person.lastName + ', ' + person.gender;
    };
    return person;
}

const pushkin = Person('Alexander', 'Pushkin', 'male');
console.log('for Pushkin: ' + pushkin.sayAddress());

const person3 = new Person(pushkin.firstName, pushkin.lastName, pushkin.gender);
console.log(person3.bio());
console.log(person3.address);
//doesn't work
console.log('for person3: ' + person3.sayAddress());
