import { words, word } from "./game/words.js";
import { showCopied } from "./game/gameStyles.js";

export const letterIsValid = key => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    return letters.includes(key)
}

export const wordIsValid = triedWord => {
    return words.includes(triedWord)
}

export const copyGame = () => {
    let redBox = '🟥'
    let brownBox = '🟫'
    let greenBox = '🟩'
    let yellowBox = '🟨'

    let copiedText = 'Se liga no meu jogo do CESARdle de hoje:\n\n' 

    let triedWords = getTriedWords()

    let rows = 0

    for (let triedWord of triedWords) {
        let index = 0
        for (let letter of triedWord) {
            if (!word.includes(letter)) {
                copiedText += redBox
            } else if (word.includes(letter) && word.indexOf(letter) == triedWord.indexOf(letter)) {
                copiedText += greenBox
            } else {
                copiedText += yellowBox
            }
            index++
        }
        rows++
        copiedText += '\n'
    }

    for (let i = rows; i < 5; i++) {
        for (let x = 0; x < 5; x++) {
            copiedText += brownBox
        }
        copiedText += '\n'
    }

    copiedText += '\nJogue também em: https://paulorosadodev.github.io/CESARdle/'

    let hiddenTextArea = document.getElementById('hidden-text');
    hiddenTextArea.value = copiedText;
    hiddenTextArea.select();
    hiddenTextArea.setSelectionRange(0, 99999);

    try {
        let successful = document.execCommand('copy');
        if (successful) {
            showCopied()
        } else {
            throw new Error('execCommand falhou');
        }
    } catch (err) {
        alert('Navegador incompatível com a API de área de transferência');
    }
}

function getTriedWords() {
    let index = 0
    let letters = 0

    let triedWords = []

    let tries = localStorage.getItem('tries')

    for (let letter of tries) {
        if (letter == '\n') {
            index++
            letters = 0
        } else {
            if (letters == 0 ) {
                triedWords[index] = ''
            }
            triedWords[index] += letter
            letters++
        }
    }

    return triedWords

}