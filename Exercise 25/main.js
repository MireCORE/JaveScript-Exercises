// Spread Operator

const numbers = [1, 2, 3,];
const allNumbers = [...numbers, 4, 5, 6];
console.log(allNumbers);

// Rest Operator

function sum(...multiply) {
    return multiply.reduce((total, num) => total * num, 1);
};

console.log(sum(1, 2, 3, 4, 5));