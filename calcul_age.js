//calcul auto de l'age
const inputAnneeNaissance = document.getElementById("anneeNaissance");
const inputAge = document.getElementById("age");

inputAnneeNaissance.addEventListener("input", () => {
    const anneeNaissance = Number(inputAnneeNaissance.value);
    const anneeActuelle = new Date().getFullYear();

    if (anneeNaissance && anneeNaissance > 1000 && anneeNaissance <= anneeActuelle) {
        inputAge.value = anneeActuelle - anneeNaissance;
    } else {
        inputAge.value = "";
    }
});

/**
 * affichage d'un message pour definir si la personne est mineure ou majeure
 */
inputAnneeNaissance.addEventListener("input", () => {
    const anneeNaissance = Number(inputAnneeNaissance.value);
    const anneeActuelle = new Date().getFullYear();

    if (anneeNaissance && anneeNaissance > 1000 && anneeNaissance <= anneeActuelle) {
        const age = anneeActuelle - anneeNaissance;
        inputAge.value = age;
        if (age >= 18) {
            alert("vous êtes majeur");
        } else {
            alert("vous êtes mineur");
        }
    } else {
        inputAge.value = "";
    }
});