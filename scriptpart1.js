



/*CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.



👋 OPTIONAL: You can watch my solution in video format in the next lecture



IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).








let massMark=78;
let heightMark=1.69;
let massJohn=92;
let heightJohn=1.92;


let calOfMark=massMark/(heightMark*heightMark);
console.log(calOfMark)


let calOfJhon=massJohn/(heightJohn*heightJohn);
console.log(calOfJhon);

let b=calOfMark>calOfJhon;
console.log(b);



let massMark=92;
let heightMark=1.69;
let massJohn=78;
let heightJohn=1.92;


let calOfMark=massMark/(heightMark*heightMark);
console.log(calOfMark)


let calOfJhon=massJohn/(heightJohn*heightJohn);
console.log(calOfJhon);

let b=calOfMark>calOfJhon;
console.log(b);



 let age=15;
 const agelimit=age>=18
 if(agelimit)
 {

 console.log(`the  age is ${age} good`)
} 
else
console.log(`the age is ${18-age} less`);

const massMark = 78;
const heightMark = 1.95;
const massJohn = 98;
const heightJohn = 1.69;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
if(BMIMark>=BMIJohn)
{


console.log("Mark's BMI is higher than John's!");
}

else
{
    console.log("  John's BMI is higher than Mark's!");
}
/*

const massMark = 92;
const heightMark = 1.69;
const massJohn = 78;
const heightJohn = 1.95;
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
if(BMIMark>BMIJohn)
{
    console.log(`Mark's BMI  ${BMIMark} is higher than John's ${BMIJohn}!` );

}
else
console.log(`Mark's BMI  ${BMIMark} is higher than John's ${BMIJohn}!` );
*/

 const fav=Number(prompt("what is your fav no"));
 console.log(fav);
 console.log(typeof fav)
 if(fav==10)
 {
    console.log("it is fav no");
 }
 else if(fav===11)
 {
console.log("it is my fav");
 }
 else if(fav===18)
 {
    console.log("it is also fav no");
 }
 else
 console.log("notfav no");


 if(fav!==23) alert("why not 23?");









