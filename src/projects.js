let myProjects = []

function Project (title, color) {
    this.title = title
    this.color = color
}

export function checkStorage () {
    if (localStorage.length === 0) {
        myProjects.push(new Project("My Default Project", "#ff0000"))
        localStorage.setItem("project", JSON.stringify(myProjects))
    }
    return localStorage
}

export function addProjectsNav () {
    console.log(localStorage)
    const projectsArray = JSON.parse(localStorage.getItem("project"))
    const projectsNav = document.getElementById("projects-nav").parentNode
    console.log(projectsArray)
    console.log(projectsNav)
    projectsArray.forEach(function (p) {
        const listElem = document.createElement("li")
        projectsNav.appendChild(listElem)

        const projElem = document.createElement("h3")
        projElem.classList.add("btn-nav")
        projElem.textContent = p.title
        projElem.style.backgroundColor = p.color
        listElem.appendChild(projElem)
    })
    console.log("done")
    return projectsArray
}
