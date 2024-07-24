import { state } from '../game/state.js'
import { instructionsWrapper, instructionsOpen, instructionsClose } from './elements.js'
export class Modal {
    constructor(modal, openButtonId, closeButtonId) {
        this.modal = modal
        this.openButton = openButtonId
        this.closeButton = closeButtonId
    }

    handle() {

        if (!state.isPlaying) {
            this.modal.style.display = 'none'
        }

        this.openButton.addEventListener('click', () => {
            this.open()
        })

        this.closeButton.addEventListener('click', () => {
            this.close()
        })

        window.addEventListener('click', (e) => {
            if (e.target == this.modal) {
                this.close()
            }
        })

        window.addEventListener('keypress', (e) => {
            if (e.key == 'Enter') {
                this.close()
            }
        })
    }

    open() {
        this.modal.style.display = 'flex'
    }
    
    close() {
        this.modal.style.display = 'none'
    }
}

export const instructionsModal = new Modal(instructionsWrapper, instructionsOpen, instructionsClose)
