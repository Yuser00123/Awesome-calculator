const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let expression = '';

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        const value = button.dataset.value;

        if (value === 'clear') {
            expression = '';
        } else if (value === 'equal') {
            if (expression === '') return;

            try{
                expression - String(eval(expression));
            } catch {
                display.textContent = 'Error';
                expression = '';
                return;
            }
        } else {
            if ('+-*/'.includes(value) && expresssion === '' || '+-*/'.includes(expression.slice(-1))) {
                return;
            }
            expression += value;
        }

        display.textContent = expression || '0';
    });
});