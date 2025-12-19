- **Popot**
- **Armand**
- **3DAD**

## Projet 1

# Javascript : _Interactivité_

<img src="/img/PourTitre1.png" width="75%">

### Description

Mon projet personnel se concentre sur la bande dessinée numérique et interactive.  
À la suite de plusieurs projets précédents ce workshop, j’ai voulu poursuivre cette lancée en expérimentant des méthodes que je n’avais pas encore abordées.

Je me base actuellement sur le projet de fin d’étude d’Anthony Rageul [_Prise de tête_](https://prisedetete.net/).  
Une courte bande dessinée réalisée en 2009 où l’étudiant a tenté de percer le potentiel du genre narratif par le biais des outils de base de l’interactivité navigationnelle (hover, clic ou drag and drop).

<p align="center">
<img src="/img/PriseDeTête(1).png" width="48%">
<img src="/img/PriseDeTête(2).png" width="48%">
<img src="/img/PriseDeTête(3).png" width="48%">
<img src="/img/PriseDeTête(4).png" width="48%">
</p>

### Déroulé

Sur Figma, j’ai exporté des flèches en SVG que j’ai fixées et orientées sur les quatre points cardinaux de ma page de manière fixe.

J’ai ensuite exporté une grande image en retirant les barres horizontales et verticales pour gérer le déplacement uniquement avec mes flèches.

Pour terminer, j’ai cherché à limiter les fonctions de mes flèches par rapport à la taille de mon image afin d’obtenir trois déplacements proportionnels sur les axes X et Y.

J’ai d’abord tenté de contraindre les déplacements avec des limites fixes calculées de tête.  
Ce résultat ne donnait pas de déplacement proportionnel.

<img src="/img/projet1(1).png" width="78%">
<video width="75%" controls loop muted playsinline>
  <source src="/mov/expérimentation1_P1.mp4" type="video/mp4">
</video>


Avec les conseils de mon intervenante, j’ai finalement défini les limites automatiques avec des calculs dynamiques à partir de la taille de la fenêtre et de l’image.

<img src="/img/projet1(2).png" width="78%">
<video width="75%" controls loop muted playsinline>
  <source src="/mov/expérimentation1_P2.mp4" type="video/mp4">
</video>

### Conclusion

Cette première approche est basique et inadaptée à d’autres formats d’écran que celui de mon ordinateur.  
De plus, cette expérimentation ne possède pas en l’état de narration qui justifierait son application.

Ce projet demande à être complété pour être plus flexible mais me permet néanmoins d’améliorer un peu mes bases afin d’envisager la suite de mon projet personnel.

---

## Projet 2

# Three.js : _3D basique_

<img src="/img/PourTitre2.png" width="75%">

### Description

Suite au projet numéro 1, ce travail vise à apprendre les bases du codage 3D afin d’expérimenter l’interactivité sur des formes volumineuses.

### Déroulé

J’ai commencé par apprendre à utiliser la bibliothèque  
[_Three.js_](https://threejs.org/)  
avec les tutoriels de la chaîne YouTube _Red Stapler_.

Ce court aperçu m’a tout de suite redirigé vers les documentations de Three.js  
[à voir ci-dessous](https://threejs.org/docs/#BoxGeometry)  
où j’ai pu constater qu’il existait une majorité de formes simples à générer ainsi que des formes nécessitant des calculs plus complexes.

- **Formes simples**
  - Anneau
  - Balle
  - Capsule
  - Cercle
  - Cône
  - Cube
  - Cylindre
  - Dodécaèdre
  - Icosaèdre
  - Nœud de tore
  - Plateau
  - Tétraèdre
  - Tore

- **Formes complexes**
  - Extrusion
  - Fil de fer
  - Forme (tout objet géométrique possible)
  - Polygone
  - Solide de révolution
  - Tube

En prenant en compte uniquement les formes simples, j’ai créé une série de formes monochromes, dont un dérivé du cercle ressemblant à l’icône Pac-Man.

<p align="center">
<img src="/img/Pacman(1).png" width="28%">
<img src="/img/Pacman(2).png" width="38%">
</p>

À l’aide de l’IA ChatGPT, j’ai créé une animation de Pac-Man en animant proportionnellement l’angle de départ du cercle et son angle de balayage.

J’ai complété l’animation en créant une boucle infinie de déplacement de Pac-Man sur la page.

Pour finir, j’ai ajouté « difficilement » du son pour donner plus de vie au personnage.

  <video width="75%" controls loop muted playsinline>
  <source src="/mov/Pac-Man.mp4" type="video/mp4">

### Conclusion

Three.js simplifie grandement notre compréhension des formes numériques en 3D.  
Avec leurs paramètres simples à appliquer, j’ai pu abuser des contraintes pour obtenir rapidement de nombreuses formes dont certaines sont devenues méconnaissables.

Même si ce projet reste minimaliste, le fait de reconnaître des icônes ou des volumes uniquement à partir de formes monochromes est, selon moi, bien plus intéressant qu’un travail tout aussi maîtrisé mais conventionnellement détaillé.

Je n’ai pas encore atteint l’étape de l’interactivité, mais cette expérimentation me semble encourageante.
