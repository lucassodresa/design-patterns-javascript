class Percentage {
  constructor(percent) {
    this.percent = percent; // 0-100
  }

  toString() {
    return `${this.percent}%`;
  }

  valueOf() {
    return this.percent / 100;
  }
}

const fivePercent = new Percentage(5);

console.log(fivePercent.toString());
console.log(`5% of 50 is ${50 * fivePercent}`);
