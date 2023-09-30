const person1 = {
    prenom: "Lolo",
    nom: "Bidouille",
    age: 31
      
}

const person2 = {
    prenom: "Cathy",
    nom: "thuji",
    age: 12
      
}

const person3 = {
    prenom: "Sophie",
    nom: "protu",
    age: 28
      
}
const person4 = {
    prenom: "Boso",
    nom: "derin",
    age: 37
      
}



let tableauPersonnes = [person1, person3, person4];

console.log(tableauPersonnes);


// BOUCLE POUR afficher chaque objet du tableau
tableauPersonnes.forEach(function(element) {
    console.log(element.prenom);
});

