let calculatorInput = document.querySelector('.calculatorInput');
let buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;

        if (button.classList.contains('operator1')) {
            if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
            } else if (value === '+/-') {
                currentInput = currentInput ? String(-parseFloat(currentInput)) : '';
            } else if (value === '%') {
                currentInput = currentInput ? String(parseFloat(currentInput) / 100) : '';
            }
        } else if (button.classList.contains('operator')) {
            if (currentInput) {
                if (previousInput && operator) {
                    currentInput = calculate(previousInput, currentInput, operator);
                }
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else if (button.classList.contains('operator2')) {
            if (currentInput && previousInput && operator) {
                currentInput = calculate(previousInput, currentInput, operator);
                operator = '';
                previousInput = '';
            }
        } else {
            currentInput += value;
        }

        calculatorInput.value = currentInput;
    });
});

function calculate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operator) {
        case '+':
            return String(a + b);
        case '-':
            return String(a - b);
        case 'x':
            return String(a * b);
        case '/':
            return b !== 0 ? String(a / b) : 'Error';
        default:
            return '';
    }
}
