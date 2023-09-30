// Demander à l'utilisateur sa date de naissance
const dateDeNaissance = prompt("Entrez votre date de naissance au format AAAA-MM-JJ :");

// Obtenir la date actuelle
const dateActuelle = new Date();

// Convertir la date de naissance entrée par l'utilisateur en objet Date
const dateDeNaissanceObj = new Date(dateDeNaissance);

// Calculer l'âge de l'utilisateur
const differenceEnMilliseconds = dateActuelle - dateDeNaissanceObj;
const ageEnAnnees = Math.floor(differenceEnMilliseconds / (1000 * 60 * 60 * 24 * 365.25));

// Afficher l'âge de l'utilisateur
alert("Vous avez " + ageEnAnnees + " ans.");
