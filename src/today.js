import { myTasks } from "./tasks";
import { pullData } from "./storage";
import { resetContent } from "./reset";
import { addTasks } from "./tasks";
import { format } from "date-fns";

function todayEventListener () {
    pullData()
    resetContent()
    const content = document.getElementById("content")
    const head = document.createElement("h2")
    head.textContent = "Today's Tasks"

    content.appendChild(head)

    const taskDiv = document.createElement("div")
    taskDiv.classList.add("task-list")

    addTasks(myTasks.filter(filterDate), taskDiv)

    content.appendChild(taskDiv)
}

export function addTodayTasks () {
    const today = document.getElementById("today")
    today.addEventListener("click", todayEventListener)
}

function filterDate (item) {
    return item.dueDate === format(new Date(), 'yyyy-MM-dd')
}