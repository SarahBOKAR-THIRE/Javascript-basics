// Une variable jourDeLaSemaine avec un numéro de 1 à 7
let jourDeLaSemaine = 6;
jourDeLaSemaine = 7;


// Utilisez une structure switch pour afficher le nom du jour correspondant
switch (jourDeLaSemaine) {
  case 1:
    console.log("Lundi");
    break;
  case 2:
    console.log("Mardi");
    break;
  case 3:
    console.log("Mercredi");
    break;
  case 4:
    console.log("Jeudi");
    break;
  case 5:
    console.log("Vendredi");
    break;
  case 6:
    console.log("Samedi");
    break;
  case 7:
    console.log("Dimanche");
    break;
  default:
    console.log("Numéro de jour invalide");
}
