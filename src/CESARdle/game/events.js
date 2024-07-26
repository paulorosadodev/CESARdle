import { state } from "./state.js"
import { handleKeyPress } from "../index.js"
import { brown, red } from "../content/colors.js"

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
                key.classList.remove('active')
                key.style.backgroundColor = red
                setTimeout(() => {
                    key.classList.add('active')
                    key.style.backgroundColor = brown
                }, 100);
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
