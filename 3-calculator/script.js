let store = "0";

const handleClick = (event) => {
  console.log(event);

  let operation = event.target.innerHTML;
  console.log("operation", operation);

  switch (operation) {
    case "=": {
      try {
        store = eval(store);
        console.log(`This is the current store: ${store}`);
      } catch (error) {
        console.error(error);
        alert(`Error: ${error}`);
      }
      break;
    }
    case "←": {
        console.log(store);
        store = store.slice(0, -1);
        console.log(store);
        break;
    }
    case "C": {
        store = 0;
        break;
    }
    default : {
        store += operation;
    }
  }

  // reflect it in the display.
  document.getElementById("results-display").innerHTML = store;
};

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});
