
//Logical Operators
if (language === 'english' && population < 50 && !isIsland)
 {
 console.log(`You should live in ${country} :)`);
 } else {
 console.log(`${country} does not meet your criteria :(`);
 }
// The switch Statement
 switch (language) {
 case 'chinese':
 case 'mandarin':
 console.log('MOST number of native speakers!');
 break;
 case 'spanish':
 console.log('2nd place in number of native speakers');
 break;
 case 'english':
 console.log('3rd place');
 break;
 case 'hindi':
 console.log('Number 4');
 break;
 case 'arabic':
 console.log('5th most spoken language');
 break;
 default:
 console.log('Great language too :D');
 }

//The Conditional (Ternary) Operator
 console.log(
 `${country}'s population is ${population > 33 ? 'above' :
 'below'} average`,
 );