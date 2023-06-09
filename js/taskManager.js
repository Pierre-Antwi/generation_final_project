const createTaskHtml = (id, name, description, assignTo, dueDate, status) => {
  const html =
    `
    <div class="card" style="width: 25rem; height: 15rem" >
      <div class="card-body" id : task-card${id}>
        <h5 class="task-name"><strong>Task Name : </strong> ${name}</h5>
        <h6 class="task-description"><strong>Description : </strong> ${description} </h6>
        <h6 class="assign-to"><strong>Assigned To:</strong> ${assignTo}</h6>
        <h6 class="due-date"><strong> Due Date : </strong> ${dueDate} </h6>
        <h6 class="status"><strong> Status : </strong> ${status}
        <span class="btn btn-primary done-button" data-task-id=${id} >Mark as Done<span></h6>
        <button type="button" class="btn btn-dark delete-button">Delete</button>
      </div>
    </div>
  `
  return html;
}

class TaskManager {
  constructor(currentId = 0) {
    this.currentId = currentId;
    this.tasks = [];
  }
  addTask(taskInput, descriptionInput, assignToInput, dueDateInput, status) {
    const task = {
      id: this.currentId++,
      name: taskInput,
      description: descriptionInput,
      assignedTo: assignToInput,
      dueDate: dueDateInput,
      status: 'TO-DO'
    }
    this.tasks.push(task);
  }
  render() {
    let taskHtmlList = [];
    //let currentTask = this.tasks;
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      let date = new Date(task.dueDate);
      let formattedDate = date.toString();
      let taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);
      taskHtmlList.push(taskHtml);
    }
    let tasksHtml = taskHtmlList.join();
    const taskList = document.querySelector('.lists-group');
    taskList.innerHTML = tasksHtml;
  }
  getTaskById(taskId) {
    let foundtask;
    for(let i=0; i<this.tasks.length; i++){
      let task = this.tasks[i];
      if (task.id == taskId) {
      this.tasks[i].status = 'Done'
      foundtask = this.tasks[i];

    } 
  } 
  return foundtask;
  }

  save(){
    let taskJson = JSON.stringify(this.tasks)
    localStorage.setItem('tasks', taskJson)
    localStorage.setItem('currentId', JSON.stringify(this.currentId))  
  }

  load(){

    if(localStorage.getItem('tasks')){
        let taskJson = JSON.parse(localStorage.getItem('tasks'))
        this.tasks = taskJson

        if(localStorage.getItem('currentId')){
          let currentId = localStorage.getItem('currentId')
          this.currentId = JSON.parse(currentId)
        }

    }
  }

  deleteTask (taskId){
    let newTasks = []
    for(i=0; i<this.tasks.length; i++){
      let task = this.tasks[i];
      if (task.id != taskId){
        newTasks.push(task);
      }
    } 
    newTasks = this.tasks;
  }

};




