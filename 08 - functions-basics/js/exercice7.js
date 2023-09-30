function extraireMots(texte) {
    const mots = texte.split(" ");
    return mots;
  }
  

function compterOccurrences(texte, mot) {
    // Utilisez la méthode `split` pour diviser la chaîne en mots en utilisant l'espace comme séparateur
    const mots = texte.split(" ");
    
    // Utilisez la méthode `filter` pour créer un tableau des mots égaux au mot recherché
    const motsFiltres = mots.filter(function(motDansLeTexte) {
      // Utilisez `toLowerCase()` pour ignorer la casse
      return motDansLeTexte.toLowerCase() === mot.toLowerCase();
    });
  
    // Retournez le nombre d'occurrences
    return motsFiltres.length;
  }
  
  // Exemple d'utilisation des fonctions
  const texte = "Le chien est un animal. Le chat est aussi un animal. Les animaux sont merveilleux.";
  
  const motsExtraits = extraireMots(texte);
  console.log("Mots extraits :", motsExtraits);
  
  const motRecherche = "animal";
  const occurrences = compterOccurrences(texte, motRecherche);
  console.log(`Occurrences de "${motRecherche}" dans le texte : ${occurrences}`);
  