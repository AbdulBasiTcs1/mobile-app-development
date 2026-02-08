// Making of the calculator functions :
// add - subtract - divide - multiply
function addNumbers(a, b) {
    return a + b;
}
function subtractNumbers(a, b) {
    return a - b;
}
function multiplyNumbers(a, b) {
    return a * b;
}
function divideNumbers(a, b) {
    if (b === 0) {
        return "Error: Division by zero"
    } else {
        return a / b;
    }
}
// function using the control flow:
function calculator(operation, a, b) {
    switch (operation) {
        case "add":
            console.log("Addition of numbers: ")
            return addNumbers(a, b);
        case "subtract":
            console.log("Subtraction of numbers: ")
            return subtractNumbers(a, b);
        case "multiply":
            console.log("Multiplication of numbers: ")
            return multiplyNumbers(a, b);
        case "divide":
            console.log("Divison of numbers: ")
            return divideNumbers(a, b);
        default:
            return "Invalid Operation"

    }
}

// Testing and executing the functioned calculator :
console.log(calculator("add", 232, 12))
console.log(calculator("subtract", 232, 12))
console.log(calculator("multiply", 232, 12))
console.log(calculator("divide", 232, 12))
