// Add a new method to the Shape class's prototype, calcPerimeter(), which calculates its perimeter
// (the length of the shape's outer edge) and logs the result to the console.
// Create a new instance of the Shape class called square. Give it a name of square and a sideLength of 5.
// Call your calcPerimeter() method on the instance, to see whether it logs the calculation result to the browser
// DevTools' console as expected.
// Create a new instance of Shape called triangle, with a name of triangle and a sideLength of 3.
// Call triangle.calcPerimeter() to check that it works OK.

function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
}

Shape.prototype.calcPerimeter = function () {
    return this.sides * this.sideLength;
}

const square = new Shape('square', 4, 5);
console.log(square.name + ' perimeter with side ' + square.sideLength + ' equals ' + square.calcPerimeter());

const triangle = new Shape('triangle', 3, 3);
console.log(triangle.name + ' perimeter with side ' + triangle.sideLength + ' equals ' + triangle.calcPerimeter());
