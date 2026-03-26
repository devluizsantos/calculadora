let lastCal = document.getElementById('last-calc');
let result = document.querySelector('#result span');

let currentExpression = '';

clearAll();

function insert(value) {
    const operators = ['+', '-', '*', '/'];

    if (currentExpression === '' && operators.includes(value)) {
        return;
    }

    let lastChar = currentExpression.slice(-1);

    if (operators.includes(lastChar) && operators.includes(value)) {
        return;
    }

    currentExpression += value;
    lastCal.innerHTML = currentExpression;
}

function clearAll() {
    lastCal.innerHTML = '0';
    result.innerHTML = '0';
    currentExpression = '';
}

function deleteLast() {
    lastCal.innerHTML = currentExpression = currentExpression.slice(0, -1);
    lastCal.innerHTML = currentExpression || '0';
}

function calculate() {
    try {
        let calc = eval(currentExpression);
        result.innerHTML = calc;
        currentExpression = calc.toString();
        lastCal.innerHTML = currentExpression;
    } catch {
        result.innerHTML = 'Erro';
    }
}