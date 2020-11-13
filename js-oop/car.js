function Car(model, kmsPerLiter){
    this.model = model;
    this.kmsPerLiter = kmsPerLiter; //  ---> liter/100km
}

Car.prototype.tank = 0;
Car.prototype.odometer = 0;

Car.prototype.fill = function (liters){
    this.tank += liters;
    console.log('I filled ' + liters);
}

Car.prototype.drive = function (distance){
    if (this.tank < 1){
        console.log('I ran out of fuel at x kms!')
        return;
    }
    this.odometer += distance;
    console.log('I drove ' + distance + ' km');
    this.tank -= (distance * this.kmsPerLiter) / 100;
}

const moskvich = new Car("Moskvich", 5);
moskvich.fill(50);
moskvich.drive(1000);
console.log(moskvich.model + ' odometer now: ' + moskvich.odometer);
console.log('-----------------');
moskvich.drive(10);
moskvich.fill(100);
moskvich.drive(50);
console.log(moskvich.model + ' odometer now: ' + moskvich.odometer);
console.log(moskvich.model + ' tank now: ' + moskvich.tank);
