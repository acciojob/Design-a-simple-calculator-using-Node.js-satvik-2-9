const readline = require('readline-sync');

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return 'Cannot divide by zero';
    }
    return num1 / num2;
}

function calculator() {
    const num1 = parseFloat(readline.question('Enter the first number: '));
    const num2 = parseFloat(readline.question('Enter the second number: '));
    const operation = readline.question('Enter the operation (+, -, *, /): ');

    let result;
    switch (operation) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = 'Invalid operation';
            break;
    }

    console.log(`Result: ${result}`);
}

module.exports = { add, subtract, multiply, divide }; // Export for testing purposes
