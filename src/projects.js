let myProjects = []

function Project (title, color) {
    this.title = title
    this.color = color
}

function checkStorage () {
    if (localStorage.length === 0) {
        myProjects.push(new Project("My Default Project", "#ff0000"))
        localStorage.setItem("project", JSON.stringify(myProjects))
    }
    return localStorage
}

export default checkStorage