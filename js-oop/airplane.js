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

let airbus = new Airplane("Airbus");

