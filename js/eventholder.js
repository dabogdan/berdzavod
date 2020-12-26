const goods = document.getElementById('goods');
const zhatki = document.getElementById('zhatki');
const closeBtn = document.getElementById('close-btn');

if (window.innerWidth > 992) {
    zhatki.addEventListener('click', () => {
        goods.classList.add('display-block');
        goods.classList.remove('none');
        // console.log(window.visualViewport.width, window.innerWidth)
    })
} else if (window.innerWidth <= 992) {
    // zhatki.setAttribute('onclick', "onClick()");
    goods.setAttribute('id', 'popup-zhatki');
    // goods.setAttribute('id', 'popup-content');
    zhatki.addEventListener("click", () => {
        goods.classList.add("visible");
        goods.classList.remove("none");
    });

    closeBtn.addEventListener('click', () => {
        goods.classList.add("none");
        goods.classList.remove("visible");
    });
    // goods.addEventListener("click", (e) => {
    //     e.classList.remove("visible");
    // });
}







