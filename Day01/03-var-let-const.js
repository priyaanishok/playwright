var x ;
var x ; // Re-declaration is allowed with var
var x = 10; // Initialization
console.log("Value of x after initialization:", x); // Outputs: 10
var x = 20; // Re-declaration and Initialization
console.log("Value of x after re-declaration and initialization:", x); // Outputs: 20
x=9;
console.log("Value of x after assignment:", x); // Outputs: 9
//------------------------------------------------------------------------------
/* let Example */
let y;
//let y;
// let y = 15; // Error: Identifier 'y' has already been declared

y = 15; // Initialization
console.log("Value of y after initialization:", y); // Outputs: 15
y = 100; // Assignment
console.log("Value of y after assignment:", y); // Outputs: 100
//------------------------------------------------------------------------------
/* const Example */
const z = 50;
// const z = 60; // Error: Identifier 'z' has already been declared
//z = 70; // Error: Assignment to constant variable while running the script;
console.log("Value of z:", z); // Outputs: 50