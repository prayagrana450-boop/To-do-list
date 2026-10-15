
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const errorMessage = document.getElementById("errorMessage");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const emptyMessage = document.getElementById("emptyMessage");

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    // Check empty input
    if (taskText === "") {
        errorMessage.textContent = "Please enter a task!";
        taskInput.focus();
        return;
    }

    errorMessage.textContent = "";

    // Create task list item
    const li = document.createElement("li");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("aria-label", "Mark task as completed");

    // Create task text
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;

    // Mark task as completed
    checkbox.addEventListener("change", function () {
        span.classList.toggle("completed", checkbox.checked);
        updateCounter();
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Delete task
    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateCounter();
    });

    // Add elements to task item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Show task on page
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
    taskInput.focus();

    updateCounter();
}

// Add button click event
addBtn.addEventListener("click", addTask);

// Add task by pressing Enter
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Update task counters
function updateCounter() {
    const tasks = taskList.querySelectorAll("li");
    const completed = taskList.querySelectorAll(
        'input[type="checkbox"]:checked'
    );

    totalTasks.textContent = tasks.length;
    completedTasks.textContent = completed.length;

    emptyMessage.style.display =
        tasks.length === 0 ? "block" : "none";
}

// Initial display
updateCounter();
