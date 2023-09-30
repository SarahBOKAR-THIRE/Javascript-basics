const table = [ 1, 3 , 5, 6, 18, 40, 90, 4, 13, 6];
console.log(table);

function filtrerPairs(nombres) {
    // Utilisez la méthode `filter` pour créer un nouveau tableau contenant uniquement les nombres pairs
    const nombresPairs = nombres.filter(function(nombre) {
      return nombre % 2 === 0; // Vérifie si le nombre est pair en vérifiant s'il est divisible par 2 sans reste
    });
  
    return nombresPairs;
  }
  
  // Exemple d'utilisation de la fonction
  const tableauDeNombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const nombresPairs = filtrerPairs(tableauDeNombres);
  
  console.log(nombresPairs); // Affiche le tableau contenant uniquement les nombres pairs : [2, 4, 6, 8, 10]
  

  