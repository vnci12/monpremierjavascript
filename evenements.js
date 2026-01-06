/**gestion des événements en JS qui seront exécutés dans le fichier calcul_age.html
*/

const elementValiderDate = document.querySelector("#validerDate");

const elementDateduJourFormat2 = document.querySelector("#dateduJourFormat2");

let elementSpanDateDuJour = document.querySelector("#dateDuJour");

let elementSpanDateduJourFormat2 = document.querySelector("#dateduJourFormat2");

//je crée un objet date
let dateActuelle = new Date();

//autre format de date en local
const maDate = new Date();

elementValiderDate.addEventListener("click", function() {
    //je decris laction au clic du bouton, wqj'insere la date du jour dans le span
    elementSpanDateDuJour.textContent = dateActuelle.toLocaleString();

    elementSpanDateduJourFormat2.textContent = maDate.toLocaleDateString();
});

//evenement "keydown"

//1. recupere lelement qui sera associé à l'evenement keydown
let elementBouttonFleche = document.querySelector("#bouttonFleche");

//2. j'associe l'evenement keydown à l'element recupere avc addEventListener(). a linterieur de la méthode addEventListener(), je passe une fonction fléchée comme suit '( => {})'.
elementBouttonFleche.addEventListener("keydown", (event) =>{
    console.log("evenement keydown");
    console.log("touche appuyée :", event.key);
});

/**
 * mon evenement "change"
 * je code un evenement "change" sur un input de type text
 * l'évenement "change" se déclenche lorsque l'utilisateur modifie la valeur d'un champ de formulaire et quitte ce champ (par exemple, en cliquant ailleurs ou en appuyant sur la touche Tab).
*/

//1. je récupere l'element html ou sera associé l'evenement "change"
let elementInputNomForm = document.querySelector("#nom");

//2. j'associe l'evenement "change" à l'element recupere avec addEventListener(), puis je console.log la nouvelle valeur de l'input a chaque changement de valeur.
let messageSalutation; // je déclare une variable vide.

let elementSpanNomUtilisateur = document.querySelector("#nomUtilisateur");
//j'affiche le message de salutation dans le span correspondant

elementSpanNomUtilisateur.textContent = messageSalutation;
elementInputNomForm.addEventListener("change", (event) => {
    console.log("nouvelle valeur :", event.target.value);
    messageSalutation = `Bonjours ${event.target.value}`; // j'affecte une valeur à la variable vide.
    elementSpanNomUtilisateur.textContent = messageSalutation;
    //j'affiche le message de salutation dans le span correspondant
});

 /**
  * Envoyer le formulaire
  * je recupere les données saisies dans un formulaire et j'affiches les données dans la console.
  * -nom
  * -prenom
  * -age
  * -situation matrimoniale
*/
//je recupere la balise form avec ces enfants, ensuite je stock la balise form dans la variable elementForm
let elementForm = document.querySelector(`form`);

//recuperation de la situation
let radioSituationEtudiant = document.getElementById("situation1");
let radioSituationSalarier = document.getElementById("situation2");
let divSituation = document.getElementById("situationUtilisateur");
let situationTexte = document.getElementById("situationTexte");

//j'associe l'evenement submit à la balise form
elementForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
    // j'empêche le comportement par défaut du formulaire (rechargement de la page).
    console.log("evenement submit déclenché");

    const nom = document.querySelector("#nom").value;
    console.log("Nom :", nom);
    const prenom = document.querySelector("#prenom").value;
    console.log("Prénom :", prenom);
    const age = document.querySelector("#age").value;
    console.log("Âge :", age, "ans"); 
    console.log("Situation :", situationTexte.textContent);
})

function afficherSituation() {
    if (radioSituationEtudiant.checked) {
        situationTexte.textContent = "Étudiant";}
    else if (radioSituationSalarier.checked) {
        situationTexte.textContent = "Salarié";}
}
radioSituationEtudiant.addEventListener("change", afficherSituation);
radioSituationSalarier.addEventListener("change", afficherSituation);
console.log("Situation initiale :", situationTexte.textContent);


