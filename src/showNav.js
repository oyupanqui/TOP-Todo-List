function showNav() {
    const navIcon = document.getElementById("sandwich")
    navIcon.addEventListener("click", function () {
        if (navIcon.classList.contains("active")) {
            navIcon.classList.replace("active", "inactive")
            document.getElementsByTagName("nav")[0].style.display = "none"
        } else {
            navIcon.classList.replace("inactive", "active")
            document.getElementsByTagName("nav")[0].style.display = "flex"
        }
    })
    return navIcon
}
export default showNav