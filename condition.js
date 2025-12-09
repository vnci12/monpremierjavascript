/**
 * Les conditions en javascript
 */

let nombreFruit = 19;

/**
 * J'affiche l'alerte SI le nombre de fruits est égal a 18
 */

/**
 * Ma conditions commance par le mot-clé IF
 * la syntaxe à respecter est:
 * if(ma condition){
 * Action à éxecuter
 * }
 */
if (nombreFruit == 18) { //nous avons une comparaison à égalité strict
    alert("vous avez atteint 18 fruits.");//fonction d'lerte//
};

let noteEleve = 10;

if (noteEleve >= 10) {
    alert("vous êtes admis avc une note de" + noteEleve);
};

let ageSpectateur = 18;

if (ageSpectateur >= 18) {
    alert("Vous avez" + ageSpectateur ,"vous pouvez regarder Rambo");
};

let pointpermis = 12;

if(pointpermis == 12) {//si les point de permis son strictement égal
    alert("vous avez un bonus");
} else{//sinon
    alert("vous avez des malus");
};