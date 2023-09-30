const utilisateurs = [
    {
      id: 1,
      nom: "Sarah",
      age: 43,
      ville: "Beychac et Cailleau"
    },
    {
      id: 2,
      nom: "Cécile",
      age: 46,
      ville: "Saucats"
    },
    {
      id: 3,
      nom: "Jerome",
      age: 48,
      ville: "Saucats"
    },
    {
      id: 4,
      nom: "David",
      age: 41,
      ville: "Mérignac"
    }
  ];
  
  // Utilisez la méthode sort() pour trier les utilisateurs par âge croissant
  const utilisateursTriesParAge = utilisateurs.slice().sort((a, b) => a.age - b.age);
  
  console.log(utilisateursTriesParAge);
  








