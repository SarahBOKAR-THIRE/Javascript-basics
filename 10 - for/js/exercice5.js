// Déclarez un tableau dans lequel vous souhaitez rechercher l'élément
let tableau = [2, 4, 6, 8, 10, 12];

// Déclarez une variable elementRecherche et attribuez-lui la valeur de l'élément que vous souhaitez rechercher
let elementRecherche = 8; // Vous pouvez changer 8 par l'élément que vous recherchez

// Utilisez une boucle for pour parcourir le tableau
let indice = -1; // Initialisation de l'indice à -1 pour indiquer que l'élément n'est pas encore trouvé

for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] === elementRecherche) {
        indice = i; // L'élément a été trouvé, mettez à jour l'indice
        break; // Sortez de la boucle, car l'élément a été trouvé
    }
}

// Vérifiez si l'élément a été trouvé ou non et affichez le résultat
if (indice !== -1) {
    console.log("L'élément " + elementRecherche + " a été trouvé à l'indice " + indice);
} else {
    console.log("L'élément " + elementRecherche + " n'a pas été trouvé dans le tableau.");
}
