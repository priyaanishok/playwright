/* find the occurence of given element in a array 
*/

function findOccurrences(inputNumber :number){
    const nums =[2,4,5,2,1,2];
    var count=0;

    for (let i=0; i < nums.length ; i++) 
        if(nums[i] === inputNumber) {
        count++;

    }
   return count;

    }

    console.log("The count of the input number "+findOccurrences(1));
    console.log("The count of the input number "+findOccurrences(2));
    console.log("The count of the input number "+findOccurrences(3));