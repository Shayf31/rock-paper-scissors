// flow
// 1. Save user choice
// 2. Random computer choice
// 3. Compare
// 4. Update screen

// Select elements from the pge to be used by JS + CREATE Var
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");

const result = document.getElementById("result");
const playButton = document.getElementById("play-button");

const buttons = document.querySelectorAll("#selection button");

// Create variables (game state) - Store data that changes during the game
let userChoice = "";
let userPoints = 0;
let computerPoints = 0;

// select choice - Loops through all buttons
//Adds a click event to each
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.id;
  });
});

// play roundd - starts the game logic - insert a rtn here early to stop the game/break if true
playButton.addEventListener("click", () => {
  if (userChoice === "") {
    alert("Please select a choice first");
    return;
  }

  //Use that index in array
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // compare draw, win ++ and lose computer ++
  if (userChoice === computerChoice) {
    result.textContent = "Draw!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userPoints++;
    result.textContent = "You win - choose an option to play again !";
  } else {
    computerPoints++;
    result.textContent = "You lose!";
  }

  // update score
  userScore.textContent = userPoints;
  computerScore.textContent = computerPoints;
});

// /////// need to still work on a reset here
///// work on highlighting buttons dynamically not via css
