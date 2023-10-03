class Address {
  constructor(suite, city, country) {
    this.suite = suite;
    this.city = city;
    this.country = country;
  }

  toString() {
    return `Suite ${this.suite}, ${this.city}, ${this.country}`;
  }
}

class Employee {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  toString() {
    return `${this.name} works at ${this.address}`;
  }

  greet() {
    console.log(`Hi, my name is ${this.name}, I live at ${this.address}`);
  }
}

class Serializer {
  constructor(types) {
    this.types = types;
  }

  markRecursive(object) {
    const index = this.types.findIndex((t) => {
      return t.name === object.constructor.name;
    });
    if (index !== -1) {
      object["typeIndex"] = index;

      for (let key in object) {
        if (object.hasOwnProperty(key) && object[key] != null)
          this.markRecursive(object[key]);
      }
    }
  }

  reconstructRecursive(object) {
    if (object.hasOwnProperty("typeIndex")) {
      let type = this.types[object.typeIndex];
      let obj = new type();
      for (let key in object) {
        if (object.hasOwnProperty(key) && object[key] != null) {
          obj[key] = this.reconstructRecursive(object[key]);
        }
      }
      delete obj.typeIndex;
      return obj;
    }
    return object;
  }

  clone(object) {
    this.markRecursive(object);
    const copy = JSON.parse(JSON.stringify(object));
    return this.reconstructRecursive(copy);
  }
}

class EmployeeFactory {
  static _newEmployee(proto, name, suite) {
    const copy = EmployeeFactory.serializer.clone(proto);
    copy.name = name;
    copy.address.suite = suite;
    return copy;
  }

  static newMainOfficeEmployee(name, suite) {
    return this._newEmployee(EmployeeFactory.main, name, suite);
  }

  static newAuxOfficeEmployee(name, suite) {
    return this._newEmployee(EmployeeFactory.aux, name, suite);
  }
}

EmployeeFactory.serializer = new Serializer([Employee, Address]);
EmployeeFactory.main = new Employee(
  null,
  new Address(null, "123 Eat Dr", "London")
);
EmployeeFactory.aux = new Employee(
  null,
  new Address(null, "200 London Rd", "Oxford")
);

const john = EmployeeFactory.newMainOfficeEmployee("John", 4321);
const jane = EmployeeFactory.newAuxOfficeEmployee("Jane", 222);

console.log(john.toString());
console.log(jane.toString());
