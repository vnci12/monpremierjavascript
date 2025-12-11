console.log("### section - je suis dans la boucle - ###")

/**
 * boucle WHILE
 * while signifie "tant que".
 * Tant que la limite n'est pas atteinte, alors l'actions s'execute
 * et à chaque tour, la variable nombreTour augmente de 1 (+1)
 */
let nombreTour = 0;
while (nombreTour < 7){
    console.log("Tour de la maison", nombreTour );
    nombreTour = nombreTour + 1;

    console.log("nombre de tours après le passage:", nombreTour)
}

//boucle FOR
for(let indice = 0; indice < 3; indice++) {
    console.log("l'indice est de:", indice)
}

//Application de la boucle For sur une liste d'élèves
let tableauEleves = ["Bounou-Ben", "Mohamed", "shahida", "Mounawara", "Anrabia", "Anzilati", "Nael", "Yowane", "Nouran", "Lidya", "Rachid", "Jassem"]

console.log("taiile du tableau:", tableauEleves.length)
console.log(tableauEleves[0]);
console.log(tableauEleves[1]);
console.log(tableauEleves[2]);
console.log(tableauEleves[3]);

