let displayValue = 0;
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
        displayValue != value;
    } else if (displayValue.length >= 10) {
        displayValue != value;
    } else {
        displayValue += value;
    }
    display.innerText = displayValue;
});

// Function to implement clear display


// Function to implement sign change (+/-)


// Function to implement percent change


// Function to implement decimal


// Function to implement operators


// Function to implement equals


// Function that operates on two numbers and calculates operators
