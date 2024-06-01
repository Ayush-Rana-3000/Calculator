let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function toggleSign() {
    if (currentInput.startsWith('-')) {
        currentInput = currentInput.slice(1);
    } else {
        currentInput = '-' + currentInput;
    }
    display.value = currentInput;
}
