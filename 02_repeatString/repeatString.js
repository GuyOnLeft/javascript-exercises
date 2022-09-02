const repeatString = function(inputWord, numChoice) {  
    if (numChoice >= 0)
        return inputWord.repeat(numChoice);
    else if (numChoice < 0) {
        return "ERROR";
    }
    else   
        return " ";

}



// Do not edit below this line
module.exports = repeatString;
