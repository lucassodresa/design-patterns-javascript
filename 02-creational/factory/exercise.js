class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class PersonFactory {
  constructor() {
    this.id = 0;
  }
  createPerson(name) {
    return new Person(this.id++, name);
  }
}

const pf = new PersonFactory();

const p1 = pf.createPerson("Lucas");
const p2 = pf.createPerson("Jose");

console.log(p1);
console.log(p2);
