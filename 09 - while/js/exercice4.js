let a = 0;
let b = 1;

console.log(a);
console.log(b);

let n = 20;

// Vérifiez si n est un nombre entier positif
if (n <= 0 || !Number.isInteger(n)) {
    console.log("Veuillez entrer un nombre entier positif.");
} else {
    // Utilisez une boucle while pour calculer les N premiers termes de la suite de Fibonacci
    let i = 1;
    while (i <= n) {
        // Affichez la valeur actuelle de a (le terme de Fibonacci)
        console.log(a);

        // Calculez le prochain terme de Fibonacci en mettant à jour a et b
        let temp = a;
        a = b;
        b = temp + b;

        i++;
    }
};
