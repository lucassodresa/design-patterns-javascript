class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class PointFactory {
  static newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  static newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}

const p = PointFactory.newCartesianPoint(4, 5);
console.log(p);

const p2 = PointFactory.newPolarPoint(5, Math.PI / 2);
console.log(p2);
