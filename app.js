<<<<<<< HEAD
// Cache the DOM
let userScore = 0;
let computerScore = 0;

// DOM variables within span tag
// _ signifies it's a DOM variable
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Caching means to store something for future use
// We stored all these things in variables for future use

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "USER".fontsize(3).sup();
  const smallCompWord = "CPU".fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats
    ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 320);
  // 58:15
}

function lose(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "USER".fontsize(3).sup();
  const smallCompWord = "CPU".fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats
    ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "USER".fontsize(3).sup();
  const smallCompWord = "CPU".fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} matches
    ${convertToWord(computerChoice)}${smallCompWord}. Draw - Go Again!`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

// userChoice isn't traditionally defined
// It is contextually defined after game() below

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
=======
// Cache the DOM
let userScore = 0;
let computerScore = 0;

// DOM variables within span tag
// _ signifies it's a DOM variable
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Caching means to store something for future use
// We stored all these things in variables for future use

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord() {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = userChoice + " beats " + computerChoice + ". You win!";
}

function lose() {
  console.log("LOSE");
}

function draw() {
  console.log("DRAW");
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

// userChoice isn't traditionally defined
// It is contextually defined after game() below

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
>>>>>>> b8a4d28471ed08f2276cfb11e01ef06233f3f284
