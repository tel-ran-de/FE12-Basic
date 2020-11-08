// TASK 1 - filename airplane.js (if you think this task is too easy for you, go for TASK 2)
//
// Write an Airplane constructor that initializes name from an argument.
//     All airplanes built with Airplane should initialize with an isFlying of false.
// Give airplanes the ability to .takeOff() and .land():
//     If a plane takes off, its isFlying property is set to true.
//     If a plane lands, its isFlying property is set to false.
function Airplane(name) {
    this.name = name;
}

Airplane.prototype.isFlying = function () {
    return false;
}

Airplane.prototype.takeOff = function(){
    return this.name + ' takes off';
}

Airplane.prototype.land = function(){
    return this.name + ' lands';
}

Airplane.prototype.fly = function (isFlying) {
    if (isFlying) {
        return this.land();
    } else
        return this.takeOff();
}

const airplane1 = new Airplane('Boeing 747');
console.log(airplane1.fly(false));
const airplane2 = new Airplane('Airbus');
console.log(airplane2.fly(true));
