//Démarrage
function setup() {
  createCanvas(2250, 1000);
  background(224, 63, 27);
}

//V1
function draw() {
  ellipse(mouseX, mouseY, 40, 100); //x, y, w, h
  if (mouseX < 1125) {
    fill(27, 224, 63);
    stroke(225, 251, 221);
  } else {
    fill(63, 27, 224);
    stroke(228, 213, 251);
  }
}
