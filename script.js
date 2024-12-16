let playerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore += 1;
    return ` Your Lose! ${computerSelection} beats ${playerSelection}, computer score: ${computerScore}, player score: ${playerScore}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore += 1;
    return ` You Win! ${playerSelection} beats ${computerSelection}, computer score: ${computerScore}, player score: ${playerScore} `;
  } else if (playerSelection === computerSelection) {
    return ` DRAW computer score: ${computerScore}, player score: ${playerScore}`;
  }
}

function playGame(playerSelection) {
  // Chama a função playRound com as escolhas do jogador e do computador
  const computerSelection = getComputerChoice();

  div.textContent =
    "Player chose: " +
    playerSelection +
    " Computer chose: " +
    computerSelection;
  subDiv.textContent = playRound(playerSelection, computerSelection);

  if (playerScore === 5) {
    alert("You Win the game! Congratulations");
    resetGame();
  } else if (computerScore === 5) {
    alert("The computer Win the game! get good");
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
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

const div = document.querySelector(".choices");
const subDiv = document.querySelector(".scores");
