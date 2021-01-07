
// You don't need any other library to run this counter
const onscrollTag = document.getElementById('on_scroll_counter');

function handler(entries, observer) {
    for (entry of entries) {
        if (entry.isIntersecting) {
            beginCounting();
        } else {
            //add code
        }
    }
}

/* By default, invokes the handler whenever:
   1. Any part of the target enters the viewport
   2. The last part of the target leaves the viewport */

let observer = new IntersectionObserver(handler);
observer.observe(document.getElementById("on_scroll_counter"));


let beginCounting = () => {
    const animationDuration = 2000;
    const frameDuration = 1000 / 30;
    const totalFrames = Math.round(animationDuration / frameDuration);

    const easeOutQuad = t => t * (2 - t);

    const animateCountUp = el => {
        let frame = 0;
        const countTo = parseInt(el.innerHTML, 10);

        const counter = setInterval(() => {
            frame++;
            const progress = easeOutQuad(frame / totalFrames);
            const currentCount = Math.round(countTo * progress);
            if (parseInt(el.innerHTML, 10) !== currentCount) {
                el.innerHTML = currentCount;
            }

            if (frame === totalFrames) {
                clearInterval(counter);
            }
        }, frameDuration);
    };

    const countupEls = document.querySelectorAll('.timer');
    countupEls.forEach(animateCountUp);

}