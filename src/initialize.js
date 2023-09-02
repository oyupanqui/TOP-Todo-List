import updateClock from './date'
import loadHome from './home'
import showNav from './showNav'
import resetContent from './reset'

function initialize() {
    updateClock()
    showNav()
    resetContent()
    loadHome()
    
}

export default initialize