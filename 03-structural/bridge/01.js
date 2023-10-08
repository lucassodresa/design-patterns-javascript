class VectorRenderer {
  renderCircle(radius) {
    console.log(`Drawing a circle of radius ${radius}`);
  }
}
class RasterRenderer {
  renderCircle(radius) {
    console.log(`Drawing pixels for a circle of radius ${radius}`);
  }
}

class Shape {
  constructor(renderer) {
    this.renderer = renderer;
  }
}
class Circle extends Shape {
  constructor(rendeder, radius) {
    super(rendeder);
    this.radius = radius;
  }

  draw() {
    this.renderer.renderCircle(this.radius);
  }

  resize(factor) {
    this.radius *= factor;
  }
}
class Square {}

const raster = new RasterRenderer();
const vector = new VectorRenderer();

const circle = new Circle(raster, 5);
circle.draw();
circle.resize(2);
circle.draw();
