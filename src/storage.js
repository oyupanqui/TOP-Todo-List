import { myProjects, Project } from './projects'
import { myTasks, Task } from './tasks'

function taskToStorage (task) {
    myTasks.push(task)
    localStorage.setItem("task", JSON.stringify(myTasks))
}

function projectToStorage (project) {
    myProjects.push(project)
    localStorage.setItem("project", JSON.stringify(myProjects))
}

export function checkStorage () {
    if (localStorage.getItem("task") === null) {
        myTasks.push(new Task("Launch of NISAR", "On January 2024 NASA's first radar mission will be launch", "2024-01-01", "high", "a very special day", false, "My Default Project"))
        localStorage.setItem("task", JSON.stringify(myTasks))
    }

    if (localStorage.getItem("project") === null) {
        myProjects.push(new Project("My Default Project", "#ff0000"))
        localStorage.setItem("project", JSON.stringify(myProjects))
    } else {
        JSON.parse(localStorage.getItem("task")).map(function (task) {
            let newTask = new Task(task.title, task.description, task.dueDate, task.priority, task.notes, task.check, task.project, task.project.toLowerCase().replaceAll(" ", "-"))
            return myTasks.push(newTask)
        })
        JSON.parse(localStorage.getItem("project")).map(function (proj) {
            let newProject = new Project(proj.title, proj.color, proj.title.toLowerCase().replaceAll(" ", "-"))
            return myProjects.push(newProject)
        })
    }
    return localStorage
}

export function addStorageTask () {
    const content = document.getElementById("content")

    const taskConfirm = document.getElementById("form-task-confirmation")
    taskConfirm.addEventListener("click", function () {
        const formTitle = document.getElementById("form-task-title").value
        const formDescription = document.getElementById("form-task-description").value
        const formDate = document.getElementById("form-task-date").value
        const formPriority = document.getElementById("form-priority").value
        const formNotes = document.getElementById("form-task-notes").value
        const formCheck = document.getElementById("form-task-check").checked
        const formProj = document.getElementById("form-task-project").value
        
        const newTask = new Task (formTitle, formDescription, formDate, formPriority, formNotes, formCheck, formProj)
        taskToStorage(newTask)
    })
    return taskConfirm
}

export function addStorageProj () {
    const projConfirm = document.getElementById("form-project-confirmation")
    projConfirm.addEventListener("click", function () {
        const formTitle = document.getElementById("form-project-title").value
        const formColor = document.getElementById("form-project-color").value
        
        const newProject = new Project (formTitle, formColor)
        projectToStorage(newProject)
    })
    return projConfirm
}