// Scoping in JavaScript

// Behavior of var, let, and const in various blocking scopes

//Scoping defined as the accessibility of variables in different parts of the code



// Using var


//inside a if block
if (true) {
    var varVariable = "I am a var variable inside if block";
    console.log(varVariable); // Accessible here
}
console.log(varVariable); // Accessible here as well due to function scope of var 

// Why because var is function-scoped, not block-scoped
//What is function scope => A variable declared inside a function is accessible anywhere within that function, including nested blocks.

//Let scoping in if block 
if (true) {
    let letVariable = "I am a let variable inside if block";
    console.log(letVariable); // Accessible here
}
//console.log(letVariable); // Not accessible here - ReferenceError: letVariable is not defined

//Const scoping in if block
if (true) {
    const constVariable = "I am a const variable inside if block";
    console.log(constVariable); // Accessible here
}
//console.log(constVariable); // Not accessible here - ReferenceError: constVariable is not defined
console.log("-------------------");

// Function block scoping

function testScoping() {
    //var inside function
    var funcVar = "I am a var variable inside function";
    console.log(funcVar); // Accessible here    
}
testScoping();
//console.log(funcVar); // Not accessible here - ReferenceError: funcVar is not defined

function testLetConstScoping() {
    //let inside function
    let funcLet = "I am a let variable inside function";
    console.log(funcLet); // Accessible here    

    //const inside function
    const funcConst = "I am a const variable inside function";          



    console.log(funcConst); // Accessible here
}
testLetConstScoping();
//console.log(funcLet); // Not accessible here - ReferenceError: funcLet is not defined
//console.log(funcConst); // Not accessible here - ReferenceError: funcConst is not defined

console.log("-------------------");

//Practice Example

function greet(){
    var m1 = "Hello";
    let m2 = "Welcome";
    const m3 = "to JavaScript Scoping Demo";

    if(true){
        var m4 = "Have a great day!";
        let m5 = "Enjoy learning!";
        const m6 = "Happy Coding!";
        console.log("Inside the if block :"+ m1+" "+ m2+" "+ m3 +" "+ m4 +" "+ m5 +" "+ m6 +" "+m7)//+" "+m8+" "+m9)   ; //m7 will be undefine as it is a var // m8 and m9 will give Reference Error
    }

    var m7 = "Let's get started!";
    let m8 = "This is fun!";
    const m9 = "You are doing great!";
    console.log("Inside the function and printing the m1,m2,m3,m4 :"+ m1+" "+ m2+" "+ m3 +" "+ m4 + " " + typeof m5); //m5 and m6 will give Reference Error
    console.log("Outside the if block and inside the functions :"+ m1+" "+ m2+" "+ m3 +" "+ m4 +" "/* m5  +" "+ m6 */+" "+m7+" "+m8+" "+m9)   ;
}

console.log("Outside the function :"+ typeof m1+" "+ typeof m2+" "+ typeof m3 +" "+ typeof m4 +" "+ typeof m5 +" "+ typeof m6 ); //m1,m2,m3,m4,m5 and m6 will give Reference Error
//console.log("Outside the function :"+ m1+" "+ m2+" "+ m3 +" "+ m4 +" "+ m5 +" "+ m6 ); //m1,m2,m3,m4,m5 and m6 will give Reference Error
greet();
