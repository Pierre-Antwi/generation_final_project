const taskManager = new TaskManager();

let formField = document.getElementById('formField');
formField.addEventListener('submit', (e)=> {
    e.preventDefault();    
    const taskName = document.querySelector('#taskNameInput');
    const taskDescription = document.querySelector('#taskDescriptionInput');
    const taskAssign = document.querySelector('#assign-to-Input');
    const dueDate = document.querySelector('#taskDateInput');

    if(taskName.value === '') {
        alert('Yo, you are going too far! Do not forget to type your task here!')
    } else if (taskDescription.value === '') {
        alert('Slow down there, juggernaut! You need to add a description or we will not know what is going on.')
    }  else if(taskAssign.value === '') {
        alert('No identity theft here. Use your real name!')  
    } else if (dueDate.value === '') {
        alert('Your nap was not that long. It is still 2023.')
    } 

    const taskInput = taskName.value;
    const descriptionInput = taskDescription.value;
    const assignToInput = taskAssign.value;
    const dueDateInput = dueDate.value;

taskManager.addTask(taskInput, descriptionInput, assignToInput, dueDateInput);
taskManager.render();
console.log(taskManager.tasks);
 })




















