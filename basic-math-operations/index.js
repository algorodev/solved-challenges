const doMathOperation = (operation, number1, number2) => {
    switch (operation) {
        case '+':
            return number1 + number2
        case '-':
            return number1 - number2
        case '*':
            return number1 * number2
        case '/':
            return number1 / number2
        default:
            throw Error('this is not a valid operator')
    }
}

console.log(doMathOperation('+', 4, 4))
console.log(doMathOperation('-', 4, 9))
console.log(doMathOperation('*', 2, 6))
console.log(doMathOperation('/', 20, 5))
