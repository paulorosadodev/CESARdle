import { state } from "./state.js";

export let tries = localStorage.getItem('tries')
export let lastWord = localStorage.getItem('lastWord')
export let isPlaying = localStorage.getItem('isPlaying')

export const createLocalStorage = () => {
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

export const appendTries = (triedWord) => {
    tries += triedWord + '\n'
    localStorage.setItem('tries', tries)
}

export const updateIsPlaying = () => {
    localStorage.setItem('isPlaying', state.isPlaying)
}