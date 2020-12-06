//sections appear on scrolling
const scrollAppear = el => {
    el.style.transition = 'all 1s ease-in-out'
    el.classList.add('gone')
    window.addEventListener('scroll', () => {
        let elPos = el.getBoundingClientRect().top;
        let pos = window.innerHeight / 1.2
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

//scroll to top button
//alternative for ScrollTop button appearance
// let scrollTopButtonAppear = () => {
//     document.addEventListener('scroll', () => {
//         let scrollTopButton = document.getElementsByClassName('scrollTop')[0];
//         if(window.scrollY > 100) {
//             scrollTopButton.classList.add("display-block");
//             scrollTopButton.classList.remove("none");
//             console.log(scrollTopButton);
//         } else {
//             scrollTopButton.classList.add("none");
//             scrollTopButton.classList.remove("display-block");
//         }
//     })
// }
// document.querySelectorAll('.scrollTop').forEach(item => {
//     scrollTopButtonAppear(item)
// })

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