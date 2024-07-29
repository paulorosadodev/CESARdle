import { state } from "./game/state.js"
import { words, word } from "./game/words.js"
import { showCopied } from "./game/gameStyles.js"
import { barsFill, dataAmount, dataPercentual, dataStreak, statsMessage, gamesAmount, winPercentual, winStreak} from "./content/elements.js"

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

export const displayGameStats = () => {
    const gameStats = getGameStats()

    if (gameStats.gamesAmount == 0) {
        changeStatsStyles()
    } else {
        resetStatsStyles()
        barsFill.forEach(barFill => {
            barFill.parentElement.previousElementSibling.textContent = gameStats.triesAmount[barFill.id]
        })
    
        dataStreak.textContent = gameStats.winStreak
        dataAmount.textContent = gameStats.gamesAmount
        dataPercentual.textContent = gameStats.winPercetual + '%'
    }
}

export const getGameStats = () => {
    let ctx = {}

    ctx['winStreak'] = state.winStreak
    ctx['triesAmount'] = state.triesAmount

    ctx['gamesAmount'] = getTriePercent(ctx.triesAmount, true)

    let lostPercent = getTriePercent(ctx.triesAmount, 'lostGame')

    if (isNaN(lostPercent)) {
        ctx['winPercetual'] = 0
    } else {
        ctx['winPercetual'] = 100 - lostPercent
    }

    return ctx
}

export const getTriePercent = (triesAmount, trie) => {
    let sum = 0
    let triesPercents = {}

    for (let trie in triesAmount) {
        sum += triesAmount[trie]
    }

    if (trie === true) {
        return sum
    }

    for (let trie in triesAmount) {
        triesPercents[trie] = Math.floor(triesAmount[trie]/sum*100).toFixed(0)
    }

    return triesPercents[trie]
}

function changeStatsStyles() {
    statsMessage.style.display = 'flex'
    winStreak.style.opacity = '1' 
    gamesAmount.style.opacity = '1' 
    winPercentual.style.opacity = '1' 
    winStreak.style.visibility = 'visible' 
    gamesAmount.style.visibility = 'visible' 
    winPercentual.style.visibility = 'visible' 
    winStreak.style.transform = 'translateY(0x)' 
    gamesAmount.style.transform = 'translateY(0x)' 
    winPercentual.style.transform = 'translateY(0x)' 
}

function resetStatsStyles() {
    statsMessage.style.display = 'none'
    winStreak.style.opacity = '' 
    gamesAmount.style.opacity = '' 
    winPercentual.style.opacity = '' 
    winStreak.style.visibility = '' 
    gamesAmount.style.visibility = '' 
    winPercentual.style.visibility = '' 
    winStreak.style.transform = '' 
    gamesAmount.style.transform = ''
    winPercentual.style.transform = '' 
}