const monsieur = {
    prenom: "Boso",
    nom: "Derin",
    age: 37,
    // Méthode de présentation
    presenter: function() {
        console.log(`Je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans.`);
    }
};

// Appel de la méthode de présentation
monsieur.presenter();

