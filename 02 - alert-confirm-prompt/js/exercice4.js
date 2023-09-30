const listeDeTaches = []; // Créez un tableau vide pour stocker les tâches

// Fonction pour afficher la liste des tâches
function afficherListeTaches() {
  console.log("Liste des tâches :");
  for (let i = 0; i < listeDeTaches.length; i++) {
    console.log(i + 1 + ". " + listeDeTaches[i]);
  }
}

while (true) {
  const choix = prompt(
    "Que souhaitez-vous faire ?\n1. Ajouter une tâche\n2. Supprimer une tâche\n3. Quitter"
  );

  if (choix === "1") {
    const nouvelleTache = prompt("Entrez une nouvelle tâche :");
    listeDeTaches.push(nouvelleTache);
    afficherListeTaches();
  } else if (choix === "2") {
    afficherListeTaches();
    const indiceASupprimer = prompt("Entrez le numéro de la tâche à supprimer :");
    if (!isNaN(indiceASupprimer) && indiceASupprimer >= 1 && indiceASupprimer <= listeDeTaches.length) {
      const indice = parseInt(indiceASupprimer) - 1;
      listeDeTaches.splice(indice, 1);
      afficherListeTaches();
    } else {
      alert("Numéro de tâche invalide.");
    }
  } else if (choix === "3") {
    break; // Quitter le programme
  } else {
    alert("Choix invalide. Veuillez sélectionner 1, 2 ou 3.");
  }
}

