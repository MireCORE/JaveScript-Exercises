//  Callbacks for Functions

function operate(a, b, callback) {
  return callback(a, b);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed.";
  } else {
    return a / b;
  }
}

console.log(operate(10, 5, add));
console.log(operate(10, 5, subtract));
console.log(operate(10, 5, multiply));
console.log(operate(10, 5, divide));
console.log(operate(10, 0, divide));
