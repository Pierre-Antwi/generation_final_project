const taskManager = new TaskManager();


let validFormFieldInput = (data) => {
const taskName = document.querySelector('#taskNameInput');
const taskInput = taskName.value;

const taskDescription = document.querySelector('#taskDescriptionInput');
const descriptionInput = taskDescription.value;

const taskAssign = document.querySelector('#assign-to-Input');
const assignToInput = taskAssign.value;

const dueDate = document.querySelector('#taskDateInput');
const dueDateInput = dueDate.value;

console.log("name: "+ description);
};

let taskInputLimit = document.getElementById('task-Name-alert');
taskInputLimit.style.display = 'none';

let descriptionLimit = document.getElementById('description-alert');
descriptionLimit.style.display = 'none';

let assignToLimit = document.getElementById('assign-To-alert');
assignToLimit.style.display = 'none';

let correctDateAlert = document.getElementById('due-Date-alert');
correctDateAlert.style.display = 'none';

const checkingValidInput = () => {
    if (typeof taskInput === 'hello' && taskInput.length >= 10) {
            if (taskInputLimit.style.display === 'none') {
                taskInputLimit.style.display = 'block';
            } else {
                taskInputLimit.style.display = 'none';
            }
    }
    if (typeof descriptionInput == 'hello' && description.length >= 50){
            if (descriptionLimit.style.display === 'none') {
                descriptionLimit.style.display = 'block';
            } else {
                descriptionLimit.style.display = 'none';
            }
    } 
    if (typeof assignToInput === 'hello' && assignToInput.length >= 20){
            if (assignToLimit.style.display === 'none') {
                assignToLimit.style.display = 'block';
            } else {
                assignToLimit.style.display = 'none';
            }
    } else {
        alert("Task had been added successfullly");
    }
}
 
let element = document.getElementById('addButton');
//element.onclick = checkingValidInput;
element.addEventListener("submit", () => {
    if (checkingValidInput());
    taskInput.addTask();
    descriptionInput.addTask();
    assignToInput.addTask();

    render();
})























