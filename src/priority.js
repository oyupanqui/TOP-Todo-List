import { myTasks } from "./tasks";
import { pullData } from "./storage";
import { resetContent } from "./reset";
import { addTasks } from "./tasks";

function priorityEventListener () {
    pullData()
    resetContent()
    const content = document.getElementById("content")
    const head = document.createElement("h2")
    head.textContent = "Top Priority Tasks"

    content.appendChild(head)

    const taskDiv = document.createElement("div")
    taskDiv.classList.add("task-list")

    addTasks(myTasks.filter(filterPriority), taskDiv)

    content.appendChild(taskDiv)
}

export function addPriorityTasks () {
    const priority = document.getElementById("top-priority")
    priority.addEventListener("click", priorityEventListener)
}

function filterPriority (item) {
    return item.priority === "high"
}