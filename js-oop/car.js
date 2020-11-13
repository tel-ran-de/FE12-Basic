function Car(model, kmsPerLiter) {
    this.model = model;
    this.kmsPerLiter = kmsPerLiter;
    this.tank = 0;
    this.odometr = 0;
}

Car.prototype.fill = function (liters) {
    this.tank += liters;
    console.log('There are ' + this.tank + ' liters in the tank.')
}

Car.prototype.drive = function (distance) {
    if(this.tank > 0) {
        if ((this.tank - distance / this.kmsPerLiter) >= 0) {
            this.odometr += distance;
            this.tank -= distance / this.kmsPerLiter;
            console.log('There car ' + this.model + ' is driving.')
            console.log('There are ' + this.tank + ' liters in the tank.')
            return;
        }
        distance = this.tank/this.kmsPerLiter;
        this.odometr += distance;
        this.tank -= distance / this.kmsPerLiter;
        console.log('There car ' + this.model + ' can drive only ' + distance + 'km.')
        console.log('There tank is leer. Please, fill the tank with a fuel.')
        return;

    }
    console.log('Please, fill the tank with a fuel.')

}

const car1 = new Car('BMW', 10);
const car2 = new Car('Volkswagen', 8);
const car3 = new Car('Opel', 7);

