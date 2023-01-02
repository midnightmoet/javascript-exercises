const removeFromArray = (...args) => {
    // the very first item in our list of args is the array, we can access it with args[0]
    const array = args[0];
    // create a new EMPTY array to hold the items that are not in the args list
    const newArray = [];

    // use forEach to go through the array
    array.forEach((item) => {
        // push every element into the new array UNLESS it is included in the function args
        // So we create a new array with every item, except those that should be removed
        if(!args.includes(item)){
            newArray.push(item);
        }
    });
    // return the new array
    return newArray;
};

// more advanced solution per TOP
// const removeFromArray = function(...args) {
//     const array = args[0];
//     return array.filter((item) => !args.includes(item));
// };

// Do not edit below this line
module.exports = removeFromArray;
