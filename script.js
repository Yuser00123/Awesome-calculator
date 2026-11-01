const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let expression = '';

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        const value = button.dataset.value;

        if (value === 'clear') {
            expression = '';
        } else if (value === 'delete') {
            expression = expression.slice(0, -1);
        } else if (value === 'percent') {
            if (expression === '') return;
            try {
                expression = String(eval(expression) / 100);
            } catch {
                display.textContent = 'Error';
                expression = '';
                return;
            }
        } else if (value === 'equal') {
            if (expression === '') return;

            try{
                const result = eval(expression);
                if (!isFinite(result)) {
                    display.textContent = 'Error';
                    expression = '';
                    return;
                }
                expression = String(result);
            } catch {
                display.textContent = 'Error';
                expression = '';
                return;
            }
        } else {
            if ('+-*/'.includes(value) && (expression === '' || '+-*/'.includes(expression.slice(-1)))) {
                return;
            }
            if (value === '.') {
                const parts = expression.split(/[+\-*/]/);
                const currentNumber = parts[parts.length - 1];
                if (currentNumber.includes('.')) return;
            }
            expression += value;
        }

        display.textContent = expression || '0';
    });
});