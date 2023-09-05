import { myProjects, Project } from './projects'
import { myTasks, Task} from './tasks'

export function checkStorage () {
    if (localStorage.length === 0) {
        myProjects.push(new Project("My Default Project", "#ff0000"))
        localStorage.setItem("project", JSON.stringify(myProjects))
    }
    return localStorage
}

