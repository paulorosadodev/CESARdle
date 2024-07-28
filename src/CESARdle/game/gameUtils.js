import { word } from "./words.js"
import { handleKeyPress } from "../index.js"
import { tries } from "./storage.js"
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
        const key = document.querySelector(`#${letterBoxes[x + currentRowFirstLetter].textContent}`)
        if (letterBoxes[x+currentRowFirstLetter].textContent.toLowerCase() == word[x].toLowerCase()) {
            key.classList.add('greenkey')
            key.style.backgroundColor = green;
            letterBoxes[x+currentRowFirstLetter].style.backgroundColor = green;
            correctLetters++
        } else if (word.toLowerCase().includes(letterBoxes[x+currentRowFirstLetter].textContent.toLowerCase())) {
            letterBoxes[x+currentRowFirstLetter].style.backgroundColor = yellow;
        } else {
            letterBoxes[x+currentRowFirstLetter].style.backgroundColor = red;
            key.style.opacity = '50%'
        }
    }

    return correctLetters
}

export const populateLetters = () => {
    for (let letter of tries) {
        handleKeyPress(letter.toUpperCase(), true)
    }
}