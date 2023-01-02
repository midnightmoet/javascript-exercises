const leapYears = (year) => {

    // return true if year is a leap year
    // return false if year is not a leap year
    // Your code here
    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0)
};

// Do not edit below this line
module.exports = leapYears;

// correct answer 01/02/2023