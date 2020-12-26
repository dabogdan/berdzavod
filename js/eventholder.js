const goods = document.getElementById('goods');
const zhatki = document.getElementById('zhatki');
const closeBtn = document.getElementById('close-btn');

if (window.innerWidth > 992) {
    zhatki.addEventListener('click', () => {
        goods.classList.add('display-block');
        goods.classList.remove('none');
    })
    closeBtn.addEventListener('click', () => {
        goods.classList.add("none");
        goods.classList.remove("display-block");
    });
} else if (window.innerWidth <= 992) {
    goods.setAttribute('id', 'popup-zhatki');
    zhatki.addEventListener("click", () => {
        goods.classList.add("visible");
        goods.classList.remove("none");
    });

    closeBtn.addEventListener('click', () => {
        goods.classList.add("none");
        goods.classList.remove("visible");
    });
}







