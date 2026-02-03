//Array of intersection 

function intersection( arr1: number [], arr2 :number []) : any{  
    var intersectionArr : number []= [];
for (let i = 0;  i < arr1.length; i++){
    for (let j=0; j < arr2.length; j++) {
        if((arr1[i] ===arr2[j]) && (intersectionArr.find(element => element === arr1[i]) === undefined)) {
            intersectionArr.push(arr1[i]);

        }

        }}
    return intersectionArr;
}

console.log("The intersection is : " + intersection([1,2,3,4],[3,4,5,6]));
console.log("The intersection is : " + intersection([7,8,9],[10,11,12]));
