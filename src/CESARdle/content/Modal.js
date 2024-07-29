import { brown } from './colors.js'
import { state } from '../game/state.js'
import { updateDisplayTime } from './time.js'
import { getGameStats, getTriePercent } from '../utils.js'
import { instructionsWrapper, instructionsOpen, instructionsClose, resultWrapper, statsWrapper, statsOpen, statsClose, gamesAmount, winPercentual, winStreak, one, two, three, four, five, lost, barsFill } from './elements.js'

export class Modal {
    constructor(modal, openButtonId, closeButtonId, isResult) {
        this.modal = modal
        this.isResult = isResult
        this.openButton = openButtonId
        this.closeButton = closeButtonId
        this.disableEnterKeyPress = false
    }
    
    handle() {

        if (!state.isPlaying && !this.isResult) {
            this.modal.style.display = 'none'
        } else {
            if (this.modal.id != 'stats-wrapper') {
                this.modal.style.display = 'flex'
            }
        }

        if (this.openButton) {
            this.openButton.addEventListener('click', () => {
                this.open()
            })
        }

        if (this.closeButton) {
            this.closeButton.addEventListener('click', () => {
                this.close()
            })
        }

        if (this.isResult) {
            setInterval(updateDisplayTime, 1000)
        }

        window.addEventListener('click', (e) => {
            if (e.target.id == 'screen' && !this.closeButton && !this.isOpen() && !state.isPlaying && canOpen()) {
                this.open()
            }
            if (e.target == this.modal) {
                this.close()
            }
        })

        window.addEventListener('keypress', (e) => {
            if (e.key == 'Enter' && !this.disableEnterKeyPress && this.isOpen()) {
                this.close();
            }
        })
    }

    open() {
        this.modal.style.display = 'flex'
        setTimeout(() => {
            this.modal.style.opacity = '1'
            this.modal.style.visibility = 'visible'
        }, 10)
        this.disableEnterKeyPress = true
        setTimeout(() => { this.disableEnterKeyPress = false; }, 100)
        if (this.openButton) {
            this.openButton.style.backgroundColor = brown
            this.openButton.style.color = 'white'
        }
        if (this.modal.id == 'stats-wrapper' && getGameStats().gamesAmount > 0) {
            toggleStats()
        }
    }
    
    close() {
        this.modal.style.display = 'none'
        if (this.openButton) {
            this.openButton.style.backgroundColor = ''
            this.openButton.style.color = ''
        }
        if (this.modal.id == 'stats-wrapper' && getGameStats().gamesAmount > 0) {
            toggleStats()
        }
    }

    isOpen() {
        return this.modal.style.display === 'flex'
    }
}

export const instructionsModal = new Modal(instructionsWrapper, instructionsOpen, instructionsClose, false)
export const statsModal = new Modal(statsWrapper, statsOpen, statsClose, false)
export const resultModal = new Modal(resultWrapper, false, false, true)

function canOpen() {
    return !instructionsModal.isOpen();
}

function toggleStats() {
    setTimeout(() => {
        gamesAmount.classList.toggle('active')
        setTimeout(() => {
            gamesAmount.firstElementChild.classList.toggle('active')
        }, 100)
    }, 150)
    setTimeout(() => {
        winPercentual.classList.toggle('active')
        setTimeout(() => {
            winPercentual.firstElementChild.classList.toggle('active')
        }, 100)
    }, 250)
    setTimeout(() => {
        winStreak.classList.toggle('active')
        setTimeout(() => {
            winStreak.firstElementChild.classList.toggle('active')
        }, 100)
    }, 350)

    barsFill.forEach(barFill => {
        barFill.classList.toggle('active')
    })

    setTimeout(() => {
        if (one.classList.contains('active')) {
            let barHeight = getTriePercent(getGameStats().triesAmount, 'one')
            one.style.transform = `scaleY(${barHeight}%)`
        } else {
            one.style.transform = `scaleY(0)`
        }
    }, 100)
    setTimeout(() => {
        if (two.classList.contains('active')) {
            let barHeight = getTriePercent(getGameStats().triesAmount, 'two')
            two.style.transform = `scaleY(${barHeight}%)`
        } else {
            two.style.transform = `scaleY(0)`
        }
    }, 150)
    setTimeout(() => {
        if (three.classList.contains('active')) {
            let barHeight = getTriePercent(getGameStats().triesAmount, 'three')
            three.style.transform = `scaleY(${barHeight}%)`
        } else {
            three.style.transform = `scaleY(0)`
        }
    }, 200)
    setTimeout(() => {
        if (four.classList.contains('active')) {
            let barHeight = getTriePercent(getGameStats().triesAmount, 'four')
            four.style.transform = `scaleY(${barHeight}%)`
        } else {
            four.style.transform = `scaleY(0)`
        }
    }, 250)
    setTimeout(() => {
        if (five.classList.contains('active')) {
            let barHeight = getTriePercent(getGameStats().triesAmount, 'five')
            five.style.transform = `scaleY(${barHeight}%)`
        } else {
            five.style.transform = `scaleY(0)`
        }
    }, 300)
    setTimeout(() => {
        if (lostGame.classList.contains('active')) {
            let barHeight = getTriePercent(getGameStats().triesAmount, 'lostGame')
            lostGame.style.transform = `scaleY(${barHeight}%)`
        } else {
            lostGame.style.transform = `scaleY(0)`
        }
    }, 350)
}
