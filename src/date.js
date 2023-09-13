import { add, format } from 'date-fns'

export function updateClock () {
    const date = document.getElementsByTagName("date")[0]
    
    function timeNow(date) {
        date.textContent = new Date().toLocaleString()
    }

    setInterval(function () {
        timeNow(date)
    }, 1000)
    return date
}

export function addTime (dateUnits, dateAmount) {
    let obj = new Object()
    obj[dateUnits] = dateAmount
    return format(add(new Date(), obj), 'yyyy-MM-dd')
}