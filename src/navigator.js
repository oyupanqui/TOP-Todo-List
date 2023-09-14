import { loadHome } from './home'
import { loadAllProjects } from './projects'

export function showNav () {
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

export function homeListener () {
    const allTasks = document.getElementById("all")
    allTasks.addEventListener("click", function () {
        loadHome(false)
    })
}

export function projectsListener () {
    const allProjects = document.getElementById("all-projects")
    allProjects.addEventListener("click", function () {
        loadAllProjects()
    })
}