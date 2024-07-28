import { updateWord, word } from "./CESARdle/game/words.js";
import { displayGameStats } from "./CESARdle/utils.js";
import { startDisplayTime } from "./CESARdle/content/time.js";
import { populateLetters } from "./CESARdle/game/gameUtils.js";
import { toggleKeysActivity } from "./CESARdle/game/gameStyles.js";
import { waitKeyClick, waitKeyPress } from "./CESARdle/game/events.js";
import { isPlaying, updateLocalStorage } from "./CESARdle/game/storage.js";
import { instructionsModal, resultModal, statsModal } from "./CESARdle/content/Modal.js";

startDisplayTime()

updateLocalStorage()

displayGameStats()

populateLetters()

instructionsModal.handle()
resultModal.handle()
statsModal.handle()

if (isPlaying) {
    toggleKeysActivity()
    waitKeyClick()
    waitKeyPress()
}

export const interval = setInterval(() => {
    if (updateWord()) {
        window.location.reload()
    }
}, 1000)