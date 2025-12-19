var positionY = 0;
let opacité = 100;

//Démarrage
function setup() {
  createCanvas(2250, 1000);
}

//V1
function draw() {
  background(224, 63, 27);
  fill(27, 188, 224);
  stroke(151, 225, 242);

  if (positionY < 990) {
    ellipse(1125, (positionY += 10), 100, 100);
  } else {
    ellipse(1125, 990, 150, 50);
    // fill((opacité += -50));
    // stroke((opacité += -50));
  }
}
