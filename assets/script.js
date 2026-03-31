let lastCalc = document.getElementById('last-calc');
let resultSpn = document.getElementById('resultSpn');
let currentExpression = '';

let calculateIs = false;

const operators = ['+', '-', '*', '/']

const insert = (value) => {

    //verifica para não permitir os operadores '/', '*', '+' no começo;
    if (currentExpression === '' && operators.includes(value) && value !== '-') {
        return;
    }

    //verfifica se há um '.' no número e se sim bloqueia
    const parts = currentExpression.split(/[\+\-\*\/]/);
    let lastNumber = parts[parts.length-1]
    if (value === '.' && lastNumber.includes('.')) {
        return
    }

    //verifica se há um operador seguido do outro e substitui
    let last = currentExpression.slice(-1);
    if (operators.includes(last) && operators.includes(value)) {
        currentExpression = currentExpression.slice(0,-1);
        currentExpression += value;
        lastCalc.innerHTML = currentExpression;
        return;
    }

    //Após calcular se clicar em um operador aparece o resultado da soma e continua a nova operação
    if (calculateIs === true && !operators.includes(value)) {
        currentExpression = value;
        lastCalc.innerHTML = currentExpression;
        calculateIs = false;
        return;
    }

    //Após calcular se clicar em um número reseta a calculadora e começa uma nova operação
    if (calculateIs === true && operators.includes(value)) {
        currentExpression = resultSpn.innerHTML;
        lastCalc.innerHTML = currentExpression + value;
        currentExpression += value;
        lastCalc.innerHTML = currentExpression;
        calculateIs = false;
        return;

    }

    currentExpression += value;
    lastCalc.innerHTML = currentExpression;
}

const clearAll = () => {
    lastCalc.innerHTML = '0';
    resultSpn.innerHTML = '0';
    currentExpression = '';
}

const calculate = () => {
    let last = currentExpression.slice(-1);
    calculateIs = true;

    if (operators.includes(last)) {
        resultSpn.innerHTML = 'Erro';
        return;
    }

    let result = eval(currentExpression);

    if (result === Infinity || isNaN(result) || result === -Infinity || operators.includes(last)) {
        resultSpn.innerHTML = 'Erro';
    } else {
        resultSpn.innerHTML = result;
    }
}

const deleteLast = () => {
    currentExpression = currentExpression.slice(0, -1);
    lastCalc.innerHTML = currentExpression || 0;
}
