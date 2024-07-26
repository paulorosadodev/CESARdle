export const words = [
    'erick', 'erico', 'cesar', 'apolo', 'joyce', 'carol', 'cruds', 'cafes', 'unity', 'scrum',
    'array', 'debug', 'logic', 'bytes', 'loops', 'enter', 'figma', 'stack', 'shell', 'parse',
    'index', 'ascii', 'cache', 'input', 'merge', 'query', 'token', 'union', 'float', 'block',
    'graph', 'hooks', 'route', 'scope', 'patch', 'proxy', 'regex', 'shift', 'slice', 'split',
    'vectr', 'linux', 'adobe', 'admin', 'cloud', 'flask', 'click', 'drive', 'modal', 'pixel',
    'macro', 'table', 'excel', 'track', 'email', 'fetch', 'alert', 'print', 'media', 'clone',
    'login', 'chart', 'event', 'frame', 'layer', 'model', 'reset', 'robot', 'share', 'smart',
    'sound', 'style', 'virus', 'class', 'limit', 'nodes', 'react', 'while', 'yield', 'nuvem',
    'redes', 'sheet', 'views', 'macos', 'lista', 'mocks', 'tupla', 'teste', 'agile', 'techs', 
    'hacks', 'cyber', 'infos', 'azure', 'ifood', 'apple', 'nikon', 'epson', 'gopro', 'phone', 
    'tesla', 'games', 'trade', 'avast', 'arrow', 'specs', 'users', 'codes', 'mouse', 'notes', 
    'slack', 'async', 'await', 'swift', 'scala', 'julia', 'cobol', 'ocaml', 'canva', 'krita',  
]

export function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0)
    const diff = date - start
    const oneDay = 1000 * 60 * 60 * 24
    return Math.floor(diff / oneDay)
}

export function getWordOfTheDay() {
    const today = new Date()
    const dayOfYear = getDayOfYear(today)
    const wordIndex = dayOfYear % words.length
    return words[wordIndex]
}

export let word = getWordOfTheDay()

// export const word = words[Math.floor(Math.random() * words.length)]

// function check(words) {
//     let checkWords = {}
//     let repeatedWords = []
//     let max = 0
//     let min = 10
//     let maxWord = ''
//     let minWord = ''

//     for (let i of words) {
//         checkWords[i] = 0
//         if (i.length > max) {
//             max = i.length
//             maxWord = i
//         } else if (i.length < min) {
//             min = i.length
//             minWord = i
//         }
//     }

//     for (let i of words) {
//         checkWords[i] += 1

//         if (checkWords[i] > 1) {
//             repeatedWords.push(i)
//         }
//     }

//     if (repeatedWords.length == 0) {
//         repeatedWords = 'Nenhuma palavra repetida'
//     }

//     console.log(`\nPalavras repetidas: ${repeatedWords}\nMenor palavra: ${minWord} - ${min} letras\nMaior palavra: ${maxWord} - ${max} letras\n`)
// }

// check(words)