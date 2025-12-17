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

