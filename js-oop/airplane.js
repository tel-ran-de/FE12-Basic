// TASK 1 - filename airplane.js (if you think this task is too easy for you, go for TASK 2)
//Write an Airplane constructor that initializes name from an argument.
// All airplanes built with Airplane should initialize with an isFlying of false.
// Give airplanes the ability to .takeOff() and .land():
// If a plane takes off, its isFlying property is set to true.
// If a plane lands, its isFlying property is set to false.
function Airplane(name) {
    this.name = name;
}

Airplane.prototype.isFlying = false;

Airplane.prototype.takeOff = function () {
    this.isFlying = true;
}

Airplane.prototype.land = function () {
    this.isFlying = false;
}
let fokker = new Airplane("Fokker");
let jet = new Airplane("Jet");

fokker.takeOff()
console.log(fokker.name + ' is taking off and flying: ' + fokker.isFlying);
fokker.land()
console.log(fokker.name + ' is landing: ' + fokker.isFlying);

jet.takeOff()
console.log(jet.name + ' is taking off and flying: ' + jet.isFlying);
jet.land()
console.log(jet.name + ' is landing: ' + jet.isFlying);
