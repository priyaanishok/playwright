//Given a string s consisting of words and spaces, return the length of the last word in the string.

function lastWordLength(input){
    var lengthOfLastWord = 0;
    let lenOfInputSentence = input.length;
    let indexOfSpace = input.lastIndexOf(" ");
    if(indexOfSpace===-1){
        console.log("The input has only one word and its length is :"+lenOfInputSentence);
    } else {
        lengthOfLastWord = lenOfInputSentence - (indexOfSpace+1);
        console.log("The length of the last word is "+ lengthOfLastWord);

    }
    
}

lastWordLength("Nishok Iyer Padhmapriyaa Dheera");
/*-----------------------------------------------------------------------------------------------*/

