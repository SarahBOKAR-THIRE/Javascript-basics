// La fonction creerFonction
function creerFonction(n) {
    // La fonction retournée prend un nombre `x` en paramètre et ajoute `n` à `x`
    return function(x) {
      return x + n;
    };
  }
  
  // Création des fonctions ajouter5 et ajouter10
  const ajouter5 = creerFonction(5);
  const ajouter10 = creerFonction(10);
  
  // Utilisation des fonctions pour effectuer des opérations mathématiques
  const resultat1 = ajouter5(7); // Ajoute 5 à 7, résultat1 = 7 + 5 = 12
  const resultat2 = ajouter10(20); // Ajoute 10 à 20, résultat2 = 20 + 10 = 30
  
  console.log("Résultat 1 : " + resultat1); // Affiche 12
  console.log("Résultat 2 : " + resultat2); // Affiche 30
  