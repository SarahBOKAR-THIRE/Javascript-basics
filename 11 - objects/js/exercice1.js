const person = {
    prenom: "Sarah",
    nom: "Bokar",
    age: 42,
    action: function(){
        console.log(this.prenom + '' + this.nom)
    }
      
}

// AFFICHER
person.action();

let person2 = {
    prenom: "Lili",
    nom: "Bidouille",
    age: 32,
    action: function(){
        console.log(this.prenom + '' + this.nom)
    }
      
}

// AFFICHER
person2.action();




