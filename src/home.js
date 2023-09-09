import { addTasks } from './tasks'

function loadHome() {
    const content = document.getElementById("content")
    const head = document.createElement("h2")
    head.textContent = "All Projects"

    content.appendChild(head)

    const taskDiv = document.createElement("div")
    taskDiv.classList.add("task-list")

    const data = JSON.parse(localStorage.getItem("task"))

    addTasks(data, taskDiv)

    content.appendChild(taskDiv)
}

export default loadHome