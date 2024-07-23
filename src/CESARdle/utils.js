import { words } from "./game/words.js";

export const letterIsValid = key => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    return letters.includes(key)
}

export const wordIsValid = triedWord => {
    return words.includes(triedWord)
}