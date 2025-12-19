// Sélection des flèches
// Sélection de la frame
const frame = document.querySelector(".frame");

// Position initiale
let posX = 0;
let posY = 0;
const moveX = 1600; // déplacement horizontal
const moveY = 1336.666; // déplacement vertical // nombre de pixels pour chaque déplacement

const imageWidth = 4800;
const imageHeight = 2700;

// Limites de déplacement
const minX = window.innerWidth - imageWidth;
const maxX = 0;
const minY = window.innerHeight - imageHeight;
const maxY = 0;
// Fonction qui applique le déplacement à la frame
function updatePosition() {
  posX = Math.min(Math.max(posX, minX), maxX);
  posY = Math.min(Math.max(posY, minY), maxY);

  frame.style.transform = `translate(${posX}px, ${posY}px)`;
  console.log(`X: ${posX}, Y: ${posY}`);
  console.log("minimale", minX);
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
    if (posX > -3200) {
      posX = Math.max(posX - moveX, minX);
      updatePosition();
      console.log(`Position actuelle : X=${posX}, Y=${posY}`);
      // console.log("À droite");
    } else {
      console.log("trop loin");
    }
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
    if (posY > -2005) {
      posY = Math.max(posY - moveY, minY);
      updatePosition();
      console.log(`Position actuelle : X=${posX}, Y=${posY}`);
    } else {
    }
  } else {
    console.log("pas en bas");
  }
}
