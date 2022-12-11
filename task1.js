let input = prompt('Enter information about your book:')
let container = document.getElementById('container')

document.addEventListener('keyup', e => {
    if (e.keyCode == 13) {
        let info = document.createElement('p')
        info.innerHTML = input
        container.appendChild(info)
    }
})
