// Start coding here
let calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b,
    divide: (a,b) => a / b,
    addResult: () => calculator.add(10,20),
    divideResult: () => calculator.divide(3000,10),
};

console.log(calculator.addResult())
console.log(calculator.divideResult())