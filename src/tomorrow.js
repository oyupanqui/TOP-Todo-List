import { myTasks } from "./tasks";
import { pullData } from "./storage";
import { resetContent } from "./reset";
import { addTasks } from "./tasks";
import { add, format } from "date-fns";

function tomorrowEventListener () {
    pullData()
    resetContent()
    const content = document.getElementById("content")
    const head = document.createElement("h2")
    head.textContent = "Tomorrow's Tasks"

    content.appendChild(head)

    const taskDiv = document.createElement("div")
    taskDiv.classList.add("task-list")

    addTasks(myTasks.filter(filterDate), taskDiv)

    content.appendChild(taskDiv)
}

export function addTomorrowTasks () {
    const tomorrow = document.getElementById("tomorrow")
    tomorrow.addEventListener("click", tomorrowEventListener)
}

function filterDate (item) {
    return item.dueDate === format(add(new Date(), {'days': 1}), 'yyyy-MM-dd')
}