const handleClick = (event) => {
    console.log(event)
    document.getElementById("results-display").innerHTML="Hello Jarvan";
}

const buttons = document.querySelectorAll("button")

buttons.forEach(btn => {
    btn.addEventListener('click', handleClick);
});

