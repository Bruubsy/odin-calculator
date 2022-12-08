function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return substract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            console.log('Operator not recognized');
    }
}

function createButtonEventListener(button, number) {
    button.addEventListener('click', () => {
        numberStock += number;
        updateDisplay(numberStock)
    })
}

const button0 = document.getElementById("button0");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const buttonDot = document.getElementById("dot");
createButtonEventListener(button0, '0');
createButtonEventListener(button1, '1');
createButtonEventListener(button2, '2');
createButtonEventListener(button3, '3');
createButtonEventListener(button4, '4');
createButtonEventListener(button5, '5');
createButtonEventListener(button6, '6');
createButtonEventListener(button7, '7');
createButtonEventListener(button8, '8');
createButtonEventListener(button9, '9');

buttonDot.addEventListener('click', () => {
    if (numberStock.indexOf('.') == -1) {
        numberStock += '.';
        updateDisplay(numberStock)
    }
})

const buttonAdd = document.getElementById("add");
buttonAdd.addEventListener('click', () => {
    operator = '+';
    if (firstNumber == '') {
        firstNumber = numberStock;
    }
    numberStock = '';
})
const buttonSubstract = document.getElementById("substract");
buttonSubstract.addEventListener('click', () => {
    operator = '-';
    if (firstNumber == '') {
        firstNumber = numberStock;
    }
    numberStock = '';
})
const buttonMultiply = document.getElementById("multiply");
buttonMultiply.addEventListener('click', () => {
    operator = '*';
    if (firstNumber == '') {
        firstNumber = numberStock;
    }
    numberStock = '';
})
const buttonDivide = document.getElementById("divide");
buttonDivide.addEventListener('click', () => {
    operator = '/';
    if (firstNumber == '') {
        firstNumber = numberStock;
    }
    numberStock = '';
})

const buttonEquals = document.getElementById("equals");
buttonEquals.addEventListener('click', () => {
    secondNumber = numberStock;
    if (operator == '' || firstNumber == '' || secondNumber == '') {
        updateDisplay('ERROR');
        clear();
    }
    else if (secondNumber === '0' && operator == '/') {
        updateDisplay('ERROR');
        clear();
    }
    else {
        result = String(operate(operator, Number(firstNumber), Number(secondNumber)));
        updateDisplay(Math.round(result * 10) / 10);
        firstNumber = result;
        secondNumber = '';
    }
}
)

const buttonClear = document.getElementById("clear");
buttonClear.addEventListener('click', () => {
    clear();
    updateDisplay('');
})



function updateDisplay(textToDisplay) {
    const display = document.querySelector('#display');
    display.textContent = textToDisplay;
}

function clear() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    numberStock = '';
}

let operator = '';
let firstNumber = '';
let secondNumber = '';
let numberStock = '';
let result = '';