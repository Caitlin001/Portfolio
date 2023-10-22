// define variables
const numberButtons = document.querySelectorAll('num'); //including decimal
const operatorButtons = document.querySelectorAll('operator');
const clearButton = document.querySelector('clear');
const equalsButton = document.querySelector('equals');
const previousOperandTextElement = document.querySelector('previous-operand');
const currentOperandTextElement = document.querySelector('current-operand');
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }

    clear() {
        this.currentOperand = ''
        this.preciousOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return // works like break in this case
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(number.innerText)
    })
})