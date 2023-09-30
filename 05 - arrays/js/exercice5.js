const numbers = [5, 8, 9, 12, 11, 4];
console.log(numbers);

// Filtrer les nombres pairs
const nombresPairs = numbers.filter(nombre => nombre % 2 === 0);

// Filtrer les nombres impairs
const nombresImpairs = numbers.filter(nombre => nombre % 2 !== 0);

// Afficher les nombres pairs et impairs dans la console
console.log("Nombres pairs :", nombresPairs);
console.log("Nombres impairs :", nombresImpairs);

