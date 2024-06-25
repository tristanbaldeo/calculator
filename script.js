let displayValue = 0;
let firstNum = '';
let secondNum = '';
let op = '';
let result = '';
let positive = true;

const display = document.getElementById('display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.getElementById('clear');
const sign = document.getElementById('sign');
const percent = document.getElementById('percent');
const zero = document.getElementById('zero');
const decimal = document.getElementById('decimal');
const equal = document.getElementById('equal');

// Function implement numbers into display and update display
function updateDisplay(value) {
    if (displayValue === 0) {
        displayValue = value;
    } else if (displayValue.length < 10) {
        displayValue += value;
    }
    display.innerText = displayValue;
}

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        const value = e.target.value;
        updateDisplay(value);
    });
});

zero.addEventListener('click', (e) => {
    const value = e.target.value;
    updateDisplay(value);
});

// Function to implement clear display
clear.addEventListener('click', () => {
    display.style.fontSize = '56px';
    if (displayValue !== 0) {
        displayValue = 0
        display.innerText = 0;
        positive = true;
        firstNum = '';
        secondNum = '';
        op = '';
    }
});

// Function to implement sign change (+/-)
sign.addEventListener('click', () => {
    if (positive == true && displayValue != 0) {
        displayValue = '-' + displayValue;
        display.innerText = displayValue;
        positive = false;
    } else if (positive == false && displayValue != 0) {
        displayValue = displayValue.substring(1);
        display.innerText = displayValue;
        positive = true;
    }
});

// Function to implement percent change
percent.addEventListener('click', () => {
    let value = (parseFloat(displayValue) / 100);
    displayValue = roundNumber(value);
    display.innerText = displayValue;
    adjustFontSize();
});

function adjustFontSize() {
    if (displayValue.length > 10) {
        display.style.fontSize = '32px';
    } else if (displayValue == 0) {
        display.innerText != displayValue;
    } else {
        display.style.fontSize = '56px';
    } 
}

// Function to round number
function roundNumber(value) {
    let valueStr = value.toExponential(12);
    valueStr = parseFloat(valueStr).toString();
    return valueStr;
}

// Function to implement decimal
decimal.addEventListener('click', (e) => {
    const value = e.target.value;
    if (displayValue.includes('.')) {
        displayValue != value
    } else {
        displayValue += value;
        display.innerText = displayValue;
    }
});

// Function to implement operators
function firstOperation() {
    firstNum = displayValue;
    displayValue = '';
}

function solve() {
    secondNum = displayValue;
    operate();
    displayValue = result;
    display.innerText = result;
    firstNum = result;
    secondNum = '';
}

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (firstNum === '') {
            firstOperation();
            op = operator.value;
        } else if (firstNum != '') {
            solve()
            op = operator.value;
            displayValue = '';
            roundNumber();
            adjustFontSize();
        }
    });
});

// Function to implement equals
equal.addEventListener('click', (e) => {
    solve();
    op = '';
    roundNumber();
    adjustFontSize();
});

// Function that operates on two numbers and calculates operators
function operate() {
    if (op === '+') {
        result = parseFloat(firstNum) + parseFloat(secondNum);
    } else if (op === '-') {
        result = firstNum - secondNum;
    } else if (op === '/') {
        if (secondNum === 0) {
            result = 'Error';
        } else {
            result = firstNum / secondNum;
        }
    } else if (op === '*') {
        result = firstNum * secondNum;
    }
}