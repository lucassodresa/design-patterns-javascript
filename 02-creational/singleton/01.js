class Singleton {
  constructor() {
    const instance = this.constructor.instance;

    if (instance) return instance;

    this.constructor.instance = this;
  }

  foo() {
    console.log("Doing something...");
  }
}

const s1 = new Singleton();
const s2 = new Singleton();
console.log("Are they identical? " + (s1 === s2));
s1.foo();
