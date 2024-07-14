import { audio } from "./CESARdle/sounds.js";
import { word } from "./CESARdle/words.js";
import { words } from "./CESARdle/words.js";

let boxes = document.querySelectorAll('.letter');

console.log(String(word))

let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÇ';

let i = 0;
let min = 0;
let max = 1;
let row = 1;
let cont = 1;

boxes[i].style.borderBottom = "7px solid #69140E";

function handleKeyPress(key) {
    if (victory.style.opacity != 1) {
        if (key == '' || key == 'BACKSPACE') {
            i -= 1;
            if (i < min) {
                i = min;
            }
            boxes[i].innerHTML = '';
            handleNow(i, +1);
            max--;
            if (max <= 0) {
                max = 1
            }
        } else if ((row == 1 && max <= 5) && letters.includes(key)) {
            boxes[i].innerHTML = `<span>${key}</span>`;
            i++;
            if (i % 5 === 0) {
                boxes[i-1].style.borderBottom = 'none';
                boxes[i-1].style.border = '3px solid #69140E';
                boxes[i-1].style.scale = '1.25';
                setTimeout(() => {
                    boxes[i-1].style.scale = '1';
                }, 100);
            } else {
                handleNow(i, -1);
            }
            max++;
        } else if (key === 'ENTER') {
            let win = 0
            let wordTry = ''

            for (let y = 0; y < 5; y++) {
                wordTry += boxes[y + min].textContent.toLowerCase()
            }

            if (words.includes(wordTry)) {
                if (i - 5 - min >= 0) {
                    for (let x = i - 5 - min; x < i - min; x++) {
                        if (boxes[x + min].textContent.toLowerCase() == word[x].toLowerCase()) {
                            boxes[x + min].style.backgroundColor = '#04F06A';
                            win++
                        } else if (word.toLowerCase().includes(boxes[x + min].textContent)) {
                            boxes[x + min].style.backgroundColor = '#fde74c';
                        } else {
                            boxes[x + min].style.backgroundColor = '#be0521';
                        }
                    }
                    if (win == 5) {
                        audio.play()
            
                        let victory = document.getElementById("victory")
    
                        victory.querySelector('h2').innerHTML = `A palavra era: <strong>${word}</strong>`
            
                        victory.style.opacity = '1'
                        victory.style.visibility = 'visible'
                    } else {
                        if (min == 20) {
                            let victory = document.getElementById("victory")
                            
                            let loose = victory.getElementsByTagName('div')[0]
            
                            loose.innerHTML = '<h1 style="color: #e41836">Você perdeu!</h1>' + `<h2>A palavra era: <strong>${word}</srong></h2>`
                            victory.style.backgroundImage = 'none'
            
                            victory.style.opacity = '1'
                            victory.style.visibility = 'visible'
            
                        } else {
                            handleNow(i, -1);
                            cont++;
                            row = 1;
                            max = 1;
                            min += 5;
                        }
                    }
                }
            } else {
                if (wordTry.length == 5) {
                    document.getElementById(String((min/5) + 1)).classList.toggle('invalidWord')
                    setTimeout(() => {
                        document.getElementById(String((min/5) + 1)).classList.toggle('invalidWord')
                    }, 600)
                }
            }
    
            const rowCont = document.getElementById(`${String(cont)}`);
            const lettersInRow = rowCont.querySelectorAll('.letter');
    
            lettersInRow.forEach((div, index) => {
                div.classList.remove('deactive')
            });
        }
    }
}

function handleNow(i, increment) {
    if (i + increment > 24) {
        increment = 0
    }

    boxes[i].style.borderBottom = "7px solid #69140E";

    if (increment != 0) {
        boxes[i+increment].style.borderBottom = 'none';
        boxes[i+increment].style.border = '3px solid #69140E';
        if (increment < 0) {
            boxes[i+increment].style.scale = '1.25';
            setTimeout(() => {
                boxes[i+increment].style.scale = '1';
            }, 100);
        }
    }
}

window.addEventListener('keydown', event => {
    handleKeyPress(event.key.toUpperCase());
});

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        handleKeyPress(key.textContent);
        key.style.backgroundColor = '#69140E'
    });
});
