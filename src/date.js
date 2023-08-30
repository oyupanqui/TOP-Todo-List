function updateClock () {
    const date = document.getElementById("date")
    
    function timeNow(date) {
        date.textContent = new Date().toLocaleTimeString()
    }

    setInterval(function () {
        timeNow(date)
    }, 1000)
    return date
}

export default updateClock