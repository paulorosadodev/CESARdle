import { state } from "./game/state.js";
import { letterBoxes } from "./content/elements.js";
import { letterIsValid, wordIsValid } from "./utils.js";
import { getTriedWord, checkEachLetter } from "./game/gameUtils.js";
import { toggleKeysActivity, showResultDisplay, invalidWordAnimation, activateRow, changeNextLetterStyle } from "./game/gameStyles.js";

let currentRow = 1
let currentLetterBox = 0
let lettersInCurrentRow = 1
let currentRowFirstLetter = 0
let previousLetterBox = currentLetterBox - 1

export const handleKeyPress = key => {

    if (key == '' || key == 'BACKSPACE') {

        currentLetterBox -= 1
        previousLetterBox -= 1
    
        if (currentLetterBox < currentRowFirstLetter) {
            currentLetterBox = currentRowFirstLetter
        }

        letterBoxes[currentLetterBox].innerHTML = ''

        changeNextLetterStyle(currentLetterBox, 1)

        lettersInCurrentRow--

        if (lettersInCurrentRow <= 0) {
            lettersInCurrentRow = 1
        }

    } else if ((lettersInCurrentRow <= 5) && letterIsValid(key)) {

        letterBoxes[currentLetterBox].innerHTML = `<span>${key}</span>`;
    
        currentLetterBox += 1;
        previousLetterBox += 1;

        if (currentLetterBox % 5 === 0) {
            changeNextLetterStyle(currentLetterBox, 2);
        } else {
            changeNextLetterStyle(currentLetterBox, -1);
        }

        lettersInCurrentRow++;

    } else if (key === 'ENTER') {
        
        let triedWord = getTriedWord(currentRowFirstLetter)
        
        if (wordIsValid(triedWord)) {
            if (currentLetterBox - 5 - currentRowFirstLetter >= 0) {

                let playerWin;

                let correctLetters = checkEachLetter(currentLetterBox, currentRowFirstLetter)

                if (correctLetters == 5) {
                    playerWin = true

                    showResultDisplay(playerWin)

                    state.isPlaying = false

                    toggleKeysActivity()

                } else {
                    if (currentRowFirstLetter == 20) {
                        playerWin = false

                        showResultDisplay(playerWin)

                        state.isPlaying = false

                        toggleKeysActivity()

                    } else {
                        changeNextLetterStyle(currentLetterBox, 3)
                        currentRow += 1
                        lettersInCurrentRow = 1
                        currentRowFirstLetter += 5
                    }
                }
            }
            } else {
                if (triedWord.length == 5) {
                    invalidWordAnimation(currentRowFirstLetter)
                }
            }
        activateRow(currentRow)
    }
}

// let display = document.getElementById('displayTime')

// function update() {
//     let now = new Date()

//     let nextDay = new Date(now)

//     nextDay.setDate(now.getDate() + 1)

//     nextDay.setHours(0, 0, 0, 0)

//     let timeDifference = nextDay - now

//     let hours = String(Math.floor(timeDifference / (1000 * 60 * 60))).padStart(2, '0')
//     let minutes = String(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0')
//     let seconds = String(Math.floor((timeDifference % (1000 * 60)) / 1000)).padStart(2, '0')

//     display.textContent = `${hours}:${minutes}:${seconds}`
// }

// setInterval(update, 100)