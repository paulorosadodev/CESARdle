import { word } from "./CESARdle/game/words.js";
import { populateLetters } from "./CESARdle/game/gameUtils.js";
import { updateDisplayTime } from "./CESARdle/content/time.js";
import { instructionsModal } from "./CESARdle/content/Modal.js";
import { toggleKeysActivity } from "./CESARdle/game/gameStyles.js";
import { waitKeyClick, waitKeyPress } from "./CESARdle/game/events.js";
import { isPlaying, updateLocalStorage } from "./CESARdle/game/storage.js";

// console.log(word)

updateLocalStorage()

populateLetters()

setInterval(updateDisplayTime, 1000)

instructionsModal.handle()

if (isPlaying) {
    toggleKeysActivity()
    waitKeyClick()
    waitKeyPress()
}