const reverseString = function(inputString) {
    let newString = "";
    let inputLength = inputString.length - 1;
    for ( i = inputLength; i >= 0; i --){
        newString += inputString[i];
    }
    return newString;

};

// Do not edit below this line
module.exports = reverseString;
