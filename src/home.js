const content = document.getElementById("content")

function loadHeader() {
    const header = document.createElement("header")
    header.classList.add("header")
    content.appendChild(header)
    return header
}

function loadUI() {
    loadHeader()

}

function loadHome() {
    loadUI()
}

export default loadHome