function removeTask(btnRemoveElement) {
    // Get the task ID from the data attribute
    let id = btnRemoveElement.parentNode.parentNode.getAttribute('data-task-id');
    // Remove the task from the tasks array
    tasks.splice(id, 1);
    // Re-display the tasks
    displayTasks();
  }
  