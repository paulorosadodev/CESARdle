import { displayTime } from "./elements.js"

export const getTodayAndTomorrowDifference = () => {
    let now = new Date()

    let nextDay = new Date(now)

    nextDay.setDate(now.getDate() + 1)

    nextDay.setHours(0, 0, 0, 0)

    let timeDifference = nextDay - now

    let hours = String(Math.floor(timeDifference / (1000 * 60 * 60))).padStart(2, '0')
    let minutes = String(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0')
    let seconds = String(Math.floor((timeDifference % (1000 * 60)) / 1000)).padStart(2, '0')

    return {hours: hours, minutes: minutes, seconds: seconds}
}

export const updateDisplayTime = () => {
    let hours = getTodayAndTomorrowDifference().hours
    let minutes = getTodayAndTomorrowDifference().minutes
    let seconds = getTodayAndTomorrowDifference().seconds

    if (displayTime) {
        displayTime.textContent = `${hours}:${minutes}:${seconds}`
    }
}

export const startDisplayTime = () => {
    let hours = getTodayAndTomorrowDifference().hours
    let minutes = getTodayAndTomorrowDifference().minutes
    let seconds = getTodayAndTomorrowDifference().seconds

    if (displayTime) {
        displayTime.textContent = `${hours}:${minutes}:${seconds}`
    }
}
