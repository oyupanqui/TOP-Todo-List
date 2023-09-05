import { myProjects, Project } from './projects'
import { myTasks, Task} from './tasks'

export function checkStorage () {
    if (localStorage.length === 0) {
        myProjects.push(new Project("My Default Project", "#ff0000"))
        localStorage.setItem("project", JSON.stringify(myProjects))

        myTasks.push(new Task("Launch of NISAR", "On January 2024 NASA's first radar mission will be launch", "2024-01-01", "high", "a very special day", false, "My Default Project"))
        localStorage.setItem("task", JSON.stringify(myTasks))
    }
    return localStorage
}

