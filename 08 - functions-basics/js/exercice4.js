let anneeNaissance = 1980;

function calculerAge(anneeNaissance) {

    //La date actuelle
    const dateActuelle = new Date();
    
    //L'année actuelle à partir de la date actuelle
    const anneeActuelle = dateActuelle.getFullYear();
    
    // Calculez l'âge en soustrayant l'année de naissance de l'année actuelle
    const age = anneeActuelle - anneeNaissance;
    
    return age;
  }
  
  // Exemple d'utilisation de la fonction pour calculer l'âge
  const anneeDeNaissance = 1980; // Remplacez par l'année de naissance souhaitée
  const ageActuel = calculerAge(anneeDeNaissance);
  console.log("L'âge actuel est : " + ageActuel);
  
