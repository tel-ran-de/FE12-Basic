function Car(model, kmsPerLiter) {
    this.model = model;
    this.kmsPerLiter = kmsPerLiter;
}

Car.prototype.tank = 0;
Car.prototype.odometer = 0;

Car.prototype.fill = function (liters) {
    this.tank += liters;
    console.log('I filled ' + liters);
}

Car.prototype.drive = function (distance) {
    const distanceToEmptyTank = this.kmsPerLiter * this.tank;

    if (distanceToEmptyTank >= distance) {
        this.odometer += distance;
        this.tank -= distance / this.kmsPerLiter;
        return;
    }

    this.tank = 0;
    this.odometer += distanceToEmptyTank;

    console.log(`I ran out of fuel at ${distanceToEmptyTank} kms!`);
}

const moskvich = new Car("Moskvich", 5);
moskvich.fill(50);
moskvich.drive(900);
console.log(moskvich.model + ' odometer now: ' + moskvich.odometer);
console.log('-----------------');
moskvich.drive(200);
console.log(moskvich.model + ' odometer now: ' + moskvich.odometer);
moskvich.fill(100);
moskvich.drive(50);
console.log(moskvich.model + ' odometer now: ' + moskvich.odometer);
console.log(moskvich.model + ' tank now: ' + moskvich.tank);
