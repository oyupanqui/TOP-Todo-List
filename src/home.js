function loadHome() {
    const content = document.getElementById("content")
    const head = document.createElement("h2")
    head.textContent = "All Projects"

    content.appendChild(head)
}

export default loadHome