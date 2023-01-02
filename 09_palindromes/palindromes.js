const palindromes = (str) => {
    // Your code here
    processedStr = str.toLowerCase().replace(/[^A-Za-z]/g, "");
    return(
        processedStr 
        .split("")
        .reverse()
        .join("") == processedStr
    );
};

// Do not edit below this line
module.exports = palindromes;

// correct answer 01/02/2023
