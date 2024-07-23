export const words = [
    'erick',
    'erico',
    'cesar',
    'apolo',
    'joyce',
    'carol',
    'cruds',
    'cafes',
    'meira',
    'scrum',
    'array',
    'debug',
    'logic',
    'bytes',
    'loops',
    'enter',
    'stack',
    'shell',
    'parse',
    'index',
    'ascii',
    'cache',
    'input',
    'merge',
    'query',
    'token',
    'union',
    'float',
    'block',
    'graph',
    'hooks',
    'route',
    'scope',
    'patch',
    'proxy',
    'regex',
    'shift',
    'slice',
    'split',
    'tuple',
    'linux',
    'adobe',
    'admin',
    'cloud',
    'flask',
    'click',
    'drive',
    'modal',
    'pixel',
    'macro',
    'table',
    'excel',
    'track',
    'email',
    'fetch',
    'alert',
    'print',
    'media',
    'clone',
    'login',
    'chart',
    'event',
    'frame',
    'layer',
    'model',
    'reset',
    'robot',
    'share',
    'smart',
    'sound',
    'style',
    'virus',
    'class',
    'jpeg',
    'limit',
    'nodes',
    'react',
    'while',
    'yield',
    'redes',
    'sheet',
    'views',
]

function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

function getWordOfTheDay() {
    const today = new Date();
    const dayOfYear = getDayOfYear(today);
    const wordIndex = dayOfYear % words.length;
    return words[wordIndex];
}

export const word = getWordOfTheDay()

// export const word = words[Math.floor(Math.random() * words.length)]

function check(words) {
    let checkWords = {}
    let repeatWords = []

    for (let i of words) {
        checkWords[i] = 0
    }

    for (let i of words) {
        checkWords[i] += 1

        if (checkWords[i] > 1) {
            repeatWords.push(i)
        }
    }
}

check(words)