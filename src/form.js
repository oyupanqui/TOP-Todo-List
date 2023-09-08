function openForm(elem){
    elem.classList.add("active")
    elem.classList.remove("inactive")
}

function closeForm(elem, form){
    elem.classList.add("deactivating")
    elem.classList.remove("active")
    removeBlank()

    setTimeout(()=>{
        elem.classList.add("inactive")
        elem.classList.remove("deactivating")
        form.reset()
    }, 1000)
}

function addBlank () {
    document.getElementsByClassName("blank")[0].style.display = "block"
}

function removeBlank () {
    document.getElementsByClassName("blank")[0].style.display = "none"
}

function formConfirm (elem) {
    removeBlank()
    elem.addEventListener("submit", (e) => {
        e.preventDefault()
        closeForm()
    })
    return elem
}

export function addControlBtns () {
    const taskBtn = document.getElementById("form-task-div")
    const createTaskBtn = document.getElementById("add-task")
    createTaskBtn.addEventListener("click", function () {
        openForm(taskBtn)
        addBlank()
    })

    const projBtn = document.getElementById("form-project-div")
    const createProjBtn = document.getElementById("add-project")
    createProjBtn.addEventListener("click", function () {
        openForm(projBtn)
        addBlank()
    })
    return createTaskBtn, createProjBtn
}

export function addFormBtns () {
    const taskForm = document.getElementById("task-form")
    const projForm = document.getElementById("proj-form")

    const taskFormConfirm = document.getElementById("form-task-confirmation")
    const projFormConfirm = document.getElementById("form-project-confirmation")
    formConfirm(taskFormConfirm)
    formConfirm(projFormConfirm)

    const taskFormCancel = document.getElementById("form-task-cancel")
    const projFormCancel = document.getElementById("form-project-cancel")

    taskFormCancel.addEventListener("click", () => {
        closeForm(document.getElementById("form-task-div"), taskForm)
    })
        
    projFormCancel.addEventListener("click", () => {
        closeForm(document.getElementById("form-project-div"), projForm)
    })
    return taskFormConfirm, projFormConfirm, taskFormCancel, projFormCancel
}