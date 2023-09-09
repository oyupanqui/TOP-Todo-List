import { addStorageTask, addStorageProj } from './storage'

function openForm(div){
    div.classList.add("active")
    div.classList.remove("inactive")
}

function closeForm(div, form){
    div.classList.add("deactivating")
    div.classList.remove("active")
    removeBlank()

    setTimeout(()=>{
        div.classList.add("inactive")
        div.classList.remove("deactivating")
        form.reset()
    }, 1000)
}

function addBlank () {
    document.getElementsByClassName("blank")[0].style.display = "block"
}

function removeBlank () {
    document.getElementsByClassName("blank")[0].style.display = "none"
}

function formTaskConfirm (div, btn, form) {
    addStorageTask()
    removeBlank()
    form.addEventListener("submit", (e) => {
        e.preventDefault()
    })
    btn.addEventListener("click", function () {
        closeForm(div, form)
    })
}

function formProjConfirm (div, btn, form) {
    addStorageProj()
    removeBlank()
    form.addEventListener("submit", (e) => {
        e.preventDefault()
    })
    btn.addEventListener("click", function () {
        closeForm(div, form)
    })
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

    const taskFormDiv = document.getElementById("form-task-div")
    const projFormDiv = document.getElementById("form-project-div")

    formTaskConfirm(taskFormDiv, taskFormConfirm, taskForm)
    formProjConfirm(projFormDiv, projFormConfirm, projForm)

    const taskFormCancel = document.getElementById("form-task-cancel")
    const projFormCancel = document.getElementById("form-project-cancel")

    taskFormCancel.addEventListener("click", () => {
        closeForm(taskFormDiv, taskForm)
    })
        
    projFormCancel.addEventListener("click", () => {
        closeForm(projFormDiv, projForm)
    })
    return taskFormConfirm, projFormConfirm, taskFormCancel, projFormCancel
}