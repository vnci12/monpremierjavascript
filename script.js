//ici, je vais redigé mon script javascript//

let nom = "MOHAMED AHAMADA";
let prenom = "Yowane";
let age = 21;
console.log("Bonjour, je m'appelle",nom, prenom);
console.log("J'ai", age);

let prix = 12;
const nombreDecimal = 3.4123;
const nombreNegatif = -509;
const nombreFraction = 1/3;

console.log("prix:", prix);
console.log("Nombre decimal:",nombreDecimal); 
console.log("Nombre negatif:",nombreNegatif);
console.log("Nombre fraction:",nombreFraction);

let salutation = "Bonjour les gens";
let greating = 'Good morning';
let andabu = `kwezi`;

console.log(salutation);//fait appelle a la valeur//
console.log(greating);//fait appelle a la valeur//
console.log(andabu);//fait appelle a la valeur//

let commune ="M'tsamboro";
let village ='M\'tsahara'

console.log("Je suis de la commune de", commune);
console.log("et je voudrais visiter le village de", village);

let vrai = true;
let est_faux = false;

console.log(vrai);
console.log(est_faux);

let eleves = ["said", "Amina", "bao"]
console.log(eleves);

let diplome = [true , 10 , "Daniel"]
console.log(eleves[0]);//fait appel au premier menbre du tableau//
console.log(eleves[1]);//fait appel au deuxieme menbre//
console.log(eleves[2]);//fait appel au troisieme menbre//

console.log(diplome);
console.log(diplome[1]);
console.log(diplome[2]);

let client = {
    nom: "Bacar",
    village: "Choungui",
    age: 25,
    scores: [4, 7, 2]
};//création d'un objet client//

console.log(client);
console.log(client.nom);//appelle du nom client//
console.log(client.village);//appelle du villege client//
console.log(client.age);//appelle de l'age client//
console.log(client.scores);//appelle du score client//
console.log(client.scores[1]);//appelle du score[1] client//

let joueurProfessionnel = {
    nom: "Zinesine Yazid Zidane",
    nationalité1: "Française",
    nationalité2: "algérienne",
    dateNaissance: "23/06/1972",
    taille: 1.85,
    piedFort: "Droit",
    poste: "Millieu offensif",
}; //création d'un objet joueur//

console.log(joueurProfessionnel);
console.log("C'est un grand jour son nom est", joueurProfessionnel.nom);
console.log("il est de nationalité", joueurProfessionnel.nationalité1, "et", joueurProfessionnel.nationalité2);
console.log("né en", joueurProfessionnel.dateNaissance);
console.log("il mesure", joueurProfessionnel.taille, "métres");
console.log("son pied le plus puissant lors d'un match et le", joueurProfessionnel.piedFort);
console.log("son poste au terrain", joueurProfessionnel.poste);

let deputerMayotte = {
    nom: "MANSOUR",
    prenom: "Kamardine",
    village: "Mangajou",
    dateNaissance: "23/03/1959",
    age: 66,
    profession: "Avocat",
};

console.log(deputerMayotte);
console.log(deputerMayotte.nom);
console.log(deputerMayotte.prenom);
console.log(deputerMayotte.village);
console.log(deputerMayotte.dateNaissance);
console.log(deputerMayotte.age,"ans");
console.log(deputerMayotte.profession);