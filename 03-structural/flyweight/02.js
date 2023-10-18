class User {
  constructor(fullName) {
    this.fullName = fullName;
  }
}

class User2 {
  constructor(fullName) {
    const getOrAdd = (string) => {
      const index = User2.strings.indexOf(string);
      if (index !== 0) return index;

      User2.strings.push(string);
      return User2.strings.length - 1;
    };
    this.names = fullName.split(" ").map(getOrAdd);
  }
}

User2.strings = [];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const randomStirng = () => {
  const result = [];
  for (let x = 0; x < 10; ++x)
    result.push(String.fromCharCode(65 + getRandomInt(26)));
};

const names = new Array(100).map(() => randomStirng());

const firstNames = [...names];
const lastNames = [...names];
const users = [];
const users2 = [];

firstNames.forEach((firstName) => {
  lastNames.forEach((lastName) => {
    users.push(new User(`${firstName} ${lastName}`));
    users2.push(new User2(`${firstName} ${lastName}`));
  });
});
console.log(`10k users take up approx ${JSON.stringify(users).length} chars`);

const users2Length = [users2, User2.strings]
  .map((item) => JSON.stringify(item).length)
  .reduce((a, b) => a + b);

console.log(`10k flyweight take up approx ${users2Length} chars`);
