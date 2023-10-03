

let store = 0

const handleClick = (event) => {
    console.log(event)
    // if the button's value is a number, store it.
    // if (typeof parseInt(event.target.innerHTML) === "number") {
    //     store += event.target.innerHTML;
    //     console.log(store);
    // }

    store += event.target.innerHTML;
    console.log(store);
    console.log(typeof store)

    if (store.slice(-1) === "=") {
        // evaluate the statement
        store.slice(0, -1)
        eval(store) // WHY IS THIS NOT WORKINGGGGGG
    }

    if (store.slice(-1) === "C") {
        store = 0
    }

    // reflect it in the display.
    document.getElementById("results-display").innerHTML = store;
}

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener('click', handleClick);
});

