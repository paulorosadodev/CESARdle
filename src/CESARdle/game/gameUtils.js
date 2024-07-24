import { word } from "./words.js"
import { handleKeyPress } from "../index.js"
import { isPlaying, tries } from "./storage.js"
import { letterBoxes } from "../content/elements.js"
import { green, yellow, red } from "../content/colors.js"

export const getTriedWord = currentRowFirstLetter => {
    let triedWord = ''

    for (let i = 0; i < 5; i++) {
        triedWord += letterBoxes[currentRowFirstLetter + i].textContent.toLowerCase()
    }

    return triedWord
}

export const checkEachLetter = (currentLetterBox, currentRowFirstLetter) => {
    let correctLetters = 0

    for (let x = currentLetterBox - 5 - currentRowFirstLetter; x < currentLetterBox - currentRowFirstLetter; x++) {
        // console.log(letterBoxes[x+currentRowFirstLetter].textContent.toLowerCase(), word[x].toLowerCase())
        if (letterBoxes[x+currentRowFirstLetter].textContent.toLowerCase() == word[x].toLowerCase()) {
            letterBoxes[x+currentRowFirstLetter].style.backgroundColor = green;
            correctLetters++
        } else if (word.toLowerCase().includes(letterBoxes[x+currentRowFirstLetter].textContent.toLowerCase())) {
            letterBoxes[x+currentRowFirstLetter].style.backgroundColor = yellow;
        } else {
            letterBoxes[x+currentRowFirstLetter].style.backgroundColor = red;
        }
    }

    return correctLetters
}

export const populateLetters = () => {
    for (let letter of tries) {
        handleKeyPress(letter.toUpperCase())
    }
}