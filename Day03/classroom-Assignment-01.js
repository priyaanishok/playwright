
let companyName = "Testleaf";
//Reverse the company name using slice  
let reversedCompanyName = companyName.split('').reverse().join('');
console.log("Reversed Company Name:", reversedCompanyName);
/* short cut */
/* using charAt */
let compName = "testleaf"
let reversedCompName = "";
for (let i = 0; i < compName.length; i++) {
    reversedCompName = compName.charAt(i) + reversedCompName;
}
console.log("Reversed Company Name (Shortcut):", reversedCompName);

//.       console.log("Slice Method:", str.slice(-5, 4)); // Hell 
/* Reverse usign slice */

var myName =  process.argv[2];
var reversedMyName = "";
for (var i = myName.length; i >= 0; --i) {
    reversedMyName += myName.slice(i-1);
    myName = myName.slice(0, i-1);
    //console.log("Reversed My Name using Slice:", reversedMyName);
}

console.log("Reversed My Name using Slice (Final):", reversedMyName);
