/*Create a TypeScript program that defines an enum for different application environments and a
function to simulate running tests on these environments.
Assignment Requirements:
1. Create an enum named `Environment` with four values representing different stages of a
software development process: `LOCAL`, `DEVELOPMENT`, `STAGING`,
`PRODUCTION`.
2. Write a function named `runTests` that accepts an argument of type `Environment`. The
function should print a message indicating the environment against which the tests are
running.
3. The function `runTests` should be specified to return `void`, highlighting that it does not
return any data.
4. Include example calls to `runTests` using different enum values to demonstrate
the function's functionality.
Expected Outcome:
Upon completion, you should be able to:
- Understand what an enum type is and how to implement enum in a test */


enum Environment1 { 
    LOCAL,
    DEVELOPMENT,
    STAGING,
    PRODUCTION
}
function runTests(env1 :Environment1){
    console.log("The script is being run in the "+ Environment1[env1]);

}

runTests(Environment1.LOCAL);
runTests(Environment1.DEVELOPMENT);
runTests(Environment1.STAGING);
runTests(Environment1.PRODUCTION);
