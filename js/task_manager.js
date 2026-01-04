function initTaskManager() {
    console.log('Task Manager Initialized');

    // Add task
    window.addTask = function() {
        const taskInput = document.getElementById('new-task');
        const taskList = document.getElementById('task-list');
        const task = taskInput.value;
        if (task) {
            const li = document.createElement('li');
            li.textContent = task;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    };
}
