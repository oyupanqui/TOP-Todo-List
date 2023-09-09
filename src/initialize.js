import updateClock from './date'
import loadHome from './home'
import showNav from './showNav'
import { resetContent } from './reset'
import { addSubmitBtns, addFormBtns} from './form'


function initialize() {
    updateClock()
    showNav()
    resetContent()
    addSubmitBtns()
    addFormBtns()
    loadHome()
}

export default initialize