//Create and call two Java Script functions - launchBrowser  with if else and runtest with switch  

const { run } = require("node:test");

function launchBrowser(browserName) {
    if(browserName === "chrome") {
          console.log("Launched the browser :"+browserName);          
    } else if(browserName==="firefox") {
        console.log("Launched the browser :"+ browserName);
    } else{
        console.log("Unknown browser :"+ browserName);
    }
}

function runTests(testType){
    switch(testType){
        case "smoke":
        default:
            console.log("You have chosen Smoke test");
            break;
        case "sanity":
            console.log("You have chosen Sanity test");
            break;
        case "regression":
            console.log("You have chosen Regression test");
            break;
        
    }

}


launchBrowser("priyaa");
launchBrowser("chrome");
launchBrowser("firefox");
launchBrowser("safari");

runTests("smoke");
runTests("sanity");
runTests("regression");
runTests("performance");
