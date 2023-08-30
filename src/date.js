function updateClock () {
    const date = document.getElementsByTagName("date")[0]
    
    function timeNow(date) {
        date.textContent = new Date().toLocaleString()
    }

    setInterval(function () {
        timeNow(date)
    }, 1000)
    return date
}

export default updateClock