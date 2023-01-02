// Description: Write a function that takes a string and a number that represents how many times the string should be repeated. The function should return the repeated string.

const repeatString = (word, times) => {
    // make sure times is a positive number 
    if(times < 0 ) return 'ERROR';
    
    // create a string to hold the repeated word
    let string = '';
    // loop through the number of times the word should be repeated
    for(let i = 0; i < times; i++){
        // let the string equal itself plus the word
        string += word;
    }
    // return the string
    return string;
};

// Do not edit below this line
module.exports = repeatString;

// correct answer 01/02/2023