// valeur numérique
let valeurMixte = "42";

// Convertion de la partie numérique de `valeurMixte` en nombre en utilisant parseFloat
let partieNumerique = parseFloat(valeurMixte);

// Vérification si la conversion a réussi et que la valeur n'est pas NaN (Not-a-Number)
if (!isNaN(partieNumerique)) {
  // Affichez la partie numérique dans la console
  console.log("La partie numérique de valeurMixte est : " + partieNumerique);
} else {
  console.log("La conversion en nombre a échoué.");
}
