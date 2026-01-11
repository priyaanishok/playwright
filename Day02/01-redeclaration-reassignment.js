// redeclaration and reassignment of variables in JavaScript

// Using var
var a; 
console.log(a); // Output: undefined
var a = 10;         
console.log(a); // Output: 10
var a = 20;30;  
console.log(a); // Output: 20

// So for var, redeclaration is allowed and the last assigned value is retained. 
// Reassignment is also allowed.

// Using let
let b; 
console.log(b); // Output: undefined
b = 15;         
console.log(b); // Output: 15
// let b = 25; // This will throw an error: SyntaxError: Identifier 'b' has already been declared
b=25;
console.log(b); // Output: 25

// So for let, redeclaration is not allowed within the same scope, but reassignment is allowed.

// Using const
// const c; // This will throw an error: SyntaxError: Missing initializer in const declaration
const c = 30;         
console.log(c); // Output: 30
// c = 35; // This will throw an error: TypeError: Assignment to constant variable. This is a run time error.
// const c = 40; // This will also throw an error: SyntaxError: Identifier 'c' has already been declared. 

// So for const, neither redeclaration nor reassignment is allowed.  

b="Hello";
console.log(b); // Output: Hello
// Reassignment is allowed for let variables.

//-------------------

//Characteristics /Behaviour of var, let, const at the time of redeclaration and reassignment


//var redeclaration

// var x
// var x 
// console.log(x); //undefined 

//var reassignment

// var x = 100
// var x = 101 
// console.log(x); //101

//let redeclaration is not allowed

// let y
// let y 
//console.log(y); //undefined 

//let reassignment is allowed

// let y = 100
// y = 101 
//  console.log(y); //101

//const redeclaration is not allowed also initilization is mandatory

// const z
// const z

// console.log(z);  

//const reassignment

const z = 100
z = 101 
console.log(z); //101
