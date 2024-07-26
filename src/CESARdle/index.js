import { word } from "./game/words.js";
import { state } from "./game/state.js";
import { letterBoxes, screen } from "./content/elements.js";
import { letterIsValid, wordIsValid } from "./utils.js";
import { getTriedWord, checkEachLetter } from "./game/gameUtils.js";
import { appendTriesInLocalStorage, updateIsPlayingInLocalStorage, setWordInLocalStorage } from "./game/storage.js";
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

    } else if (key === 'ENTER' || key === '\n') {
        
        let triedWord = getTriedWord(currentRowFirstLetter)
        
        if (wordIsValid(triedWord)) {
            if (currentLetterBox - 5 - currentRowFirstLetter >= 0) {

                let playerWin;

                let correctLetters = checkEachLetter(currentLetterBox, currentRowFirstLetter)

                if (correctLetters == 5) {
                    playerWin = true

                    showResultDisplay(playerWin)

                    state.isPlaying = false
                    screen.style.display = 'block'
                    state.lastWord = word
                    
                    toggleKeysActivity()
                    
                    setWordInLocalStorage()
                    
                } else {
                    if (currentRowFirstLetter == 20) {
                        playerWin = false
                        
                        showResultDisplay(playerWin)
                        
                        state.isPlaying = false
                        screen.style.display = 'block'
                        state.lastWord = word

                        toggleKeysActivity()
                        
                        setWordInLocalStorage()

                    } else {
                        changeNextLetterStyle(currentLetterBox, 3)
                        currentRow += 1
                        lettersInCurrentRow = 1
                        currentRowFirstLetter += 5
                    }
                }
                state.tries += triedWord + '\n'

                appendTriesInLocalStorage()
                updateIsPlayingInLocalStorage()
            }
            } else {
                if (triedWord.length == 5) {
                    invalidWordAnimation(currentRowFirstLetter)
                }
            }
        activateRow(currentRow)
    } 
}
