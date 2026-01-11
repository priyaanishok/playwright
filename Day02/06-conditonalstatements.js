// Conditional Statements with functions with getBrowser("chrome"), getBrowser("firefox"), getBrowser("safari"), getBrowser("edge"), getBrowser("opera"), getBrowser("unknown")
function getBrowserSwitch(browserName) {
    switch (browserName) {
        case "chrome":
            return "You are using Chrome";
        case "firefox":
            return "You are using Firefox";
        case "safari":
            return "You are using Safari";
        case "edge":
            return "You are using Edge";
        case "opera":
            return "You are using Opera";
        default:
            return "Unknown browser";
    }
}

console.log(getBrowserSwitch("chrome"));    // You are using Chrome
console.log(getBrowserSwitch("firefox"));  // You are using Firefox
console.log(getBrowserSwitch("safari"));   // You are using Safari
console.log(getBrowserSwitch("edge"));     // You are using Edge
console.log(getBrowserSwitch("opera"));    // You are using Opera
console.log(getBrowserSwitch("unknown"));  // Unknown browser


// use if statements
function getBrowserIf(browserName) {
    if (browserName === "chrome") {
        return "You are using Chrome";
    } else if (browserName === "firefox") {
        return "You are using Firefox";
    } else if (browserName === "safari") {
        return "You are using Safari";
    } else if (browserName === "edge") {
        return "You are using Edge";
    } else if (browserName === "opera") {
        return "You are using Opera";
    } else {
        return "Unknown browser";
    }
}


//output
console.log(getBrowserIf("chrome"));    // You are using Chrome
console.log(getBrowserIf("firefox"));  // You are using Firefox
console.log(getBrowserIf("safari"));   // You are using Safari
console.log(getBrowserIf("edge"));     // You are using Edge
console.log(getBrowserIf("opera"));    // You are using Opera
console.log(getBrowserIf("unknown"));  // Unknown browser

//Stacked cases in switch 

switch (browserName) {
    case "chrome":
    case "firefox":
    case "safari":
    case "edge":
    case "opera":
        return "You are using a supported browser";
    default:
           return "Unknown browser";
}   

// switch uses strict equality (===) for comparison eg with number 
age = Number("18");
switch (age) {
    case 18:
        return "You are an adult";
    case 17:
        return "You are a minor";
    default:
        return "Unknown age";
}   return "Unknown age";
