import { state } from "./state.js";
import { handleKeyPress } from "../index.js";

export const waitKeyPress = () => {
    window.addEventListener('keydown', event => {
        if (state.isPlaying === true) {
            handleKeyPress(event.key.toUpperCase());
        }
    });
}

export const waitKeyClick = () => {
    document.querySelectorAll('.key').forEach(key => {
        if (state.isPlaying === true) {
            key.addEventListener('click', () => {
                handleKeyPress(key.textContent);
            });
        }
    });
}
