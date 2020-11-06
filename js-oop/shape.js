function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
}

const calcPerimeter = (a, b) => a * b;

Shape.prototype.calcPerimeter = function() {
    console.log(this);
    return calcPerimeter(this.sides, this.sideLength);
}

const square = new Shape('square', 4, 5);

console.log(square.calcPerimeter());

// This is just an example how to bind another this to ANY function
// const shapeTriangleFunc = Shape.bind(square);
// shapeTriangleFunc('triangle', 3, 10);

const triangle = new Shape('triangle', 3, 3);

console.log(triangle.calcPerimeter());

const circle = new Shape('circle', 1);
console.log(circle.calcPerimeter());

circle.radius = 5;
// Overriding of calcPerimeter function in Shape.prototype
circle.calcPerimeter = function() {
    return 2 * Math.PI * this.radius;
}

console.log(circle.calcPerimeter());

circle.toString = function() {
    return this.name + ' with radius of ' + this.radius;
}

Shape.prototype.toString = function() {
    return this.name + ' with number of sides ' + this.sides + ' and side length of ' + this.sideLength;
}

Shape.prototype.color = 'green';

for (let field in circle) {
    if (circle.hasOwnProperty(field)) {
        console.log(field);
    }
}
