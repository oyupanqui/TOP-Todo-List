import { resetTaskList } from './reset'
import { pullData } from './storage'

export let myTasks = []

export function Task (title, description, dueDate, priority, notes, check, project) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.notes = notes
    this.check = check
    this.project = project
    this.projID = project.toLowerCase().replaceAll(" ", "-")
}

export function addTasks (taskList, container) {
    resetTaskList()
    taskList.forEach((d) => {
        const taskElem = document.createElement("div")
        taskElem.classList.add("task-div")
        
        const taskTitle = document.createElement("div")
        taskTitle.textContent = "Title: " + d.title
        taskElem.appendChild(taskTitle)

        const taskDate = document.createElement("div")
        taskDate.textContent = "Due date: " + d.dueDate
        taskElem.appendChild(taskDate)

        const taskPriority = document.createElement("div")
        taskPriority.textContent = "Priority: " + d.priority
        taskElem.appendChild(taskPriority)

        const taskCheck = document.createElement("div")
        if (d.check === true) {
            taskCheck.textContent = "Status: " + "done"
        } else {
            taskCheck.textContent = "Status: " + "pending"
        }
        taskElem.appendChild(taskCheck)

        const taskProject = document.createElement("div")
        taskProject.textContent = "Project: " + d.project
        taskElem.appendChild(taskProject)

        const eraseCon = document.createElement("div")
        const deleteBtn = document.createElement("i")
        deleteBtn.setAttribute("class", "fa-solid fa-eraser")
        deleteBtn.setAttribute("style", "color: #000000; cursor: pointer")
        eraseCon.appendChild(deleteBtn)

        eraseCon.addEventListener("click", function () {
            const taskName = eraseCon.parentNode.firstChild.textContent.slice(7)
            myTasks = myTasks.filter(function (elem) {
                return elem.title != taskName
            })
            eraseCon.parentElement.remove()
            localStorage.setItem("task", JSON.stringify(myTasks))
            pullData()
        })

        taskElem.appendChild(eraseCon)

        container.appendChild(taskElem)
    })
}