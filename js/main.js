//score
const playerPoints = document.querySelector(".score__points--player");
const compPoints = document.querySelector(".score__points--comp");
//options
const options = document.querySelectorAll(".options__option");
//choices
const choicesSection = document.querySelector(".choices");
const playerChoice = document.querySelector(".choices__choice--player");
const compChoice = document.querySelector(".choices__choice--comp");
//result
const result = document.querySelector(".result");
//resetBtn
const resetBtn = document.querySelector(".resetBtn");
//game
const game = {
  playerPoints: 0,
  compPoints: 0,
  playerChoice: "",
  compChoice: "",
  availableCompChoices: ["rock", "paper", "scissors"],
};

function init() {
  playerPoints.textContent = game.playerPoints;
  compPoints.textContent = game.compPoints;
  result.textContent = "Choose your weapon :)";
}

function checkWinner() {
  if (
    (game.playerChoice === "rock" && game.compChoice === "scissors") ||
    (game.playerChoice === "paper" && game.compChoice === "rock") ||
    (game.playerChoice === "scissors" && game.compChoice === "paper")
  ) {
    game.playerPoints++;
    result.textContent = "You Won!";
    result.className = "result result--win";
  } else if (game.playerChoice === game.compChoice) {
    result.textContent = "Draw!";
    result.className = "result result--draw";
  } else {
    game.compPoints++;
    result.textContent = "You Loss!";
    result.className = "result result--loss";
  }

  playerChoice.textContent = game.playerChoice;
  compChoice.textContent = game.compChoice;
  playerPoints.textContent = game.playerPoints;
  compPoints.textContent = game.compPoints;
  choicesSection.classList.add("choices--active");
  resetBtn.classList.add("resetBtn--active");
}

function randCompChoice() {
  const index = Math.floor(Math.random() * game.availableCompChoices.length);
  game.compChoice = game.availableCompChoices[index];

  checkWinner();
}

function startGame(e) {
  options.forEach((option) =>
    option.classList.remove("options__option--active")
  );
  e.target.classList.add("options__option--active");
  game.playerChoice = e.target.dataset.option;

  randCompChoice();
}

options.forEach((option) => {
  option.addEventListener("click", startGame);
});

function reset() {
  game.playerPoints = 0;
  game.compPoints = 0;
  options.forEach((option) =>
    option.classList.remove("options__option--active")
  );
  game.playerChoice = "";
  game.compChoice = "";
  choicesSection.classList.remove("choices--active");
  resetBtn.classList.remove("resetBtn--active");
  result.className = "result";
  init();
}

resetBtn.addEventListener("click", reset);

window.onload = init;
