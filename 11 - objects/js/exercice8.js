let listeVoitures = [
    {   marque: "Peugeot",
        annee: 2005,
        couleur: "rouge",
        propiete: function() {
            console.log(`Je suis une ${this.marque} ${this.annee} et j'ai ${this.couleur}`);
        }   
    },
    {   marque: "Renault",
        annee: 2016,
        couleur: "noire"
    },
    {   marque: "Ford", 
        annee: 1997,
        couleur: "grise"
    }
];

