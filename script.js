
let currentValue = 0;
let displayValue = 8;



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
    return num1/num2;
}

let display = document.querySelector('.display');

let numbers = document.querySelector('.numbers');
for (let i=0; i<10; i++) {
    let digit = document.createElement('button');
            digit.classList.add('number');
            digit.textContent = i;
            
            digit.addEventListener('click', () => {
                displayValue=digit.textContent;
                console.log(displayValue);
                display.textContent = displayValue;
            })
            numbers.appendChild(digit);
}

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    displayValue=0;
    currentValue=0;
    display.textContent = '';
})


