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
    console.log("Inside the function, but outside the if condition the colour is "+ colour);
}

console.log("The gender is "+ genderType); //Prints female
printGender(); 
var genderType = 'male';
printGender();
console.log("The gender is "+ genderType);

/* The gender is female
Inside the if block , the colour is pink
Inside the function, the age is 30
Inside the function, the age is undefined
The gender is male */