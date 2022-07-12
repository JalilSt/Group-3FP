
const tasks = new taskManager();
console.log(tasks);

// tasks.addTask('Eshetu','to do','justin','09/3/2022','done');
// console.log(tasks);



// Select the New Task Form
const newTaskForm = document.getElementById("create-task");

// Add an 'onsubmit' event listener
newTaskForm.addEventListener("click", (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newTaskNameInput = document.getElementById('formName');
    const newTaskDescription = document.getElementById('formAssign');
    const newTaskAssignedTo = document.getElementById('formDesc');
    const newTaskDueDate = document.getElementById('dueDate');
    const errorMessage = document.getElementById('alertMessage');
    
    
    /*
        Validation code here
    */

    // Get the values of the inputs
    const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;


    if(!validFormFieldInput(name)){
        errorMessage.innerHTML = "Invalid name input";
        errorMessage.style.display = "block"
    }else{
        errorMessage.style.display = "none"
    }

  tasks.addTask(name, description , assignedTo,dueDate); 
  tasks.render();

});

function validFormFieldInput(data){
    return data !== null && data !== '';
}

// console.log(tasks);

const taskHtml  = createTaskHtml ('Eshetu','assignment','dave','09/23/2022','done'); 
console.log(taskHtml);