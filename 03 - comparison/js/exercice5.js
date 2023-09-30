// Demande à l'utilisateur sa date de naissance
let dateNaissance = prompt("Entrez votre date de naissance au format AAAA-MM-JJ :");

// Convertit la date de naissance en objet Date
let dateNaissanceObj = new Date(dateNaissance);

// Obtient la date actuelle
let dateActuelle = new Date();

// Calcule la différence en années entre la date actuelle et la date de naissance
let differenceAnnees = dateActuelle.getFullYear() - dateNaissanceObj.getFullYear();

// Vérifie si l'utilisateur est majeur ou mineur
if (differenceAnnees >= 18) {
    console.log("Vous êtes majeur.");
} else {
    console.log("Vous êtes mineur.");
}

