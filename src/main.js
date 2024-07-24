import { word } from "./CESARdle/game/words.js";
import { populateLetters } from "./CESARdle/game/gameUtils.js";
import { instructionsModal } from "./CESARdle/content/Modal.js";
import { toggleKeysActivity } from "./CESARdle/game/gameStyles.js";
import { waitKeyClick, waitKeyPress } from "./CESARdle/game/events.js";
import { createLocalStorage, isPlaying } from "./CESARdle/game/storage.js";

// console.log(word)

createLocalStorage()
populateLetters()

instructionsModal.handle()

if (isPlaying) {
    toggleKeysActivity()
    waitKeyClick()
    waitKeyPress()
}