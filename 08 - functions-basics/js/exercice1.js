// Your code goes here

let numbers = [1, 5, 7,8, 9];
initialValue = 0;
const sumWithInitial = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);