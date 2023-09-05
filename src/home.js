function loadHome() {
    const content = document.getElementById("content")
    const head = document.createElement("h2")
    head.textContent = "All Projects"

    content.appendChild(head)

    const taskDiv = document.createElement("div")
    taskDiv.classList.add("task-list")

    const data = JSON.parse(localStorage.getItem("task"))
    console.log(data)

    data.forEach((d) => {
        const taskElem = document.createElement("div")
        taskElem.classList.add("task")
        taskElem.textContent = d.title
        taskDiv.appendChild(taskElem)
    })

    content.appendChild(taskDiv)
}

export default loadHome