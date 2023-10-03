class ChiefExecutiveOfficer {
  get name() {
    return ChiefExecutiveOfficer._name;
  }
  set name(value) {
    ChiefExecutiveOfficer._name = value;
  }

  get age() {
    return ChiefExecutiveOfficer._age;
  }
  set age(value) {
    ChiefExecutiveOfficer._age = value;
  }

  toString() {
    return `CEO's name if ${this.name} and he is ${this.age} years old.`;
  }
}

ChiefExecutiveOfficer._name = undefined;
ChiefExecutiveOfficer._age = undefined;

const ceo1 = new ChiefExecutiveOfficer();
ceo1.name = "Adam Smith";
ceo1.age = 55;

const ceo2 = new ChiefExecutiveOfficer();
ceo2.name = "John Gold";
ceo2.age = 66;

console.log(ceo1.toString());
console.log(ceo2.toString());
