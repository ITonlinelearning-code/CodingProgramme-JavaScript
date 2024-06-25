// Select the toggle button
const toggleButton = document.getElementById('toggleButton');

// Function to switch between light and dark modes
function toggleMode() {
    const body = document.body;
    const header = document.querySelector('header');
    
    // Toggle the dark mode class on body and header
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    toggleButton.classList.toggle('dark-mode');
    
    // Update button text
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
    }
}

// Add event listener to the toggle button
toggleButton.addEventListener('click', toggleMode);
