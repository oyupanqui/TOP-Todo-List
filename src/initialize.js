import updateClock from './date'
import loadHome from './home'
import showNav from './showNav'
import resetContent from './reset'
import checkStorage from './projects'

function initialize() {
    updateClock()
    showNav()
    resetContent()
    loadHome()
    checkStorage()
}

export default initialize