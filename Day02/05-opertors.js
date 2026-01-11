//Operators in JavaScript

// Postfix Increment
let num1 = 5;
console.log(num1++); // Output: 5 (returns the value before incrementing)
console.log(num1);   // Output: 6 (value after incrementing)

// Prefix Increment
let num2 = 5;
console.log(++num2); // Output: 6 (increments first, then returns the value)

// Postfix Decrement
let num3 = 5;
console.log(num3--); // Output: 5 (returns the value before decrementing)
console.log(num3);   // Output: 4 (value after decrementing)

// Prefix Decrement
let num4 = 5;
console.log(--num4); // Output: 4 (decrements first, then returns the value)

//Strict Equality Operator
console.log(5 === 5);       // Output: true (same type and value)
console.log(5 === '5');     // Output: false (different types)
console.log(true === 1);    // Output: false (different types)


//Strict Inequality Operator
console.log(5 !== 5);
console.log(5 !== '5');
console.log(true !== 1);

//Type Coercion with Equality Operator

console.log(5 == '5');      // Output: true (type coercion occurs)
console.log(true == 1);     // Output: true (type coercion occurs)
console.log(null == undefined); // Output: true (special case in JavaScript)

//Type Coercion with Inequality Operator
console.log(5 != '5'); // Output: false (type coercion occurs)
console.log(true != 1); //output: false (type coercion occurs)
console.log(null != undefined);// output: false (special case in JavaScript)
