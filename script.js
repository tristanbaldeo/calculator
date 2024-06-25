let displayValue = 0;
let positive = true;
let negative = false;
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.getElementById('clear');
const sign = document.getElementById('sign');
const percent = document.getElementById('percent');
const zero = document.getElementById('zero');
const decimal = document.getElementById('decimal');
const equal = document.getElementById('equal');

// Function implement numbers into display and update display
numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        const value = e.target.value;
        if (displayValue === 0) {
            displayValue = value;
        } else if (displayValue.length >= 10) {
            displayValue != value;
        } else {
            displayValue += value;
        }
        display.innerText = displayValue;
    });
});

zero.addEventListener('click', (e) => {
    const value = e.target.value;
    if (displayValue === 0) {
        displayValue = value;
    } else if (displayValue.length >= 10) {
        displayValue != value;
    } else {
        displayValue += value;
    }
    display.innerText = displayValue;
});

// Function to implement clear display
clear.addEventListener('click', (e) => {
    display.style.fontSize = '56px';
    if (displayValue !== 0) {
        displayValue = 0
        display.innerText = 0;
        negative = false;
        positive = true;
    }
});

// Function to implement sign change (+/-)
sign.addEventListener('click', (e) => {
    if (positive == true && displayValue != 0) {
        displayValue = '-' + displayValue;
        display.innerText = displayValue;
        negative = true;
        positive = false;
    } else {
        displayValue = displayValue.substring(1);
        display.innerText = displayValue;
        negative = false;
        positive = true;
    }
});

// Function to implement percent change
percent.addEventListener('click', (e) => {
    let value = (parseFloat(displayValue) / 100);
    displayValue = roundNumber(value);

    display.innerText = displayValue;
    if (displayValue.length > 10) {
        display.style.fontSize = '32px';
    } else if (displayValue == 0) {
        display.innerText != displayValue;
    } else {
        display.style.fontSize = '56px';
    } 
});

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


// Function to implement equals


// Function that operates on two numbers and calculates operators
