// Initialize an empty array
let array = [];

// Function to display array elements
function displayArray() {
    const arrayContainer = document.getElementById('arrayElements');
    arrayContainer.innerHTML = ''; // Clear previous content

    array.forEach((element, index) => {
        const elementDiv = document.createElement('div');
        elementDiv.textContent = `Element ${index + 1}: ${element}`;
        arrayContainer.appendChild(elementDiv);
    });
}

// Function to add element to the end of the array
function addElement() {
    const elementInput = document.getElementById('elementInput').value.trim();
    if (elementInput !== '') {
        array.push(elementInput);
        displayArray();
    } else {
        alert('Please enter a valid element.');
    }
}

// Function to remove element from the beginning or end of the array
function removeElement(type) {
    if (array.length === 0) {
        alert('Array is empty.');
        return;
    }

    switch (type) {
        case 'first':
            array.shift();
            break;
        case 'last':
            array.pop();
            break;
        default:
            alert('Invalid operation.');
    }

    displayArray();
}
