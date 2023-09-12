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
        option.setAttribute("value", proj.projID)
        option.textContent = proj.title
        selectProject.appendChild(option)
    })
}