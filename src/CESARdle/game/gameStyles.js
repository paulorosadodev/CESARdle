import { word } from "./words.js"
import { resultModal } from "../content/Modal.js"
import { green, brown, red } from "../content/colors.js"
import { letterBoxes, resultWrapper, keys, copied, resultData, copyButton, timerText } from "../content/elements.js"

export const toggleKeysActivity = () => {
    keys.forEach(key => {
        key.classList.toggle('active')
    })
}

export const showResultDisplay = win => {
    let message;
    let color;

    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2')

    if (win) {
        message = 'Você venceu!'
        color = green
        resultWrapper.style.backgroundImage = 'url(assets/images/confetti.gif)'
    } else {
        message = 'Você perdeu!'
        color = red
        timerText.classList.add('lose')
        copyButton.classList.add('lose')
    }

    h1.style.color = color
    h1.innerText = message

    h2.innerHTML = `A palavra era: <strong>${word}</strong>`

    resultData.append(h1)
    resultData.append(h2)

    resultModal.open()
}

export const invalidWordAnimation = currentRowFirstLetter => {
    document.getElementById(String((currentRowFirstLetter/5) + 1)).classList.toggle('invalidWord')
    setTimeout(() => {
        document.getElementById(String((currentRowFirstLetter/5) + 1)).classList.toggle('invalidWord')
    }, 600)
}

export const activateRow = rowId => {
    const row = document.getElementById(`${String(rowId)}`)
    const lettersInRow = row.querySelectorAll('.letter')

    lettersInRow.forEach((div) => {
        div.classList.remove('deactive')
    });
}

export const changeNextLetterStyle = (currentLetterBox, increment) => {

    // Increment +1 = Apagando letras / Increment -1 = Escrevendo letras / Increment +2/+3 = Escrevendo última letra/

    let temporaryIncrement = increment

    if (currentLetterBox + increment > 24 ) {
        increment = 0
    }

    if (temporaryIncrement == 2) {
        increment = -1
    } else {
        letterBoxes[currentLetterBox].style.borderBottom = `7px solid ${brown}`
    }

    if (increment != 0) {
        letterBoxes[currentLetterBox + increment].style.borderBottom = 'none'
        letterBoxes[currentLetterBox + increment].style.border = `3px solid ${brown}`
        if (increment < 0 && temporaryIncrement != 3) {
            letterBoxes[currentLetterBox + increment].style.scale = '1.25'
            setTimeout(() => {
                letterBoxes[currentLetterBox + increment].style.scale = '1'
            }, 100)
        }
    }
}

export const showCopied = () => {
    copied.classList.toggle('deactive')
    copied.classList.toggle('active')
    copyButton.classList.toggle('active')
    setTimeout(() => {
        copyButton.classList.toggle('active')
    }, 900);
    setTimeout(() => {
        copied.classList.toggle('active')
        copied.classList.toggle('deactive')
    }, 1000);
}