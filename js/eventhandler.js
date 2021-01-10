
//zhatki

const goods = document.getElementById('goods');
const zhatki = document.getElementById('zhatki');
const closeBtn = document.querySelectorAll('.close-button');

if (window.innerWidth > 992) {
    zhatki.addEventListener('click', () => {
        // enable goods
        goods.classList.add('display-block');
        goods.classList.remove('none');
    //    disable pristavki
        pristavki.classList.add("none");
        pristavki.classList.remove("display-block");
    //    disable valkov
        valkov.classList.remove('display-block');
        valkov.classList.add('none');
        // disable trolley
        trolley.classList.remove('display-block');
        trolley.classList.add('none');
    })
    closeBtn[0].addEventListener('click', () => {
        goods.classList.add("none");
        goods.classList.remove("display-block");
    });
} else if (window.innerWidth <= 992) {
    goods.setAttribute('id', 'popup-pristavki');
    zhatki.addEventListener("click", () => {
        goods.classList.add("visible");
        goods.classList.remove("none");
    });

    closeBtn[0].addEventListener('click', () => {
        goods.classList.add("none");
        goods.classList.remove("visible");
    });
}

//pristavki
const pristavki = document.getElementById('pristavki');
const pristavkiCard = document.getElementById('pristavki-card');
const prCloseBtn = document.querySelectorAll('.pr-close-button');

if (window.innerWidth > 992) {
    pristavkiCard.addEventListener('click', () => {
        //enable pristavki
        pristavki.classList.add('display-block');
        pristavki.classList.remove('none');
        //disable goods
        goods.classList.add("none");
        goods.classList.remove("display-block");
        // disable valkov
        valkov.classList.remove('display-block');
        valkov.classList.add('none');
        // disable trolley
        trolley.classList.remove('display-block');
        trolley.classList.add('none');
    })
    prCloseBtn[0].addEventListener('click', () => {
        pristavki.classList.add("none");
        pristavki.classList.remove("display-block");
    });
} else if (window.innerWidth <= 992) {
    pristavki.setAttribute('id', 'popup-pristavki');
    pristavkiCard.addEventListener("click", () => {
        pristavki.classList.add("visible");
        pristavki.classList.remove("none");
    });

    prCloseBtn[0].addEventListener('click', () => {
        pristavki.classList.add("none");
        pristavki.classList.remove("visible");
    });
}


//valkov
const valkov = document.getElementById('valkov');
const valkovCard = document.getElementById('valkov-card');
const vCloseBtn = document.querySelectorAll('.v-close-button');

if (window.innerWidth > 992) {
    valkovCard.addEventListener('click', () => {
        // enable valkov
        valkov.classList.add('display-block');
        valkov.classList.remove('none');
        //disable pristavki
        pristavki.classList.remove('display-block');
        pristavki.classList.add('none');
        //disable goods
        goods.classList.add("none");
        goods.classList.remove("display-block");
        // disable trolley
        trolley.classList.remove('display-block');
        trolley.classList.add('none');
    })
    vCloseBtn[0].addEventListener('click', () => {
        valkov.classList.add("none");
        valkov.classList.remove("display-block");
    });
} else if (window.innerWidth <= 992) {
    valkov.setAttribute('id', 'popup-valkov');
    valkovCard.addEventListener("click", () => {
        valkov.classList.add("visible");
        valkov.classList.remove("none");
    });

    vCloseBtn[0].addEventListener('click', () => {
        valkov.classList.add("none");
        valkov.classList.remove("visible");
    });
}


//trolley
let trolley = document.getElementById('trolley');
const trolleyCard = document.getElementById('trolley-card');
const tCloseBtn = document.querySelectorAll('.t-close-button');

if (window.innerWidth > 992) {
    trolleyCard.addEventListener('click', () => {
        // enable trolley
        trolley.classList.add('display-block');
        trolley.classList.remove('none');
        // disable valkov
        valkov.classList.remove('display-block');
        valkov.classList.add('none');
        //disable pristavki
        pristavki.classList.remove('display-block');
        pristavki.classList.add('none');
        //disable goods
        goods.classList.add("none");
        goods.classList.remove("display-block");
    })
    tCloseBtn[0].addEventListener('click', () => {
        trolley.classList.add("none");
        trolley.classList.remove("display-block");
    });
} else if (window.innerWidth <= 992) {
    trolley.setAttribute('id', 'popup-trolley');
    trolleyCard.addEventListener("click", () => {
        console.log('ok');

        trolley.classList.add("visible");
        trolley.classList.remove("none");
    });

    tCloseBtn[0].addEventListener('click', () => {
        trolley.classList.add("none");
        trolley.classList.remove("visible");
    });
}

// about company buttons to show full history section
const aboutCompanyBtn = document.getElementById('about-company-btn-1');
const aboutCompanyBtn2 = document.getElementById('about-company-btn-2');
const historyDescription = document.getElementById('full-history');
aboutCompanyBtn.addEventListener('click', () => {
    historyDescription.classList.add('display-block');
    historyDescription.classList.remove('none');
    aboutCompanyBtn.classList.add('none');
    aboutCompanyBtn.classList.remove('display-block');
    aboutCompanyBtn2.classList.add('display-block');
    aboutCompanyBtn2.classList.remove('none');
})

aboutCompanyBtn2.addEventListener('click',()=> {
    historyDescription.classList.remove('display-block');
    historyDescription.classList.add('none');
    aboutCompanyBtn.classList.remove('none');
    aboutCompanyBtn.classList.add('display-block');
    aboutCompanyBtn2.classList.remove('display-block');
    aboutCompanyBtn2.classList.add('none');
})