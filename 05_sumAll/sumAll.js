const sumAll = function(minimum, maximum) {
    // Your code here
    if(!Number.isInteger(minimum) || !Number.isInteger(maximum)) return "ERROR";

    if(minimum < 0 || maximum < 0) return "ERROR";

    if(minimum > maximum){
        const temp = minimum;
        minimum = maximum;
        maximum = temporary;
    }

    let sum = 0;
    for(let i = minimum; i < maximum +1; i++){
        sum += i;
    }
    return sum;
};



// Do not edit below this line
module.exports = sumAll;
