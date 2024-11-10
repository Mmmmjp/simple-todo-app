window.onload = () => {
    const addTask = document.querySelector("#addTask");

    addTask.addEventListener("click", function() {
        const taskInput = document.querySelector("#taskInput");

        // Getting input value without spaces
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            addTaskToList(taskText);
            taskInput.value = ""; // Clear input field
        }
    });
};

function addTaskToList(taskText) {
    const taskList = document.querySelector("#taskList");
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create complete button
    const completeButton = document.createElement("button");
    completeButton.textContent = "✔️";
    completeButton.className = "complete";
    completeButton.addEventListener("click", function() {
        listItem.classList.toggle("completed");
    });

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
}




