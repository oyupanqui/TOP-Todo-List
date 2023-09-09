import { myProjects, Project } from './projects'
import { myTasks, Task} from './tasks'

export function checkStorage () {
    if (localStorage.length === 0) {
        myProjects.push(new Project("My Default Project", "#ff0000"))
        localStorage.setItem("project", JSON.stringify(myProjects))

        myTasks.push(new Task("Launch of NISAR", "On January 2024 NASA's first radar mission will be launch", "2024-01-01", "high", "a very special day", false, "My Default Project"))
        localStorage.setItem("task", JSON.stringify(myTasks))
    }
    return localStorage
}

export function addStorageTask () {
    const taskConfirm = document.getElementById("form-task-confirmation")
    taskConfirm.addEventListener("click", function () {
        const formTitle = document.getElementById("form-task-title").value
        const formDescription = document.getElementById("form-task-description").value
        const formDate = document.getElementById("form-task-date").value
        const formPriority = document.getElementById("form-priority").value
        const formNotes = document.getElementById("form-task-notes").value
        const formCheck = document.getElementById("form-task-check").value
        const formProj = document.getElementById("form-task-project").value
        
        const newTask = new Task (formTitle, formDescription, formDate, formPriority, formNotes, formCheck, formProj)
    })
    return taskConfirm
}