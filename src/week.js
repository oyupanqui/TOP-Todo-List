import { myTasks } from "./tasks";
import { pullData } from "./storage";
import { resetContent } from "./reset";
import { addTasks } from "./tasks";
import { add, format } from "date-fns";

function weekEventListener () {
    pullData()
    resetContent()
    const content = document.getElementById("content")
    const head = document.createElement("h2")
    head.textContent = "Next 7 days Tasks"

    content.appendChild(head)

    const taskDiv = document.createElement("div")
    taskDiv.classList.add("task-list")

    addTasks(myTasks.filter(filterDate), taskDiv)

    content.appendChild(taskDiv)
}

export function addWeekTasks () {
    const week = document.getElementById("week")
    week.addEventListener("click", weekEventListener)
}

function filterDate (item) {
    return new Date(item.dueDate) <= new Date(format(add(new Date(), {'weeks': 1}), 'yyyy-MM-dd'))
}