function Airplane(name) {
    this.name = name;
}

Airplane.prototype.isFlying = false;


Airplane.prototype.takeOff = function (isFlying) {
    return isFlying = true;
}

Airplane.prototype.land = function (isFlying) {
    return isFlying = false;
}

const boeing = new Airplane('Boeing');

console.log(boeing);
console.log(boeing.name + ' is Flying status by take off - ' + boeing.takeOff());
console.log(boeing.name + ' is Flying status by land - ' + boeing.land());

const airbus = new Airplane('Airbus');
console.log(airbus);
console.log(airbus.name + ' is Flying status by take off - ' + airbus.takeOff());
console.log(airbus.name + ' is Flying status by land - ' + airbus.land());

