// const scrollAppear = () => {
//
//     let appearSection = document.querySelector(".appear-section");
//     let screenPosition = window.innerHeight / 1.5;
//     let position = appearSection.getBoundingClientRect().top;
//     console.log(screenPosition);
//     if (position < screenPosition) {
//         if (appearSection.classList.contains("welcome-section")) {
//             appearSection.style.display ="grid";
//         } else {
//             appearSection.style.display = "block";
//         }
//     } else {
//         appearSection.style.display = "none";
//     }
// }
// window.addEventListener('scroll', scrollAppear);


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
