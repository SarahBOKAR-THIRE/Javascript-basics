// Créez un tableau nombres contenant plusieurs nombres (pairs et impairs)
let nombres = [2, 7, 12, 5, 10, 3, 8];

// Initialisez une variable somme à zéro
let somme = 0;

// Utilisez une boucle for pour parcourir le tableau
for (let i = 0; i < nombres.length; i++) {
    // Vérifiez si l'élément est pair en utilisant l'opérateur modulo (%)
    if (nombres[i] % 2 === 0) {
        // Si l'élément est pair, ajoutez-le à la variable somme
        somme += nombres[i];
    }
}

// Affichez la somme des éléments pairs dans la console
console.log("La somme des éléments pairs du tableau est : " + somme);
