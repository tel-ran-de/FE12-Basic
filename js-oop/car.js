function Car(model, literPer100km) {
    this.model = model;
    this.litersPer100km = literPer100km; //  ---> liter/100km
}

Car.prototype.tank = 0;
Car.prototype.odometer = 0;

Car.prototype.fill = function (liters) {
    this.tank += liters;
    console.log('I filled ' + liters);
}

Car.prototype.drive = function (distance) {
    const litersNeededForDistance = (distance * this.litersPer100km) / 100;

    if (this.tank < litersNeededForDistance) {
        this.odometer += distance - ((litersNeededForDistance - this.tank) * 100 / this.litersPer100km);
        console.log('I ran out of fuel at ' + ((litersNeededForDistance - this.tank) * 100 / this.litersPer100km) + ' kms!');

        return;
    }
    this.odometer += distance;
    console.log('I drove ' + distance + ' km');
    this.tank -= litersNeededForDistance;
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
