let displayValue = 0;
let firstNum = '';
let secondNum = '';
let op = '';
let positive = true;
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
        positive = true;
        firstNum = '';
        secondNum = '';
        op = '';
    }
});

// Function to implement sign change (+/-)
sign.addEventListener('click', (e) => {
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
operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if (operator.value === '+' && firstNum === '') {
            firstNum = displayValue;
            op == '+';
            displayValue = '';
        } else if (operator.value === '-' && firstNum === '') {
            firstNum = displayValue;
            op == '-';
            displayValue = '';
        } else if (operator.value === '/' && firstNum === '') {
            firstNum = displayValue;
            op == '/';
            displayValue = '';
        } else if (operator.value === '*' && firstNum === '') {
            firstNum = displayValue;
            op == '*';
            displayValue = '';
        }
    });
});

// Function to implement equals


// Function that operates on two numbers and calculates operators




// operators.forEach(operator => {
//     operator.addEventListener('click', (e) => {
//         let x = displayValue;
//         let y = 5;
//         if (operator.value === '+') {
//             result = parseFloat(x) + parseFloat(y);
//             console.log(result)
//         } else if (operator.value === '-') {
//             result = x - y;
//             console.log(result)
//         } else if (operator.value === '/') {
//             if (y === 0) {
//                 console.log('Error');
//             } else {
//                 result = x / y;
//                 console.log(result)
//             }
//         } else if (operator.value === '*') {
//             result = x * y;
//             console.log(result)
//         }
//     });
// });