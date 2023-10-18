class Image {
  constructor(url) {
    this.url = url;
    console.log(`Loading image from ${this.url}`);
  }

  draw() {
    console.log(`Drawing image from ${this.url}`);
  }
}

class LazyImage {
  constructor(url) {
    this.url = url;
  }
  draw() {
    if (!this.image) this.image = new Image(this.url);

    this.image.draw();
  }
}

const drawImage = (image) => {
  console.log("About to draw the image");
  image.draw();
  console.log("Done drawing the image");
};

const image = new LazyImage("http://pokemon.com/pikachu.png");
drawImage(image);
