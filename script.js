let playerSelection;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return " You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return " You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return " You Win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return " You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return " You Lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return " You Win! Scissors beats Paper";
  } else if (playerSelection === computerSelection) {
    return " DRAW";
  }
}

function playGame(playerSelection) {
  // Chama a função playRound com as escolhas do jogador e do computador
  const computerSelection = getComputerChoice();
  // const result = playRound(playerSelection, computerSelection);

  div.textContent =
    "Player chose: " +
    playerSelection +
    " Computer chose: " +
    computerSelection;
  subDiv.textContent = playRound(playerSelection, computerSelection);
}

document.getElementById("rock").addEventListener("click", function () {
  playerSelection = "rock";
  playGame("rock");
});
document.getElementById("paper").addEventListener("click", function () {
  playerSelection = "paper";
  playGame("paper");
});
document.getElementById("scissors").addEventListener("click", function () {
  playerSelection = "scissors";
  playGame("scissors");
});

const div = document.createElement("div");
document.body.append(div);

const subDiv = document.createElement("div");
document.body.append(subDiv);
