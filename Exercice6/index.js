function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        if (display.value.includes('/0')) {
            throw new Error('Division by zero is not allowed');
        }
        display.value = eval(display.value);
    } catch (e) {
        if (e.message === 'Division by zero is not allowed') {
            display.value = 'Division by zero is not allowed';
        } else {
            display.value = 'Erreur';
        }
    }
}