Create a To-Do List application where users can add, display, and remove tasks.

This task focuses on utilizing advanced DOM manipulation techniques to interact dynamically with the webpage.

Here is what your final output should look like.




HTML Code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>To-Do List Application</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="todo-app">
        <h1>My To-Do List</h1>
        <input type="text" id="task-input" placeholder="Enter a new task">
        <button id="add-task-btn">Add Task</button>
        <ul id="task-list">
            <!-- Tasks will be listed here -->
        </ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
CSS Code
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

#todo-app {
    width: 100%;
    max-width: 400px;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

#task-input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

#add-task-btn {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

#add-task-btn:hover {
    background-color: #0056b3;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    background-color: #eeeeee;
    margin-top: 8px;
    padding: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.remove-btn {
    cursor: pointer;
    background-color: #ff6347;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
}

.remove-btn:hover {
    background-color: #d9534f;
}