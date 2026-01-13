// Create a JavaScript function that determines if a number is positive or negative or zero and returns a corresponding string indicating the type 

function checkNumberType(intake) {
    let result;
    if(intake ===0){
        result = "Zero";

    } else if (intake>0) {
        result = "Positive";
    } else {
        result = "Negative";
    }
    return result;
}

console.log("The given Number is : " + checkNumberType(10)); // Prints Positive
console.log("The given Number is : " + checkNumberType(-5)); // Prints Negative
console.log("The given Number is : " + checkNumberType(0)); // Prints Zero