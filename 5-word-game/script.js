let answer = "words"; // 5 letter word

let guesses = [];

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

guesses.push(checkGuess("hello"));
guesses.push(checkGuess("whatz"));
guesses.push(checkGuess("wordz"));
guesses.push(checkGuess("words"));


console.log(guesses);

function handleGuess(guess) {
    let status = checkGuess(guess)
}