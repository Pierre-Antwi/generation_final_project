const createTaskHtml = (name, description, assignTo, dueDate, status) =>{

}

class TaskManager  {
    constructor(currentId = 0) {
        this.currentId = currentId;
        this.tasks = [];
    }
    addTask (currentId, taskInput, descriptionInput, assignToInput, dueDateInput, status) {
       return {
        id : this.currentId++,
        name : this.tasks[0],
        description : this.tasks[1],
        assignedTo : this.tasks[2],
        dueDate : this.tasks[3],
        status : this.tasks[4]
        }
    };
}    

