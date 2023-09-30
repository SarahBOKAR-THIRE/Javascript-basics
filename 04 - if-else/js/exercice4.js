// Demandez à l'utilisateur de saisir son âge à l'aide de prompt
let age = prompt("Veuillez entrer votre âge :");

// Convertissez l'entrée utilisateur en un nombre entier
age = parseInt(age);

// Utilisez une structure if pour vérifier si l'utilisateur est majeur ou mineur
if (age >= 18) {
    console.log("Vous êtes majeur.");
} else {
    console.log("Vous êtes mineur.");
}
