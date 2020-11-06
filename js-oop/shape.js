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

