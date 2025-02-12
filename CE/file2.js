// Calculator Function
function calculator(operation, num1, num2) {
    switch (operation) {
        case "add":
            return `Result: ${num1} + ${num2} = ${num1 + num2}`;
        case "subtract":
            return `Result: ${num1} - ${num2} = ${num1 - num2}`;
        case "multiply":
            return `Result: ${num1} × ${num2} = ${num1 * num2}`;
        case "divide":
            if (num2 === 0) {
                return "Error: Division by zero is not allowed.";
            }
            return `Result: ${num1} ÷ ${num2} = ${num1 / num2}`;
        case "modulus":
            return `Result: ${num1} % ${num2} = ${num1 % num2}`;
        default:
            return "Error: Invalid operation. Please use add, subtract, multiply, divide, or modulus.";
    }
}

module.exports = calculator;
