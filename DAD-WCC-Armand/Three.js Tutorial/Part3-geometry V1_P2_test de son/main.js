// Crée la scène : c’est le "conteneur" qui va contenir tous les objets 3D
var scene = new THREE.Scene();

// PerspectiveCamera est la caméra la plus commune
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 4;

var renderer = new THREE.WebGLRenderer({ antialias: true }); //anti-crénelage

var clock = new THREE.Clock();

renderer.setSize(window.innerWidth, window.innerHeight); // Définit la taille du rendu WebGL sur toute la fenêtre du navigateur

document.body.appendChild(renderer.domElement); // Ajoute le canvas WebGL généré par Three.js dans le <body> de la page// "$" est la fonction principale de jQuery

//Cercle
var pacRadius = 2.5;
var pacSegments = 32;
var maxMouth = Math.PI * 0.6; // ouverture maximale (en radians)
var speed = 9; // vitesse d'ouverture/fermeture

// création d'une géométrie initiale (pleine bouche fermée)
var initialMouth = 0.2; // petite ouverture initiale pour éviter 0 exact
var thetaStart = initialMouth / 2;
var thetaLength = 2 * Math.PI - initialMouth;

//Vitesse de déplacement
var pacSpeed = 0.05;
var pacDirection = 1;
// position de déplacement
var lane = 0;
// 0 = haut, 1 = milieu, 2 = bas

//Son

let mySond = new Audio("/sounds/pacman_chomp.wav");

// bouton pour activer audio (interaction requise)
const startBtn = document.createElement("button");
startBtn.textContent = "Activer son";
startBtn.style.position = "fixed";
startBtn.style.top = "50px";
startBtn.style.left = "10px";
startBtn.style.backgroundColor = "#ffffff";
document.body.appendChild(startBtn);

startBtn.addEventListener("click", async () => {
  mySond.play();
  // startBtn.remove();
});

var geometryCircle = new THREE.CircleGeometry(
  pacRadius,
  pacSegments,
  thetaStart,
  thetaLength
);
// 1er paramètre : rayon du cercle
// 2e paramètre : nombre de segments (plus il y en a, plus le cercle est lisse)
// 3e paramètre (optionnel) : angle de départ en radians (par défaut 0)
// 4e paramètre (optionnel) : angle de balayage en radians (par défaut 2 * Math.PI, pour un cercle complet)

var materialCircle = new THREE.MeshBasicMaterial({ color: 0xffff00 }); // Crée un matériau simple

var circle = new THREE.Mesh(geometryCircle, materialCircle); // Combine la géométrie et le matériau pour créer un objet 3D affichable

scene.add(circle);

circle.position.set(-17, 4, -8);
circle.rotation.set(0, 0, 0);

renderer.render(scene, camera); // Lance le rendu : affiche la scène vue par la caméra

function animate() {
  requestAnimationFrame(animate); // Demande au navigateur d'appeler la fonction animate avant le prochain rafraîchissement de l'écran
  // Cela crée une boucle d'animation fluide

  //Cercle
  var t = clock.getElapsedTime();
  // angle de bouche variant entre 0.05 et maxMouth (abs(sin) donne 0->1)
  var mouth = 0.05 + (maxMouth - 0.05) * Math.abs(Math.sin(t * speed));

  var newThetaStart = mouth / 2;
  var newThetaLength = 2 * Math.PI - mouth;

  // recrée la géométrie et remplace l'ancienne (dispose pour éviter fuite mémoire)
  circle.geometry.dispose();
  circle.geometry = new THREE.CircleGeometry(
    pacRadius,
    pacSegments,
    newThetaStart,
    newThetaLength
  );

  //Rendu
  renderer.render(scene, camera); // Redessine la scène vue par la caméra à chaque frame
}
animate(); // Lance la boucle d'animation
