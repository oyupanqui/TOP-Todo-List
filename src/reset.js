export function resetContent () {
    const content = document.getElementById("content")
    for (let i = 0; content.childNodes.length; i++) {
        content.removeChild(content.lastChild)
    }
}

export function resetTaskList () {
    const taskDiv = document.getElementsByClassName("task-div")
    let taskLen = taskDiv.length
    for (let i = 0; i<taskLen; i++) {
        taskDiv[0].remove()
    }
}

export function resetProjectList () {
    const projectDiv = document.getElementsByClassName("project-div")
    let projectLen = projectDiv.length
    for (let i = 0; i<projectLen; i++) {
        projectDiv[0].remove()
    }
}