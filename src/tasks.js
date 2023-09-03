let myTasks = []
let myProjects = []

function Task (title, description, dueDate, priority, notes, check, project) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.notes = notes
    this.check = check
    this.project = project
}

function Project (title, color) {
    this.title = title
    this.color = color
}