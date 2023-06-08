const taskManager = new TaskManager();


let formField = document.getElementById('formField');
formField.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('The form has been submitted')
const taskName = document.querySelector('#taskNameInput');
const taskInput = taskName.value;
    if (typeof taskInput != 'string'){
        taskInputLimit.style.display = 'block';
    }
  
const taskDescription = document.querySelector('#taskDescriptionInput');
const descriptionInput = taskDescription.value;
 

const taskAssign = document.querySelector('#assign-to-Input');
const assignToInput = taskAssign.value;

const dueDate = document.querySelector('#taskDateInput');
const dueDateInput = dueDate.value;

taskManager.addTask(taskInput, descriptionInput, assignToInput, dueDateInput);

console.log("taskName: "+ taskInput)
console.log("description: "+ descriptionInput);
console.log("assignee: "+ assignToInput)
console.log("dueDate: "+ dueDateInput)
})

let taskInputLimit = document.getElementById('task-Name-alert');
taskInputLimit.style.display = 'none';

let descriptionLimit = document.getElementById('description-alert');
descriptionLimit.style.display = 'none';

let assignToLimit = document.getElementById('assign-To-alert');
assignToLimit.style.display = 'none';

let dateAlert = document.getElementById('due-Date-alert');
dateAlert.style.display = 'none';



// const checkingValidInput = () => {
//     if (typeof taskInput !== 'string' && taskInput.length >= 10) {
//             if (taskInputLimit.style.display === 'none') {
//                 taskInputLimit.style.display = 'block';
//             } else {
//                 taskInputLimit.style.display = 'none';
//             }
//     }
//     if (typeof descriptionInput == 'string' && description.length >= 50){
//             if (descriptionLimit.style.display === 'none') {
//                 descriptionLimit.style.display = 'block';
//             } else {
//                 descriptionLimit.style.display = 'none';
//             }
//     } 
//     if (typeof assignToInput === 'hello' && assignToInput.length >= 20){
//             if (assignToLimit.style.display === 'none') {
//                 assignToLimit.style.display = 'block';
//             } else {
//                 assignToLimit.style.display = 'none';
//             }
//     } else {
//         alert("Task had been added successfullly");
//     }
// }
 

// element.onclick = ;
// formField.addEventListener("click", () => {
//     validFormFieldInput();
//     taskInput.addTask();
//     descriptionInput.addTask();
//     assignToInput.addTask();

//     taskManager.render();
// })




















