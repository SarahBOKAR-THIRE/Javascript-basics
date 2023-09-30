// Your code goes here

let utilisateur = {
    nom: "John",
    age: 30,
    
};

console.log(utilisateur);

// Ajout d'une nouvelle propriété à l'objet en utilisant la notation crochet
let nomDePropriete = "ville";
utilisateur[nomDePropriete] = "New York";
utilisateur.ville = "New York";

console.log(utilisateur.ville); // Affiche "New York"

console.log(utilisateur);