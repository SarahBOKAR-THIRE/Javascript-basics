// Date sous forme de caractère
let dateString = "2023-09-10";
console.log(dateString);
// Les opérations de conversion pour extraire l'année, le mois et le jour
// Convertion la chaîne en objet Date
let dateObj = new Date(dateString); 

let annee = dateObj.getFullYear(); // Obtient l'année
let mois = dateObj.getMonth() + 1; // Obtient le mois (attention : les mois sont indexés à partir de 0, donc on ajoute 1)
let jour = dateObj.getDate(); // Obtient le jour du mois

//L'année, le mois et le jour dans la console
console.log("Année : " + annee);
console.log("Mois : " + mois);
console.log("Jour : " + jour);
