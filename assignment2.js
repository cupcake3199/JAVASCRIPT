//Basic Operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 =
country +
' is in ' +
continent +
', and its ' +
population +
' million people speak ' +
language;
console.log(description1);
// Strings and Template Literals

const description = `${country} is in ${continent}, and its
${population} million people speak ${language}`;
//Taking Decisions: if / else Statements
if (population > 33) {
console.log(`${country}'s population is above average`);
} else {
console.log(
`${country}'s population is ${33 - population} million
below average`,
);
}