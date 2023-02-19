// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the user's guess
function checkGuess() {
  // Get the user's guess from the input field
  const userGuess = Number(document.getElementById("guessInput").value);

  // Check if the user's guess is correct
  if (userGuess === randomNumber) {
    document.getElementById("result").innerHTML = "Congratulations! You guessed the correct number.";
  } else if (userGuess < randomNumber) {
    document.getElementById("result").innerHTML = "Too low. Guess again.";
  } else {
    document.getElementById("result").innerHTML = "Too high. Guess again.";
  }
}
