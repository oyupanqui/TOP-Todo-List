import updateClock from './date'
import loadHome from './home'
import showNav from './showNav'

function initialize() {
    updateClock()
    showNav()
    loadHome()
    
}

export default initialize