const createTaskHtml = (name, description, assignTo, dueDate, status) =>{
  const html = 
     `
    <li>
      <div class="card" style="width: 25rem; height: 15rem">
      <div class="card-body">
        <h5 class="task-name"><strong>Task Name : </strong> ${name}</h5><br>
        <p class="task-description"><strong>Description : </strong> ${description} </p><br>
        <h6 class="assign-to"><strong>Assigned To:</strong> ${assignTo}</h6><br>
        <h6 class="due-date"><strong> Due Date : </strong> ${dueDate} </h6>
        <h6 class="status><strong> Status : </strong> ${status}</h6>
      </div>
      </div>
    </li>`

  return html;
}

class TaskManager  {
    constructor(currentId = 0) {
        this.currentId = currentId;
        this.tasks = [];
    }
    addTask (taskInput, descriptionInput, assignToInput, dueDateInput) {
       const task =  {
        id : this.currentId++,
        name : taskInput,
        description : descriptionInput,
        assignedTo : assignToInput,
        dueDate : dueDateInput,
        status : 'TODO'
        }
        this.tasks.push(task);
        console.log(task);
    }
    render () {
        let taskHtmlList = [];
        //let currentTask = this.tasks;
        for (let i=0; i<this.tasks.length; i++) {
          const task = this.tasks[i];
          let date = new Date(task.dueDate);
          let formattedDate = date.toString;
          let taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, task.dueDate, this.status);
          taskHtmlList.push(taskHtml);
        }
       let tasksHtml = taskHtmlList.join();
       const taskList = document.querySelector('.list-group');
       taskList.innerHTML = tasksHtml;
     }

}; 

