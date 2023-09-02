function resetContent () {
    const content = document.getElementById("content")
    content.childNodes.forEach(n => n.remove())
}

export default resetContent