import { updateClock } from './date'
import { loadHome } from './home'
import { showNav } from './navigator'
import { addSubmitBtns, addFormBtns} from './form'
import { pullData } from './storage'
import { homeListener, projectsListener } from './navigator'
import { addTodayTasks } from './today'

function initialize() {
    pullData()
    updateClock()
    showNav()
    addSubmitBtns()
    addFormBtns()
    loadHome(true)
    homeListener()
    projectsListener()
    addTodayTasks()
}

export default initialize