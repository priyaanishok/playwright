//Object Literal

let info : {
    fName: string,
    age: number ,
    result: boolean
} = {
    fName: "John",
    age: 30,
    result: true
}

console.log("User Information:");
console.log("Name:", info.fName);
console.log("Age:", info.age);
console.log("Result:", info.result);

// Nested Object Literal
let info1 = {
  padhmapriyaa : {
    registrationNumber : 100,
    fName: "Padhmapriyaa",
    age: 25,
    result: true
  },
  Nishok: {
    registrationNumber: 101,
    fName: "Nishok",
    age: 28,
    result: true
  }

};

console.log("Nested User Information:");
for (const user in info1) {
  console.log("Name:", info1[user].fName);
  console.log("Age:", info1[user].age);
  console.log("Result:", info1[user].result);
}

