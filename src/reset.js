export function resetContent () {
    const content = document.getElementById("content")
    content.childNodes.forEach(n => n.remove())
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