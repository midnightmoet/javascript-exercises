const add = (a,b) =>{
	return a+b;
};

const subtract = (a,b) => {
	return a-b;
};

const sum = (array) => {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = (array) => {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

const power = (a,b) => {
	return Math.pow(a,b);
};

const factorial = (n) => {
	if(n === 0) return 1;
  let product = 1;
  for(let i = n; i > 0; i--){
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};


// correct solution 01/02/2023