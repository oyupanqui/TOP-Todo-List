function showNav() {
    const navIcon = document.getElementById("sandwich")
    const navPanel = document.getElementById("nav")
    navIcon.addEventListener("click", function () {
        if (navPanel.classList.contains("nav-active")) {
            navPanel.classList.replace("nav-active", "nav-inactive")
            
        } else {
            navPanel.classList.replace("nav-inactive", "nav-active")
        }
    })
}
export default showNav