import { updateClock } from './date'
import { loadHome } from './home'
import { showNav } from './showNav'
import { addSubmitBtns, addFormBtns} from './form'

function initialize() {
    updateClock()
    showNav()
    addSubmitBtns()
    addFormBtns()
    loadHome()
}

export default initialize