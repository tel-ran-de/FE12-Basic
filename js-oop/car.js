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

const car = new Car('Volvo', 10);

assertEquals('Volvo', car.model, 'model tested');
assertEquals(10, car.kmsPerLiter, 'kmsPerLiter tested');
assertEquals(0, car.tank, 'tank tested');
assertEquals(0, car.odometer, 'odometer tested');

car.fill(100);

assertEquals(100, car.tank);

car.drive(1000);

assertEquals(1000, car.odometer);
assertEquals(0, car.tank);

car.fill(10);
car.drive(1000);
assertEquals(0, car.tank);
assertEquals(1100, car.odometer);
