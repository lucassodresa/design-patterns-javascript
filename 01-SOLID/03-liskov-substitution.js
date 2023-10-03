class Reactangule {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }

  set width(value) {
    this._width = value;
  }
  set height(value) {
    this._height = value;
  }

  get area() {
    return this.height * this.width;
  }

  toString() {
    return `${this.width}x${this.height}`;
  }
}

class Square extends Reactangule {
  constructor(size) {
    super(size, size);
  }

  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }

  set width(value) {
    this._width = this._height = value;
  }
  set height(value) {
    this._width = this._height = value;
  }
}

const rc = new Reactangule(2, 3);
console.log(rc.toString());

const sq = new Square(5);
console.log(sq.toString());
sq.width = 10;
console.log(sq.toString());
