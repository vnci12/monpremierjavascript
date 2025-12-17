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