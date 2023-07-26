"use strict";

// Assign value using var keyword
var price1 = 5;
var price2 = 10;
var total = price1 + price2;

console.log("Sum of price1 and price2 = ", total);

// Updating variables declared with var

price1 = 21;
price2 = 14;
total = price1 + price2;

console.log("Updated sum of price1 and price2 = ", total);

// Re-declaring the variables with var

var price1 = 500;
var price2 = 310;
var total = price1 + price2;

console.log("Sum of the re-declared price1 and price2 = ", total);


// Assign value using let keyword

let dividend = 420;
let divisor = 20;
    
console.log("The division result : ", dividend/divisor);

// Update value using let keyword

dividend = 720;
divisor = 30;

console.log("The updated division result : ", dividend/divisor);

/* Let does not permit re-declaration.
Once a variable has been declared with let, 
it can be updated but not redeclared 
*/

/*
let dividend = 880;
let divisor = 40;

console.log("The division result after redeclaration: ", 
            dividend/divisor);
*/

/* The const keyword represents constants
Constants can only be defined once.
Updates and redefinitions are not permitted
*/

const MY_BIRTHDAY = '21.11.1983';
console.log("My birthday is on ", MY_BIRTHDAY);

//MY_BIRTHDAY = '21.11.1993';

//const MY_BIRTHDAY = '21.11.1993';

// Variable hoisting

// When using var, a variable can be used before initialization
// This is known as variable hoisting
a = 5;
console.log("The value of a = ", a);
var a;

// With let and const, variable hoisting is not possible

/*
b = 5;
console.log("The value of b = ", b);
let b;
*/


/*
c = 5;
console.log("The value of c = ", c);
const c;
*/
