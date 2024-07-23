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

export const word = words[Math.floor(Math.random() * words.length)]

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