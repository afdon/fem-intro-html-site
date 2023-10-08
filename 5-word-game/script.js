const maxGuesses = 6;
const lettersPerWord = 5;
const isValidWord = false;

async function getAnswer() {
  try {
    const response = await fetch("https://words.dev-apis.com/word-of-the-day").then(response => response.json());
    console.log("The word is", response.word) // why is there automatically a space before the word?
  } catch (error) {
    console.error(`There was an error: ${error}.`)
  }
};

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

validateWord("https://words.dev-apis.com/validate-word", { word: "hello" }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
})

// async function validateWord(json) {
//   try {
//     const validity = await fetch("https://words.dev-apis.com/validate-word", { "word": "crane" }).then(response => response.json());
//     console.log(validity)
//   } catch (error) {
//     console.error(`There was an error: ${error}.`)
//   }
// }

let guesses = [];

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
