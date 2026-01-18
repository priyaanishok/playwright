//Task 1: Function Declaration Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello,<name>!" to the console.

function userProfile(name) {
    console.log(`Hello! ${name}`);
}

userProfile(process.argv[2]);

//Create an arrow function named `double` that takes a number as a parameter and returns double its value.

let double =  (x) => x*2;
let x = process.argv[3];
console.log(`Double the given Number - Answer for ${x} is ` + double(x));


//Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"`

setTimeout(function() {
    console.log(`This message will be delayed by 2 seconds..`);},2000);


/*Create a function named `getUserData` that takes a callback function as a parameter. Inside
`getUserData`, simulate fetching data with `setTimeout` and then call the callback function with
that should print “Call Back Function” after 3 seconds.
Call the `getUserData` function and log message using the callback function.*/

function getUserData(callback) {
    setTimeout(() => {
        callback("Call Back Function after 5 seconds"); 
    },5000);
}

getUserData(function(textToPrint) {
    console.log(textToPrint);

});
