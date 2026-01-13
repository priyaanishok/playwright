/*Write a Javascript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the number is odd and `Even` if the number is even.*/

function isOddOrEven(num){
let result;
if(num%2===0) {
    result ="Even";
    
} else {
    result = "Odd";
}
return result;
}


console.log("The given Number is : "+isOddOrEven(4)); // Prints Even
console.log("The given Number is : "+isOddOrEven(5)); // Prints Odd

