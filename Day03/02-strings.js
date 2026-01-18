/* String declaration "", '', `` (backticks)
   String interpolation: `${variable}`
   Multi-line strings: `Line 1
   Line 2`
   Escape sequences: \n, \t, \`, \', \"
   String methods: .length, .indexOf(), .slice(), .substring(), .toUpperCase(), .toLowerCase(), .trim(), .split(), .join()
   Regular expressions: /pattern/flags
   Template literals: `${expression}`
   String.prototype: .charAt(), .charCodeAt(), .concat(), .includes(), .startsWith(), .endsWith(), .repeat()
   String immutability: Strings cannot be changed after creation.
   Common use cases: Formatted output, HTML templates, JSON data manipulation
*/  

//String Literal

let singleQuoteString = 'Hello, World!'; // Single quotes
let doubleQuoteString = "Hello, World!"; // Double quotes
let templateLiteralString = `Hello, World!`; // Backticks

// How memory will be for a string?
// Strings are stored in memory as a sequence of characters.
// Each character typically takes up 2 bytes (UTF-16 encoding).
// The total memory used by a string is proportional to its length.
// For example, the string "Hello" would take up 10 bytes (5 characters * 2 bytes each).


//String Literal -- Stack Memory 

let companyName = 'Testleaf';
let firmName = 'Testleaf';

console.log(companyName===firmName);


// Here the value and the address of the string literals are stored in the stack memory. And there are the same so True will be printed.


// Object literal 

let cName = new String('Testleaf');
let fName = new String('Testleaf');

console.log(cName===fName);


// Here the value and the address of the string literals are stored in the heapmemory. And there are the same so False will be printed.

//The strict equality operator (===) compares both value and type. For primitive values, it compares the actual value. For objects and arrays, it compares references in memory, not their contents.



/* String Methods */
//---------------//

// Escape sequences  
let escapedString = 'Hello, World! I\'m a developer.\nWelcome to the world of programming!';
console.log(escapedString);

let slash = "Hello \\";
console.log(slash); 

// New line
let newLine = "Hello,\nWorld!";
console.log(newLine);

//New tab
let newTab = "Hello,\tWorld!";
console.log(newTab);

// concatenation - concat()
let str1 = "Hello";
let str2 = "World";
let concatenatedString = str1.concat(", ", str2, "!");
console.log(concatenatedString);

//concatenation - +

let concatenatedString2 = str1 + ", " + str2 + "!";
console.log(concatenatedString2);


let num1 = 123;
let str5 = 'Testleaf';
let concatenatedString3 = str5 + " " + num1;
let concatenatedString4 = num1.toString().concat(str5);
let concatenatedString5 = String(num1).concat("added with ", str5);
console.log(concatenatedString3);
console.log(concatenatedString4);
console.log(concatenatedString5);

//Template literals
let templateLiteralString1 = `Hello, ${str2}!`;
console.log(templateLiteralString1);

//Temporal literal with a function
function getGreeting(name) {
    return `Hello, ${name}!`;
}
console.log(getGreeting("Alice"));
console.log(getGreeting("Bob"));

//template literal from the terminal 
let userName = process.argv[2]; // Get the username from command line argument
let templateLiteralString3 = `Hello, ${userName}!`;
console.log(templateLiteralString3);

// node Day03/02-strings.js Alice where index 0 is node; index 1 is Day03/02-strings.js and index 2 is Alice

/*rgv[0] → who started me?   (path to Node executable)
argv[1] → what file runs?   (path to your script)
argv[2+] → what data passed? (your CLI arguments)*/


// charAt()
let str = "Hello";
console.log(str.charAt(0)); // H

// charCodeAt()
console.log(str.charCodeAt(0)); // 72 What is this ? 72 is the Unicode value of the character 'H'



// includes()
console.log(str.includes("ell")); // true

// startsWith()
console.log(str.startsWith("He")); // true

// endsWith()
console.log(str.endsWith("lo")); // true

// repeat()
console.log(str.repeat(3)); // HelloHelloHello
// length
console.log(str.length); // 5
//indexOf()
console.log(str.indexOf("e")); // 1

// lastIndexOf()
console.log(str.lastIndexOf("l")); // 3

//to know how many occurance of a character
function countOccurrences(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === char) {
            count++;
        }
    }               
    return count;
}
console.log(countOccurrences(str, "l")); // 2

//truncate
function truncateString(string, num) {
    if (string.length > num) {
        return string.slice(0, num) + "...";
    }
    return string;
}       

console.log(truncateString("Hello, World!", 5));

// in the slice, the index before the end is taken

// if we give 2 - 5, it will return the characters from index 2 to 4.

console.log("Slice Method:", str.slice(5)); // 
console.log("Slice Method:", str.slice(-5, 4)); // Hell

// Notes for Slice 
// If a parameter is negative, it is treated as str.length + parameter.
// So str.slice(-5, 4) is equivalent to str.slice(2, 4)


// can slice has only one parameter?
console.log("Slice Method:", str.slice(1)); // ello 1 is start index or end index? 1 is start index


console.log(" SubString  5" + str.substring(5)); // prints lo
console.log(" SubString  4" + str.substring(4)); // prints lo
console.log(" SubString  3" + str.substring(3)); // prints lo   






