const document = document.querySelector(".ball");

popmotion.animate({
    from: "0px",
    to: "100px",
    repeat: Infinity,
    repeatType: "mirror",
    type: "spring",
    onUpdate(update) {
        ball.getElementsByClassName.left = update;
    }
});

