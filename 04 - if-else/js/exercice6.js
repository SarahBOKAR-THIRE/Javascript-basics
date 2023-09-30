// Demandez à l'utilisateur de saisir le montant de son achat
const montantAchat = parseFloat(prompt("Entrez le montant de votre achat en euros :"));

// Vérifiez le montant d'achat et calculez la remise en conséquence
if (montantAchat >= 100) {
  const remise = montantAchat * 0.1; // 10% de remise
  const montantTotal = montantAchat - remise;
  console.log("Vous bénéficiez d'une remise de 10%.");
  console.log("Montant de la remise : " + remise + " €");
  console.log("Montant total après la remise : " + montantTotal + " €");
} else if (montantAchat >= 50) {
  const remise = montantAchat * 0.05; // 5% de remise
  const montantTotal = montantAchat - remise;
  console.log("Vous bénéficiez d'une remise de 5%.");
  console.log("Montant de la remise : " + remise + " €");
  console.log("Montant total après la remise : " + montantTotal + " €");
} else {
  console.log("Aucune remise n'est applicable.");
  console.log("Montant total : " + montantAchat + " €");
}





