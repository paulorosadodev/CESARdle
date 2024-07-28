import { word } from "./game/words.js";
import { state } from "./game/state.js";
import { letterBoxes, screen } from "./content/elements.js";
import { getTriedWord, checkEachLetter } from "./game/gameUtils.js";
import { letterIsValid, wordIsValid, displayGameStats} from "./utils.js";
import { toggleKeysActivity, showResultDisplay, invalidWordAnimation, activateRow, changeNextLetterStyle } from "./game/gameStyles.js";
import { appendTriesInLocalStorage, updateIsPlayingInLocalStorage, setWordInLocalStorage, updateTriesAmount, updateWinStreak } from "./game/storage.js";


let currentRow = 1
let currentLetterBox = 0
let lettersInCurrentRow = 1
let currentRowFirstLetter = 0
let previousLetterBox = currentLetterBox - 1

export const handleKeyPress = (key, isLoading) => {
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

                    if (!isLoading) {
                        state.triesAmount[getKey(currentRow)] += 1
                        state.winStreak += 1
                    }
                    state.isPlaying = false
                    screen.style.display = 'block'
                    state.lastWord = word
                    
                    toggleKeysActivity()
                    
                    setWordInLocalStorage()
                    
                } else {
                    if (currentRowFirstLetter == 20) {
                        playerWin = false
                        
                        showResultDisplay(playerWin)

                        if (!isLoading) {
                            state.triesAmount[getKey(0)] += 1
                            state.winStreak = 0
                        }
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

                updateWinStreak()
                updateTriesAmount()
                appendTriesInLocalStorage()
                updateIsPlayingInLocalStorage()

                displayGameStats()
            }
            } else {
                if (triedWord.length == 5) {
                    invalidWordAnimation(currentRowFirstLetter)
                }
            }
        activateRow(currentRow)
    } 
}

function getKey(row) {
    switch (row) {
        case 1:
            return 'one'
        case 2:
            return 'two' 
        case 3:
            return 'three'
        case 4:
            return 'four'
        case 5:
            return 'five'
        default:
            return 'lost'
    }
}