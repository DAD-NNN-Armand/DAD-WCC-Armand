- **Popot**
- **Armand**
- **3DAD**
##Projet 1##
#Javascript : _Intéractivité_#
<img src="/img/PourTitre1.png" width="75%">
### Description : ### 
Mon projet personnel se concentre sur la bande dessinée numérique et interactive. À la suite de plusieurs projets précédent ce workshop j’ai voulu poursuivre cette lancée en expérimentant des méthodes que je n’avais pas encore abordées.
 Je me base actuellement sur le projet de fin d’étude d’Anthony Rageul [_Prise de tête_]( https://prisedetete.net/). Une courte Bande dessinée réalisée en 2009 où l’étudiant a tenté de percer le potentiel du genre narratif par le biais des outils de bases de l’interactivité navigationnelle (hover, le clic ou le drag and drop).
<p align="center">
<img src="/img/PriseDeTête(1).png" width="48%">
<img src="/img/PriseDeTête(2).png" width="48%">
<img src="/img/PriseDeTête(3).png" width="48%">
<img src="/img/PriseDeTête(4).png" width="48%">
</p>
### Déroulé : ###
Sur figma j’ai exporté des flèches en SVG que j’ai fixé et orienté sur les quatres points cardinaux de ma page de manière fixe.
J’ai ensuite exporté une grande image en retirant les barres horizontales et verticales pour gérer le déplacement uniquement avec mes flèches.
Pour terminer j’ai cherché à limiter les fonctions de mes flèches par rapport à la taille de mon image afin d’obtenir trois déplacements proportionnels sur les axes X et Y.
J’ai d’abord tenté de contraindre les déplacements avec des limites fixes calculée de tête.
Ce résultat ne donnait pas de déplacement proportionnel.
<img src="/img/projet1(1).png" width="78%">
Avec les conseils de mon intervenante j’ai finalement défini les limites automatiques avec des calcules dynamiquement à partir de la taille de la fenêtre et de l’image.
<img src="/img/projet1(2).png" width="78%">
### Conclusion : ### 
Cette première approche est basique et inadaptée à d’autre formats d’écran que celui de mon ordinateur. De plus, cette expérimentation ne possède pas en l’état de narration qui justifierait son application. Ce projet demande à être complété pour être plus flexible mais me permet moins d’améliorer un peu mes bases pour envisager la suite de mon projet personnel.
##Projet 2##
#Three.js : _3D Basique_#
<img src="/img/PourTitre2.png" width="75%">
### Description : ### 
…Suite au projet numéro 1, ce travail vise à apprendre les bases du codage 3D afin d’expérimenter l’interactivité sur des formes volumineuses.
### Déroulé : ### 
J’ai commencé par apprendre a utilisé la bibliothèque [_Three.Js_](https://threejs.org/) avec les tutoriels de la chaine youtube _Red Stapler_.
Ce court aperçu m’a tout de suite redirigé vers les documentations de three.js [À voir ci-dessous](https://threejs.org/docs/#BoxGeometry) où j’ai pu constater qu’il existait une majorité de formes "simples" à générer ainsi que des formes nécessitant des calculs plus complexes.
- Formes simples
⋅⋅⋅⋅*####Anneau####
⋅⋅⋅⋅*####Balle####
⋅⋅⋅⋅*####Capsule####
⋅⋅⋅⋅*####Cercle####
⋅⋅⋅⋅*####Cône####
⋅⋅⋅⋅*####Cube####
⋅⋅⋅⋅*####Cylindre####
⋅⋅⋅⋅*####Dodécaèdre####
⋅⋅⋅⋅*####Icosaèdre####
⋅⋅⋅⋅*####nœud de tore####
⋅⋅⋅⋅*####Plateau####
⋅⋅⋅⋅*####tétraèdre####
⋅⋅⋅⋅*####tore####
- Formes simples
⋅⋅⋅⋅*####Extrusion####
⋅⋅⋅⋅*####Fil de fer####
⋅⋅⋅⋅*####Forme (tout objet géométrique possible)####
⋅⋅⋅⋅*####Polygone####
⋅⋅⋅⋅*####Solide de révolution####
⋅⋅⋅⋅*Tube
En prenant en compte seulement les formes simples j’ai créé une série de formes monochromes dont un dérivé du cercle ressemblant à l’icône Pac-Man
<p align="center">
<img src="/img/Pacman(1).png" width="48%">
<img src="/img/Pacman(2).png" width="48%">
</p>
À l’aide de l’IA Chat GPT j’ai créé une animation de Pac-Man en animant proportionnellement l’angle de départ du cercle et son angle de balayage.
J’ai complété l’animation en créant une boucle infinie de déplacement de Pac-Man sur la page.
Pour finir J’ai ajouté « difficilement » du son pour donner plus de vie au personnage.
### Conclusion : ### 
Le Three.js simplifie grandement notre compréhension des formes numériques en 3D. Avec leurs paramètres simples à appliquer, j’ai pu abuser des contraintes pour obtenir rapidement de nombreuses formes dont certaines sont devenues méconnaissables.
Même si ce projet reste minimaliste, le fait de reconnaître des icônes ou des volumes rien qu’avec des formes monochromes est selon moi bien plus intéressant qu’un travail tout aussi maitrisé mais conventionnellement détaillé.
Je n’ai pas encore atteint l’étape de l’interactivité mais cette expérimentation me semble encourageante. 

