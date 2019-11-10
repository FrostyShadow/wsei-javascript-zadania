// Zadanie 0

car = {
    brand: "Mercedes-Benz",
    color: "Black",
    numberOfKilometers: 0,
    printCarInfo: function(){
        return `Brand: ${this.brand}\nColor: ${this.color}\nNumber of kilometers: ${this.numberOfKilometers}`
    },
    drive: function(km){
        this.numberOfKilometers += km
    }
}

car.printCarInfo();
car.drive(20);
car.printCarInfo();

// Zadanie 1

car.checkUps = []
car.addCheckUp = function(checkUp) {
    this.checkUps.push(checkUp)
}

car.printCheckUps = function(){
    return this.checkUps
}

// Zadanie 2

