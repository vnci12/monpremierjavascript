/**
 * les fonction en javascript
 */

console.log("### Section fonctions ###");

/**
 * la fonction additionner() doit additionner des nombres
 * et retourner le resultats de l'addition
 * La fonction additionner a besoin de deux paramétres: chiffre1 et chiffre2
 * ensuite, la fonction additionner additionne les deux paramètres: chiffre1 + chiffre2
 * enfin la fontion additionner retourne ou renvoie le résumtat du calcul
 */
function additionner(chiffre1, chiffre2) {
    let resultat = chiffre1 + chiffre2;
    return resultat;
}
//J'utilise la fontion additionner(chiffre1, chiffre2) pour calculer la somme de deux nombres

let sommes = 15 + 8;

let sommes1 = additionner(15, 8);

console.log("sommes1:", sommes1);


//soustraction
function soustraire(a, b) {
    let resultat = a - b;
    return resultat;
}

let sommes2 = soustraire(15, 8);

console.log("sommes2:", sommes2);


/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns
 * la fonction multiplier prends deux paramètres: a et b.
 * le paramètre a est multiplié par le paramètre. Et , le resultat reste stocké dans la variable resultat.
 * Enfin, la fonction retourne ou renvoit le resultat
 */
function multiplier(a, b) {
    let resultat = a * b;
    return resultat;
}


let sommes3 = multiplier(15, 8);

console.log("sommes3:", sommes3);