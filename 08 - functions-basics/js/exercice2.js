// Your code goes here
let phrase = " Voici ma phrase";
console.log(phrase);


function compterMots(phrase) {
    // Utilisez la méthode split pour diviser la phrase en mots en utilisant l'espace comme séparateur
    let mots = phrase.split(" ");
    
    // Retournez le nombre de mots
    return mots.length;

}

compterMots(phrase);

console.log(compterMots(phrase));


function inverserPhrase(phrase) {
    // Utilisez la méthode split pour diviser la phrase en mots en utilisant l'espace comme séparateur
    let mots = phrase.split(" ");
    // Inverser l'ordre des mots en utilisant la méthode reverse()
    var motsInverses = mots.reverse();

    // Rejoindre les mots inversés pour former la phrase inversée
    let phraseInverse = motsInverses.join(" ");
    
    // Retourner la phrase inversée
    return phraseInverse;
}

inverserPhrase(phrase);

console.log(inverserPhrase(phrase));


