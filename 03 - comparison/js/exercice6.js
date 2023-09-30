let tableNumber = [2,5,9,7,10];
console.log(tableNumber); 

let tableLetter = ["deux","cinq", "neuf","sept","dix"];
console.log(tableLetter);

console.log(typeof tableNumber);
console.log(typeof tableLetter);

function sontEgaux(tableNumber, tableLetter) {
    // Vérifie d'abord si les deux tableaux ont la même longueur
    if (tableNumber.length === tableLetter.length) {
        return true;
    }

    // Parcourt les éléments des deux tableaux et les compare avec ===
    for (let i = 0; i < tableNumber.length; i++) {
        if (tableNumber[i] !== tableLetter[i]) {
            return false; // Les éléments ne sont pas égaux
        }
    } 
         // Si toutes les comparaisons ont réussi, les tableaux sont égaux
        return true; 
}

// Appel de la fonction pour comparer les tableaux
if (sontEgaux(tableNumber, tableLetter)) {
    console.log("Les tableaux sont égaux.");
} else {
    console.log("Les tableaux ne sont pas égaux.");
}