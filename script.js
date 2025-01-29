document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    function saveTasks() {
        const tasks = Array.from(taskList.children).map(item => item.textContent.replace("Remove", "").trim());
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function addTask(taskText, save = true) {
        if (!taskText.trim()) {
            alert("Please enter a task.");
            return;
        }

        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        listItem.classList.add("task-item");

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");
        removeButton.onclick = () => {
            listItem.remove();
            saveTasks();
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        if (save) {
            saveTasks();
        }

        taskInput.value = "";
    }

    addButton.addEventListener("click", () => addTask(taskInput.value));
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask(taskInput.value);
        }
    });

    loadTasks();
});
