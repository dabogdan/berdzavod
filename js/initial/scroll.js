//sections appear on scrolling
const onscrollSection = document.querySelectorAll('.scroll');

const options = {
    threshold: 0,
    rootMargin: "0px"
};

const sectionObserver = new IntersectionObserver ((entries, observer) => {
    for (let entry of entries ) {
        //intersection once
        if(entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
            return;
        }
        // always intersection
        // if(!entry.isIntersecting) {
        //     entry.target.classList.add('gone');
        //     entry.target.classList.remove('appear');
        //     return;
        // } else {
        //     entry.target.classList.add('appear');
        //     // entry.target.classList.remove('gone');
        // }
    }
}, options);

onscrollSection.forEach((section) => {
    sectionObserver.observe(section);
})

//scrollTop button
let t1 = 0;
window.onscroll = scrollUpButtonAppear;

function scrollUpButtonAppear() {
    let toTop = document.getElementById('scrollTop');
    window.scrollY > 300 ? toTop.style.display = 'block' : toTop.style.display = 'none';
}

function scrollUp() {
    let y1 = window.scrollY;
    y1 = y1 - 30;
    window.scrollTo(0, y1);
    if (y1 > 0) {
        t1 = setTimeout("scrollUp()", 1);
    } else {
        clearTimeout(t1);
    }
}

//smooth scrolling to sections on click in navigation and buttons
// --------------------- DEBOUNCE FUNCTION TO PREVENT PERFORMANCE ISSUES --------------------- //

// const debounce = (func, delay) => {
//     let inDebounce
//     return function() {
//         const context = this
//         const args = arguments
//         clearTimeout(inDebounce)
//         inDebounce = setTimeout(() => func.apply(context, args), delay)
//     }
// }

// ------------------------- CHANGE ACTIVE STATE OF LINKS ON SCROLL ------------------------- //
//select the navigation
const nav = document.querySelector('.navbar');

// --------------------- INITIALIZE CHRIS FERDINANDI'S SMOOTH SCROLL VANILLA JS LIBRARY --------------------- //
const scroll = new SmoothScroll('a[href*="#"]', {offset: nav.offsetHeight});

// Thanks to https://github.com/cferdinandi/smooth-scroll