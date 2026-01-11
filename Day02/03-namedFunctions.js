// Named dunctions


//Type 1 : Function without parameters and without return type
function greet() {
    console.log("Hello, welcome to the named functions demo!");
}
greet(); // Calling the function
console
//Type 2 : Function with parameters and without return type
function addNumbers(a, b) {
    //let a = 5; // Parameters a and b will take the values passed during the function call
    //let b = 10;
    let sum = a + b;
    console.log("Sum of", a, "and", b, "is:", sum);
}
addNumbers(5, 10); // Calling the function with arguments Here a and b need not be defined earlier
console.log("Sum outside the function is not accessible:", typeof sum); // sum is not accessible outside the function
console.log("-------------------");


//Type 3 : Function with parameters and with return type
function multiplyNumbers(x, y) {
    let product = x * y;
    return product; // Returning the product
}
let result = multiplyNumbers(4, 5); // Calling the function and storing the returned value
console.log("Product of 4 and 5 is:", result); // Displaying the result
console.log("-------------------");

//Type 4 : Function without parameters and with return type
function getCurrentDate() {
    let currentDate = new Date(); // Getting the current date
    return currentDate; // Returning the current date
}
let today = getCurrentDate(); // Calling the function and storing the returned value
console.log("Today's date is:", today); // Displaying today's date  