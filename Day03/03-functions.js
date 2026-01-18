//Functions 

//Name Function
function greet(name) {
    return `Hello, ${name}!`;
}   
console.log(greet("Alice")); // Output: Hello, Alice!

//Anonymous Function
const square = function(x) {
    return x * x;
};
console.log(square(5)); // Output: 25

//Arrow Function
const add = (a, b) => a + b;
console.log(add(3, 4)); // Output: 7    



let arrowFn = (a, b, x) => a + b + x;
console.log(arrowFn(2, 3, 5)); // Output: 10


//Call back 

function add(a,b, sub) {
    z = a + b; 
    sub(z);
}
function sub(z) {
    console.log("Sum:", 10-z);
}

add(5,5, sub); // Output: Sum: 0

//IIFE - Immediately Invoked Function Expression
(function() {
    console.log("This is an IIFE");
})();

