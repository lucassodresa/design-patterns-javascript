class Person {
  constructor(age = 0) {
    this.age = age;
  }

  drink() {
    return "drinking";
  }
  drive() {
    return "driving";
  }
  drinkAndDrive() {
    return "driving while drunk";
  }
}

class ResponsiblePerson {
  constructor(person) {
    this.person = person;
  }
  get age() {
    return this.person.age;
  }

  set age(value) {
    this.person.age = value;
  }
  drink() {
    const drinkOutput = this.age < 18 ? "too young" : this.person.drink();

    return drinkOutput;
  }

  drive() {
    const driveOutput = this.age < 16 ? "too young" : this.person.drive();

    return driveOutput;
  }

  drinkAndDrive() {
    return "dead";
  }
}
