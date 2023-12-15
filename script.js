let playerSelection;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's a tie!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "DRAW";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "DRAW";
  }
}

function playGame(playerSelection) {
  // Chama a função playRound com as escolhas do jogador e do computador
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);

  console.log("Player chose: ", playerSelection);
  console.log("Computer chose: ", computerSelection);
  console.log(result);
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
