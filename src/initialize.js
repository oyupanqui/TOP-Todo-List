import { updateClock } from './date'
import { loadHome } from './home'
import { showNav } from './showNav'
import { resetContent } from './reset'
import { addSubmitBtns, addFormBtns} from './form'
import { pullData } from './storage'

function initialize() {
    pullData()
    updateClock()
    showNav()
    resetContent()
    addSubmitBtns()
    addFormBtns()
    loadHome()
}

export default initialize