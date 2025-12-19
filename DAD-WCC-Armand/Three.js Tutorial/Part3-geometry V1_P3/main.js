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

var materialCircle = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
}); // Crée un matériau simple

var circle = new THREE.Mesh(geometryCircle, materialCircle); // Combine la géométrie et le matériau pour créer un objet 3D affichable

scene.add(circle);

circle.position.set(-17, 4, -8);
circle.rotation.set(0, 0, 0);

//Cube

var geometryCube = new THREE.BoxGeometry(1, 1.5, 2); // Crée une géométrie de parallélépipède

var materialCube = new THREE.MeshBasicMaterial({ color: 0x27f5b0 }); // Crée un matériau simple

var cube = new THREE.Mesh(geometryCube, materialCube); // Combine la géométrie et le matériau pour créer un objet 3D affichable

scene.add(cube);

cube.position.set(-8, 4, -8);
cube.rotation.set(0, 0, 0);

//Capsule

var geometryCapsule = new THREE.CapsuleGeometry(1, 1, 6, 32, 1); // Crée une géométrie de capsule (forme cylindrique arrondie aux extrémités)
// 1er paramètre : rayon du cylindre
// 2e paramètre : longueur du cylindre (sans les extrémités)
// 3e paramètre : nombre de segments pour les demi-sphères aux extrémités
// 4e paramètre : nombre de segments autour du cylindre (comme des tranches)
// 5e paramètre : nombre de segments le long du cylindre

var materialCapsule = new THREE.MeshBasicMaterial({
  color: 0x4927f5,
  side: THREE.DoubleSide,
}); // Crée un matériau simple

var capsule = new THREE.Mesh(geometryCapsule, materialCapsule); // Combine la géométrie et le matériau pour créer un objet 3D affichable

scene.add(capsule);
capsule.position.set(-3, 4, -8);
capsule.rotation.set(0, 0, 0);

//Cône

var geometryCone = new THREE.ConeGeometry(1, 2, 32, 1, true, 0, 1 * Math.PI); // Crée une géométrie de cône
// 1er paramètre : rayon de la base
// 2e paramètre : hauteur du cône
// 3e paramètre : nombre de segments autour de la base (plus il y en a, plus la base est lisse)
// 4e paramètre (optionnel) : nombre de segments le long de la hauteur (par défaut 1)
// 5e paramètre (optionnel) : booléen "openEnded" (true = cône sans base, false = avec base)
// 6e paramètre (optionnel) : angle de départ en radians (par défaut 0)
// 7e paramètre (optionnel) : angle de balayage en radians (par défaut 2 * Math.PI, pour un cône complet)

var materialCone = new THREE.MeshBasicMaterial({
  color: 0xf5276c,
  side: THREE.DoubleSide,
}); // Crée un matériau simple

var cone = new THREE.Mesh(geometryCone, materialCone); // Combine la géométrie et le matériau pour créer un objet 3D affichable

scene.add(cone);

cone.position.set(2, 4, -8);
cone.rotation.set(0, 0, 0);

//Cylindre

var geometryCylinder = new THREE.CylinderGeometry(
  1.25,
  0.75,
  2.5,
  3,
  1,
  true,
  0,
  6
);
// Crée une géométrie de cylindre
// 1er paramètre : rayon du haut du cylindre
// 2e paramètre : rayon du bas du cylindre
// 3e paramètre : hauteur du cylindre
// 4e paramètre : nombre de segments autour du cylindre (plus il y en a, plus il est lisse)
// 5e paramètre (optionnel) : nombre de segments le long de la hauteur (par défaut 1)
// 6e paramètre (optionnel) : booléen "openEnded" (true = cylindre ouvert, sans bases, false = fermé)
// 7e paramètre (optionnel) : angle de départ en radians (par défaut 0)
// 8e paramètre (optionnel) : angle de balayage en radians (par défaut 2 * Math.PI, pour un cylindre complet)

var materialCylinder = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  side: THREE.DoubleSide,
});

var cylinder = new THREE.Mesh(geometryCylinder, materialCylinder); // Combine la géométrie et le matériau pour créer un objet 3D affichable

scene.add(cylinder);

cylinder.position.set(7, -1, -8);
cylinder.rotation.set(0, 0, 0);

//Icosaèdre

var geometryIcosahedron = new THREE.IcosahedronGeometry(1.25, 0);
// Crée une géométrie de icosaèdre (...)
// 1er paramètre (optionnel) : radius → rayon du icosaèdre (par défaut 1)
// 2e paramètre (optionnel) : detail → niveau de subdivision pour lisser les faces (par défaut 0)
//    - 0 = forme simple avec 12 faces
//    - 1 ou plus = ajoute des subdivisions pour un icosaèdre plus arrondi

var materialIcosahedron = new THREE.MeshBasicMaterial({
  color: 0x8000ff,
  side: THREE.DoubleSide,
});

var icosahedron = new THREE.Mesh(geometryIcosahedron, materialIcosahedron); // Combine la géométrie et le matériau pour créer un objet 3D affichable

scene.add(icosahedron);

icosahedron.position.set(2, -1, -8);
icosahedron.rotation.set(0, 0, 0);

//Octahèdre
var geometryOctahedron = new THREE.OctahedronGeometry(1.25, 0);

var materialOctahedron = new THREE.MeshBasicMaterial({
  color: 0x00ffff,
  side: THREE.DoubleSide,
});

var octahedron = new THREE.Mesh(geometryOctahedron, materialOctahedron); // Combine la géométrie et le matériau pour créer un objet 3D affichable

scene.add(octahedron); // Ajoute le cube à la scène

octahedron.position.set(-3, -1, -8);
octahedron.rotation.set(0, 0, 0);

//Plane
var geometryPlane = new THREE.PlaneGeometry(2, 2, 1, 1);
// Crée une géométrie plane (rectangle)
// 1er paramètre : width → largeur du plan
// 2e paramètre : height → hauteur du plan

var materialPlane = new THREE.MeshBasicMaterial({
  color: 0x80ff00,
  side: THREE.DoubleSide,
});

var plane = new THREE.Mesh(geometryPlane, materialPlane); // Combine la géométrie et le matériau pour créer un objet 3D affichable

scene.add(plane);

plane.position.set(-8, -1, -8);
plane.rotation.set(0, 0, 0);

//Anneau
var geometryRing = new THREE.RingGeometry(0.75, 1.5, 5, 1, 0.4, 1.75 * Math.PI);
// Crée une géométrie d'anneau (ring)
// 1er paramètre : innerRadius → rayon intérieur de l'anneau
// 2e paramètre : outerRadius → rayon extérieur de l'anneau
// 3e paramètre : thetaSegments → nombre de segments autour de l'anneau (plus il y en a, plus l'anneau est lisse)
// 4e paramètre (optionnel) : phiSegments → nombre de segments le long de la section (par défaut 1)
// 5e paramètre (optionnel) : thetaStart → angle de départ en radians (par défaut 0)
// 6e paramètre (optionnel) : thetaLength → angle de balayage en radians (par défaut 2 * Math.PI, pour un anneau complet)

var materialRing = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  side: THREE.DoubleSide,
});

var ring = new THREE.Mesh(geometryRing, materialRing); // Combine la géométrie et le matériau pour créer un objet 3D affichable

scene.add(ring);

ring.position.set(-8, -6, -8);
ring.rotation.set(0, 0, 0);

//Balle
var geometrySphere = new THREE.SphereGeometry(
  1.1,
  3,
  14,
  0,
  1.5 * Math.PI,
  1.75 * Math.PI
);
// Crée une géométrie de sphère
// Paramètres principaux :
// 1er paramètre (optionnel) : radius → rayon de la sphère (par défaut 1)
// 2e paramètre (optionnel) : widthSegments → nombre de segments horizontaux (par défaut 32, plus il y en a, plus la sphère est lisse)
// 3e paramètre (optionnel) : heightSegments → nombre de segments verticaux (par défaut 16)
// 4e paramètre (optionnel) : phiStart → angle de départ horizontal en radians (par défaut 0)
// 5e paramètre (optionnel) : phiLength → angle horizontal balayé en radians (par défaut 2 * Math.PI, sphère complète)
// 6e paramètre (optionnel) : thetaStart → angle vertical de départ en radians (par défaut 0)
// 7e paramètre (optionnel) : thetaLength → angle vertical balayé en radians (par défaut Math.PI, sphère complète)

var materialSphere = new THREE.MeshBasicMaterial({
  color: 0x0080ff,
  side: THREE.DoubleSide,
});

var sphere = new THREE.Mesh(geometrySphere, materialSphere); // Combine la géométrie et le matériau pour créer un objet 3D affichable

scene.add(sphere);

sphere.position.set(-3, -6, -8);
sphere.rotation.set(0, 0, 0);

//tétraèdre
var geometryTetrahedron = new THREE.TetrahedronGeometry(1.25, 1);
// Crée une géométrie de tétraèdre (polyèdre à 4 faces triangulaires)
// 1er paramètre (optionnel) : radius → rayon du tétraèdre (par défaut 1)
// 2e paramètre (optionnel) : detail → niveau de subdivision des faces (par défaut 0)
//    - 0 = forme simple, faces planes
//    - 1 ou plus = ajoute des subdivisions, forme plus arrondie

var materialTetrahedron = new THREE.MeshBasicMaterial({
  color: 0xff00ff,
  side: THREE.DoubleSide,
});

var tetrahedron = new THREE.Mesh(geometryTetrahedron, materialTetrahedron); // Combine la géométrie et le matériau pour créer un objet 3D affichable

scene.add(tetrahedron);

tetrahedron.position.set(2, -6, -8);
tetrahedron.rotation.set(0, 0, 0);

//tore
var geometryTorus = new THREE.TorusGeometry(1, 0.2, 3, 6, 1.75 * Math.PI);
// Crée une géométrie de tore (forme de donut)
// 1er paramètre : radius → rayon du tore (distance du centre au centre du tube)
// 2e paramètre : tube → rayon du tube
// 3e paramètre (optionnel) : radialSegments → nombre de segments autour du tube (par défaut 16)
// 4e paramètre (optionnel) : tubularSegments → nombre de segments autour du tore (par défaut 100)
// 5e paramètre (optionnel) : arc → angle de balayage en radians (par défaut 2 * Math.PI, tore complet)

var materialTorus = new THREE.MeshBasicMaterial({
  color: 0xff8000,
  side: THREE.DoubleSide,
});

var torus = new THREE.Mesh(geometryTorus, materialTorus); // Combine la géométrie et le matériau pour créer un objet 3D affichable

scene.add(torus); // Ajoute le cube à la scène

torus.position.set(7, -6, -8);
torus.rotation.set(0, 0, 0.4);

//noeud de tore
var geometryTorusKnot = new THREE.TorusKnotGeometry(0.75, 0.1, 32, 3, 4, 7);
// Crée une géométrie de nœud de tore (torus knot)
// 1er paramètre : radius → rayon global du nœud
// 2e paramètre : tube → rayon du tube
// 3e paramètre (optionnel) : tubularSegments → nombre de segments le long du nœud (par défaut 64)
// 4e paramètre (optionnel) : radialSegments → nombre de segments autour du tube (par défaut 8)
// 5e paramètre (optionnel) : p → nombre de tours autour de l’axe principal (par défaut 2)
// 6e paramètre (optionnel) : q → nombre de tours autour de l’axe secondaire (par défaut 3)

var materialTorusKnot = new THREE.MeshBasicMaterial({ color: 0xd3f527 });

var torusKnot = new THREE.Mesh(geometryTorusKnot, materialTorusKnot); // Combine la géométrie et le matériau pour créer un objet 3D affichable

scene.add(torusKnot); // Ajoute le cube à la scène

torusKnot.position.set(12, -6, -8);
torusKnot.rotation.set(0, 0, 0);

//Dodécaèdre

var geometryDodecahedron = new THREE.DodecahedronGeometry(1, 5);
// Crée une géométrie de dodécaèdre (polyèdre à 12 faces)
// 1er paramètre (optionnel) : radius → rayon du dodécaèdre (par défaut 1)
// 2e paramètre (optionnel) : detail → niveau de subdivision pour lisser les faces (par défaut 0)
//    - 0 = forme simple avec 12 faces
//    - 1 ou plus = ajoute des subdivisions pour un dodécaèdre plus arrondi

var materialDodecahedron = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
});

var dodecahedron = new THREE.Mesh(geometryDodecahedron, materialDodecahedron); // Combine la géométrie et le matériau pour créer un objet 3D affichable

scene.add(dodecahedron);

dodecahedron.position.set(17, -6, -8);
dodecahedron.rotation.set(0, 0, 0);

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

  //Déplacement

  circle.position.x += pacSpeed * pacDirection;

  if (circle.position.x >= 25 && pacDirection === 1 && lane === 0) {
    lane = 1;
    circle.position.y = -1;
    pacDirection = -1;
    circle.rotation.z = Math.PI;
  }

  if (circle.position.x <= -25 && pacDirection === -1 && lane === 1) {
    lane = 2;
    circle.position.y = -6;
    pacDirection = 1;
    circle.rotation.z = 0;
  }

  if (circle.position.x >= 25 && pacDirection === 1 && lane === 2) {
    lane = 0;
    circle.position.x = -25;
    circle.position.y = 4;
    pacDirection = 1;
    circle.rotation.z = 0;
  }

  //Cube
  cube.rotation.y += 0.02;

  //Capsule
  capsule.rotation.x += 0.02;

  //Cône
  cone.rotation.y += 0.02;

  //Cylindre
  cylinder.rotation.x += 0.02;

  //Icosaèdre
  icosahedron.rotation.y += 0.02;

  //Octaèdre
  octahedron.rotation.x += 0.02;

  //Plane
  plane.rotation.y += 0.02;

  //Anneau
  ring.rotation.x += 0.02;

  //Balle
  sphere.rotation.y += 0.02;

  //tétraèdre
  tetrahedron.rotation.x += 0.02;

  //tore
  torus.rotation.y += 0.02;

  //noeud de tore
  torusKnot.rotation.x += 0.02;

  //Dodécaèdre

  //Rendu
  renderer.render(scene, camera); // Redessine la scène vue par la caméra à chaque frame

  mySond.play();
}
animate(); // Lance la boucle d'animation
