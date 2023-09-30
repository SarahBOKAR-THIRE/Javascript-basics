// Your code goes here

// Demander à l'utilisateur s'il souhaite commencer le quiz
const commencerQuiz = confirm("Souhaitez-vous commencer le quiz ?");

// Vérifier la réponse de l'utilisateur
if (commencerQuiz) {
  // L'utilisateur a cliqué sur "OK" pour commencer le quiz
  alert("Le quiz commence maintenant !");
  // Ajoutez ici la logique pour commencer le quiz
} else {
  // L'utilisateur a cliqué sur "Annuler" ou fermé la fenêtre de confirmation
  alert("Vous avez choisi de ne pas commencer le quiz.");
  // Ajoutez ici la logique pour gérer le cas où l'utilisateur ne veut pas commencer
}

//LE QUIZ----------------------------------------------------------//

// Poser la question à l'utilisateur
const reponseUtilisateur = prompt("Combien de rayures y a-t-il sur le drapeau américain ?");

// Vérifier la réponse de l'utilisateur
if (reponseUtilisateur === "13") {
  // Si la réponse est correcte
  alert("Félicitations ! Vous avez donné la bonne réponse.");
} else {
  // Si la réponse est incorrecte
  alert("Désolé, la réponse est incorrecte. Il y a 13 rayures sur le drapeau américain.");
}

