import { word } from "./CESARdle/game/words.js";
import { state } from "./CESARdle/game/state.js";
import { instructionsModal } from "./CESARdle/content/Modal.js";
import { toggleKeysActivity } from "./CESARdle/game/gameStyles.js";
import { waitKeyClick, waitKeyPress } from "./CESARdle/game/events.js";

// console.log(word)

instructionsModal.handle()

if (state.isPlaying) {
    toggleKeysActivity()
    waitKeyClick()
    waitKeyPress()
}