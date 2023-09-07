function openForm(){
    formDiv.classList.add("active")
    formDiv.classList.remove("inactive")
}

function closeForm(){
    formDiv.classList.add("deactivating")
    formDiv.classList.remove("active")

    setTimeout(()=>{
        formDiv.classList.add("inactive")
        formDiv.classList.remove("deactivating")
        form.reset()
    }, 1000)
}

function addBlank () {
    document.getElementsByClassName("blank")[0].style.display = "block"
}

function removeBlank () {
    document.getElementsByClassName("blank")[0].style.display = "none"
}

function addTaskControl() {
    const createTaskBtn = document.getElementById("add-task")
    createTaskBtn.addEventListener("click", function () {
        openForm()
        addBlank()
    })
    return createTaskBtn
}

export default addTaskControl