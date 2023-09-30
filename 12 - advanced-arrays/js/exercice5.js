let inventoryKitchen = [ {
    name : "chocolate",
    quantity : 1,
    value : 3,
},
{
    name : "Bananes",
    quantity : 6,
    value : 2,
},
{
    name : "Pommes",
    quantity : 12,
    value : 5,
}

]
//affiche le tableau d'inventaire des aliments
console.log(inventoryKitchen);

//affiche l'objet numero 2 de l'élémént
console.log(inventoryKitchen[2]);

//la fonctionnalité pour supprimer (index 1 de l'inventaire = 3emme position)
inventoryKitchen.splice(1, 1);
console.log(inventoryKitchen);

//La fonctionnalité pour ajouter un objet
let newObject = { name: "salt", quantity: 3, valeur: 4 };
// Ajoutez le nouvel objet à la fin du tableau
inventoryKitchen.push(newObject);
console.log(inventoryKitchen);

// la fonctionnalité pour afficher des objets dans l'inventaire.
// Parcourir le tableau et afficher chaque objet
for (var i = 0; i < inventoryKitchen.length; i++) {
    var objet = inventoryKitchen[i];
    console.log("Nom de l'objet : " + objet.name);
    console.log("Quantité : " + objet.quantity);
    console.log("Valeur : " + objet.value);
    console.log("\n"); // Ajoute une ligne vide pour séparer les objets
}


