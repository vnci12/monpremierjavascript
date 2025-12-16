/**
 * feras appel a lidentifiant choisit dans le html
 */
let elementBoutonValider = document.getElementById("boutonValider");

elementBoutonValider.addEventListener("click", function () {
    console.log("elementBoutonValider :", elementBoutonValider);
});

console.log(document.getElementById("nom"));

/**
 * je recupere un elelment (une balise) situe dans le fichier HTML (calcule_age.html). j'utilise son ID pour le cibler est en suite stocker dans une variable JS elementBoutonValider
*/

//j'affiche lelement rcuperer
console.log(elementBoutonValider.nodeName);

let elementInputNom = document.querySelector("#nom");

console.log(elementInputNom);

console.log(document.head);
/**
 * je recupere ce qui se trouve dans le head et je la console.log
 * document.(....) por faire appel a un element du DOM dans la console
*/
console.log(document.body);

/**
 * permet de stocker une valeur dans une variable JS
 * je recupere la div du document HTML
 * appel d'un id dans la console avec querySelector en prescisant le # au debut de l'identifiant
*/
let elementDivAe = document.querySelector("#ae");

console.log(elementDivAe);



let elementParagrapheArret = document.getElementById("arret");

console.log(elementParagrapheArret);

/**
 * je recupere un element HTML (balise) par son id et je la stocke dans une variable JS.
 * j'affiche le contenu de cette variable dans la console.
 * getElementById est une methode qui permet de cibler un element par son id sans utiliser le #.
 * querySelector est une methode qui permet de cibler un element par son id en utilisant le #.
*/

//j'affiche la liste des communes
let elementListeCommunes = document.querySelector("#listeCommunes");
console.log(elementListeCommunes);

//j'affiche chaque commune une par une avec une boucle FOR

for(let i = 0; i < elementListeCommunes.children.length; i++){
    console.log("commune n°", i, ":", elementListeCommunes.children[i].textContent);
};

//juste une autre methode pour afficher chaque commune une par une avec une boucle FOR avec querySelectorAll

let elelmentClassCommune = document.querySelectorAll(".commune");
for (let i = 0; i < elelmentClassCommune.length; i++){
    console.log(elelmentClassCommune[i]);
};
