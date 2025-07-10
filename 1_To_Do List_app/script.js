function addTask(){
    const newTask = document.createElement('li')
    const taskList = document.getElementById('taskList')
    taskList.appendChild(newTask) // isse li ul me add hota jayega 
    newTask.textContent =document.getElementById('inputTask').value
    document.getElementById('inputTask').value = ""
    deleteTask(newTask)
    
}
function deleteTask(newTask)
{
const deletebtn = document.createElement('button')
deletebtn.textContent ="Delete"
newTask.appendChild(deletebtn)
deletebtn.onclick = function(){
    newTask.remove()
}
}
