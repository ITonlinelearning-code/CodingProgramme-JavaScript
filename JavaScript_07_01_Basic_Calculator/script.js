// Function to perform calculations
function calculate(operation) {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    let result;

    if (isNaN(number1) || isNaN(number2)) {
        result = 'Please enter valid numbers.';
    } else {
        switch (operation) {
            case 'add':
                result = `${number1} + ${number2} = ${number1 + number2}`;
                break;
            case 'subtract':
                result = `${number1} - ${number2} = ${number1 - number2}`;
                break;
            case 'multiply':
                result = `${number1} * ${number2} = ${number1 * number2}`;
                break;
            case 'divide':
                if (number2 === 0) {
                    result = 'Cannot divide by zero.';
                } else {
                    result = `${number1} / ${number2} = ${number1 / number2}`;
                }
                break;
            default:
                result = 'Unknown operation.';
        }
    }

    document.getElementById('result').innerText = result;
}
