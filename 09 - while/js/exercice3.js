let elements = [
    "Livres",
    24,
    "chaises",
    66,
    7
];

console.log(elements);

//une variable `elementRecherche` et attribuez-lui la valeur de l'élément que vous souhaitez rechercher dans le tableau
let elementRecherche = elements[2];
console.log(elementRecherche);

// Initialisez une variable pour garder une trace de la présence de l'élément
let estPresent = false;

// Utilisez une boucle while pour parcourir le tableau
let i = 0;
while (i < elements.length) {
    if (elements[i] === elementRecherche) {
        estPresent = true;
        break; // L'élément a été trouvé, sortez de la boucle
    }
    i++;
}

// Vérifiez si l'élément recherché est présent et affichez le résultat
if (estPresent) {
    console.log("L'élément recherché (" + elementRecherche + ") est présent dans le tableau.");
} else {
    console.log("L'élément recherché (" + elementRecherche + ") n'est pas présent dans le tableau.");
}


