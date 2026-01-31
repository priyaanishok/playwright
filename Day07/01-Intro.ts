// First typescript example

// explicit inference
let textWelcome : string = "Hello, Padhmapriyaa";
console.log(textWelcome);

// implicit inference
let textImplicit = "Hello, Padhmapriyaa";
console.log(textImplicit);

//datatypes in addition to that in JS 

// any datatype

let anyVariable : any = 123;
console.log("This is a number :", anyVariable);
anyVariable = "Now I'm a string";
console.log("This is a string :", anyVariable);


// unknown datatype

let unknownVariable: unknown;
unknownVariable = 123;
console.log("This is a number :", unknownVariable);
unknownVariable = "Now I'm a string";
console.log("This is a string :", unknownVariable);

