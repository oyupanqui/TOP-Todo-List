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
    taskList.forEach((d) => {
        const taskElem = document.createElement("div")
        taskElem.classList.add("task-div")
        
        const taskTitle = document.createElement("h4")
        taskTitle.textContent = d.title

        taskElem.appendChild(taskTitle)

        container.appendChild(taskElem)
    })
}