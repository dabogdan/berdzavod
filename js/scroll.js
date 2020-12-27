//sections appear on scrolling
if(window.innerWidth >= 992) {
    const scrollAppear = el => {
        el.style.transition = 'all 1s ease-in-out'
        el.classList.add('gone')
        window.addEventListener('scroll', () => {
            let elPos = el.getBoundingClientRect().top;
            let pos = window.innerHeight / 1.1
            if (elPos <= pos) {
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
}


//using this one
let t1 = 0;
window.onscroll = scrollUpButtonAppear;

function scrollUpButtonAppear() {
    let toTop = document.getElementById('scrollTop');
    window.scrollY > 300 ? toTop.style.display = 'block' : toTop.style.display = 'none';
}

function scrollUp() {
    var y1 = window.scrollY;
    y1 = y1 - 30;
    window.scrollTo(0, y1);
    if (y1 > 0) {
        t1 = setTimeout("scrollUp()", 1);
    } else {
        clearTimeout(t1);
    }
}