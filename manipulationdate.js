//manipulation de la date en JavaScript
const maDate = new Date();

const anneeEnCours = maDate.getFullYear();

let elementSpanAnnee = document.querySelector("#annee");
elementSpanAnnee.textContent = anneeEnCours;

let elementSpanMois = document.querySelector("#mois");
elementSpanMois.textContent = maDate.getMonth();

//affichage date complete 06/01/2025
let elementSpanDateComplete = document.querySelector("#dateComplete");
let jour = maDate.getDate();
let mois = maDate.getMonth();
let annee = maDate.getFullYear();

function afficherDateHeure() {
  const maintenant = new Date();

  // Date
  document.getElementById("annee").textContent = maintenant.getFullYear();

  document.getElementById("mois").textContent = mois;

  document.getElementById("jours").textContent = maintenant.getDay();

  document.getElementById("dateComplete").textContent = maintenant.toLocaleDateString("fr-FR");

  // Options d'affichage de l'heure
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  };

  // Heures par fuseau horaire
  document.getElementById("heureMayotte").textContent =
    new Intl.DateTimeFormat("fr-FR", {
      ...options,
      timeZone: "Indian/Mayotte",
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(maintenant);

  document.getElementById("heureParis").textContent =
    new Intl.DateTimeFormat("fr-FR", {
      ...options,
      timeZone: "Europe/Paris",
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(maintenant);

  document.getElementById("heureTokyo").textContent =
    new Intl.DateTimeFormat("fr-FR", {
      ...options,
      timeZone: "Asia/Tokyo",
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(maintenant);
  
  document.getElementById("heureJamaique").textContent =
  new Intl.DateTimeFormat("fr-FR", {
    ...options,
    timeZone: "America/Jamaica",
    weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
  }).format(maintenant);
}

// Initialisation + mise à jour chaque seconde
afficherDateHeure();
setInterval(afficherDateHeure, 1000);
