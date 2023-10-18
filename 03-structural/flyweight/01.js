class FormattedText {
  constructor(plainText) {
    this.plainText = plainText;
    this.caps = new Array(plainText.length).map(() => false);
  }

  capitalize(start, end) {
    for (let i = start; i <= end; ++i) {
      this.caps[i] = true;
    }
  }

  toString() {
    const buffer = [];

    for (let i in this.plainText) {
      const char = this.plainText[i];
      buffer.push(this.caps[i] ? char.toUpperCase() : char);
    }

    return buffer.join("");
  }
}

class TextRange {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.capitalize = false;
  }

  covers(position) {
    return position >= this.start && position <= this.end;
  }
}

class BetterFormattedText {
  constructor(plainText) {
    this.plainText = plainText;
    this.formatting = [];
  }

  getRange(start, end) {
    const range = new TextRange(start, end);
    this.formatting.push(range);
    return range;
  }

  toString() {
    const buffer = [];
    for (let i in this.plainText) {
      let char = this.plainText[i];

      for (let range of this.formatting) {
        if (range.covers(i) && range.capitalize) char = char.toUpperCase();
      }
      buffer.push(char);
    }
    return buffer.join("");
  }
}

const text = "This is a test text to this lesson";

const formattedText = new FormattedText(text);
formattedText.capitalize(10, 15);
console.log(formattedText.toString());

const betterFormattedText = new BetterFormattedText(text);
betterFormattedText.getRange(16, 19).capitalize = true;
console.log(betterFormattedText.toString());
