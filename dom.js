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

let elementClassCommune = document.querySelectorAll(".commune");
for (let i = 0; i < elementClassCommune.length; i++){
    console.log(elementClassCommune[i]);
};

/**
 * j'insère des balises dans le fichier HTML grace a la manipulation du DOM en JS
*/
//je crée un element (balise) nommée section
let elementSection = document.createElement("section");

//je cible le body du document HTML puis je le stocke dans une variable JS elementBody
let elementBody = document.querySelector("body");

//j'insere la balise section dans le body
elementBody.appendChild(elementSection);
//je crée une balise h3
let nouveauTitre = document.createElement("h3");
//je lui ajoute du texte
nouveauTitre.textContent = "Titre inséré en JS";
//j'insere le titre dans la section
elementSection.appendChild(nouveauTitre);

//je crée une balise maman 
let elementMaman = document.createElement("maman");

elementBody.appendChild(elementMaman);
//je crée une balise h3
let nouveauTitre1 = document.createElement("h3");
//je lui ajoute du texte
nouveauTitre1.textContent = "bonjour maman";

elementMaman.appendChild(nouveauTitre1);

//je crée une balise img
let elementImg = document.createElement("img");
//je lui ajoute un attribut src
elementImg.src = "madara.jpg";
elementImg.setAttribute("alt", "image de madara uchiwa");
elementImg.className = "image-madara";
elementImg.classList.add("image", "image-uchiha");

//supprimer une classe de l'element img
elementImg.classList.remove("image-madara");

//j'insere l'image dans le body
elementBody.appendChild(elementImg);