// TASK 1
//
// Write a Car constructor that initializes model and kmsPerLiter from arguments.
// All instances built with Car:
//     should initialize with an tank at 0
//     should initialize with an odometer at 0
// Give cars the ability to get fueled with a .fill(liters) method. Add the liters to tank.

// STRETCH: Give cars ability to .drive(distance). The distance driven:
//     Should cause the odometer to go up.
//     Should cause the the tank to go down taking kmsPerLiter into account.
// STRETCH: A car which runs out of fuel while driving can't drive any more distance:
//     The drive method should return a string "I ran out of fuel at x kms!" x being odometer.
function Car(model, kmsPerLiter) {
    this.model = model;
    this.kmsPerLiter = kmsPerLiter;
    this.tank = 0;
    this.odometer = 0;
}

Car.prototype.fill = function (liters) {
    this.tank += liters;
}

Car.prototype.drive = function (distance) {

    if (this.tank - distance / this.kmsPerLiter >= 0) {
        this.odometer += distance;
        this.tank -= distance / this.kmsPerLiter;
        console.log(this.model + ': Liters in tank ' + this.tank)
        console.log(this.model + ': Actual distance is ' + distance);
        return;
    }
    console.log(this.model + ': I ran out of fuel at ' + (this.tank * this.kmsPerLiter) + ' kms!');
    this.odometer += this.tank * this.kmsPerLiter;
    this.tank = 0;
}

const car1 = new Car('BMW', 10);
car1.fill(50);
car1.drive(1000);
const car2 = new Car('VW', 8);
car2.fill(40);
car2.drive(30);
