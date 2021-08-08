let screen = document.getElementById('screen')
buttons = document.querySelectorAll('button')
let screenValue = ''
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText
        if (buttonText === 'X') {
            buttonText = '*'
            screen.value += buttonText
        } else if (buttonText === 'C') {
            screen.value = ''
        } else if (buttonText === '=') {
            screen.value = eval(screen.value)
        } else if (buttonText === 'Back Space') {
            let sliceNumber = screen.value.slice(0, -1)
            screen.value = sliceNumber
        } else {
            screen.value += buttonText
        }
    })

}