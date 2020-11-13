function Car(model, kmsPerLiter){
    this.model=model;
    this.kmsPerLiter=kmsPerLiter;
}

Car.prototype.tank=0;
Car.prototype.odometer=0;

Car.prototype.fill=function (liters) {
    this.tank += liters;
}

Car.prototype.drive=function (distance){
    if(distance<=this.tank * this.kmsPerLiter){
        this.odometer+= distance;
        this.tank-= distance / this.kmsPerLiter;
        return;
    }
    this.odometer+= this.tank * this.kmsPerLiter;
}

