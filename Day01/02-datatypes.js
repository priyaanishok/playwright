// Datatypes in JavaScript 
// Primitive Data Types:

const { type } = require("os");

// 1. Number: Represents both integer and floating-point numbers.
let num = 42; // Integer
let floatNum = 3.14; // Floating-point number
console.log("Number:", num);
console.log("Type of num:", typeof num);
console.log("Float Number:", floatNum);
console.log("Type of floatNum:", typeof floatNum);
//2. bigint: Represents integers with arbitrary precision.
let bigIntNum = 9007199254741991n; // BigInt
console.log("BigInt Number:", bigIntNum);
console.log("Type of bigIntNum:", typeof bigIntNum);

// 3. Boolean: Represents a logical entity and can have two values: true or false.
let isJavaScriptFun = true; // Boolean
console.log("Is JavaScript Fun?:", isJavaScriptFun);
console.log("Type of isJavaScriptFun:", typeof isJavaScriptFun);

// 4. String: Represents a sequence of characters.
let greeting = "Hello, World!"; // String that has "", '', ``
console.log("Greeting:", greeting);
console.log("Type of greeting:", typeof greeting);

var userName = `Salesmanager`; // String datatype can be defined using backtick also
console.log("User Name:", userName);
console.log("Type of userName:", typeof userName);

var fullName = 'Dheerapriyaanishok'; // String datatype can be defined using single quote also
console.log("Full Name:", fullName);
console.log("Type of fullName:", typeof fullName);

// 5. Undefined: A variable that has been declared but not assigned a value.
let undefinedVar; // Undefined  Memory space is allocated but no value is assigned
console.log("Undefined Variable:", undefinedVar);
console.log("Type of undefinedVar:", typeof undefinedVar);

// 6. Null: Represents the intentional absence of any object value.
let nullVar = null; // Null Memory space is allocated and assigned with null value
console.log("Null Variable:", nullVar);
console.log("Type of nullVar:", typeof nullVar); 

// 7. Symbol: Represents a unique identifier.
let sym = Symbol("uniqueIdentifier"); // Symbol

//numbers
var a = 10;
var phoneNumber = 9876543210; /* phone number is user defined number to be stored as number datatype */

// to print the values
console.log("Integer:", a);
console.log("Phone Number:", phoneNumber);
typeof phoneNumber; // "number"
//Helps retrieve the datatype of the variable
// in our example it will return number as phoneNumber is storing number datatype

console.log("Type of phoneNumber:::",typeof phoneNumber);

