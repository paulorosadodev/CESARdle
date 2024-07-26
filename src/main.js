import { word } from "./CESARdle/game/words.js";
import { startDisplayTime } from "./CESARdle/content/time.js";
import { populateLetters } from "./CESARdle/game/gameUtils.js";
import { toggleKeysActivity } from "./CESARdle/game/gameStyles.js";
import { waitKeyClick, waitKeyPress } from "./CESARdle/game/events.js";
import { isPlaying, updateLocalStorage } from "./CESARdle/game/storage.js";
import { instructionsModal, resultModal } from "./CESARdle/content/Modal.js";

// console.log(word)

startDisplayTime()

updateLocalStorage()

populateLetters()

instructionsModal.handle()
resultModal.handle()

if (isPlaying) {
    toggleKeysActivity()
    waitKeyClick()
    waitKeyPress()
}