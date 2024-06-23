// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput) {
        tasks.push(taskInput); // Add the task to the tasks array
        document.getElementById('taskInput').value = ''; // Clear the input field
        displayTasks(); // Update the task list display
    } else {
        alert('Please enter a task.'); // Alert if the input field is empty
    }
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear the current list
    tasks.forEach((task, index) => {
        const li = document.createElement('li'); // Create a list item for each task
        li.textContent = task; // Set the text of the list item to the task
        const removeButton = document.createElement('button'); // Create a remove button
        removeButton.textContent = 'Remove'; // Set the text of the remove button
        removeButton.onclick = () => removeTask(index); // Set the onclick event to remove the task
        li.appendChild(removeButton); // Add the remove button to the list item
        taskList.appendChild(li); // Add the list item to the task list
    });
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1); // Remove the task from the tasks array
    displayTasks(); // Update the task list display
}
