// Créez un objet Date représentant la date et l'heure actuelles
let dateActuelle = new Date();

// Affichez la date actuelle
console.log("Date actuelle : " + dateActuelle);

// Ajoutez 3 jours à la date actuelle
dateActuelle.setDate(dateActuelle.getDate() + 3);

// Affichez la date après avoir ajouté 3 jours
console.log("Date après ajout de 3 jours : " + dateActuelle);
