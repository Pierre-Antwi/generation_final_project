const createTaskHtml = (name, description, assignTo, dueDate, status) =>{
     `
    <div class="card" style="width: 25rem; height: 15rem">
    <div class="card-body">
      <h5 class="task-name"><strong>Task Name : </strong> ${name}}</h5><br>
      <p class="task-description"><strong>Description : </strong> ${description} </p><br>
      <h6 class="assign-to"><strong>Assigned To:</strong> ${assignTo}</h6><br>
      <h6 class="due-date"><strong> Due Date : </strong> ${dueDate} </h6>
    </div>
  </div>`

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

        console.log(task);
    }
    render () {
        let taskHtmlList = [];
        let currenttask = this.tasks;
        for (let i=0; i<this.tasks.length; i++) {
          const task = this.tasks[i]
          let date = new Date(dueDate);
          let formattedDate = date.toString;
          let taskHtml = createTaskHtml(task.id, task.description, task.assignTo, task.dueDate, task.status);
          taskHtmlList.push(taskHtml);
        }
       let tasksHtml = taskHtmlList.join('/n');
       const taskList = document.querySelector('#Pro1')
       taskList.innerHTML = tasksHtml;
    //     document.getElementById('Pro1').innerHTML = tasksHtml; 
    //     document.getElementById('Pro2').innerHTML = tasksHtml;
    //     document.getElementById('Pro3').innerHTML = tasksHtml;
    //     document.getElementById('Pro4').innerHTML = tasksHtml;
    //     document.getElementById('Per1').innerHTML = tasksHtml;
    //     document.getElementById('Per2').innerHTML = tasksHtml;
    //     document.getElementById('Per3').innerHTML = tasksHtml;
    //     document.getElementById('Per4').innerHTML = tasksHtml;
     }

}    

