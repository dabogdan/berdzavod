
// You don't need any other library to run this counter
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