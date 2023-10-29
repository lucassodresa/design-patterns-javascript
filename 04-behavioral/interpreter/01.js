const TokenType = Object.freeze({
  integer: 0,
  plus: 1,
  minus: 2,
  lparen: 3,
  rparen: 4,
});

class Integer {
  constructor(value) {
    this.value = value;
  }
}

const Operation = Object.freeze({
  addition: 0,
  substraction: 1,
});

class BinaryOperation {
  constructor() {
    this.type = null;
    this.left = null;
    this.right = null;
  }

  get value() {
    const left = this.left.value;
    const right = this.right.value;

    switch (this.type) {
      case Operation.addition:
        return left + right;
      case Operation.substraction:
        return left - right;
    }
    return 0;
  }
}

class Token {
  constructor(type, text) {
    this.type = type;
    this.text = text;
  }
  toString() {
    return `\`${this.text}\``;
  }
}

const lex = (input) => {
  const result = [];

  for (let index = 0; index < input.length; ++index) {
    switch (input[index]) {
      case "+":
        result.push(new Token(TokenType.plus, "+"));
        break;
      case "-":
        result.push(new Token(TokenType.minus, "-"));
        break;
      case "(":
        result.push(new Token(TokenType.lparen, "("));
        break;
      case ")":
        result.push(new Token(TokenType.rparen, ")"));
        break;
      default:
        const buffer = [input[index]];
        for (let j = index + 1; j < input.length; ++j) {
          if ("0123456789".includes(input[j])) {
            buffer.push(input[j]);
            ++index;
          } else {
            result.push(new Token(TokenType.integer, buffer.join("")));
            break;
          }
        }
        break;
    }
  }
  return result;
};

const parse = (tokens) => {
  const result = new BinaryOperation();
  let haveLHS = false;

  for (let index = 0; index < tokens.length; ++index) {
    const token = tokens[index];

    switch (token.type) {
      case TokenType.integer:
        const integer = new Integer(parseInt(token.text));
        if (haveLHS) {
          result.right = integer;
        } else {
          result.left = integer;
          haveLHS = true;
        }
        break;
      case TokenType.plus:
        result.type = Operation.addition;
        break;
      case TokenType.minus:
        result.type = Operation.substraction;
        break;
      case TokenType.lparen:
        let j = index;
        for (; j < tokens.length; ++j)
          if (tokens[j].type === TokenType.rparen) break;
        const subExpression = tokens.slice(index + 1, j);
        const element = parse(subExpression);
        if (!haveLHS) {
          result.left = element;
          haveLHS = true;
        } else {
          result.right = element;
        }
        index = j;
        break;
    }
  }
  return result;
};

const input = "(13+4)-(12+1)";
const tokens = lex(input);

console.log(tokens.join("  "));

const parsed = parse(tokens);
console.log(`${input} = ${parsed.value}`);
