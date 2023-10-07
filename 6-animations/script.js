const popmotion = require('popmotion')

const ball = document.querySelector(".ball");

popmotion.animate({
    from: "0px",
    to: "100px",
    repeat: Infinity,
    repeatType: "mirror",
    type: "spring",
    onUpdate(update) {
        // how on earth does popmotion have access to ball.style
        ball.style.left = update;
    }
});

