const snakeCase = (str) => {
    // wtf case
    str = str.replace(/\.\.\./g, ' ');

    // camel case
    if(str.indexOf(" ") < 0) {
        str = str.replace(/([A-Z])/g, ' $1');
    }

    return str
        .trim()
        .toLowerCase()
        .split(' ')
        .join('_')
        .replace(/[,\?\.]/g, '')
        .replace(/\-/g, " ");
};

// Do not edit below this line
module.exports = snakeCase;

//  correct solution 01/02/2023
