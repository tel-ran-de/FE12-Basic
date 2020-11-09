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

const boeing = new Airplane('Boeing');

console.log(boeing);
boeing.takeOff();
console.log(boeing.name + ' flight status - ' + boeing.isFlying);
boeing.land();
console.log(boeing.name + ' flight status - ' + boeing.isFlying);

const airbus = new Airplane('Airbus');
console.log(airbus);
airbus.takeOff();
console.log(airbus.name + ' flight status - ' + airbus.isFlying);
airbus.land();
console.log(airbus.name + ' flight status - ' + airbus.isFlying);



