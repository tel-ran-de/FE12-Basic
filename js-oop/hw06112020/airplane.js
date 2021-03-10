function Airplane(name) {
    this.name = name;
    this.isFlying = false;
}

Airplane.prototype.takeOff = function () {
    console.log('Airplane ' + this.name + ' is flying');
    return this.isFlying = true;
}

Airplane.prototype.land = function () {
    console.log('Airplane ' + this.name + ' landed');
    return this.isFlying = false;
}

const airplane1 = new Airplane('Georgy');
airplane1.takeOff();
airplane1.land();
