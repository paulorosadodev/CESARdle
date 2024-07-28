import { brown } from './colors.js'
import { state } from '../game/state.js'
import { updateDisplayTime } from './time.js'
import { instructionsWrapper, instructionsOpen, instructionsClose, resultWrapper, statsWrapper, statsOpen, statsClose } from './elements.js'

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
    }
    
    close() {
        this.modal.style.display = 'none'
        if (this.openButton) {
            this.openButton.style.backgroundColor = ''
            this.openButton.style.color = ''
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