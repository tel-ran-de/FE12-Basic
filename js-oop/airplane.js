function Airplane(name, isFlying){
    this.name = name;
    this.isFlying = false;
}
Airplane.prototype.takeOff = function (){
    this.isFlying = true;
}
Airplane.prototype.land = function (){
    this.isFlying = false;
}
let boeing = new Airplane("Boeing",false);

console.log(boeing.name + ' is taking off: ' + boeing.takeOff());
console.log(boeing.name + ' is landing: ' + boeing.land());