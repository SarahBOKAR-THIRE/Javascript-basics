const note = 20;

switch(true) {

    case note === 20 :
        console.log("Excellent, bravo !");
        break;

    case note => 15 :
        console.log("Bien !");
        break;

    case note <= 12 :
        console.log("Passable, il y a encore du travai à fournir!");
        break;

    case note <= 10 :
        console.log("Insuffisant, Nul!");
        break;
    default :
        console.log("Vous n'avez aucune note et devez repasser l'examen !");

}