class Car {
  drive() {
    console.log("Car is being driven");
  }
}

class CarProxy {
  constructor(driver) {
    this.driver = driver;
    this._car = new Car();
  }

  drive() {
    this.driver.age >= 16 ? this._car.drive() : console.log("Driver too young");
  }
}

class Driver {
  constructor(age) {
    this.age = age;
  }
}

const car = new Car();
car.drive();

const car2 = new CarProxy(new Driver(12));
car2.drive();
