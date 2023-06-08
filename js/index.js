const taskManager = new TaskManager();

let formField = document.getElementById('formField');
formField.addEventListener('submit', (e)=> {
    e.preventDefault();    
    const taskName = document.querySelector('#taskNameInput');
    const taskDescription = document.querySelector('#taskDescriptionInput');
    const taskAssign = document.querySelector('#assign-to-Input');
    const dueDate = document.querySelector('#taskDateInput');

    if(taskName.value === '') {
        alert('Please enter a task name')
    } else if (taskDescription.value === '') {
        alert('Please enter a task description')
    } else if(taskAssign.value === '') {
        alert('Please enter a task assigned to')
    } else if (dueDate.value === '') {
        alert('Please enter a due date')
    } 

    const taskInput = taskName.value;
    const descriptionInput = taskDescription.value;
    const assignToInput = taskAssign.value;
    const dueDateInput = dueDate.value;

taskManager.addTask(taskInput, descriptionInput, assignToInput, dueDateInput);
taskManager.render();
console.log(taskManager.tasks);
 })




















