import { word } from "./words.js";
import { state } from "./state.js";

export let tries = localStorage.getItem('tries')
export let lastWord = localStorage.getItem('lastWord')
export let isPlaying = localStorage.getItem('isPlaying')

export const updateLocalStorage = () => {
    if (lastWord !== word && lastWord != '') {
        state.tries = ''
        state.lastWord = ''
        state.isPlaying = true

        localStorage.setItem('tries', state.tries)
        localStorage.setItem('lastWord', state.lastWord)
        localStorage.setItem('isPlaying', state.isPlaying)

        tries = state.tries
        lastWord = state.lastWord
        isPlaying = state.isPlaying
    } else {
        if (!isPlaying) {
            localStorage.setItem('isPlaying', state.isPlaying)
        }
        if (!tries) {
            localStorage.setItem('tries', state.tries)
        }
        if (!lastWord) {
            localStorage.setItem('lastWord', state.lastWord)
        }
    } 
}

export const appendTriesInLocalStorage = () => {
    localStorage.setItem('tries', state.tries)
}

export const updateIsPlayingInLocalStorage = () => {
    localStorage.setItem('isPlaying', state.isPlaying)
}

export const setWordInLocalStorage = () => {
    localStorage.setItem('lastWord', state.lastWord)
}
