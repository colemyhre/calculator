
let currentValue = 0;
let displayValue;
let operator = '';
let lastClick = '';



function add(num1, num2) {
    return num1+num2;
}

function subtract(num1, num2) {
    return num1-num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        return "ERROR: CANNOT DIVIDE BY ZERO";
    }
    return num1/num2;
}

function operate(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    
    switch (operator) {
        case 'add':
          return add(num1,num2);
          break;
        case 'subtract':
            return subtract(num1,num2);
            break;
        case 'multiply':
            return multiply(num1,num2);
          break;
        case 'divide':
            return divide(num1,num2);
          break; 
        case 'equals':
            break;
        default:
          console.log(`Oops!`);
      }
      
}

let display = document.querySelector('.display');

let numbers = document.querySelector('.numbers');
for (let i=0; i<11; i++) {
    let digit = document.createElement('button');
            digit.classList.add('number');
            if (i==10) {
                digit.textContent = '.';
            } else {
                digit.textContent = i;
            }

            digit.addEventListener('click', () => {
                if (lastClick == '') {
                    displayValue = digit.textContent;
                    lastClick = 'number';
                } else if (lastClick !== 'number') {
                    displayValue=digit.textContent;
                    operator = lastClick;
                    lastClick = 'number';
                }
                else {
                    displayValue = displayValue + digit.textContent;
                }
                display.textContent = displayValue;
            })
            numbers.appendChild(digit);
}


let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    displayValue=0;
    currentValue=0;
    lastClick = '';
    operator = '';
    display.textContent = '';
});


let addBtn = document.querySelector('#add');
addBtn.addEventListener('click', () => {
    lastClick = 'add';
    
    if (operator !== '') {    
        currentValue = operate(currentValue, displayValue);
        displayValue = currentValue;
        display.textContent = displayValue;
    }
    else {    
        currentValue = displayValue;
    }

    
});

let subtractBtn = document.querySelector('#subtract');
subtractBtn.addEventListener('click', () => {
    lastClick = 'subtract';
    if (operator !== '') {    
        currentValue = operate(currentValue, displayValue);
        displayValue = currentValue;
        display.textContent = displayValue;
    }
    else {    
        currentValue = displayValue;
    }
});

let multiplyBtn = document.querySelector('#multiply');
multiplyBtn.addEventListener('click', () => {
    lastClick = 'multiply';
    if (operator !== '') {    
        currentValue = operate(currentValue, displayValue);
        displayValue = currentValue;
        display.textContent = displayValue;
    }
    else {    
        currentValue = displayValue;
    }
});

let divideBtn = document.querySelector('#divide');
divideBtn.addEventListener('click', () => {
    lastClick = 'divide';
    if (operator !== '') {    
        currentValue = operate(currentValue, displayValue);
        displayValue = currentValue;
        display.textContent = displayValue;
    }
    else {    
        currentValue = displayValue;
    }
});

let equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    lastClick = 'equals';
    currentValue = operate(currentValue, displayValue);
    displayValue = currentValue;
    display.textContent = displayValue;
    currentValue=0;
    lastClick = '';
    operator = '';
});
