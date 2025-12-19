let img;

// Load the image and create a p5.Image object.
function preload() {
  img = loadImage("/img/monFond(1).png");
}

function setup() {
  createCanvas(2250, 1000);
  // background(224, 63, 27);
}

function draw() {
  image(img, mouseX, mouseY, img.width / 5, img.height / 5);

  describe("Image of the underside of a white umbrella and a gridded ceiling.");
}
