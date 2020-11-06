//Task 1
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

Person.prototype.bio = function () {
    return this.firstName + ' ' + this.lastName + ' ' + this.gender + ' ' + this.sayAddress();
}

Person.prototype.greeting = function () {
    return 'Hello, ' + this.bio();
}

Person.prototype.address = new Address("embankment river Moyka", 12, "St Petersburg",
    "Russia", 191186);

Person.prototype.sayAddress = function () {
    return 'Address: ' + this.address.street + ' ' + this.address.houseNumber + ' ' + this.address.city + ' '
        + this.address.zip + ' ' + this.address.country;
}
const pushkin = new Person('Alexander', 'Pushkin', 'male');

//Task 2
/*Add a new method to the Shape class's prototype, calcPerimeter(), which calculates its perimeter (the length of the
shape's outer edge) and logs the result to the console.Create a new instance of the Shape class called square. Give it a
name of square and a sideLength of 5. Call your calcPerimeter() method on the instance, to see whether it logs the
calculation result to the browser DevTools' console as expected.
Create a new instance of Shape called triangle, with a name of triangle and a sideLength of 3.
Call triangle.calcPerimeter() to check that it works OK.*/
function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
}

Shape.prototype.calcPerimeter = function () {
    console.log('Perimeter ' + this.name + ' is: ' + this.sides * this.sideLength);
}
const square = new Shape("square", 4, 5);
const triangle = new Shape("triangle", 3, 3);
