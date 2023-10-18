class Word {
  constructor(text, capitalize = false) {
    this.text = text;
    this.capitalize = capitalize;
  }
}

class Sentence {
  constructor(plainText = "") {
    this.words = plainText.split(" ").map((word) => new Word(word));
  }

  at(index) {
    return this.words[index];
  }

  toString() {
    return this.words
      .map((word) => (word.capitalize ? word.text.toUpperCase() : word.text))
      .join(" ");
  }
}

const sentence = new Sentence("alpha beta gamma");
sentence.at(1).capitalize = true;
console.log(sentence.toString()); // alpha BETA gamma
