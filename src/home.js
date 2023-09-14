import { myTasks, addTasks } from './tasks'
import { resetTaskList } from './reset'
import { pullData } from './storage'
import { resetContent } from './reset'

export function loadHome() {
    resetContent()
    pullData()
    const content = document.getElementById("content")
    const head = document.createElement("h2")
    head.textContent = "All Tasks"

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