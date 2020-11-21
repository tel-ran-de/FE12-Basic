function Car(model, fuelConsumption) {
    this.model = model;
    this.fuelConsumption = fuelConsumption;
}

Car.prototype.tank = 0;
Car.prototype.odometer = 0;

Car.prototype.fill = function (liters) {
    this.tank += liters;
    console.log(this.model + ' filled with ' + liters + ' liters of fuel.')
}

Car.prototype.drive = function (distance) {
    const distanceТoЕmptyТank = this.tank * (100 / this.fuelConsumption);

    if (this.tank > 0 && this.odometer <= distanceТoЕmptyТank) {
        this.tank -= (distance * this.fuelConsumption) / 100;
        this.odometer += distance;
        console.log(this.model + ' drove ' + this.odometer + ' km and has ' + this.tank + ' liters of fuel in the tank.');
        return;

    }

    let odometerByEmptyTank = this.odometer + (this.tank * (100 / this.fuelConsumption));
    this.tank = 0;
    this.odometer = 0;
    return 'I ran out of fuel at ' + odometerByEmptyTank + ' km!"';
}

const car1 = new Car('Mercedes', 10);
