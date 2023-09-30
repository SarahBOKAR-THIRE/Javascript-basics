function creerFonctionComposee(f, g) {
    return function(x) {
        return f(g(x));
    };
}

// Utilisez la fonction creerFonctionComposee pour créer la fonction calculerCarreDoubler
var calculerCarre = function(x) {
    return x * x;
};

var doubler = function(x) {
    return 2 * x;
};

var calculerCarreDoubler = creerFonctionComposee(calculerCarre, doubler);

// Exemple d'utilisation de calculerCarreDoubler
let resultat = calculerCarreDoubler(5); // Cela devrait renvoyer 100 (carre de 10)
console.log(resultat);

