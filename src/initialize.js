import { updateClock } from './date'
import { loadHome } from './home'
import { showNav } from './navigator'
import { addSubmitBtns, addFormBtns} from './form'
import { pullData } from './storage'
import { homeListener, projectsListener } from './navigator'

function initialize() {
    pullData()
    updateClock()
    showNav()
    addSubmitBtns()
    addFormBtns()
    loadHome(true)
    homeListener()
    projectsListener()
}

export default initialize