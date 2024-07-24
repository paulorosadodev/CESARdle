import { displayTime } from "./elements.js";

export const updateDisplayTime = () => {
    let now = new Date()

    let nextDay = new Date(now)

    nextDay.setDate(now.getDate() + 1)

    nextDay.setHours(0, 0, 0, 0)

    let timeDifference = nextDay - now

    let hours = String(Math.floor(timeDifference / (1000 * 60 * 60))).padStart(2, '0')
    let minutes = String(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0')
    let seconds = String(Math.floor((timeDifference % (1000 * 60)) / 1000)).padStart(2, '0')

    displayTime.textContent = `${hours}:${minutes}:${seconds}`
}

