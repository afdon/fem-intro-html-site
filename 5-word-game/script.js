const maxGuesses = 6;
const lettersPerWord = 5;
const isValidWord = false;
let unvalidatedGuess = ""
let validGuess

async function getAnswer() {
  try {
    const response = await fetch("https://words.dev-apis.com/word-of-the-day")
    const body = await response.json();
    console.log("The word is", body.word) 
    // why is there automatically a space before the word?
    return body.word;
  } catch (error) {
    console.error(`There was an error: ${error}.`)
  }
};

let answer = getAnswer();

async function validateWord(data = {}) {
  try {
    const response = await fetch("https://words.dev-apis.com/validate-word", {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify(data),
    })
    return response.json();
  } catch (error) {
    console.error(`There was an error: ${error}.`)
  }
}

// if (unvalidatedGuess.length === lettersPerWord) {

//   validateWord({ word: unvalidatedGuess }).then((data) => {
//     // JSON data parsed by `data.json()` call:
//     console.log(`The word ${data.word} is valid: ${data.validWord}`); 
//     if (data.validWord) {
//       validGuess = data.word
//     } else {
//       alert(`Sorry, "${data.word}" isn't a valid word.`)
//     }
//   })

// }

let guesses = [];

function isLetters(string) {
   const lettersRegex = /^[A-Za-z]+$/;
   if(string.match(lettersRegex))
     {
      return true;
     }
   else
     {
     alert("message");
     return false;
     }
  }
  // console.log(isLetters("hello"))

const isFiveChars = (string) => {
  if (string.length === 5) return true;
}

let box = document.querySelector("input");

box.addEventListener("keyup", function (e) {
  console.log(e.key); // this.value?

  if (isLetters(e.key)) unvalidatedGuess = unvalidatedGuess + (e.key);

  if (e.key === 'Backspace' && unvalidatedGuess.length > 1) {
    unvalidatedGuess.slice(0, -1);
    console.log(unvalidatedGuess)
  }

  if (unvalidatedGuess.length === lettersPerWord) {
      validateWord({ word: unvalidatedGuess }).then((data) => {
        // JSON data parsed by `data.json()` call:
        console.log(`The word ${data.word} is valid: ${data.validWord}`);
        if (data.validWord) {
          guesses.push(data.word)
          console.log(guesses)
          unvalidatedGuess = ""
          if (guesses.length === maxGuesses) {
            checkWin(); // check for win/loss
            guesses = [] // end the game and reset guesses
          }
        } else {
          alert(`Sorry, "${data.word}" isn't a valid word.`)
          unvalidatedGuess = ""
        }
        clearInput()
      })
  }

  function checkWin() {
    if (guesses.includes(answer)) {
      alert("You win!")
    } else {
      alert ("You lost!")
    }
  }

  function clearInput() {
    box.value = ""
  }

  console.log(`This is guesses: ${guesses}. The array length is ${guesses.length}.`);
});

// takes a guess and returns

function checkGuess(guess) {
  const chars = guess.split("");
  let isCorrectAnswer = true;

  let charsStatus = chars.map((c, i) => {
    let isCorrectPosition = false;
    let isIncluded = false;

    if (c === answer[i]) {
      isCorrectPosition = true;
      isIncluded = true;
    } else if (answer.includes(c)) {
      isIncluded = true;
      isCorrectAnswer = false;
    } else {
      isCorrectAnswer = false;
    }

    return {
      char: c,
      isCorrectPosition,
      isIncluded,
    };
  });

  return {
    isCorrectAnswer,
    charsStatus,
  };
}

// guesses.push(checkGuess("hello"));
// guesses.push(checkGuess("whatz"));
// guesses.push(checkGuess("wordz"));
// guesses.push(checkGuess("words"));

console.log("guesses: ", guesses);

function handleGuess(guess) {
  let status = checkGuess(guess);
}
