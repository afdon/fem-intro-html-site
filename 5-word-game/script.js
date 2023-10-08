const maxGuesses = 6;
const lettersPerWord = 5;
const isValidWord = false;

let answer = "words"; 

let guesses = [];

let box = document.querySelector('input')

box.addEventListener('keyup', function(e) {
  console.log(e.key) // this.value?

  // if letters per word > lettersPerWord

    guesses.push(e.key)
    console.log(`This is guesses: ${guesses}.`)
    
})



// takes a guess and returns 

function checkGuess(guess) {
  const chars = guess.split("");
  let isCorrectAnswer = true;

  let charsStatus = chars.map((c, i) => {
    let isCorrectPosition = false;
    let isIncluded = false;

    if (c === answer[i]){
        isCorrectPosition = true;
        isIncluded = true;
    } else if (answer.includes(c)){
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

  return ({
    isCorrectAnswer,
    charsStatus,
  });
};

// guesses.push(checkGuess("hello"));
// guesses.push(checkGuess("whatz"));
// guesses.push(checkGuess("wordz"));
// guesses.push(checkGuess("words"));


console.log(guesses);

function handleGuess(guess) {
    let status = checkGuess(guess)
}