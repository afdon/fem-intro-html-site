const maxGuesses = 6;
const lettersPerWord = 5;
const isValidWord = false;
let unvalidatedGuess = "highs"

async function getAnswer() {
  try {
    const response = await fetch("https://words.dev-apis.com/word-of-the-day")
    const body = await response.json();
    console.log("The word is", body.word) // why is there automatically a space before the word?
    console.log(body.word)
    return body.word;
  } catch (error) {
    console.error(`There was an error: ${error}.`)
  }
};

getAnswer();

async function validateWord(url = "", data = {}) {
  try {
    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify(data),
    })
    return response.json();
  } catch (error) {
    console.error(`There was an error: ${error}.`)
  }
}

validateWord("https://words.dev-apis.com/validate-word", { word: unvalidatedGuess }).then((data) => {
  // JSON data parsed by `data.json()` call:
  console.log(`The word ${data.word} is valid: ${data.validWord}`); 
})

let guesses = [];

let currentGuess = ""

function isLetters(string)
  {
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

  console.log(isLetters("hello"))

const isFiveLetters = (string) => {
  // if 
}

let box = document.querySelector("input");

box.addEventListener("keyup", function (e) {
  console.log(e.key); // this.value?

  // if letters per word > lettersPerWord

  guesses.push(e.key);
  console.log(`This is guesses: ${guesses}.`);
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
