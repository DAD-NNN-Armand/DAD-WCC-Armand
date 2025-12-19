// Sélection des flèches
// Sélection de la frame
const frame = document.querySelector(".frame");

// Position initiale
let posX = 0;
let posY = 0;
const moveX = 1200; // déplacement horizontal
const moveY = 1310; // déplacement vertical // nombre de pixels pour chaque déplacement

// Limites de déplacement
const minX = -2400; // par exemple, pas plus à gauche
const maxX = 0; // pas plus à droite
const minY = -1620; // pas plus en haut
const maxY = 0; // pas plus en bas

// Fonction qui applique le déplacement à la frame
function updatePosition() {
  frame.style.transform = `translate(${posX}px, ${posY}px)`;
}

//Sélection des fleches par rapport au document
const flecheDroite = document.querySelector(".fleche-droite");
const flecheGauche = document.querySelector(".fleche-gauche");
const flecheHaut = document.querySelector(".fleche-haut");
const flecheBas = document.querySelector(".fleche-bas");

// Ajout des écouteurs d'événements
flecheDroite.addEventListener("click", testButtonD);
flecheGauche.addEventListener("click", testButtonG);
flecheHaut.addEventListener("click", testButtonH);
flecheBas.addEventListener("click", testButtonB);

// Fonctions existantes
function testButtonD(e) {
  if (e.target.closest(".fleche-droite")) {
    posX = Math.max(posX - moveX, minX);
    updatePosition();
    console.log(`Position actuelle : X=${posX}, Y=${posY}`);
    // console.log("À droite");
  } else {
    console.log("pas à droite");
  }
}

function testButtonG(e) {
  if (e.target.closest(".fleche-gauche")) {
    posX = Math.min(posX + moveX, maxX);
    updatePosition();
    console.log(`Position actuelle : X=${posX}, Y=${posY}`);
  } else {
    console.log("pas à gauche");
  }
}

function testButtonH(e) {
  if (e.target.closest(".fleche-haut")) {
    posY = Math.min(posY + moveY, maxY);
    updatePosition();
    console.log(`Position actuelle : X=${posX}, Y=${posY}`);
  } else {
    console.log("pas en haut");
  }
}

function testButtonB(e) {
  if (e.target.closest(".fleche-bas")) {
    posY = Math.max(posY - moveY, minY);
    updatePosition();
    console.log(`Position actuelle : X=${posX}, Y=${posY}`);
  } else {
    console.log("pas en bas");
  }
}
