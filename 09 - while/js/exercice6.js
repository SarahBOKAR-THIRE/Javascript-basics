//l'utilisateur saisi un nombre entier positif
let nombreUtilisateur = parseInt(prompt("Entrez un nombre entier positif :"));

// Vérifiez si l'entrée de l'utilisateur est valide
if (isNaN(nombreUtilisateur) || nombreUtilisateur <= 0 || !Number.isInteger(nombreUtilisateur)) {
    console.log("Veuillez entrer un nombre entier positif valide.");
} else {
    // Initialisation des compteurs
    let iterations = 0;

    //Une boucle while pour appliquer la conjecture de Collatz
    while (nombreUtilisateur !== 1) {
        if (nombreUtilisateur % 2 === 0) {
            // Si le nombre est pair, divisez-le par 2
            nombreUtilisateur /= 2;
        } else {
            // Si le nombre est impair, multipliez-le par 3 et ajoutez 1
            nombreUtilisateur = nombreUtilisateur * 3 + 1;
        }
        iterations++;
    }

    // Affichez le nombre d'itérations nécessaires pour atteindre 1
    console.log("Le nombre d'itérations pour atteindre 1 selon la conjecture de Collatz est : " + iterations);
}
