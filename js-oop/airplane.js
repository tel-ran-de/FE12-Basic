function Airplane(name) {
    this.name = name;
}

Airplane.prototype.isFlying = false;

Airplane.prototype.takeOff = function() {
    this.isFlying = true;
}

Airplane.prototype.land = function() {
    this.isFlying = false;
}

const boeing = new Airplane("Boeing");

console.log('Boeing is flying: ' + boeing.isFlying);
console.log('Boeing is taking off...');
boeing.takeOff();
console.log('Boeing is flying: ' + boeing.isFlying);
console.log('Boeing is landing...');
boeing.land();
console.log('Boeing is flying: ' + boeing.isFlying);
