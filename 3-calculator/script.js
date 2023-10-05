let store = "0";

let clearOnNextBtnPress = false;

const handleClick = (event) => {
  console.log(event);

  let operation = event.target.innerHTML;
  console.log("operation", operation);

//   if (clearOnNextBtnPress) {
//     store = "0"
//     clearOnNextBtnPress = false;
//   }

  switch (operation) {
    case "=": {
      try {
        store = eval(store);
        console.log(`This is the current store: ${store}.`);
        clearOnNextBtnPress = true
        // why doesn't this console log show store = 0?
        console.log(`Store after clear: ${store}.`)
      } catch (error) {
        console.error(error);
        alert(`Error: ${error}.`);
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
        if (store.length > 1 && store.charAt(0) === "0") {
            store = store.slice(1, store.length)
        }
        store += operation;
    }
  }

  document.getElementById("results-display").innerHTML = store;
};

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});
