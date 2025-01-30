function add(x, y) {
  result = x + y;

  return result;
}

function subtract(x, y) {
  result = x-y;

  return result;
}

function sum(x) {
  result = 0;

  for(i = 0; i < x.length; i++) {
    result += x[i];
  }

  return result;

}

function multiply(x) {
  result = 1;

  for(i = 0; i < x.length; i++) {
    result *= x[i];
  }

  return result;
}

function power(x, y) {
  result = x;

  for(i = 1; i < y; i++) {
    result *= x;
  }

  if(y == 0) result = 1; 

  return result;
}

const factorial = function(x) {
  result = x;

  for(i = x-1; i > 0; i--) {
    result *= i;
  }

  if(x == 0) result = 1;

  return result;
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
