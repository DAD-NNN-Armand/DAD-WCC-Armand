//Démarrage
function setup() {
  createCanvas(2250, 1000);
  background(224, 63, 27);
}

//V1
function draw() {
  fill(27, 188, 224);
  stroke(151, 225, 242);

  for (i = 1; i <= 75; i++) {
    ellipse(i * 30, mouseY, 40, 100);
  }
}
