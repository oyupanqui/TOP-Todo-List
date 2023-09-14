import { updateClock } from './date'
import { loadHome } from './home'
import { showNav } from './showNav'
import { addSubmitBtns, addFormBtns} from './form'
import { pullData } from './storage'

function initialize() {
    pullData()
    updateClock()
    showNav()
    addSubmitBtns()
    addFormBtns()
    loadHome()
}

export default initialize