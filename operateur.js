console.log("Ici je code les opérateur en html.");

//addition//

let prixUnitaire = 13;
let valeurAjouter = 7;
let valeurReduction = 5;
let valurDivision = 4;

//premiére technique: additionner des chiffre//
let prixAdditionne1 = 3+7;

//j'affiche la valeur de la variable prixAdditionnel//
console.log("prixAdditionne1: ", prixAdditionne1);

//Deuxiéme methode d'additionner des nombres a l'aide variables//
let prixAdditionne2 = prixUnitaire + valeurAjouter;

console.log("prixAdditionne2: ", prixAdditionne2);

// Additionner des chaines de caractéres//
//Exemple: "Fatima" + "Amina"; Résultat attendu//
let eleves1 = "Fatima";
let eleves2 = "Amina";

//resultat attendu: Fatima Amina//
console.log(eleves1 + eleves2);

console.log(eleves1 +" "+ eleves2);
//je concataine deux variable, et le resultat attendu ajouteras un espace entre fatima et amina//

let eleveCombo = eleves1 + " " + eleves2;

console.log("eleves Combo:", eleveCombo);

//Soustraction - //
let prixReduit = prixUnitaire - valeurReduction;
console.log("prix reduit", prixReduit);

//multiplication//
/**
*le signe * permet de multiplier des nombre
*attention: il ne faut pas utiliser le signe x pour la multiplication
*/
let prximultiplie = prixUnitaire * valeurAjouter;
console.log("prix multiplié:", prximultiplie);

/**
*division
*le signe / permet de diviser
*/
let prixDivise = prixUnitaire / valurDivision;
console.log("résultat du prix divisé:", prixDivise);

/**
 * les opératurs de comparaison
 * Nous allons comparer les valeurs stocker dans les variable
*/
console.log("Section comparaison");
let village2 = "Mamoudzou";
let commune2 ="MAMOUDZOU";

//
console.log(village == commune);
/**
 * je vérifie que les deux variable on:
 * la même valeur
 * le même 
 */
console.log(village2 === commune2);

/**
 * 
 */
let age0 = 12;
let distanceParcourue = 5;

//est-ce que l'age est supérieur à la distance parcourue?
console.log(age0 > distanceParcourue);

//est-ce que l'âge est inférieur à la distance parcourut?
console.log(age0 < distanceParcourue);

//est-ce que l'âge est supérieur ou égal à la distance?
console.log(age0 >= distanceParcourue);
//signe: >=:spérieur ou égal

//est-ce que l'âge est inférieur ou égal à la distance?
console.log(age <= distanceParcourue);
//signe: <=:inférieur ou égal

//est-ce qaque le village est différent de la commune?
console.log(village2 != commune2);
//signe: !=:différent

//est-ce que la commune est strictement différent du village?
console.log(commune2 !== village2);
//signe: !==: strictement différent