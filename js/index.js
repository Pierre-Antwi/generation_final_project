const taskManager = new TaskManager();

taskManager.load()
taskManager.render()
let formField = document.getElementById('formField');
formField.addEventListener('submit', (e)=> {
    e.preventDefault();    
    const taskName = document.querySelector('#taskNameInput');
    const taskDescription = document.querySelector('#taskDescriptionInput');
    const taskAssign = document.querySelector('#assign-to-Input');
    const dueDate = document.querySelector('#taskDateInput');

    if(taskName.value === '') {
        alert('Add task name here.')
    } else if (taskDescription.value === '') {
        alert('Add task description here.')
    }  else if(taskAssign.value === '') {
        alert('Add your name here.')  
    } else if (dueDate.value === '') {
        alert('Add due date here.')
    } 

    const taskInput = taskName.value;
    const descriptionInput = taskDescription.value;
    const assignToInput = taskAssign.value;
    const dueDateInput = dueDate.value;

taskManager.addTask(taskInput, descriptionInput, assignToInput, dueDateInput);
taskManager.render();
taskManager.save()


const taskList = document.querySelector('#task-card')
taskList.addEventListener('click',(event)=>{
    const markAsDoneButton = event.target
    if(markAsDoneButton.className.includes('done-button')){
    
        const taskListId = markAsDoneButton.dataset.taskId
        taskManager.getTaskById(taskListId);
        taskManager.render();
        taskManager.save()
    }

    if(event.target.className.includes('delete-button')){
        let parentTask = document.querySelector('.card-body');
        const taskId = Number(parentTask.dataset.taskId);
        taskManager.deleteTask(taskId);
        taskManager.save();
        taskManager.render();
    }




    
})

 })



















