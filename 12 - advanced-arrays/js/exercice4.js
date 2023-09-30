// Créez une grille 3x3 vide
const grille = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

// Initialisez le joueur actuel (joueur X commence)
let joueurActuel = "X";

// Fonction pour afficher la grille
function afficherGrille() {
    console.log("Grille du jeu de morpion :");
    for (let ligne = 0; ligne < 3; ligne++) {
        console.log(grille[ligne].join(" | "));
    }
}

// Fonction pour vérifier si un joueur a gagné
function aGagne(symbole) {
    // Vérification des lignes
    for (let ligne = 0; ligne < 3; ligne++) {
        if (grille[ligne][0] === symbole && grille[ligne][1] === symbole && grille[ligne][2] === symbole) {
            return true;
        }
    }

    // Vérification des colonnes
    for (let colonne = 0; colonne < 3; colonne++) {
        if (grille[0][colonne] === symbole && grille[1][colonne] === symbole && grille[2][colonne] === symbole) {
            return true;
        }
    }

    // Vérification des diagonales
    if (grille[0][0] === symbole && grille[1][1] === symbole && grille[2][2] === symbole) {
        return true;
    }
    if (grille[0][2] === symbole && grille[1][1] === symbole && grille[2][0] === symbole) {
        return true;
    }

    return false;
}

// Boucle principale du jeu
while (true) {
    afficherGrille();

    // Demandez au joueur de spécifier la ligne et la colonne
    const ligne = parseInt(prompt(`Joueur ${joueurActuel}, choisissez la ligne (0, 1 ou 2) : `));
    const colonne = parseInt(prompt(`Joueur ${joueurActuel}, choisissez la colonne (0, 1 ou 2) : `));

    // Vérifiez si la case est vide
    if (grille[ligne][colonne] === "") {
        grille[ligne][colonne] = joueurActuel;

        // Vérifiez si le joueur a gagné
        if (aGagne(joueurActuel)) {
            afficherGrille();
            console.log(`Le joueur ${joueurActuel} a gagné !`);
            break;
        }

        // Vérifiez si la grille est remplie (match nul)
        let grillePleine = true;
        for (let ligne = 0; ligne < 3; ligne++) {
            for (let colonne = 0; colonne < 3; colonne++) {
                if (grille[ligne][colonne] === "") {
                    grillePleine = false;
                    break;
                }
            }
        }

        if (grillePleine) {
            afficherGrille();
            console.log("Match nul !");
            break;
        }

        // Passez au joueur suivant
        joueurActuel = (joueurActuel === "X") ? "O" : "X";
    } else {
        console.log("La case est déjà occupée. Choisissez une autre case.");
    }
}
