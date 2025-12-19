//Démarrage
function setup() {
  createCanvas(2250, 1000);
  background(224, 63, 27);
}

//À chaque instant
function draw() {
  //dessiner un cercle au milieu
  // ellipse(1125, 500, 30, 30); //x, y, w, h
  // dessiner un cercle là où est la souris
  fill(63, 27, 224);
  stroke(228, 213, 251);
  ellipse(mouseX, mouseY, 500, 30); //x, y, w, h
}
