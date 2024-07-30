import { word } from "./words.js";
import { state } from "./state.js";

export let tries = localStorage.getItem('tries')
export let lastWord = localStorage.getItem('lastWord')
export let winStreak = localStorage.getItem('winStreak')
export let isPlaying = localStorage.getItem('isPlaying')
export let triesAmount = JSON.parse(localStorage.getItem('triesAmount'))

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

        if (!triesAmount) {
            localStorage.setItem('triesAmount', JSON.stringify(state.triesAmount))
            triesAmount = JSON.parse(localStorage.getItem('triesAmount'))
        } else {
            state.triesAmount = triesAmount
        }

        if (!winStreak) {
            localStorage.setItem('winStreak', state.winStreak)
            winStreak = localStorage.getItem('winStreak')
        } else {
            state.winStreak = Number(winStreak)
        }
    } else {
        if (!tries) {
            localStorage.setItem('tries', state.tries)
        }
        if (!lastWord) {
            localStorage.setItem('lastWord', state.lastWord)
        }
        if (!winStreak) {
            localStorage.setItem('winStreak', state.winStreak)
        } else {
            state.winStreak = Number(winStreak)
        }
        if (!isPlaying) {
            localStorage.setItem('isPlaying', state.isPlaying)
        }
        if (!triesAmount) {
            localStorage.setItem('triesAmount', JSON.stringify(state.triesAmount))
        } else {
            state.triesAmount = triesAmount
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

export const updateWinStreak = () => {
    localStorage.setItem('winStreak', state.winStreak)
}

export const updateTriesAmount = () => {
    localStorage.setItem('triesAmount', JSON.stringify(state.triesAmount))
}

export const verifyLocalStorageLoaded = () => {
    return tries !== null && lastWord !== null && winStreak !== null && isPlaying !== null && triesAmount !== null;
};