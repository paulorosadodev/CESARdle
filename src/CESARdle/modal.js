let instructionsWrapper = document.querySelector('#instructions-wrapper')

export const modal = window.addEventListener('click', (e) => {
    if (e.target == instructionsWrapper) {
        instructionsWrapper.style.display = 'none'
    }
})

export const modalClose = () => {
    let button = document.getElementById('close')

    button.addEventListener('click', () => {
        instructionsWrapper.style.display = 'none'
    })

}

export const modalOpen = () => {
    let button = document.getElementById('open')

    button.addEventListener('click', () => {
        instructionsWrapper.style.display = 'flex'
    })

}
