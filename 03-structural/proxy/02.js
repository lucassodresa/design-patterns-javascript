class Property {
  constructor(value, name = "") {
    this._value = value;
    this.name = name;
  }

  get value() {
    return this._value;
  }
  set value(newValue) {
    if (this._value === newValue) return;

    console.log(`Assigning ${newValue} to ${this.name}`);
    this._value = newValue;
  }
}

class Creature {
  constructor() {
    this._agility = new Property(10, "agility");
  }

  get agility() {
    return this._agility.value;
  }

  set agility(value) {
    this._agility.value = value;
  }
}

const creature = new Creature();

creature.agility = 12;
creature.agility = 13;
