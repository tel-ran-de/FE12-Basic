// TASK 1
// Write a Car constructor that initializes model and kmsPerLiter from arguments.
//     All instances built with Car:
// should initialize with an tank at 0
// should initialize with an odometer at 0
// Give cars the ability to get fueled with a .fill(liters) method. Add the liters to tank.
//     STRETCH: Give cars ability to .drive(distance). The distance driven:
//     Should cause the odometer to go up.
//     Should cause the the tank to go down taking kmsPerLiter into account.
//     STRETCH: A car which runs out of fuel while driving can't drive any more distance:
// The drive method should return a string "I ran out of fuel at x kms!" x being odometer.
function Car(model, kmsPerLiter) {
    this.model = model;
    this.kmsPerLiter = kmsPerLiter;
}

Car.prototype.tank = 0;
Car.prototype.odometer = 0;

Car.prototype.fill = function (liters) {
    this.tank += liters;
}
Car.prototype.drive = function (distance) {
    if (this.tank - distance / this.kmsPerLiter >= 0) {
        this.odometer += distance;
        this.tank -= distance / this.kmsPerLiter;
        console.log(`actual number of liters in the tank: ${this.tank} and an actual distance: ${this.odometer}`)
        return;
    }
    console.log('I ran out of fuel at ' + (this.tank * this.kmsPerLiter) + ' kms!');
    this.odometer += this.tank * this.kmsPerLiter;
    this.tank = 0;

}

const lamborghini = new Car('Lamborghini', 10);
const jaguar = new Car('Jaguar', 10);

console.log('the first example: Lamborghini')
lamborghini.fill(12);
console.log(lamborghini.drive(100));
console.log('the second example: Jaguar')
jaguar.fill(10)
console.log(jaguar.drive(120));
