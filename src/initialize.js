import updateClock from './date'
import loadHome from './home'
import showNav from './showNav'
import resetContent from './reset'
import { checkStorage } from './storage'
import { addProjectsNav } from './projects'
import { addControlBtns, addFormBtns} from './form'


function initialize() {
    updateClock()
    showNav()
    resetContent()
    checkStorage()
    loadHome()
    addProjectsNav()
    addControlBtns()
    addFormBtns()
}

export default initialize