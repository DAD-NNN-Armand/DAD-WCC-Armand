// Crée la scène : c’est le "conteneur" qui va contenir tous les objets 3D
var scene = new THREE.Scene();

// PerspectiveCamera est la caméra la plus commune
var camera = new THREE.PerspectiveCamera(
  75, // Champ de vision (FOV) en degrés
  // Plus grand = angle large (effet grand-angle)
  // Plus petit = zoom plus serré
  window.innerWidth / window.innerHeight, // Ratio largeur / hauteur de l’écran
  // Permet d’éviter que l’image soit étirée
  0.1, // Plan de coupe proche (near)
  // Tout ce qui est plus proche que 0.1
  // de la caméra ne sera pas affiché
  1000 // Plan de coupe lointain (far)
  // Tout ce qui est plus loin que 1000
  // ne sera pas affiché
);
// camera.position.z = 1;

var renderer = new THREE.WebGLRenderer({ antialias: true }); //anti-crénelage

renderer.setSize(window.innerWidth, window.innerHeight); // Définit la taille du rendu WebGL sur toute la fenêtre du navigateur

document.body.appendChild(renderer.domElement); // Ajoute le canvas WebGL généré par Three.js dans le <body> de la page// "$" est la fonction principale de jQuery
// Elle sert à sélectionner un élément HTML (ici <body>)
// append() ajoute le canvas WebGL comme enfant du <body>

var geometry = new THREE.BoxGeometry(1, 1.5, 2); // Crée une géométrie de parallélépipède
// 1 = largeur (axe X)
// 1.5 = hauteur (axe Y)
// 2 = profondeur (axe Z)
var material = new THREE.MeshBasicMaterial({ color: 0x00ffff }); // Crée un matériau simple
// color: 0xff0000 → rouge (hexadécimal RGB)
var cube = new THREE.Mesh(geometry, material); // Combine la géométrie et le matériau pour créer un objet 3D affichable

scene.add(cube); // Ajoute le cube à la scène

cube.position.z = -5;
cube.rotation.x = 0;
cube.rotation.y = 0;

renderer.render(scene, camera); // Lance le rendu : affiche la scène vue par la caméra

function animate() {
  requestAnimationFrame(animate); // Demande au navigateur d'appeler la fonction animate avant le prochain rafraîchissement de l'écran
  // Cela crée une boucle d'animation fluide
  cube.rotation.x += 0.0;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera); // Redessine la scène vue par la caméra à chaque frame
}
animate(); // Lance la boucle d'animation

// window.addEventListener("resize", () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });
