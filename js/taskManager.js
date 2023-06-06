const createTaskHtml = (taskInput, descriptionInput, assignToInput, dueDate, status) =>{
    const html = `
    <div class="card" style="width: 25rem; height: 15rem">
    <div class="card-body">
      <h5 class="task-name"><strong>Task Name : </strong> ${taskInput}}</h5><br>
      <p class="task-description"><strong>Description : </strong> ${descriptionInput} </p><br>
      <h6 class="assign-to"><strong>Assigned To:</strong> ${assignToInput}</h6><br>
      <h6 class="due-date"><strong> Due Date : </strong> ${dueDate} </h6>
    </div>
  </div>`

  return html;
}

class TaskManager  {
    constructor(currentId = 0) {
        this.currentId = currentId;
        this.tasks = [];
    }
    addTask (currentId, taskInput, descriptionInput, assignToInput, dueDateInput, status) {
    this.currentId++;
       return {
        id : this.currentId++,
        name : this.tasks[0],
        description : this.tasks[1],
        assignedTo : this.tasks[2],
        dueDate : this.tasks[3],
        status : this.tasks[4]
        }
    }
    render () {
        let taskHtmlList = [];
        let currenttask = this.tasks;
        for (let i=0; i<=taskHtmlList.length, i++;){
          let date = new Date(dueDate);
          let formattedDate = date.toString;
          let taskHtml = createTaskHtml(currenttask, description, assignTo, formattedDate);
          taskHtmlList.push(taskHtml);
        }
        let tasksHtml = taskHtmlList.join('/n');
        document.getElementById('Pro1').innerHTML = tasksHtml; 
        document.getElementById('Pro2').innerHTML = tasksHtml;
        document.getElementById('Pro3').innerHTML = tasksHtml;
        document.getElementById('Pro4').innerHTML = tasksHtml;
        document.getElementById('Per1').innerHTML = tasksHtml;
        document.getElementById('Per2').innerHTML = tasksHtml;
        document.getElementById('Per3').innerHTML = tasksHtml;
        document.getElementById('Per4').innerHTML = tasksHtml;
    }

}    

