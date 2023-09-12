import { myTasks, addTasks } from './tasks'
import { resetTaskList } from './reset'

function loadHome() {   
    const content = document.getElementById("content")
    const head = document.createElement("h2")
    head.textContent = "All Projects"

    content.appendChild(head)

    const taskDiv = document.createElement("div")
    taskDiv.classList.add("task-list")
    
    addTasks(myTasks, taskDiv)

    content.appendChild(taskDiv)

    document.getElementById("form-task-confirmation").addEventListener("click", function () {
        resetTaskList()
        addTasks(myTasks, taskDiv, true)
    })
}

export default loadHome