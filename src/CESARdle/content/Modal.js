import { state } from '../game/state.js'
import { updateDisplayTime } from './time.js'
import { instructionsWrapper, instructionsOpen, instructionsClose, resultWrapper, screen } from './elements.js'

export class Modal {
    constructor(modal, openButtonId, closeButtonId) {
        this.modal = modal
        this.openButton = openButtonId
        this.closeButton = closeButtonId
        this.disableEnterKeyPress = false
    }
    
    handle() {

        if (!state.isPlaying && this.closeButton) {
            this.modal.style.display = 'none'
        } else {
            this.modal.style.display = 'flex'
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
        } else {
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
            this.modal.style.opacity = '1';
            this.modal.style.visibility = 'visible';
        }, 10); 
        this.disableEnterKeyPress = true;
        setTimeout(() => { this.disableEnterKeyPress = false; }, 100);
    }
    
    close() {
        this.modal.style.display = 'none'
    }

    isOpen() {
        return this.modal.style.display === 'flex'
    }
}

export const instructionsModal = new Modal(instructionsWrapper, instructionsOpen, instructionsClose)
export const resultModal = new Modal(resultWrapper)

function canOpen() {
    return !instructionsModal.isOpen();
}