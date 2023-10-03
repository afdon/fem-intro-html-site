

let store = 0

const handleClick = (event) => {
    console.log(event)
    // if the button's value is a number, store it.
    if (typeof parseInt(event.target.innerHTML) === "number") {
        store += event.target.innerHTML;
        console.log(store);
    }

    // store += event.target.innerHTML;
    // console.log(store);

    // reflect it in the display.
    document.getElementById("results-display").innerHTML = store;
}

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener('click', handleClick);
});

