const selectedOperation = selectOperation();
console.log(selectedOperation);

const firstNumber = enterNumber('first');
console.log(firstNumber);

const secondNumber = enterNumber('second');
console.log(secondNumber);

selectedOperation(firstNumber, secondNumber);

function selectOperation() {
    const operators = '+ - / *';
    const operator = prompt('What do you want to do?', operators);

    if (operator === '+') {
        return add;
    } else if (operator === '-') {
        return sub;
    } else if (operator === '*') {
        return mult;
    } else if (operator === '/') {
        return div;
    } else  {
        return selectOperation();
    }
}

function enterNumber(serialNumber) {
    let number = prompt(`Enter the ${serialNumber} number`);
    number = Number(number);

    if (!isNaN(number)) {
        return number;
    }
    else {
        return enterNumber(serialNumber);
    }
}

function add(firstNumber, secondNumber) {
    console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
}

function sub(firstNumber, secondNumber) {
    console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
}

function mult(firstNumber, secondNumber) {
    console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
}

function div(firstNumber, secondNumber) {
    console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
}