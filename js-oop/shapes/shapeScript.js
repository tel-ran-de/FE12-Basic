function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
}

Shape.prototype.calcPerimeter = function (){
    return this.sideLength * this.sides;
}

const square = new Shape("square", 4, 5);
const triangle = new Shape("triangle", 3, 3);

console.log(square.calcPerimeter());
console.log(triangle.calcPerimeter());