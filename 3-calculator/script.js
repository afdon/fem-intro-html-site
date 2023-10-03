

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
    console.log(store[-1])

    // if (store.slice(-1) === "=") {
    //     store = store.slice(0, -1);
    //     store = eval(store)
    // }

    if (store.slice(-1) === "=") {
        // evaluate the statement and store the result
        store = eval(store.slice(0, -1)); // WHY DOESN'T THIS WORK
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

