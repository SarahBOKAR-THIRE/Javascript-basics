// Your code goes here
let numero1 = 5;
// Función para realizar la adición
function addition(a, b) {
  return a + b;
}

// Función para realizar la sustracción
function soustraction(a, b) {
  return a - b;
}

// Función para realizar la multiplicación
function multiplication(a, b) {
  return a * b;
}

// Función para realizar la división
function division(a, b) {
  if (b === 0) {
    return "No se puede dividir por cero";
  }
  return a / b;
}

// Función principal del menú interactivo
function menuInteractif() {
  let operacion = prompt("Choisi une opération:\n1. addition\n2. soustraction\n3. Multiplicacion\n4. Division");
} 
//   
console.log(menuInteractif)

// Fonction principale du menu interactif
function menuInteractif() {
    let nombre1 = parseFloat(prompt("Entrez le premier nombre :"));
    let nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));

  
    let operation = prompt("Choisissez une opération :\n1. Addition\n2. Soustraction\n3. Multiplication\n4. Division");
    
    
    switch (operation) {
      case "1":
        let resultat = additionner(nombre1, nombre2);
        alert("Le résultat de l'addition est : " + resultat);
        break;
        
      case "2":
        let resultat = soustraire(nombre1, nombre2);
        alert("Le résultat de la soustraction est : " + resultat);
        break;
        
      case "3":
        let resultat = multiplier(nombre1, nombre2);
        alert("Le résultat de la multiplication est : " + resultat);
        break;
        
      case "4":
        var resultat = diviser(nombre1, nombre2);
        alert("Le résultat de la division est : " + resultat);
        break;
  
      default:
        alert("Opération non valide");
    }
  }
  
  // Appelle la fonction du menu interactif
  menuInteractif();

  

  
