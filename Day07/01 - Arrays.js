//Array 

let array1 =["apple", "banana", "cherry"];
array1.sort();
console.log("Sorting:", array1);

//Array in numbers

let array2 = [5, 2, 9, 1, 5, 6];
//Ascending Order
array2.sort((a, b) => a - b);
console.log("Sorting - Ascending Order:", array2);


//descending Order
array2.sort((a, b) => b - a);
console.log("Sorting - Descending Order:", array2);  

// Bubble sorting 
//------------------------------//

// combination of string and number 

let array3 = [ "banana", 3, "apple", 1, "cherry", 2];
array3.sort((a, b) => {
    if (typeof a === "string" && typeof b === "string") {
        return a.localeCompare(b);
    } else {
        return typeof a === "string" ? 1 : -1;
    }
});
console.log("Sorting - Mixed Array:", array3);
