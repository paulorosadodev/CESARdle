import { state } from "./state.js"
import { copyGame } from "../utils.js"
import { handleKeyPress } from "../index.js"
import { copyButton } from "../content/elements.js"
import { brown, red, green } from "../content/colors.js"

let touchHandled = false

export const waitKeyPress = () => {
    window.addEventListener('keydown', event => {
        if (state.isPlaying === true) {
            handleKeyPress(event.key.toUpperCase())
        }
    });
}

export const waitKeyClick = () => {
    document.querySelectorAll('.key').forEach(key => {
        if (state.isPlaying === true) {
            key.addEventListener('touchstart', (e) => {
                touchHandled = true
                if (key.classList.contains('greenkey')) {
                    key.style.backgroundColor = '#04c758'
                    setTimeout(() => {
                        key.classList.add('active')
                        key.style.backgroundColor = green
                    }, 100);
                } else {
                    key.style.backgroundColor = red
                    setTimeout(() => {
                        key.classList.add('active')
                        key.style.backgroundColor = brown
                    }, 100);
                }
                handleKeyPress(key.textContent)
                e.preventDefault()
            });
            
            key.addEventListener('click', (e) => {
                if (!touchHandled) {
                    handleKeyPress(key.textContent)
                }
                touchHandled = false
            })
        }
    })
}

copyButton.addEventListener('click', () => {
    copyGame()
})