import { word } from "./words.js"
import { green, brown, red } from "../content/colors.js"
import { letterBoxes, resultDisplay, resultWrapper, keys } from "../content/elements.js"

export const toggleKeysActivity = () => {
    keys.forEach(key => {
        key.classList.toggle('active')
    })
}

export const showResultDisplay = win => {
    let message;
    let color;

    if (win) {
        message = 'Você venceu!'
        color = green
    } else {
        message = 'Você perdeu!'
        color = red

        resultWrapper.style.backgroundImage = 'none'
    }

    resultDisplay.innerHTML += `<h1 style="color: ${color}">${message}</h1>`

    resultDisplay.innerHTML += `<h2>A palavra era: <strong>${word}</strong></h2>`

    resultWrapper.style.opacity = '1'
    resultWrapper.style.visibility = 'visible'
}

export const invalidWordAnimation = currentRowFirstLetter => {
    document.getElementById(String((currentRowFirstLetter/5) + 1)).classList.toggle('invalidWord')
    setTimeout(() => {
        document.getElementById(String((currentRowFirstLetter/5) + 1)).classList.toggle('invalidWord')
    }, 600)
}

export const activateRow = rowId => {
    const row = document.getElementById(`${String(rowId)}`);
    const lettersInRow = row.querySelectorAll('.letter');

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
        letterBoxes[currentLetterBox].style.borderBottom = `7px solid ${brown}`;
    }

    if (increment != 0) {
        letterBoxes[currentLetterBox + increment].style.borderBottom = 'none';
        letterBoxes[currentLetterBox + increment].style.border = `3px solid ${brown}`;
        if (increment < 0 && temporaryIncrement != 3) {
            letterBoxes[currentLetterBox + increment].style.scale = '1.25';
            setTimeout(() => {
                letterBoxes[currentLetterBox + increment].style.scale = '1';
            }, 100);
        }
    }
}