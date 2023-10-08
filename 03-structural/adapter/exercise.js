class Square {
  constructor(side) {
    this.side = side;
  }
}

function area(rectangle) {
  return rectangle._width * rectangle._height;
}

class SquareToRectangleAdapter {
  constructor({ side }) {
    this._width = side;
    this._height = side;
  }
}
