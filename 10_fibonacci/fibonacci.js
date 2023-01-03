const fibonacci = (count) => {
    // Your code here
    if (count < 0) return "OOPS";
    if (count === 0) return 0;

    let a = 0;
    let b = 1;
    for(let i = 1; i < count; i++){
        const temp = b;
        b = a+b;
        a = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;

// correct answer 01/02/2023