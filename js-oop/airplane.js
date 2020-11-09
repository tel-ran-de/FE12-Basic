function Airplane(name){
    this.name = name;
    this.isFlying = false;
}
Airplane.prototype.takeOff = function (){
    this.isFlying = true;
}
Airplane.prototype.land = function (){
    this.isFlying = false;
}
let boeing = new Airplane("Boeing");

boeing.takeOff();
console.log(boeing.isFlying)

boeing.land();
console.log(boeing.isFlying)