const scrollAppear = el => {
    el.style.transition = 'all 1s ease-in-out'
    el.classList.add('gone')
    window.addEventListener('scroll', () => {
        let elPos = el.getBoundingClientRect().top,
            pos = window.innerHeight / 1.5
        if(elPos < pos) {
            el.classList.add('appear')
            el.classList.remove('gone')
        } else {
            el.classList.remove('appear')
            el.classList.add('gone')
        }
    })
}

document.querySelectorAll('.scroll').forEach(item => {
    scrollAppear(item)
})