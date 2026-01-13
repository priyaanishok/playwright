//Understanding the global scope, functional scope and block scope in the Javascript 
var genderType = 'female' //Global scope 

function printGender(){
    let colour = "brown"; //Functional scope
    if(genderType === "female"){
        var age = 30; //Functional scope
        let colour = "pink"; //Block scope
        console.log("Inside the if block , the colour is "+ colour);
    }
    console.log("Inside the function, the age is "+ age);
    
}

console.log("The gender is "+ genderType);
printGender();
var genderType = 'male';
printGender();
console.log("The gender is "+ genderType);