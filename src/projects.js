import { resetProjectList, resetContent } from './reset'
import { pullData } from './storage'

export let myProjects = []

export function Project (title, color) {
    this.title = title
    this.color = color
    this.projID = title.toLowerCase().replaceAll(" ", "-")
}

export function addProjectsNav () {
    const projectsArray = JSON.parse(localStorage.getItem("project"))
    const projectsNav = document.getElementById("projects-list")
    projectsNav.innerHTML = ''
    projectsArray.forEach(function (p) {
        const listElem = document.createElement("li")
        projectsNav.appendChild(listElem)

        const projElem = document.createElement("h3")
        projElem.classList.add("btn-nav")
        projElem.classList.add(p.projID)
        projElem.textContent = p.title
        
        projElem.addEventListener("mouseover", (e) => {
            projElem.style.backgroundColor = p.color
            return e
        })

        projElem.addEventListener("mouseout", (e) => {
            projElem.style.backgroundColor = "#00000000"
            return e
        })

        listElem.appendChild(projElem)
    })

    return projectsArray
}

export function projectSelection () {
    const selectProject = document.getElementById("form-task-project")
    selectProject.innerHTML = ''

    myProjects.forEach(proj => {
        const option = document.createElement("option")
        option.setAttribute("value", proj.title)
        option.textContent = proj.title
        selectProject.appendChild(option)
    })
}

export function addProjects (projectList, container) {
    resetProjectList()
    projectList.forEach((d) => {
        const projElem = document.createElement("div")
        projElem.classList.add("proj-div")
        
        const projTitle = document.createElement("div")
        projTitle.textContent = "Title: " + d.title
        projElem.appendChild(projTitle)

        const projColor = document.createElement("div")
        projColor.textContent = "Color: " + d.color
        projElem.appendChild(projColor)

        container.appendChild(projElem)
    })
}

export function loadAllProjects () {
    pullData()
    resetContent()
    const content = document.getElementById("content")
    const head = document.createElement("h2")
    head.textContent = "All Projects"

    content.appendChild(head)

    const projDiv = document.createElement("div")
    projDiv.classList.add("task-list")
    
    addProjects(myProjects, projDiv)

    content.appendChild(projDiv)
}