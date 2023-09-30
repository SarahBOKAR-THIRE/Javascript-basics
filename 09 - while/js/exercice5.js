// Un nombre aléatoire entre 1 et 100
const numberSecret = Math.floor(Math.random() * 100) + 1;

//Le nombre secret dans la console
console.log("Le nombre secret est : " + numberSecret);

// Initialisez une variable pour stocker la tentative de l'utilisateur
let tentativeUtilisateur;
let essais = 0;

// Utilisez une boucle while pour demander à l'utilisateur de deviner le nombre secret
while (true) {
    // Demandez à l'utilisateur de saisir un nombre
    tentativeUtilisateur = parseInt(prompt("Devinez le nombre secret (entre 1 et 100) :"));

    // Vérifiez si l'utilisateur a annulé la saisie ou deviné le nombre
    if (tentativeUtilisateur === null) {
        alert("Vous avez annulé le jeu. Le nombre secret était " + numberSecret + ".");
        break; // Sortez de la boucle
    }

    // Vérifiez si la tentative de l'utilisateur est correcte, trop basse ou trop élevée
    essais++;
    if (tentativeUtilisateur === numberSecret) {
        alert("Bravo ! Vous avez deviné le nombre secret en " + essais + " essais.");
        break; // Sortez de la boucle
    } else if (tentativeUtilisateur < numberSecret) {
        alert("Trop bas. Essayez encore.");
    } else {
        alert("Trop élevé. Essayez encore.");
    }
}
