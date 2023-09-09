import { resetTaskList } from './reset'

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

        container.appendChild(taskElem)
    })
}