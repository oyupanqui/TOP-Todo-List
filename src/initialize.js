import updateClock from './date'
import loadHome from './home'
import showNav from './showNav'
import resetContent from './reset'
import { checkStorage } from './storage'
import { addProjectsNav } from './projects'


function initialize() {
    updateClock()
    showNav()
    resetContent()
    loadHome()
    checkStorage()
    addProjectsNav()
}

export default initialize