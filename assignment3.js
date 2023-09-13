//Type Conversion and Coercion
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617'
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143
// Equality Operators: == vs. ===
const numNeighbours = prompt(
'How many neighbour countries does your country have?',
);
// LATER : This helps us prevent bugs
const numNeighbours1 = Number(
prompt('How many neighbour countries does your countrhave?')
);
if (numNeighbours === 1) {
console.log('Only 1 border!');
} else if (numNeighbours > 1) {
console.log('More than 1 border');
} else {
console.log('No borders');
}